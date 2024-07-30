import React from 'react'
import './Banner.css'
import cristiano from '../../images&icons/images/ronaldo.jpg'
const Banner = () => {
  return (
    <div>
      <h1>Exercise Ease</h1>
      <div className='banner'>
        <div className="front">
          <div className="headings">
            <h3 className='club'>Fitness Culb</h3>
            <h3 className='quote'>Sweat is just  <br /> <span>fat crying</span></h3>
            <p>Welcome to Exercise Ease <br />Your ultimate companion for workouts,
              exercise, and achieving your fitness goals.</p>
          </div>
          <img src={cristiano} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner