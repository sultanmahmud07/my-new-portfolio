import React from 'react';
import '../../Common/Common.css';
import { FaHeadphones } from 'react-icons/fa';
import { MdOutlineScreenShare } from 'react-icons/md';
import { SiGooglemessages } from 'react-icons/si';
import ServiceCard from './ServiceCard/ServiceCard';


const Services = () => {
  const headphones = <FaHeadphones></FaHeadphones>;
  const screenShare = <MdOutlineScreenShare></MdOutlineScreenShare>;
  const Googlemessages = <SiGooglemessages></SiGooglemessages>;

  const servicesData = [
    {
      id: 1,
      name: 'Audio and HD video calling',
      description: 'Remote Talks’s video-conferencing app can stream high-quality HD video and audio, giving participants great picture quality. If you are struggling to get a stable connection, you can lower the picture quality, but most high-speed internet connections will be able to stream high-quality video.',
      icon: headphones,
      bgClass: 'text-primary'
    },
    {
      id: 2,
      name: 'Screen Sharing',
      description: 'The screen-sharing feature lets the host and – with permission – participants share their screen with other meeting participants on the call. You can choose to share your entire desktop or phone screen, a specific app, a portion of your screen, a Whiteboard, and more. Participant screen sharing can be restricted by the host. Screen-sharing is a useful tool for collaboration among and between teams, helping you save time and communicate more effectively. Whether it’s for business or personal use, screen-sharing is one of the most commonly used and convenient features',
      icon: screenShare,
      bgClass: 'text-accent'
    },
    {
      id: 3,
      name: 'Smart Messageing',
      description: 'Remote Talks video-conferencing can be done using the desktop client, the mobile app, and the browser client. All versions support cross-platform communication, from video, to audio, to instant messaging. App versions will automatically sync so you can access your meetings no matter how you sign in to Remote Talks',
      icon: Googlemessages,
      bgClass: 'text-secondary'
    },
  ]
  return (
    <div id='Services' className='common-width'>
      <div className='pt-24'>
        <div className='text-center'>
          <h1 className='text-center text-5xl font-semibold py-4'><span className='text-primary'>M</span>y Serv<span className='text-primary'>i</span>ces</h1>
          <p className='md:w-3/4 mx-auto'>I have been involved in web development since last two years and have completed many projects here are some of my completed projects.</p>
        </div>

        {/* projects card  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-9'>

        {
            servicesData.map(card => <ServiceCard
            key={card.id}
            card={card}
            ></ServiceCard>)
          }

        </div>
      </div>
    </div>
  );
};

export default Services;