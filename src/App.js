import React ,{useState} from 'react'
import './App.css';
import Navbar from "./components/Navbar"
import About from './components/About'
import TextArea from "./components/TextArea"

function App() {

  const [mode, setMode] = useState(`light`)

  const toggleMode=()=>{
   if(mode===`light`){
    setMode(`dark`)
    document.body.style.backgroundColor = `black`
   }
   else{
    setMode(`light`)
    document.body.style.backgroundColor = `white`
   }
  }

  return (
    <div>
     <Navbar name = "learn2Grow" mode={mode} toggleMode={toggleMode}/>
     <TextArea mode = {mode}/>
     <About mode={mode}/>
     </div>
  )

}

export default App;
