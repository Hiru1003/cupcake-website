import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const Contact = () => {
  return <section className='py-16 lg:section bg-purple-300' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>

        //motiondiv
        <motion.div 
        variants={fadeIn('right', 0.3)} 
        initial='hidden' whileInView={'show'} 
        viewport={{once:false, amount:0.3}} 
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 text-primary'>
              Grab your cupcake <br/> Today !
            </h2>
          </div>
        </motion.div>
        <form className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-5 items-start'>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
          type='text' placeholder='Your name'/>

          //input area
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
          type='text' placeholder='Your email'/>

          //textarea
          <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
          type='text' placeholder='Your message'>
          </textarea>  
          <button className='btn btn-lg'>Send message</button>  
           
        </form>
          
      </div>
    </div>
  </section>;
};

export default Contact;
