import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../../Common/Common.css";
import "./Testimoniams.css";
import "swiper/css"
import "swiper/css/pagination"
import TestimonialCard from './TestimonialCard/TestimonialCard';


const Testimoniams = () => {
  const clients = [
    {
      name: "Robat Markos",
      img: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
      reating: "",
      review: "I had an amazing experience working with a talented web developer on my website. Their technical expertise and attention to detail were outstanding, and they were always available to answer any questions I had. They truly took the time to understand my needs and goals for the website, and delivered a final product that exceeded my expectations. The website is visually stunning, easy to navigate, and functions perfectly. The developer's commitment to quality is evident in every aspect of the website. They were a pleasure to work with, and I would highly recommend them to anyone looking for a top-notch web developer who can deliver exceptional results. I am thrilled with the final product and couldn't have asked for a better experience.",
      company: "Joystic Curgo",
      country: "United States"
    },
    {
      name: "Zeri Rose",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
      reating: "",
      review: "I had the pleasure of working with a talented web developer recently, and I couldn't be more satisfied with the results. From the very beginning, they were attentive to my needs and goals for the website, and provided valuable input and suggestions throughout the process. Their technical skills are top-notch, and they were able to create a beautiful and functional website that exceeded my expectations. Communication was always prompt and professional, and any issues or questions I had were addressed quickly and effectively. Overall, I highly recommend this web developer to anyone in need of a skilled and reliable professional.",
      company: "Intership let.",
      country: "California"
    },
    {
      name: "Pr Jack",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
      reating: "",
      review: "I had the pleasure of working with a talented web developer recently, and I couldn't be more satisfied with the results. From the very beginning, they were attentive to my needs and goals for the website, and provided valuable input and suggestions throughout the process. Their technical skills are top-notch, and they were able to create a beautiful and functional website that exceeded my expectations. Communication was always prompt and professional, and any issues or questions I had were addressed quickly and effectively. Overall, I highly recommend this web developer to anyone in need of a skilled and reliable professional.",
      company: "Intership let.",
      country: "United States"
    },
    {
      name: "Herry Porter",
      img: "https://pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/avatar/avatar-7.png",
      reating: "",
      review: "I had the pleasure of working with a talented web developer recently, and I couldn't be more satisfied with the results. From the very beginning, they were attentive to my needs and goals for the website, and provided valuable input and suggestions throughout the process. Their technical skills are top-notch, and they were able to create a beautiful and functional website that exceeded my expectations. Communication was always prompt and professional, and any issues or questions I had were addressed quickly and effectively. Overall, I highly recommend this web developer to anyone in need of a skilled and reliable professional.",
      company: "Intership let.",
      country: "United States"
    },
    {
      name: "Angela Zoo",
      img: "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg",
      reating: "",
      review: "I had the pleasure of working with a talented web developer recently, and I couldn't be more satisfied with the results. From the very beginning, they were attentive to my needs and goals for the website, and provided valuable input and suggestions throughout the process. Their technical skills are top-notch, and they were able to create a beautiful and functional website that exceeded my expectations. Communication was always prompt and professional, and any issues or questions I had were addressed quickly and effectively. Overall, I highly recommend this web developer to anyone in need of a skilled and reliable professional.",
      company: "Intership let.",
      country: "United States"
    }
  ];

  return (
    <div className='common-width py-10'>
      <div className="t-wrapper relative">
        <div className="t-heading text-2xl md:text-3xl font-bold my-6 lg:my-10">
          <span  data-aos="fade-right">Clients always get </span>
          <span data-aos="zoom-in" className='text-primary'>Exceptional Work </span>
          <span>from me...</span>
          <div className="blur t-blur1" ></div>
          <div className="blur t-blur2" ></div>
        </div>
        {/* slider */}
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {
            clients.map((client, index) => {
              return (
                <SwiperSlide key={index}>
                  <TestimonialCard
                    client={client}
                  ></TestimonialCard>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Testimoniams;