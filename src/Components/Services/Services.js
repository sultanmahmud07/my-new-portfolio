import React from 'react';
import '../../Common/Common.css';
import { FaLaptopCode } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { BsFillBarChartFill } from 'react-icons/bs';
import ServiceCard from './ServiceCard/ServiceCard';


const Services = () => {
  const headphones = <FaLaptopCode></FaLaptopCode>;
  const screenShare = <FaCode></FaCode>;
  const Googlemessages = <BsFillBarChartFill></BsFillBarChartFill>;

  const servicesData = [
    {
      id: 1,
      name: 'UI/UX Design',
      description: "Our UI/UX design services create visually appealing and user-friendly websites that effectively communicate your brand message and meet your business objectives. We consider your target audience, the latest design trends and technologies, to enhance your website's usability, accessibility, and overall aesthetic appeal. Contact us to increase website traffic and engagement.",
      icon: headphones,
      bgClass: 'text-primary'
    },
    {
      id: 2,
      name: 'Web Development',
      description: "Our website development services offer comprehensive solutions for building, optimizing, and maintaining your website. We provide customized web development solutions to meet your specific business needs, including e-commerce, content management systems, and responsive design. Our team of experienced developers delivers high-quality websites that drive traffic, increase engagement, and achieve your business goals. Contact us to get started.",
      icon: screenShare,
      bgClass: 'text-primary'
    },
    {
      id: 3,
      name: 'Graphics Design',
      description: "Our graphics design services provide innovative and creative solutions to enhance your brand image and communication. Our expert designers create stunning visuals, including logos, branding materials, social media graphics, and marketing collateral, that reflect your brand's values and message. We deliver designs that captivate your audience and elevate your business. Contact us to learn more.",
      icon: Googlemessages,
      bgClass: 'text-primary'
    },
  ]
  return (
    <div id='Services' className='common-width'>
      <div className='pt-24'>
        <div className='text-center'>
          <h1 className='text-center text-4xl lg:text-5xl font-semibold py-4'>My <span className='text-primary'>Services</span></h1>
          <p className='md:w-3/4 mx-auto mb-2 hidden md:block'>Our web developer services offer expertise in building and maintaining dynamic and responsive websites, including e-commerce, content management systems, and web applications. Contact us to discuss your project.</p>
        </div>

        {/* projects card  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pt-9'>

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