import React, {useState, } from 'react'
import Letter from './Letter'
let intervalId;
let elementIndex = 0;


const Picker = ({style, elementArray, arrayLen}) => {
  console.log(elementArray)
  const [usedElements, updateUsedElements] = useState([])
  const [speed, setSpeed] = useState(199)
  const [isRunning, toggleRunning] = useState(true);
  const [currentElement, setCurrentElement] = useState(() => {
    return 0
  });  
  


  function handleChange(event) {
    setSpeed(event.target.value)
  }

  function checkAvailable(index) {
    if (index) return true;
    return false;
  }

  const nextLetter = () => {
    
    if (elementIndex >= arrayLen - 1) {
      elementIndex = 0 
    }
    elementIndex++
    if (checkAvailable(elementArray[elementIndex][1])) {
      setCurrentElement(elementIndex)
      return elementIndex
    }
    else {
      nextLetter();
    }
  }

  function handleRunClick() {
    toggleRunning(!isRunning)
    if (isRunning) {
      intervalId = setInterval(nextLetter, speed)    
    }
    else {
      fetch(currentElement) 
        .then(clearInterval(intervalId))
      if (checkAvailable(elementIndex)) {
        updateUsedElements(prevElements => [...prevElements, elementArray[elementIndex][0]])
        elementArray[elementIndex][1] = false;
        console.log(usedElements)
      }
  }
  }

  return (
    <div style={style}>
      <label htmlFor='speed'>Speed: </label>
      <input type='number' id='speed' onChange={handleChange} ></input>
      <button onClick={handleRunClick} className={isRunning ? 'startbutton' : 'stopbutton'}>{isRunning ? 'Start' : 'Stop'}</button>
      <Letter currentElement={currentElement - 1} elementArray={elementArray} />
      <span>{usedElements}</span>
    </div>
  )
}

export default Picker