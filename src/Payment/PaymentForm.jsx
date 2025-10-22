import React, { useState, useContext, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";



const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  console.log(user)
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [status, setStatus] = useState(""); // user's current status

  const amount = 50;
  const amountInCents = amount * 100;

  // fetch user status
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axios.get(`https://studynext-web-server.vercel.app/applicants?email=${user.email}`);
        setStatus(res.data.status || "bronze");
      } catch (err) {
        console.error(err);
      }
    };
    fetchStatus();
  }, [user.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "gold") {
      Swal.fire({
        icon: "info",
        title: "You're already a Gold member!",
        confirmButtonText: "Go to Dashboard",
      });
      return;
    }

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setProcessing(true);
    setError("");

    try {
      const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
        billing_details: { name: user.displayName, email: user.email },
      });

      if (pmError) {
        setError(pmError.message);
        setProcessing(false);
        return;
      }

      const { data } = await axios.post("https://studynext-web-server.vercel.app/create-payment-intent", {
        amount: amountInCents,
        currency: "usd",
      });

      const clientSecret = data.clientSecret;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
        setProcessing(false);
        return;
      }

      if (paymentResult.paymentIntent.status === "succeeded") {
        const transactionId = paymentResult.paymentIntent.id;

        // update user status
        // await axios.patch( `https://studynext-web-server.vercel.app/update-status/${user.email}`, {
        //   status: "gold",
        // }).then(res=>{
        //     console.log(res)
        // })

        Swal.fire({
          icon: "success",
          title: `Payment Successful! ${user.email} `,
          html: `<strong>Transaction ID:</strong> <code>${transactionId}</code><br><strong>Status:</strong> Gold`,
          confirmButtonText: "Go to home",
        });

        navigate("/");
      }
    } catch (err) {
      console.error(err);
      setError("Payment failed. Try again.");
    } finally {
      setProcessing(false);
    }
  };

  // show message if already gold
  if (status === "gold") {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Gold Member</h2>
        <p className="text-gray-700 mb-4">You are already a Gold member!</p>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Upgrade to Gold</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <CardElement className="p-3 border rounded" />
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={!stripe || processing}
        >
          {processing ? "Processing..." : `Pay $${amount}`}
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
