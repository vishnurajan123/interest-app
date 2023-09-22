import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';


function App() {

const [interest,setInterest]=useState(0)
const [principle,setPriciple]=useState(0)
const [rate,setRate]=useState(0)
const [year,setYear]=useState(0)
const [isValid,setIsValid]=useState(true)
const [israteValid,setIsrateValid]=useState(true)
const [isyearValid,setIsyearValid]=useState(true)


const handleCalculate=(e)=>{
  e.preventDefault()
  if(!principle || !rate || !year){
    alert("Please fill the form completely !!!")
  }
  else(
    setInterest(principle*rate*year/100)
  )
}
const handleReset=()=>{
  setPriciple(0)
  setInterest(0)
  setRate(0)
  setYear(0)
  setIsValid(true)
  setIsrateValid(true)
  setIsyearValid(true)
}

const validateInput=(e)=>{
  const {value,name}=e.target
  if(!!value.match(/^[0-9]+$/)){
    if(name==="principle"){
    setPriciple(value)
    setIsValid(true)
    }
    else if(name==="rate"){
      setRate(value)
      setIsrateValid(true)
      }
      else{
        setYear(value)
        setIsyearValid(true)
        }
  }
  else{
    if(name==="principle"){
      setPriciple(value)
      setIsValid(false)
      }
      else if(name==="rate"){
        setRate(value)
        setIsrateValid(false)
        }
        else{
          setYear(value)
          setIsyearValid(false)
          }
  }

}

  return (
    <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center bg-dark '>
      <div style={{ width: "500px" }} className=' bg-light rounded p-5 '>
        <div className='heading'><h1>Interest Calculator</h1>
          <p>Calculate your simple interest easily</p></div>
        <div style={{ height: "150px" }} className='shadow d-flex justify-content-center align-items-center flex-column bg-info rounded'>
          <h1>
            ₹ {' '}{interest}
          </h1>
          <p className='fw-bold'>
            Total Simple Interest
          </p>

        </div>
        <form onSubmit={handleCalculate} className='mt-5'>
          <div className='mb-3'>

            <TextField className='w-100' id="outlined-basic" label="₹ Principal amount" variant="outlined" value={principle ||""} name='principle' onChange={(e)=>validateInput(e)} />

          </div>
          {
            !isValid &&
            <div className='mb-3 text-danger'>
              *Invalid input
            </div>
          }
          <div className='mb-3'>

            <TextField className='w-100' id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" value={rate ||""} name='rate' onChange={(e)=>validateInput(e)} />

          </div>
          {
            !israteValid &&
            <div className='mb-3 text-danger'>
              *Invalid input
            </div>
          }
          <div className='mb-3'>

            <TextField className='w-100' id="outlined-basic" label="Time period (Yr)" variant="outlined" value={year ||""} name='year' onChange={(e)=>validateInput(e)}  />

          </div>
          {
            !isyearValid &&
            <div className='mb-3 text-danger'>
              *Invalid input
            </div>
          }
          <Stack direction="row" spacing={2}>
            <Button type='submit' style={{width:'200px',height:'70px'}} className='bg-primary' variant="contained" disabled={isValid && israteValid && isyearValid?false:true} >Calculate</Button>
            <Button onClick={handleReset} style={{width:'200px',height:'70px'}} variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
