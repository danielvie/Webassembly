import React, { useEffect } from 'react';
import init, { add } from "wasm-lib";
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [ans, setAns] = useState(0)
  const [valueA, setValueA] = useState(1)
  const [valueB, setValueB] = useState(1)
  
  useEffect(() => {
    init().then(() => {
      setAns(add(valueA, valueB))
    })
  }, [valueA, valueB])
  
  enum ValueType {
    A = 1,
    B = 2
  }

  const updateSum = (e:React.ChangeEvent<HTMLInputElement>, valueType:ValueType) => {

    // parsing value
    let value: number = parseInt(e.target.value)

    // updating values
    if (valueType === ValueType.A) {
      setValueA(value)
    } else if (valueType === ValueType.B) {
      setValueB(value)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="menu">
          a: <input type="text" value={valueA} onChange={(e:any) => updateSum(e, ValueType.A)}/>
        </div>
        <div className='menu'>
          b: <input type="text" value={valueB} onChange={(e:any) => updateSum(e, ValueType.B)}/>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>1 + 1 = {ans}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;