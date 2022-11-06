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


  return (
    <>
      <Picker style={style} letters={BASE_ALPHABET.alphabet} />
    </>
  );
}

const style = {
  //fontSize: '42px',
}


export default App;
