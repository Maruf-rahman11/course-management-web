import React from 'react';
import { Link } from 'react-router';

const MyAddedTD = ({course,index,handleDelete}) => {
   
    return (
        <tr className=''>
        <td>{index + 1}</td>
<td>
  <div className="flex items-center gap-3">
    <div className="avatar">
      <div className="mask mask-squircle h-12 w-12">
        <img
          src={course.photoURL}
          alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
    <div>
      <div className="font-bold">{course.courseName}</div>
    </div>
  </div>
</td>
<td>
 {course.duration}
  <br />
</td>
<td>
 {course.price}
  <br />
</td>
<td>
    <div className='flex gap-3'>
    <Link to={`/courseDetails/${course._id}`}><button className='btn btn-primary'>View details</button></Link>
    <Link to={`/UpdateCourse/${course._id}`}><button className='btn btn-warning'>Update details</button></Link>
    <button onClick={()=>handleDelete(course._id)} className='btn btn-error'>Delete Course</button>
    </div>
</td>
</tr>
    );
};

export default MyAddedTD;