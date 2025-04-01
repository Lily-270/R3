import './App.css';
import { useState } from "react";


function Header() {

  const currentYear = new Date().getFullYear();

  const [age, setAge] = useState(0);
  function handleAgeChange(e) {
    setAge(e.target.value);
  }

  const [year, setYear] = useState(currentYear);
  function handleYearChange(e) {
    setYear(e.target.value);
  }
 
  var [futureAge, setFutureAge] = useState('');
  function calc() {
    setFutureAge("you will be "+ (Number(year) - Number(currentYear) + Number(age)));
    if((Number(year) - Number(currentYear) + Number(age))<0 ){ //For handling the case when
    //  the user enter a year they weren't born in
      setFutureAge(" You weren't born in "+ year)
    }
  }

  return (
    <div className="header" >
      <label htmlFor="age">How old are you?</label>
      <input type="number" id="age" onChange={handleAgeChange} min="0" />
      <label htmlFor="year">In which year you wanna know your age?</label>
      <input type="number" id="year" onChange={handleYearChange} />
      <button onClick={calc} >Calculate</button>
      <h3 >You are {age} years old, in {year}, {futureAge}</h3>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
