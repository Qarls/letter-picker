import { useState, useRef } from 'react';
import './App.css';
import { ReactPropTypes } from 'react';
import Picker from './Components/Picker';
const BASE_ALPHABET = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

function App() {
  //const [speed, setSpeed] = useState(199)
  const speed = useRef()
  
  function handleChange(event) {
    //setSpeed(event.target.value)
    speed.current = event.target.value

  }

  return (
    <>
      <label for='speed'>Speed: </label>
      <input type='number' id='speed' onChange={handleChange} value='199'></input>
      <Picker style={style} letters={BASE_ALPHABET} speedProp={speed.current}/>
    </>
  );
}
const style = {
  fontSize: '42px',
}


export default App;
