import React, {} from 'react'
import './Letter.css';

const Letter = ({letters, currentLetter}) => {
return( 
    <p>{letters[currentLetter]}</p>
  )
}

export default Letter