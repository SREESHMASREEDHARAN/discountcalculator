
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



function App() {
const [rate,setRate] = useState(0);
const [discount,setDiscount] = useState(0);
const [final,setFinal] = useState(0);
const [saving,setSaving] = useState(0)
console.log(rate,discount);
const calculate=(e)=>{
  const output=rate * (discount / 100);
  console.log(output);
  setFinal(output)
  const savings=rate-output;
  console.log(savings);
  setSaving(savings); 
 }
 const reset=(e)=>{
  setFinal(0);
  setSaving(0);
  setDiscount(0);
  setRate(0);
}

  return (
    <div className="App">
      <div className='container'>
        <div className='heading'>
          <h1>Discount Calculator</h1>
          <p>Determine how many percent off you can get during a sale ❤</p>
        </div>
        <div className='form'>
          <form>
            <div className='input'>
            <TextField id="standard-basic" value={rate||''} onChange={(e)=>setRate(e.target.value)} label="Original Price*" variant="standard" style={{marginBottom:'30px'}} />
            <TextField id="standard-basic" value={discount||''} onChange={(e)=>setDiscount(e.target.value)} label="Discount %" variant="standard" />
            </div>
            <div className='button'>
          <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
          <Button variant="contained" onClick={e=>reset(e)}>Reset</Button>
        </div>
          </form>
        </div>

        <div className='result'>
          <h3>Final Price: ₹{saving}</h3>
          <p>You have Saved ₹{final}</p>
        </div>

        
      </div>


    </div>
  );
}

export default App;
