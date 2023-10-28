import React from 'react';
import Image from '../assets/cupcake.png';
import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center bg-purple-300' 
  id='home'
  >
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h4 
          variants={fadeIn('up', 0.3)} 
          initial='hidden' whileInView={'show'} 
          viewport={{once:false, amount:0.7}} 
          className='text-[45px] font-medium leading-[0.8] lg:text-[85px] text-primary'>
          CUP CAKE <br/><span>BAKERY <br/></span>
          </motion.h4>
          
          <motion.p 
          variants={fadeIn('up', 0.3)} 
          initial='hidden' whileInView={'show'} 
          viewport={{once:false, amount:0.7}} 
          className='mb-8 max-w-lg mx-auto lg:mx-0 text-accent p-2'>
            Indulge in a world of heavenly confections at Sweet Delights Cupcake Bakery. Our passion for baking transcends the ordinary, bringing you handcrafted delights that ignite your taste buds and warm your heart. </motion.p>
          <motion.div 
          variants={fadeIn('up', 0.3)} 
          initial='hidden' whileInView={'show'} 
          viewport={{once:false, amount:0.7}} 
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact Us</button>
            <a href='#' className='text-gradient btn-link'></a>
          </motion.div>
          <motion.div 
          variants={fadeIn('up', 0.3)} 
          initial='hidden' whileInView={'show'} 
          viewport={{once:false, amount:0.7}} 
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 items-center'>
            <a herf='#'>
              <FaFacebook/>
            </a>
            <a herf='#'>
              <FaInstagram/>
            </a>
            <a herf='#'>
              <FaWhatsapp/>
            </a>
          </motion.div>
        </div>
        <motion.div 
        variants={fadeIn('down', 0.3)} 
        initial='hidden' whileInView={'show'} 
        viewport={{once:false, amount:0.7}} 
        className='hidden lg:flex flex-1 max-w-[320px]lg:max-w-[482px]'>
          <img src={Image} alt=''/>
        </motion.div>
      </div>
    </div>
  </section>
};

export default Banner;
