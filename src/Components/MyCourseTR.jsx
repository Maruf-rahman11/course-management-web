import React, { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyCourseTR = ({ course, index, handleDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const handleRateSubmit = () => {
    if (rating === 0) {
      Swal.fire({
        icon: "warning",
        title: "Select a rating",
        text: "Please choose a rating before submitting.",
      });
      return;
    }

    // Simulate sending rating to backend
    console.log(`Course ${course.course_name} rated ${rating} stars`);

    // Close modal
    setIsModalOpen(false);

    // Show success alert
    Swal.fire({
      icon: "success",
      title: "Rating Submitted",
      html: `<strong>${course.course_name}</strong> rated <strong>${rating} stars</strong>`,
      confirmButtonText: "OK",
    });

    // Reset rating if needed
    setRating(0);
  };

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={course.Course_image} alt="Avatar" />
              </div>
            </div>
            <div>
              <div className="font-bold">{course.course_name}</div>
            </div>
          </div>
        </td>
        <td>{course.Course_duration}</td>
        <td>{course.Course_price}</td>
        <td>
          <div className="flex gap-3">
            <Link to={`/courseDetails/${course.course_id}`}>
              <button className="btn btn-primary">View details</button>
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-info"
            >
              Rate Course
            </button>
            <button
              onClick={() => handleDelete(course.course_id)}
              className="btn btn-error"
            >
              Delete Course
            </button>
          </div>
           {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box relative">
            <h3 className="text-lg font-bold mb-4">
              Rate {course.course_name}
            </h3>
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={`text-3xl ${
                    star <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                >
                  ★
                </button>
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button onClick={handleRateSubmit} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
        </td>
      </tr>

     
    </>
  );
};

export default MyCourseTR;
