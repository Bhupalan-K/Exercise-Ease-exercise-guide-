import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import ExerciseDetail from './pages/exerciseDetails/ExerciseDetail'
import Footer from './footer/Footer';
import Nav from './header/Nav';
import BMIcalculator from './pages/bmiCalculator/BMIcalculator';
import { useState } from 'react';

const App = () => {

  const [exercise, setExercise] = useState([])

  return (
    <div className="App">
      <Nav exercise={exercise} />
      <Routes>
        <Route path='/' element={<Home setExercise={setExercise} />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
        <Route path='/bmi' element={<BMIcalculator />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
