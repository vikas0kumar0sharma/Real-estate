import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
function Residencies() {
  return (
    <div className="r-wrapper">
      <div className="paddings innerWidth r-container">

        <div className="r-head flexColStart">
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {/* slider setting will be destructured as props */}
          {
            data.map((it, index) => (
              <SwiperSlide key={index}>
                <div className="flexColStart r-card">
                  <img src={it.image} alt='home'></img>
                  <span className="secondaryText r-price">
                    <span> <span style={{ color: 'orange' }}>$</span> {it.price}</span>
                  </span>
                  <span className='primaryText' style={{ fontSize: '1.5rem' }}>{it.name}</span>
                  <span className='secondaryName' style={{ fontSize: '0.7rem', width: '15rem', color: 'grey' }}>{it.detail}</span>
                </div>
              </SwiperSlide>
            ))
          }

        </Swiper>

      </div>
    </div>
  )
}

export default Residencies

const SliderButtons=()=>{
  const swiper=useSwiper()
  //useSwiper hook
  return(
    <div className="flexCenter r-btn">
      <button onClick={()=>swiper.slidePrev()} style={{width:'1.8rem',height:'1.8rem',color:'blue',fontSize:'1.3rem',border:'none',borderRadius:'5px'}}>&lt;</button>
      <button onClick={()=>swiper.slideNext()} style={{width:'1.8rem',height:'1.8rem',color:'blue',fontSize:'1.3rem',border:'none',borderRadius:'5px'}}>&gt;</button>
    </div>
  );
}