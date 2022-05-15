import React, {useState} from 'react';
import './App.css';



function App() {
  const [exerciseData, setExerciseData] = useState(null);
  const [days, setDays] = useState(1);

  function handleChange(e) {
    setExerciseData(e.target.value);
  }
  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '17a168f13cmsh19ba4052ab7fd23p11631ejsn3d191b376582'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });



  return (
    <div className="App">
        <h1>Fitness App</h1>
        <section className="controls">
        <input
        type="text"
        placeholder="Body part (e.g. legs)"
        onChange={handleChange} />
        <input
        type="number"
        placeholder="Number of exercises"/>
        </section>
        <button>Search</button>
    </div>
  );
}

export default App;
