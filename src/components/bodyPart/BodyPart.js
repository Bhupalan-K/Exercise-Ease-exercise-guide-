import React from 'react'
import './BodyPart.css'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <div className='bodypart' onClick={() => setBodyPart(item)} >
      <button 
        style={{
          borderTop: bodyPart === item ? '2px solid white' : '',
          paddingTop: '4px',
        }}
      >
        <i className="fa-solid fa-dumbbell"></i>
      </button>
      <p>{item}</p>
    </div>
  )
}

export default BodyPart
