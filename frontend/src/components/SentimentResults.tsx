import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AnalyserProps{
    inputText: string
}

const Analyser: React.FC <AnalyserProps>= (prop)=>{

    const [loading, setLoading] = useState<boolean>(false);
    const [analysisResult, setAnalysisResult] = useState<string>('');
    const navigate = useNavigate()

    const sentimentAnalysis = async ()=>{
        setLoading(true);

        try{
            const response = await axios.post('http://localhost:3000/analyse', {text: prop.inputText});
            setAnalysisResult(response.data.sentiment);
        }
        catch(error){
            console.error(error);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if (prop.inputText !== " "){
            sentimentAnalysis();
        }
    }, [])

    return (
        <div>
            {loading && <p>Loading....</p>}
            {analysisResult && <p><strong>Sentiment:</strong> {analysisResult}</p>}
            {prop.inputText == " " && <p>Please enter the text for analysis</p>}
            <button onClick={()=> {navigate("/")}}>Another Analysis</button>
        </div>
    )
}
export default Analyser;


