import React, {useState} from 'react';



const exerciseKey = '17a168f13cmsh19ba4052ab7fd23p11631ejsn3d191b376582';


function Home() {
  const [bodyPart, setBodyPart] = useState("");

  const changeBodyPart = (newBodyPart) => {
    setBodyPart(newBodyPart)
  }


  const axios = require('axios');

  function getExerciseData() {
  const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
    headers: {
      'X-RapidAPI-Host': `exercisedb.p.rapidapi.com/`,
      'X-RapidAPI-Key': `${exerciseKey}`
    }
  };
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  
  }

  return (
    <div className="App">
        <h1>Fitness App</h1>
       
          <form className="controls">
            <select 
              onChange={(event) => changeBodyPart(event.target.value)}
              value={bodyPart}
            >
              <option value=""></option>
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

         </form>
     
    </div>
  );
}

export default Home;