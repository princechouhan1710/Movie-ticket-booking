import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const lang = [
  { lan: 'Hindi' },
  { lan: 'English' },
  { lan: 'Telugu' },
  { lan: 'Tamil' },
  { lan: 'Kannada' },
  { lan: 'Bengali' },
  { lan: 'Malayalam' },
  { lan: 'Bhojpuri' },
  { lan: 'Odia' },
  { lan: 'Marathi' },
  { lan: 'Punjabi' }
];

function ExLAng() {
  return (
    <div className='m-10'>

      <h2 className='text-2xl font-bold p-3'>
        Explore Latest Movies in Indore by Language
      </h2>

      <Swiper
        slidesPerView={'auto'}     
        spaceBetween={12}           
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {lang.map((v, i) => (
          <SwiperSlide key={i} className="!w-auto ">   
            <button className='border px-3 py-1 rounded-2xl bg-white'>
              {v.lan} Movies
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

export default ExLAng;
