import React from 'react'
import './ResultCard.css'
import { Link } from 'react-router-dom'

const ResultCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`}>
      <div className='card' >
        <p>{exercise.name}</p>
        <img src={exercise.gifUrl} alt="GIF" />
        <div className="card-info">
          <p>{exercise.bodyPart}</p> ||
          <p>{exercise.target}</p>
        </div>
      </div>
    </Link>
  )
}

export default ResultCard