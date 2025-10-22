import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const TopRatedCourses = () => {
   const [allCourses, setAllCourses ] = useState([]);
        useEffect(() => {
          fetch("https://studynext-web-server.vercel.app/courses")
            .then(res => res.json())
            .then(data =>{ 
              const sortedCourse = [...data].sort((a,b)=> a.seats -b.seats)
              setAllCourses(sortedCourse)})
            .catch(err => console.error(err));
        }, []); 

  // 🔹 Add static ratings manually (same order as fetched)
  const ratedCourses = allCourses.map((course, index) => ({
    ...course,
    rating:
      [4.9, 4.8, 4.7, 4.6, 4.5, 4.4, 4.3, 4.2, 4.1, 4.0][index] || 4.0,
  }));

  // 🔹 Sort by rating (highest first) and pick top 6
  const topCourses = ratedCourses
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <div className="mt-16 mb-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        🌟 Top Rated Courses
      </h2>

      {topCourses.length > 0 ? (
        <div className="overflow-x-auto shadow-lg rounded-2xl">
          <table className="table">
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Course Name</th>
                <th>Added By</th>
                <th>Available Seats</th>
                <th>Rating</th>
              </tr>
            </thead>

            <tbody>
              {topCourses.map((course, index) => (
                <tr key={course._id} className="hover:bg-base-100">
                  <td>{index + 1}</td>
                  <td className="font-semibold">{course.courseName}</td>
                  <td>{course.addedBy}</td>
                  <td>{course.seats}</td>
                  <td>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < Math.round(course.rating)
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-sm text-gray-500">
                        ({course.rating.toFixed(1)})
                      </span>
                    </div>
                  </td>
                  <td>
                  <Link to={`/courseDetails/${course._id}`}><button className="btn btn-primary">Course Details</button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">
          No courses available to display.
        </p>
      )}
    </div>
  );
};

export default TopRatedCourses;
