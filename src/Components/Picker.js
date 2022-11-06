import React, {useState, } from 'react'
import Letter from './Letter'
let intervalId;
let elementIndex = 0;

const Picker = ({style, letters}) => {
  const [isRunning, toggleRunning] = useState(true);
  const [currentElement, setCurrentElement] = useState(() => {
    return 0
  });  

  const [speed, setSpeed] = useState(199)

  function handleChange(event) {
    setSpeed(event.target.value)
  }

  const nextLetter = () => {
    elementIndex++
    if (elementIndex >= letters.length) {
      elementIndex = 0 
    }
    setCurrentElement(elementIndex)
    return elementIndex
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
      <Letter currentElement={currentElement} letters={letters} />
    </div>
  )
}

export default Picker