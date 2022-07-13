import React from 'react';
import { TestimonialSlider } from './TestimonialSlider';

const Testimonial = () => {
  return (
    <section className='mb-64 lg:mb-48'>
      <div className='container mx-auto'>
        <div className='bg-purple-400/10 max-h-[400px] p-12 rounded-lg'>
          <div className='text-center'>
            <h2
              data-aos='fade-up'
              data-aos-offset='900'
              data-aos-delay='1000'
              className='text-3xl font-bold mb-6'
            >
              What our clients say
            </h2>
            <p
              data-aos='fade-up'
              data-aos-offset='900'
              data-aos-delay='1300'
              className='max-w-2xl mx-auto mb-12 lg:mb-24'
            >
              See what our customer say about us. It really matter for us. How
              good or bad we will make ir for evaluation to make EhyalLive
              better.
            </p>
          </div>
          <div data-aos='fade-up' data-aos-offset='900' data-aos-delay='1200'>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
