import React, { useState } from 'react';
import "../../../Common/Common.css";

const ServiceCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
	const [descriptionDetails, setdescriptionDetails] = useState(false);
	// console.log(card)

  return (
    <div className='text-center service-card p-6 pb-8'>
			<div className={`text-center flex justify-center items-center py-4 lg:py-6 text-6xl ${bgClass}`}>
				{icon}
			</div>
			<div>
				<h3 className='text-2xl font-bold pb-3'>{name}</h3>
				<p className='text-gray-400'>
					{description?.length > 160 ? description.substring(0, 160) : description}
					{!descriptionDetails && description?.length > 160 && (
						<>
							.. <br></br>
							<span
								onClick={() => setdescriptionDetails((prev) => !prev)}
								className="cursor-pointer "
							>
								<button className='read-btn  font-semibold'>Read more</button>
							</span>
						</>
					)}
					{descriptionDetails && (
						<>
							<span>{description.substring(160, description?.length)}</span><br></br>
							<span
								onClick={() => setdescriptionDetails((prev) => !prev)}
								className="cursor-pointer hover:underline text-blue-700 ml-1"
							>
								<button className='read-btn font-semibold'>Read less</button>
							</span>
						</>
					)}
				</p>
			</div>
		</div>
  );
};

export default ServiceCard;