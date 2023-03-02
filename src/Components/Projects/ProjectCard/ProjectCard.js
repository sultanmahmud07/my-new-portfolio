import React from 'react';
import { Link } from 'react-router-dom';
import { RiShareBoxFill } from 'react-icons/ri';
import './ProjectCard.css';

const ProjectCard = ({ service }) => {
  const { _id, title, description, img } = service
  console.log(service);
  return (
    <div className="card-b  w-full relative">
      <img className='w-full rounded-xl' src={img} alt="Shoes" />

      <Link to={`details/${_id}`}>
        <div className="card-text-b  w-full h-full">
          <h2 className="card-title gap-8 text-2xl font-bold shadow-md text-white">{title}</h2>
          <p className='text-white text-center'>{
            description.length > 100 ? <span>{description.slice(0, 100) + '...'} <Link>Read more</Link></span> : <span>{description}</span>
          }</p>
          <div className="card-btn">

            <RiShareBoxFill></RiShareBoxFill>
          </div>
        </div>
      </Link>
      <div className='img-over-color'>
        {/* background color overlay */}
      </div>
    </div>
  );
};

export default ProjectCard;