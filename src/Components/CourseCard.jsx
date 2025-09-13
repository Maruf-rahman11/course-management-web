import React from 'react';
import { Link } from 'react-router';

const CourseCard = ({course,index}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
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
{formatDate(course.createdAt)}
  <br />
</td>
<td>
{course.seats}
  <br />
</td>
<td><Link to={`/courseDetails/${course._id}`}><button className='btn btn-primary'>View details</button></Link></td>
</tr>
      
    );
};

export default CourseCard;