import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const onStartHandler = async () => {
      const result = await axios.post("https://dwjzpkmia8.execute-api.ap-northeast-2.amazonaws.com/staging", {});
      console.log(result);
  }

  const onStopHandler = async () => {
      const result = await axios.post("https://8eoptjle72.execute-api.ap-northeast-2.amazonaws.com/staging",{});
      console.log(result);
  }

  return (
    <div style={{display: "flex", flexDirection:"column", width:"100vw", height:"100vh", gap:"30px"}}>
      <div onClick={onStartHandler} style={{width: "80%", height: "40%", background:"green"}}>
          서버 시작
      </div>

        <div onClick={onStopHandler} style={{width: "80%", height: "40%", background:"red"}}>
            서버 종료
        </div>
    </div>
  )
}

export default App
