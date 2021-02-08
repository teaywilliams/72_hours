import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Weather from './components/Weather'


// Defining our <App /> component the function name matches the file name
function App() {
  // All functional components need to return jsx with one parent element
  return ( 
    <div className="App"> 
      <Weather/>
      this is new
    </div>
  );
}

// Makes our Component available for import
export default App;