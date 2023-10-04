import express, {Request, Response} from 'express';
import axios from 'axios';
import cors from 'cors';
//require ('dotenv').config()
import {config} from 'dotenv';

config()

const app = express()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3001",
    credentials: true
}))

const openaiApiKey = process.env.OPENAI_API_KEY;

app. post('/analyse', async (req:Request, res:Response)=>{
    try{
        const {text} = req.body
        const response = await axios.post('https://api.openai.com/v1/chat/completions',{
            model: "gpt-3.5-turbo",
            messages: [{role: "system", content: "You are a helpful assistant."},
                {role: "user", content: `Where is the sentiment of ${text}?`}],
          }, {headers: {
            'Authorization': `Bearer ${openaiApiKey}`
        },
    })
    const sentiment = response.data.choices[0].message.content;
    res.json({sentiment})

    }
    catch(error){
        res.status(500).json({error: `An error ${error} occured`})
    }

});

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})