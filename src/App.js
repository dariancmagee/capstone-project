
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Results from './pages/Results';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App;
