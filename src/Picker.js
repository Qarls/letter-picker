import React, {useState} from 'react'

const Picker = ({style, letters}) => {
    

  return (
    <div style={style}>
        <p>{letters[5]}</p>
        <button>Run</button>

    </div>
  )
}

export default Picker