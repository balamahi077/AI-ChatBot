import { useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [question, setQuestion] = useState("");
  const [answer,setAnswer]=useState("");



  async function generatAnswer(){
    setAnswer("Loading...")

    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCw8tLRZnmZXzeXeosDRAXAY-drMZ8SHAg",
      method:"post",
      data:{contents:[{parts:[{text:question}]},
    ],
  },
    })
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  };

  return (
    <>
    <div className='div'>
    <center>
    <h1 > AI ChatBot</h1>
   
    <input type="search" placeholder='Ask anything...' value={question} onChange={(e)=>setQuestion(e.target.value)} cols="30" rows="10"></input>
    <br></br>
    <br></br>
    <button onClick={generatAnswer}>Generate Answer</button>
      <br></br>
        <div className='res'>
          <textarea value={answer}></textarea>
        </div>

        </center>
    </div>
    </>
  )
}

export default App
