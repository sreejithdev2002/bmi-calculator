import "./App.css";
import React,{useState,} from "react";

function App() {

  //setting up the states

  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [message,setMessage] = useState('');

  //logic

  let calcBmi = (e) => {


    e.preventDefault();




    if(weight===0 || height ===0){
      alert("Please enter valid values");
    }
    else{ 


      let bmi = ((weight/(height*height))*10000)
      setBmi(bmi)


      if(bmi<18.5){
        setMessage('You are under weight')
      }
      else if(bmi>=18.5 && bmi<=24.9){
        setMessage('You are healthy')
      }
      else if(bmi>=25 && bmi<=29.9){
        setMessage('You are over weight');
      }
      else{
        setMessage('Obese : Your life is at risk!!!')
      }
    }
  }


  //reload 

  let reload = ()=>{
    window.location.reload()
  }


  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input type="text" placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (cm)</label>
            <input type="text" placeholder="Enter your Height" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className="btn" id="btn-submit" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" id="btn-reload" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI value is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
