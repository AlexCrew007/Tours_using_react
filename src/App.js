import {useState} from 'react';
import './App.css';
import data from './data.js';
import Tours from './components/tours';

function App() {

  const [tours, setTours]=useState(data)

  function removeTourHandler(id){
    const newTours = tours.filter( tour => tour.id !==id);
    setTours(newTours);
  }
  function restoreHandler(){
    setTours(data);
  }
  if (tours.length===0){
    return (
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={restoreHandler}>Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTourHandler}></Tours>
    </div>
  );
}

export default App;
