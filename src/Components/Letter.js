import React, {} from 'react'

const Letter = ({letters, currentLetter}) => {
return( 
    <p>{letters[currentLetter]}</p>
  )
}

export default Letter