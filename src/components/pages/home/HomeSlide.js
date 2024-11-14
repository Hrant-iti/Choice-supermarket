import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { advertisment, slider } from './homeslidelist';





export default function HomeSlide() {

  return (
    <div className='home_slider_container'>
      <div className="home_swiper">
        <Swiper
          loop={true}
          grabCursor={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={true}
          modules={[Autoplay, Navigation]} 
        >
          {slider.map(slide => (
            <SwiperSlide key={slide.id}>
              <div className="home_swiper_item" style={{ background: `url(${slide.picture}) no-repeat center / cover` }}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="home_advert">
        {advertisment.map(advert => (
          <div className='home_advert_item' data-aos="fade-up" style={{ background: `url(${advert.picture}) no-repeat center / cover` }} key={advert.id}></div>
        ))}
      </div>
    </div>
  );
}
