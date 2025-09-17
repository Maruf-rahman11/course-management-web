import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white my-20 mx-auto py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">Why Choose StudyNest?</h2>
                <p className="text-lg mb-12">
                    At StudyNest, we provide a reliable and efficient platform where anyone can add or enroll in courses.
                    Our mission is to make learning accessible, engaging, and rewarding for everyone.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
                        <h3 className="text-2xl text-black font-semibold mb-4">Reliable Platform</h3>
                        <p className='text-black'>Our system ensures secure course enrollment and trustworthy course data.</p>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
                        <h3 className="text-2xl text-black font-semibold mb-4">Flexible Learning</h3>
                        <p className='text-black'>Learn at your own pace with a wide variety of courses tailored for your needs.</p>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
                        <h3 className="text-2xl text-black font-semibold mb-4">Add & Sell Courses</h3>
                        <p className='text-black'>Anyone can share their knowledge by adding courses, making learning a community experience.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
