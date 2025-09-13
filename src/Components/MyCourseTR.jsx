import React from 'react';
import { Link } from 'react-router';

const MyCourseTR = ({course,index}) => {
    return (
        <tr className=''>
        <td>{index + 1}</td>
<td>
  <div className="flex items-center gap-3">
    <div className="avatar">
      <div className="mask mask-squircle h-12 w-12">
        <img
          src={course.Course_image}
          alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
    <div>
      <div className="font-bold">{course.course_name}</div>
    </div>
  </div>
</td>
<td>
 {course.Course_duration}
  <br />
</td>
<td>
 {course.Course_price}
  <br />
</td>
<td><Link to={`/courseDetails/${course._id}`}><button className='btn btn-primary'>View details</button></Link></td>
</tr>
    );
};

export default MyCourseTR;