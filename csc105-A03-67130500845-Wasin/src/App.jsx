import './App.css'
import React from 'react'
import {devtools} from "globals";
function App() {
    const [result, setResult] = React.useState(0)
    const [value, setValue] = React.useState(0)

    const add = () => {
        setResult(parseInt(result) + parseInt(value));
        setValue(0)
    }
    const subtract = () => {
        setResult(parseInt(result) - parseInt(value));
        setValue(0)
    }
    const multiply = () => {
        setResult(parseInt(result) * parseInt(value));
        setValue(0)
    }
    const divide = () => {
        setResult(parseInt(result) / parseInt(value));
        setValue(0)
    }
    const re = () => {
        setResult(0);
    }
    const blank = () =>{
        setValue(0)
    }
    return (
    <>
        <div className="box">
            <h1>Simple Calculator</h1>
            <br></br>
            <h2>Result = {result}</h2>
            <input type="number" value={value} onChange={(e)=>{setValue(e.target.value)}} placeholder="Enter a numbber" ></input>
            <br></br><br></br>
            <button id="Blue" value="Add" onClick={()=> add()}>Add</button>&nbsp;
            <button id="Blue" value="Subtract" onClick={() => subtract()}>Subtract</button>&nbsp;
            <button id="Blue" value="Multiply" onClick={() => multiply()}>Multiply</button>&nbsp;
            <button id="Blue" value="Diveide" onClick={() => divide()}>Divide</button>
            <br></br><br></br>
            <button id="Blue" onClick={() => blank()}>Reset Input</button>&nbsp;
            <button id="Red" onClick={()=> re()}>Reset Result</button>
        </div>
    </>
  )
}

export default App