import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const slides = [
        {
          id: 1,
          title: "Learn Anytime, Anywhere",
          subtitle: "Access courses from any device and study at your own pace.",
          image:
            "https://cdn.elearningindustry.com/wp-content/uploads/2019/04/the-importance-of-anytime-anywhere-learning-in-the-modern-workplace-1024x574.jpg",
        },
        {
          id: 2,
          title: "Expert Instructors",
          subtitle: "Gain knowledge from industry professionals and top educators.",
          image:
            "https://www.shutterstock.com/image-photo/happy-multiraciald-black-female-business-260nw-2007207017.jpg",
        },
        {
          id: 3,
          title: "Track Your Progress",
          subtitle: "Stay motivated with progress tracking and personalized learning.",
          image:
            "https://www.shortform.com/blog/wp-content/uploads/2021/03/chart-graph-progrss-growth-prediction-future-750x350.jpg",
        },
        {
          id: 4,
          title: "Build Your Career",
          subtitle: "Earn certifications and enhance your career opportunities.",
          image:
            "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1500&q=80",
        },
      ];
      

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="relative rounded-2xl overflow-hidden  w-full h-[70vh] ">
      <Slider {...settings} className="h-full ">
        {slides.map((slide) => (
          <div key={slide.id} className="relative  h-[90vh]">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center "
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            {/* Content */}
            <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
