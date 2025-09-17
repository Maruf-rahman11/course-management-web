import React from 'react';

const testimonials = [
    {
        name: 'Shona Miya',
        course: 'Full-Stack Web Development',
        review: 'StudyNest helped me find amazing courses and learn efficiently. Highly recommend!',
        image: 'https://i.ibb.co.com/GQbXBhF7/1000434310.jpg'
    },
    {
        name: 'Michael Smith',
        course: 'Digital Marketing Mastery',
        review: 'The platform is super reliable. I was able to enroll in courses and track progress easily.',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        name: 'Sofia Lee',
        course: 'Data Science with Python',
        review: 'I loved how easy it was to add my own course and reach students.',
        image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
];

const Testimonials = () => {
    return (
        <section className="bg-gray-100 my-20 mx-auto py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
                            <img className="w-16 h-16 rounded-full mx-auto mb-4" src={testimonial.image} alt={testimonial.name} />
                            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                            <p className="text-gray-600 mb-2">{testimonial.course}</p>
                            <p className="text-gray-700">{testimonial.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
