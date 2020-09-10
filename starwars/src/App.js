import React from 'react';
import './App.css';
import AllStarships from '../src/pages/Starships/AllStarships'
import { Route } from 'react-router-dom'
import StarshipPage from '../src/pages/Starships/StarshipPage'
function App() {
  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <Route
        exact path='/'
        render={() =>
        <AllStarships />
        }
      />
      <Route 
          exact path='/starship'
          render={( {location} ) => 
            <StarshipPage
              location = {location}
            />
          }
        />
    </div>
  );
}
export default App;