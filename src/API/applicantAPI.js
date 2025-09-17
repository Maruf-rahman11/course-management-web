export const myCoursesPromise =(email,accessToken)=>{
   return fetch(`http://localhost:5000/applicants?email=${email}`,{
      headers:{
         authorization: `Bearer ${accessToken}`
      }
   })
   .then(res=> res.json())
}
