import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../Common/Common.css';
import Swal from 'sweetalert2'
import Email from "../../assast/Email-bg/email.jpg"
import { ImLocation2 } from 'react-icons/im';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMailOpen } from 'react-icons/hi';
import ConnectCard from './ConnectCard/ConnectCard';
// import { FaLaptopCode } from 'react-icons/fa';
// import { FaCode } from 'react-icons/fa';
// import { BsFillBarChartFill } from 'react-icons/bs';

const ContractMe = () => {
  const [disable, setDisable] = useState(false)
  const form = useRef();
  const headphones = <ImLocation2></ImLocation2>;
  const screenShare = <FiPhoneCall></FiPhoneCall>;
  const Googlemessages = <HiOutlineMailOpen></HiOutlineMailOpen>;

  const servicesData = [
    {
      id: 1,
      name: 'Address',
      description: "Manikganj-1800, Dhaka, Bangladesh",
      icon: headphones,
      bgClass: 'text-primary'
    },
    {
      id: 2,
      name: 'Phone No-',
      description: "+8801889106581",
      icon: screenShare,
      bgClass: 'text-primary'
    },
    {
      id: 3,
      name: 'Email',
      description: "mdshimul.m007@gamil.com",
      icon: Googlemessages,
      bgClass: 'text-primary'
    },
  ]


  const sendEmail = (e) => {
    e.preventDefault();
    setDisable(true)
    // form.reset()
    emailjs.sendForm('service_5neuz9s', 'template_2hctw3l', form.current, 'Hfg-_Qzk46TD4iLLm')
      .then((result) => {
        console.log('object');

        Swal.fire(
          'Your message send successfully✔😃!',
          'You clicked the button!',
          'success'
        )

        setDisable(false)
      }, (error) => {
        console.log(error.text);
      });
  };




  return (
    <div id='Contract' className='lg:my-28 relative lg:py-14'>
      <div className='connect-bg-color h-16 lg:h-32 '>
        {/* bg-set */}
      </div>
      <div className='common-width'>
        <div className=''>
          {/* <div className='text-center mb-10'>
            <h1 className='text-center text-5xl font-semibold py-4'><span className='text-primary'>C</span>ontract <span className='text-primary'>M</span>e</h1>
            <p className='md:w-3/4 mx-auto'>I have been involved in web development since last two years and have completed many projects here are some of my completed projects.</p>
          </div> */}

          {/* projects card  */}
          <div className='contract flex flex-col-reverse md:flex-row gap-6  my-5 pt-9'>
            <div className='w-full'>
              <div className='flex flex-col gap-7 md:gap-20 lg:pt-5 my-9'>
                {
                  servicesData.map(connect => <ConnectCard
                    key={connect.id}
                    connect={connect}
                  ></ConnectCard>)
                }
              </div>
            </div>

            <div className='w-full '>
              <div className="card email-shadow-set lg:w-3/4 py-5 my-4 lg:my-6 mx-auto">
                <div className='flex items-center flex-col justify-center'>
                  <div className="avatar">
                    <div className="w-14 lg:w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={Email} alt="" />
                    </div>
                  </div>
                  <p className='mt-2  text-3xl font-bold'>Send Email</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className="card-body ">
                  <div className="user-box">
                    <input name='user_name' type="text"  className="input-1 w-full" required />
                    <label>Your Name</label>
                  </div>
                  <div className="user-box">
                    <input name='user_email' type="email"  className="input-2 w-full" required />
                    <label>Your Email</label>

                  </div>
                  <div className="user-box">

                    <textarea name='message' className="input-3 textarea textarea-info p-1 w-full" placeholder='Your massage'  required></textarea>
                    {/* <label>Your massage</label> */}
                  </div>
                  <div className="form-control mt-6 send-box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <input disabled={disable} type="submit" value="Send" className="btn btn-outline btn-info w-full  " />
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractMe;