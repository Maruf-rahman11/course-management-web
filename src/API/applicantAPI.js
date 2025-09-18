export const myCoursesPromise =(email,accessToken)=>{
   return fetch(`https://studynext-web-server.vercel.app/applicants?email=${email}`,{
      headers:{
         authorization: `Bearer ${accessToken}`
      }
   })
   .then(res=> res.json())
}
