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
    <div style={{display: "flex", flexDirection:"column", width:"100vw", height:"100vh", gap:"30px" }}>
      <div onClick={onStartHandler} style={{display: "flex", alignItems:"center", justifyContent:"center", width: "80%", height: "40%", background:"#59CE8F", color: "white", fontSize:"21px", fontWeight: "600"}}>
          서버 시작
      </div>

        <div onClick={onStopHandler} style={{display: "flex", alignItems:"center", justifyContent:"center",width: "80%", height: "40%", background:"#FF1E00", color: "white", fontSize:"21px", fontWeight: "600"}}>
            서버 종료
        </div>
    </div>
  )
}

export default App
