import React from 'react'
import './Nav.css'
import logo from '../images&icons/images/fitness.png'
import { Link } from 'react-router-dom'

const Nav = ({ exercise }) => {
  return (
    <nav className='navbar'>
      <div className="nav-items">
        <img src={logo} alt="" />
        <div className="nav-list">
          <ul>
            <Link to='/'><li>Home</li></Link>
            {exercise && exercise.length > 0 && (
              <Link to={`/exercise/${exercise[0].id}`}><li >Exercises  </li></Link>
            )}
            <Link to='/bmi'><li>BMI</li></Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav