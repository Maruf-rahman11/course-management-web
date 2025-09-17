import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen py-20 px-6 lg:px-32">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
          About StudyNest
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to <span className="font-semibold text-blue-600">StudyNest</span> – your reliable and efficient platform for managing and learning courses online. Whether you're an instructor wanting to share knowledge or a student eager to learn, StudyNest makes it simple.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition duration-300">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Add Courses</h2>
            <p className="text-gray-600">
              Instructors can easily add new courses, upload content, and manage course details with full control.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition duration-300">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Enroll in Courses</h2>
            <p className="text-gray-600">
              Students can browse, explore, and enroll in courses effortlessly, keeping track of their learning journey.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition duration-300">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Reliable & Efficient</h2>
            <p className="text-gray-600">
              Our platform is built to be secure, fast, and easy-to-use, ensuring the best experience for both learners and instructors.
            </p>
          </div>
        </div>
        <p className="mt-10 text-center text-gray-700 text-lg">
          Join <span className="font-semibold text-blue-600">StudyNest</span> today and start your journey to seamless online learning!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
