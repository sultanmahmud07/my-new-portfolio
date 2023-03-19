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
      name: "Pr Jack",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
      reating: "",
      review: "I had the pleasure of working with a talented web developer recently, and I couldn't be more satisfied with the results. From the very beginning, they were attentive to my needs and goals for the website, and provided valuable input and suggestions throughout the process. Their technical skills are top-notch, and they were able to create a beautiful and functional website that exceeded my expectations. Communication was always prompt and professional, and any issues or questions I had were addressed quickly and effectively. Overall, I highly recommend this web developer to anyone in need of a skilled and reliable professional.",
      company: "Intership let.",
      country: "United States"
    },
    {
      name: "Pr Jack",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
      reating: "",
      review: "I had the pleasure of working with a talented web developer recently, and I couldn't be more satisfied with the results. From the very beginning, they were attentive to my needs and goals for the website, and provided valuable input and suggestions throughout the process. Their technical skills are top-notch, and they were able to create a beautiful and functional website that exceeded my expectations. Communication was always prompt and professional, and any issues or questions I had were addressed quickly and effectively. Overall, I highly recommend this web developer to anyone in need of a skilled and reliable professional.",
      company: "Intership let.",
      country: "United States"
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
      name: "Pr Jack",
      img: "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg",
      reating: "",
      review: "I had the pleasure of working with a talented web developer recently, and I couldn't be more satisfied with the results. From the very beginning, they were attentive to my needs and goals for the website, and provided valuable input and suggestions throughout the process. Their technical skills are top-notch, and they were able to create a beautiful and functional website that exceeded my expectations. Communication was always prompt and professional, and any issues or questions I had were addressed quickly and effectively. Overall, I highly recommend this web developer to anyone in need of a skilled and reliable professional.",
      company: "Intership let.",
      country: "United States"
    }
  ];

  return (
    <div className='common-width'>
      <div className="t-wrapper">
        <div className="t-heading text-2xl md:text-3xl font-bold my-6 lg:my-10">
          <span>Clients always get </span>
          <span className='text-primary'>Exceptional Work </span>
          <span>from me...</span>
          {/* <div className="blur t-blur1" ></div>
          <div className="blur t-blur1" ></div> */}
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