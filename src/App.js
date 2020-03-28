import React from 'react';
import './App.css';

function MovieItem(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.rate}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MovieItem title="New Title" rate={8.1}/>
    </div>
  );
}

export default App;
