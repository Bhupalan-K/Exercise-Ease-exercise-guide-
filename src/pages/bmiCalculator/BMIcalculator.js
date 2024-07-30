import React, { useRef, useState } from 'react'
import './BMIcalculator.css'

const BMIcalculator = () => {

    const colorRef = useRef(null)
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [bmi, setBmi] = useState("")
    const [status, setStatus] = useState("")

    const calcBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));
            if (bmiValue < 18.5) {
                setStatus("Underweight")
            } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
                setStatus("Normal Weight")
            } else if (bmiValue >= 25 && bmiValue < 29.9) {
                setStatus("Overweight")
            } else {
                setStatus("Obesity")
            }
            colorChange(bmiValue)
        } else {
            alert("Enter all Inputs")
        }
    }

    const colorChange = (bmiValue) => {
        if (colorRef.current) {
            if (bmiValue < 18.5) {
                colorRef.current.style.color = 'yellow'
            } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
                colorRef.current.style.color = 'Green'
            } else if (bmiValue >= 25 && bmiValue < 29.9) {
                colorRef.current.style.color = 'yellow'
            } else {
                colorRef.current.style.color = 'Red'
            }
        }
    };

    const clrInp = () => {
        setHeight("")
        setWeight("")
        setBmi("")
        setStatus("")
    }

    return (
        <div className='BMI-calculator'>
            <div className="container">
                <div className="data">
                    <h2>BMI Calculator</h2>
                    <div className="input">
                        <label htmlFor="height">Height</label>
                        <input type="number" id='height' required
                            value={height} onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="weight">Weight</label>
                        <input type="number" id='weight' required
                            value={weight} onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <div className="button">
                        <button onClick={calcBMI}>Calculate BMI</button>
                        <button onClick={clrInp}>Clear inputs</button>
                    </div>
                    {bmi && status ?
                        <div className="result">
                            <p value={bmi} onChange={(e) => setBmi(e.target.value)}
                            >Your BMI is {bmi}</p>
                            <p>Status: <span ref={colorRef}>{status}</span></p>
                        </div> : null
                    }
                </div>
            </div>
            <div className="info">
                <div className="info-div">
                    <div>
                        <h3>How is BMI Calculated?</h3>
                        <p>BMI is Calculated using the formdiva: <strong>BMI = weight (kg) / (height (m) * height (m))</strong></p>
                        <p>Convert your height from centimeters to meters by dividing by 100.</p>
                        <p>Divide your weight in kilograms by the square of your height in meters.</p>
                        <p>The resulting  value is your BMI, which is used to categorize your weight status.</p>
                    </div>
                    <div>
                        <h4>BMI Categories:</h4>
                        <p><strong>Underweight:</strong> BMI less than 18.5</p>
                        <p><strong>Normal weight:</strong> BMI 18.5 - 24.9</p>
                        <p><strong>Overweight:</strong> BMI 25 - 29.9</p>
                        <p><strong>Obesity:</strong> BMI 30 or greater</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BMIcalculator