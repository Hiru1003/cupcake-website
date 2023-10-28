import React from 'react';
import CountUp from 'react-countup';
import Image from '../assets/1.jpeg';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, InView] = useInView({
    threshold:0.5,
  });
  return <section className='section bg-purple-300' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center '>
    
      <motion.div 
        variants={fadeIn('down', 0.3)} 
        initial='hidden' whileInView={'show'} 
        viewport={{once:false, amount:0.7}} 
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
          <img className='border-2 rounded-2xl' src={Image} alt=''/>
        </motion.div>
          
        <div className='flex-1 p-20'>
        
          <h3 className='h3 text-accent'>About Cupcake Bakery</h3>
          <h3 className='h3 mb-4 text-primary'>Where Every Bite is a Sweet Delight! </h3>
          <p
          className='mb-8 max-w-lg mx-auto lg:mx-0 text-accent'>
            Every cupcake we create is a work of art, handcrafted with love and attention to detail. From classic vanilla to exotic flavor fusions, each bite is a delightful journey through taste and texture. Our ingredients are sourced with care, ensuring the highest quality and freshness in every bite. </p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2' >
                {InView ? <CountUp start={0} end={3} duration={3}/> : null }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              Years of<br/>
              Experience
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2' >
                {InView ? <CountUp start={0} end={50} duration={3}/> : null }
                
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              Awesome<br/>
              Flavors
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2' >
                {InView ? <CountUp start={0} end={1} duration={3}/> : null }
                k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              Delightful<br/>
              Orders
              </div>
            </div>

          </div>
        </div>
        <div className='flex gap-x-8 items-center'>
          <button className='btn btn-lg'>
            Contact Us
          </button>
          <a href=""className='text-gradient btn-link'>
            
          </a>
        </div>

      </div>
    </div>
  </section>;
};

export default About;
