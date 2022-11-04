import React, {useState} from 'react'
import Letter from './Letter'
let intervalId;
let counter;
const Picker = ({style, letters}) => {
  const [isRunning, toggleRunning] = useState(true);
  const [currentLetter, pickLetter] = useState(() => {
    return 0
  });  

  function handleRunClick() {
    toggleRunning(!isRunning)
    if (isRunning  ) {
      intervalId = setInterval(nextLetter, 500)
    } 
    else
      return clearInterval(intervalId)
  }
  function nextLetter() {
    console.log(currentLetter)
    counter = currentLetter;
    pickLetter(prevLetter => prevLetter + 1)
    console.log(counter);
       
  }

  return (
    <div style={style}>
        <Letter currentLetter={currentLetter} letters={letters} />
        <button onClick={handleRunClick}>{isRunning ? 'Start' : 'Stop'}</button>
        

    </div>
  )
}

export default Picker