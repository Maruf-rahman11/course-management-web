export const myAddedCourses =(email,accessToken)=>{
    return fetch(`https://studynext-web-server.vercel.app/courses?email=${email}`,{
       headers:{
          authorization: `Bearer ${accessToken}`
       }
    })
    .then(res=> res.json())
 }
 