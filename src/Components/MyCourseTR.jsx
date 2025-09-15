import React from 'react';
import { Link } from 'react-router';

const MyCourseTR = ({course,index}) => {
  console.log(course.course_id)
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
<td><Link to={`/courseDetails/${course.course_id}`}><button className='btn btn-primary'>View details</button></Link></td>
</tr>
    );
};

export default MyCourseTR;