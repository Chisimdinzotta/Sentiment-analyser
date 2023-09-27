import React from 'react';
import { useNavigate} from 'react-router-dom';

export const AnalysisForm = ({ onInputChange }) => {
  const [inputText, setInputText] = React.useState('');
  const navigate = useNavigate();

  const handleInputChange = (e)=>{
    setInputText(e.target.value)
  }

  const handleAnalyseClick = () => {
    onInputChange(inputText); 
    navigate("/result");
  }

  return (
    <div className="analyser-container">
      <h1>Sentiment Analyser</h1>
      <textarea
        value={inputText}
        placeholder="Enter text for analysis"
        onChange={handleInputChange}
        className="input">
      </textarea>
      <button onClick={handleAnalyseClick}>Analyse</button>
    </div>
  );
}

export default AnalysisForm;
