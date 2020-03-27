import React from 'react';
import './App.css';
import FadzisoGabrielle from './images/FadzisoGabrielle.JPG';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cv from './Components/Cv';
import './Components/Cv.css';
import 'react-icons';

function App() {
  return (
    <div className="App">
      <Cv Image={FadzisoGabrielle} />
    </div>
  );
}

export default App;
