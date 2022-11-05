import { useState, useRef } from 'react';
import './App.css';
import { ReactPropTypes } from 'react';
import Picker from './Components/Picker';

const BASE_ALPHABET = {
  alphabet: [
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
]}

function App() {

  const speed = useRef()
  
  function handleChange(event) {
    speed.current = event.target.value
  }

  return (
    <>
      <label for='speed'>Speed: </label>
      <input type='number' id='speed' onChange={handleChange} value={speed.current}></input>
      <Picker style={style} letters={BASE_ALPHABET.alphabet} speedProp={speed.current}/>
    </>
  );
}

const style = {
  //fontSize: '42px',
}


export default App;
