import React from 'react';
import Img1 from '../assets/15.jpeg';

const Work = () => {
  return <section className='section bg-purple-300' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-accent font-bold'>Latest Designs</h2>
            <p className='max-w-sm mb-14 text-accent'>
            We invite you to visit our cozy bakery, where the scent of freshly baked cupcakes fills the air, and a warm smile welcomes you. Enjoy a cup of our signature coffee or tea alongside your favorite cupcake, and let the world melt away.<br/><br/>
            Looking for something a little more adventurous? Our rotating selection of specialty creations offers unique and innovative flavor combinations that are sure to surprise and delight. Whether you're a devoted chocoholic or a fan of fruity indulgence, we have a cupcake to suit every craving. Explore our flavor gallery and let your taste buds embark on a journey of pure delight.
            </p>
            <button className='btn btn-sm'>View All</button>
          </div>
      </div>
      <div className='flex-1 flex flex-col gap-y-10'>
      <div className='group relative overflow-hidden border-2 rounded-2xl h-[600px] w-[400px]'>
            <div className='w-full h-full absolute
            z-40 transition-all duration-300'></div>

            <img className='group-hover:scale-125 transition-all duration-300 h-[600px] w-[400px]'
            src={Img1} alt=''></img>
          </div>

    </div>
    </div>
    </div>
  </section>;
};

export default Work;
