import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import AnalysisForm from './components/SentimentForm';
import Analyser from './components/SentimentResults';
import './App.css';

const App = () =>{

  const [inputText, setInputText] = useState <string> ("")

  const handleInputChange = (text)=>{
    setInputText(text)
  }


  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<AnalysisForm onInputChange = {handleInputChange}/>}/>
            <Route path="/result" element={ <Analyser inputText={inputText}/>}/>
          </Routes>
        </Router>
  </>
  )
}

export default App;

