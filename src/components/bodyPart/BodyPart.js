import React from 'react'
import './BodyPart.css'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <div className='bodypart' onClick={() => setBodyPart(item)} >
      <a style={{
        borderTop: bodyPart === item ? '2px solid white' : '',
        paddingTop: '4px'
      }} ><i class="fa-solid fa-dumbbell"></i></a>
      <p>{item}</p>
    </div>
  )
}

export default BodyPart