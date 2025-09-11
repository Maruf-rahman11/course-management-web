import React from 'react';
import { Link } from 'react-router';

const CourseCard = ({course,index}) => {
    return (
             <tr className=''>
        <td>{index + 1}</td>
<td>
  <div className="flex items-center gap-3">
    <div className="avatar">
      <div className="mask mask-squircle h-12 w-12">
        <img
          src={course.imageUrl}
          alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
    <div>
      <div className="font-bold">{course.title}</div>
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
<td><Link><button className='btn btn-primary'>View details</button></Link></td>
</tr>
      
    );
};

export default CourseCard;