import React, {useState} from 'react';
import './App.css';



const exerciseKey = '17a168f13cmsh19ba4052ab7fd23p11631ejsn3d191b376582';


function App() {
  const [exerciseData, setExerciseData] = useState("");
  const [days, setDays] = useState(1);

  function handleChange(e) {
    setExerciseData(e.target.value);
  }

  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '17a168f13cmsh19ba4052ab7fd23p11631ejsn3d191b376582'
    }
  };
  
  fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${exerciseData}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


  return (
    <div className="App">
        <h1>Fitness App</h1>
       
          <form className="controls">
            <select value={exerciseData} onChange={handleChange}>
              <option value="back">Waist</option>
              <option value="cardio">Cardio</option>
              <option value="chest">Chest</option>
              <option value="lower arms">Lower Arms</option>
              <option value="lower legs">Lower Legs</option>
              <option value="neck">Neck</option>
              <option value="shoulders">Shoulders</option>
              <option value="upper arms">Upper Arms</option>
              <option value="upper legs">Upper legs</option>
              <option value="waist">Waist</option>
            </select>

            <select value={days} onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>

           

         </form>
       
        <button>Search</button>
    </div>
  );
}

export default App;
