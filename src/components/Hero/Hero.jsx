import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">

        {/* left side */}
        <div className=" flexColStart hero-left">

          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2.5,
                type: "spring"
              }}
            >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>

          {/* description */}
          <div className="flexColStart hero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you
              Search</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color='var(--blue)' size={25} />
            <input placeholder='Enter City Name'></input>
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">

            <div className="flexColStart stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} style={{ fontSize: '36px' }} />
                <span style={{ color: 'orange', fontSize: '36px' }}>+</span>
              </span>
              <span style={{ color: 'var(--secondary)', fontSize: 'small' }}>Premium Product</span>
            </div>

            <div className="flexColStart stat">
              <span>
                <CountUp start={1700} end={2000} duration={4} style={{ fontSize: '36px' }} />
                <span style={{ color: 'orange', fontSize: '36px' }}>+</span>
              </span>
              <span style={{ color: 'var(--secondary)', fontSize: 'small' }} >Happy Customer</span>
            </div>

            <div className="flexColStart stat">
              <span>
                <CountUp start={7} end={28} duration={4} style={{ fontSize: '36px' }} />
                <span style={{ color: 'orange', fontSize: '36px' }}>+</span>
              </span>
              <span style={{ color: 'var(--secondary)', fontSize: 'small' }} >Awards Winning</span>
            </div>

          </div>

        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div className="img-container"
            initial={{ x: "2rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2.5,
              type: "spring"
            }}
          >
            <img src='./hero-image.png'></img>
          </motion.div>
        </div>
      </div>
    </div >
  )
}

export default Hero