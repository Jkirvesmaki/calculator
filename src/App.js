import { useState } from 'react';

function App() {
const [calc, setCalc] = useState('');
const [result, setResult] = useState('');
const [history, setHistory] = useState([]);
const ops = ['/', '*', '+', '-', '.'];

const updateCalc = value => {
  if(
    ops.includes(value) && calc === '' ||
    ops.includes(value) && ops.includes(calc.slice(-1)
    )
    )
  {
    return;
  }
    setCalc(calc + value);

    if (!ops.includes(value)) {
        setResult(eval(calc + value).toString());
   
}
}
  const digitsGen = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
    digits.push(
      <button 
          onClick={() => updateCalc(i.toString())} 
          key={i}> 
          {i} 
        </button> 
      )
  }
  return digits;
  }

  const calculate = () => {
      setCalc(eval(calc).toString());
      historySet(calc)
  }

  const deleteLast = () => {
		if (calc == '') {

		}
		const value = calc.slice(0, -1);

		setCalc(value);
	}

  
  const clear = () => {
		setCalc('');
    setResult('')
	}
  const historySet = (calc) => {
if (history.length <= 10) {
  setHistory(history => [... history, calc]);
  
  console.log('result', result)
}
else {
  history.shift();
  setHistory(history => [... history, calc]);
 
}
  console.log('hist', history);
  
 }
 const clickHistory = (h) => {
   setCalc(h)
   setResult(eval(h).toString());
 }

  return (
    <div className='container'>
    <div className="App">
        <div className="calculator">
          <div className="display">
        
          {result ? <span>({result})</span> : ''} 
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button> 
          <button onClick={() => updateCalc('*')}>*</button> 
          <button onClick={() => updateCalc('+')}>+</button> 
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={deleteLast}>DEL</button>
          <button onClick={clear}>C</button>
        </div>

        <div className="digits">
          { digitsGen() }
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
          
        </div>
    </div>
    </div>
    <div className='history'>
      <div className='historyTable'>
        {history.map (h =>
          <div>
            <button className='button2' onClick={() => clickHistory(h)}>{h}</button>
          </div>
          )
        }
      </div>
    </div>
    </div>
  );
}

export default App;
