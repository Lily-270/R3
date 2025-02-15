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
 
  var [futureAge, setFutureAge] = useState(0);
  function calc() {
    setFutureAge(Number(year) - Number(currentYear) + Number(age));
  }
  return (
    <div className="header">
      <label >How old are you?</label>
      <input type="number" id="age" onChange={handleAgeChange} min="0" />
      <label >In which year you wanna know your age?</label>
      <input type="number" id="year" onChange={handleYearChange} />
      <button onClick={calc} >Calculate</button>
      <h3 >You are {age} years old, in {year} you will be {futureAge}</h3>
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
