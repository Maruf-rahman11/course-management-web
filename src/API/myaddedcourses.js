export const myAddedCourses =(email,accessToken)=>{
    return fetch(`http://localhost:5000/courses?email=${email}`,{
       headers:{
          authorization: `Bearer ${accessToken}`
       }
    })
    .then(res=> res.json())
 }
 