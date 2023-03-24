import React from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import '../../../Common/Common.css';
import "./ProjectDetails.css";


const ProjectDetails = () => {
  const { _id, item_details, live_link, title, img, description, detail_list, } = useLoaderData()
  const { E_date, S_date, technology, url1, url2, url3, url4 } = item_details
  console.log(item_details);
  return (
    <PhotoProvider
      speed={() => 800}
      easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}

    >
      <div className='common-width pb-16'>
        <div className='pt-20'>
          <PhotoView src={img}>
            <img className='w-full' src={img} alt="" />
          </PhotoView>
          <div className='grid grid-cols-2 gap-9 pt-6 pb-4 cursor-pointer'>
            <div className='shadow-2xl'>
              <PhotoView src={url1}>
                <img className='w-full' src={url1} alt="" />
              </PhotoView>
            </div>
            <div className='shadow-2xl'>
              <PhotoView src={url2}>
                <img className='w-full' src={url2} alt="" />
              </PhotoView>
            </div>
            <div className='shadow-2xl'>
              <PhotoView src={url3}>
                <img className='w-full' src={url3} alt="" />
              </PhotoView>
            </div>
            <div className='shadow-2xl'>
              <PhotoView src={url4}>
                <img className='w-full' src={url4} alt="" />
              </PhotoView>
            </div>
          </div>
          <h1 className='text-3xl font-semibold text-primary pt-5 p-2'>{title}</h1>
          <div>
            <span className='pr-3'>Projects Stated: {S_date}</span>
            <span>Completed: {E_date}</span>
          </div>
          <div className='pb-4'>
            <p className='font-semibold text-xl'>Used Technology:</p>
            <span className='font-bold'>{technology}</span>
          </div>
          <ul>
            {
              detail_list.map(list => <li className='list-disc ml-6'>{list.option}</li>)
            }
          </ul>
          <div className='custom-btn py-8 flex items-center justify-center'>
            {/* <button className='button2'><a href={live_link} target='blank' >Live Site</a></button> */}
            <a className='px-4 py-3 md:px-9 md:py-4 bg-base-300' href={live_link} target='blank' >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Live Site
            </a>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ProjectDetails;