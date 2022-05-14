import React, {useState} from 'react';
import './App.css';

function App() {
  const [exerciseData, setExerciseData] = useState(null);
  const [days, setDays] = useState(1);

  function handleChange(e) {
    setExerciseData(e.target.value);
  }


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
