import './App.css';
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


const elementArray = BASE_ALPHABET.alphabet.map((element) => {
  console.log(element)
  return [element, true]
})
const arrayLen = elementArray.length
  return (
    <>
      <Picker style={style} elementArray={elementArray} arrayLen={arrayLen}/>
    </>
  );
}

const style = {
  //fontSize: '42px',
}


export default App;
