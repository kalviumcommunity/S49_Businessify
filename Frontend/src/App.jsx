import React from 'react';
import './App.css'; // Assuming you have an App.css file for styling
import Data from './components/Data'; // Importing the Data component

const App = () => {
  return (
    <div className="app">
      <h1>Profitable business companies of the year</h1>
      <Data /> {/* Rendering the Data component */}
    </div>
  );
};

export default App;
