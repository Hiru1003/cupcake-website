import React from 'react';
import Image from '../assets/service.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Services = () => {
  return <section className='section bg-purple-300' id='services'>
  <div className='container mx-auto'>
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center'>
      
        
      <div className='flex-1'>
        <h2 className='h2 text-accent font-bold'>Celebrate with us!</h2>
        <h3 className='h3 mb-4 text-primary'>Special Occasions</h3>
        <p
        className='mb-8 max-w-lg mx-auto lg:mx-0 text-accent'>
          Celebrate life's moments with our bespoke cupcakes tailored for your special occasions. Whether it's a birthday, wedding, or corporate event, we design unique creations that reflect your style and vision. Let us turn your sweet dreams into delectable reality.
          <br/><br/>Choose from our array of carefully curated flavors, and let us transform them into edible works of art that will leave your guests in awe. From elegant decorations to personalized touches, every detail is considered to ensure your special occasion is truly extraordinary. Let [Your Bakery Name] be a part of your joyous moments, adding a touch of sweetness that will be remembered long after the last crumb is savored. Celebrate with us, and turn your sweet dreams into delicious reality.</p>
        
      </div>
      <motion.div 
        variants={fadeIn('down', 0.3)} 
        initial='hidden' whileInView={'show'} 
        viewport={{once:false, amount:0.7}} 
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt=''/>
        </motion.div>
      

    </div>
  </div>
</section>;
};

export default Services;
