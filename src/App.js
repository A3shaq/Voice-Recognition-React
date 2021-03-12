
import React, { useState, useEffect } from "react"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import './App.css';

// const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition()

// recognition.start()
function App() {
  const [counter, setCounter] = useState(0)
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  // const voiceCommands = ()=>{
  //   recognition.onstart =()=>{
  //     console.log('voiceCommands')
  //   } 
  // }
  return (
    <div className="App">

      {/* 
      <h1>Counter: {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => counter > 0 && setCounter(counter - 1)}>-</button> */}

      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <h1>{transcript}</h1>
    </div>
  );
}

export default App;
