import React, {} from 'react'
import './Letter.css';

const Letter = ({elementArray, currentElement}) => {
function displayElement() {
  try {
    return elementArray[currentElement+1]
  }
  catch {
    return elementArray[0]
  }
}
return( 
    <p>{displayElement()}</p>
  )
}

export default Letter