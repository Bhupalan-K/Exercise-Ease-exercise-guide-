import React, { useEffect, useState } from 'react'
import Exercises from '../../components/exercises/Exercises'
import Banner from '../../components/banner/Banner'
import SearchBar from '../../components/searchBar/SearchBar'

const Home = ({ setExercise }) => {

  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    setExercise(exercises)
  }, [exercises, setExercise])

  return (
    <div className='home'>
      <Banner />
      <SearchBar
        bodyPart={bodyPart}
        setExercises={setExercises}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </div>
  )
}

export default Home