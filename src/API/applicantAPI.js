export const myCoursesPromise =(email)=>{
   return fetch(`http://localhost:5000/applicants?email=${email}`)
   .then(res=> res.json())
}
