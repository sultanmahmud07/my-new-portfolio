import React, { useState } from 'react';
import "../Testimoniams.css";

const TestimonialCard = ({ client }) => {
  const {name, img, company, review} = client;
  const [reviewDetails, setreviewDetails] = useState(false);
  return (
    <div className="card w-full flex items-center justify-center">
      <div className="card-body w-11/12 mb-14 md:w-3/5 m-5 t-card-bg-set shadow-xl flex items-center justify-center">
        <div className="flex justify-center items-center flex-col gap-3">
          <div className="avatar">
            <div className="w-16 md:w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <h3 className='font-bold md:text-xl text-center'>{client.name}</h3>
        </div>
        <p className='text-center text-xs md:text-base'>
        {review?.length > 300 ? review.substring(0, 300) : review}
					{!reviewDetails && review?.length > 300 && (
						<>
							..
							<span
								onClick={() => setreviewDetails((prev) => !prev)}
								className="cursor-pointer "
							>
								<button className='text-blue-800 font-bold'>Read more</button>
							</span>
						</>
					)}
					{reviewDetails && (
						<>
							<span>{review.substring(300, review?.length)}</span>
							<span
								onClick={() => setreviewDetails((prev) => !prev)}
								className="cursor-pointer hover:underline text-blue-700 ml-1"
							>
								<button className='text-blue-800 font-bold'>Read less</button>
							</span>
						</>
					)}
        </p>
       
      </div>
    </div>

  );
};

export default TestimonialCard;