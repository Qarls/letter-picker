import React, {} from 'react'
import './Letter.css';

const Letter = ({letters, currentElement}) => {
return( 
    <p>{letters[currentElement]}</p>
  )
}

export default Letter