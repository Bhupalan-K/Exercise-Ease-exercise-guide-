import React, { useEffect, useState } from 'react'
import './SearchBar.css'
import { fetchData, apiOptions } from '../../api/fetchData';
import ScrollBar from '../scrollbar/ScrollBar';


const SearchBar = ({ bodyPart, setBodyPart, setExercises }) => {

  const API_DATA = 'https://exercisedb.p.rapidapi.com/exercises';

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([])

  const fetchBodyParts = async () => {
    const bodyData = await fetchData(`${API_DATA}/bodyPartList`, apiOptions);
    setBodyParts(['all', ...bodyData])
  }

  const handleSearch = async () => {
    if (search) {
      const apiData = await fetchData(API_DATA, apiOptions)

      const searchItems = await apiData.filter((data) =>
        data.name.toLowerCase().includes(search) ||
        data.target.toLowerCase().includes(search) ||
        data.equipment.toLowerCase().includes(search) ||
        data.bodyPart.toLowerCase().includes(search)
      )
      setExercises(searchItems);
    }
  }
  const clearSearch = () => {
    setSearch('');
  }

  useEffect(() => {
    fetchBodyParts();
  }, [])
  return (
    <div className='search'>
      <p>Search for <br /> Exercises</p>
      <div className="input-div">
        <div className="items">
          <input type="text"
            value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Search'
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button style={{ margin: '10px 0' }} onClick={clearSearch}>Clear Search</button>
      </div>
      <div className='hzscrollbar'>
        <ScrollBar data={bodyParts} bodyPart={bodyPart} bodyParts
          setBodyPart={setBodyPart} setExercises={setExercises}
        />
      </div>
    </div>
  )
}

export default SearchBar