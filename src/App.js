import {Meutexto, CorButton} from './style.js'
import {useState} from 'react'


function App() {
  const [color_button, setColor_button] = useState()
  
  return (
    <div className="App">
      <CorButton pintar='blue' onClick={() => {setColor_button('blue')}}></CorButton>
      <CorButton pintar='red' onClick={() => {setColor_button('red')}}></CorButton>
      <CorButton pintar='black' onClick={() => {setColor_button('black')}}></CorButton>
      <CorButton pintar='blueviolet' onClick={() => {setColor_button('blueviolet')}}></CorButton>

      <Meutexto MinhaCor={color_button}>Hello</Meutexto>
    </div>
  );
}

export default App;
