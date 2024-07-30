import React, { useEffect, useState } from 'react'
import './Exercises.css'
import ResultCard from '../resultCard/ResultCard'
import { apiOptions, fetchData } from '../../api/fetchData'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const API_DATA = 'https://exercisedb.p.rapidapi.com/exercises';

  const fetchExerciseData = async () => {
    let exerciseData = [];
    if (bodyPart === 'all') {
      exerciseData = await fetchData(API_DATA, apiOptions)
    } else {
      exerciseData = await fetchData(`${API_DATA}/bodyPart/${bodyPart}`, apiOptions)
    }
    setExercises(exerciseData)
  }

  useEffect(() => {
    fetchExerciseData()
  }, [bodyPart])
  return (
    <div className='results'>
      <div className='header'>
        <p >Showing Results</p>
      </div>
      <div className='result-div'>
        {exercises.map((exercise, index) => (
          <ResultCard key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  )
}

export default Exercises