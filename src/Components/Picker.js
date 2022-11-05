import React, {useState, useRef } from 'react'
import Letter from './Letter'
import ReactPropTypes from 'react'
let intervalId;
let counter = 0;

const Picker = ({style, letters, speedProp}) => {
  const [isRunning, toggleRunning] = useState(true);
  const [currentLetter, pickLetter] = useState(() => {
    return 0
  });  
  const speed = useRef()

  speed.current = speedProp

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
      intervalId = setInterval(nextLetter, speed.current)    
    }
    else clearInterval(intervalId)
    return nextLetter()
  }

  return (
    <div style={style}>
        <button onClick={handleRunClick}>{isRunning ? 'Start' : 'Stop'}</button>
        <Letter currentLetter={currentLetter} letters={letters} />
    </div>
  )
}

Picker.defaultProps = {
  speedProp: 199
}
export default Picker