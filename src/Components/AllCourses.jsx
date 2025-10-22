import React, { useState, useContext } from 'react';
import { Link, useLoaderData } from 'react-router';
import CourseCard from './CourseCard';
import { AuthContext } from '../Contexts/AuthContext';
import { Helmet } from 'react-helmet';

const AllCourses = () => {
  const { loading } = useContext(AuthContext);
  const allCourses = useLoaderData();

  const [sortBy, setSortBy] = useState("");

  if (loading) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  // 👉 Create a sorted copy of the array each render
  let sortedCourses = [...allCourses];

  if (sortBy === "price") {
    sortedCourses.sort((a, b) => {
      const priceA = parseFloat(a.price?.replace(/[^0-9.]/g, "")) || 0;
      const priceB = parseFloat(b.price?.replace(/[^0-9.]/g, "")) || 0;
      return priceA - priceB;
    });
  } else if (sortBy === "latest") {
    sortedCourses.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sortBy === "duration") {
    sortedCourses.sort((a, b) => {
      const durationA = parseFloat(a.duration?.replace(/[^0-9.]/g, "")) || 0;
      const durationB = parseFloat(b.duration?.replace(/[^0-9.]/g, "")) || 0;
      return durationA - durationB;
    });
  }
  return (
    <div className='mt-20 mb-20'>
      <Helmet>
        <title>StudyNest | All Courses</title>
      </Helmet>

      {/* Sort Options */}
      <div className="flex justify-start mb-6 px-4">
        <select
          className="select select-bordered w-full max-w-xs"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price">Price (Low → High)</option>
          <option value="latest">Latest Added</option>
          <option value="duration">Duration (Short → Long)</option>
        </select>
      </div>

      {/* Table Section */}
      {sortedCourses.length > 0 ? (
        <div className="overflow-x-auto mt-6 mb-20">
          <table className="table">
            <thead>
              <tr>
                <th>Lists</th>
                <th>Course Name</th>
                <th>Duration</th>
                <th>Course Fee</th>
                <th>Added Time</th>
                <th>Available Seats</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {sortedCourses.map((course, index) => (
                <CourseCard
                  key={course._id}
                  course={course}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='my-20 lg:p-32 py-30'>
          <p className='text-center text-3xl font-semibold'>No courses available</p>
          <p className='text-center mt-2'>
            Add courses from <Link to={'/addCourse'}><span className='underline'>Add Course</span></Link> section
          </p>
        </div>
      )}
    </div>
  );
};

export default AllCourses;
