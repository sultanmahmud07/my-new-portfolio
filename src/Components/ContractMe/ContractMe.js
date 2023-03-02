import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../Common/Common.css';
import Swal from 'sweetalert2'
import Email from "../../assast/Email-bg/email.jpg"
import { GrMapLocation } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMailOpen } from 'react-icons/hi';

const ContractMe = () => {
  const [disable, setDisable] = useState(false)

  const form = useRef();

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
    <div id='Contract'>
      <div className='common-width'>
        <div className='pt-24'>
          <div className='text-center mb-10'>
            <h1 className='text-center text-5xl font-semibold py-4'><span className='text-primary'>C</span>ontract <span className='text-primary'>M</span>e</h1>
            <p className='md:w-3/4 mx-auto'>I have been involved in web development since last two years and have completed many projects here are some of my completed projects.</p>
          </div>

          {/* projects card  */}
          <div className='contract flex flex-col md:flex-row gap-6 p-6 my-5 pt-9'>
            <div className='w-full'>
              <div className='flex flex-col gap-7'>
                {/* single */}
                <div className='flex'>
                  <div className='text-primary font-bold text-6xl'>
                    <GrMapLocation></GrMapLocation>
                  </div>
                  <div>
                    <h3>Address</h3>
                    <p>Manikganj, Dhaka, Bangladesh</p>
                  </div>
                </div>
                {/* single */}
                <div className='flex'>
                  <div className='text-primary font-bold text-6xl'>
                    <GrMapLocation></GrMapLocation>
                  </div>
                  <div>
                    <h3>Address</h3>
                    <p>Manikganj, Dhaka, Bangladesh</p>
                  </div>
                </div>
                {/* single */}
                <div className='flex'>
                  <div className='text-primary font-bold text-6xl'>
                    <GrMapLocation></GrMapLocation>
                  </div>
                  <div>
                    <h3>Address</h3>
                    <p>Manikganj, Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full'>
              <div className="card flex-shrink-0  shadow-2xl my-6">
                <div className='flex items-center flex-col justify-center'>
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={Email} alt="" />
                    </div>
                  </div>
                  <p className='my-3 text-3xl font-bold'>Send Massage</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className="card-body gap-5">
                  <div className="form-control">

                    <input name='user_name' type="text" placeholder="Your Name" className="input input-bordered" required />
                  </div>
                  <div className="form-control">

                    <input name='user_email' type="email" placeholder="Your Email" className="input input-bordered" required />

                  </div>
                  <div className="form-control">

                    <textarea name='message' className="textarea" placeholder="Your Text" required></textarea>

                  </div>
                  <div className="form-control mt-6">

                    <input disabled={disable} type="submit" value="Send" className="btn btn-primary  text-white" />
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