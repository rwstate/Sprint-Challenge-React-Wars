import React, {useState, useEffect} from 'react';
import axios from "axios";
import CharacterList from "./components/CharacterList";
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(resp => setCharacterList(resp.data.results))
      .catch(err => console.log(err));
  }, []);

  console.log(characterList);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <div>
        <CharacterList characters={characterList} />
      </div>
    </div>
  );
};

export default App;