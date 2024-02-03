import React, { useState, useEffect } from 'react';
import HelloWorld from './Components/HelloWorld';

const App = () => {
  const [serverResponse, setServerResponse] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000') // Adjust the URL to match your server
      .then(response => response.text())
      .then(data => setServerResponse(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div className="App">
      <h1>Server Response:</h1>
      <p>{serverResponse}</p>
    </div>
  );
}

export default App;
