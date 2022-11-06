import React, {useState, } from 'react'
import Letter from './Letter'
let intervalId;
let counter = 0;

const Picker = ({style, letters}) => {
  const [isRunning, toggleRunning] = useState(true);
  const [currentLetter, pickLetter] = useState(() => {
    return 0
  });  
  const [speed, setSpeed] = useState(199)

  function handleChange(event) {
    setSpeed(event.target.value)
  }

  const nextLetter = () => {
    counter++
    if (counter >= letters.length) {
      counter = 0 
    }
    pickLetter(counter)
    return counter
  }

  function handleRunClick() {
    toggleRunning(!isRunning)
    if (isRunning) {
      intervalId = setInterval(nextLetter, speed)    
    }
    else clearInterval(intervalId)
    return nextLetter()
  }

  return (
    <div style={style}>
      <label for='speed'>Speed: </label>
      <input type='number' id='speed' onChange={handleChange} ></input>
      <button onClick={handleRunClick}>{isRunning ? 'Start' : 'Stop'}</button>
      <Letter currentLetter={currentLetter} letters={letters} />
    </div>
  )
}

Picker.defaultProps = {
  speedProp: 199
}
export default Picker