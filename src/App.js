import React, {useState} from 'react';
import PropTypes, { string } from "prop-types";

import './App.css';
import pokemon from "./pokemon.json";

const PokemonRow = ({pokemon}) => (
  <tr key={pokemon.id}>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      name: PropTypes.shape({
        english: PropTypes.string,
      }),
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
}

function App() {
  const [filter, setFilter] = useState("");
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon search</h1>
      <input
        value={filter}
        onChange={(evt) => setFilter(evt.target.value)}
      />
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon
            .filter((pokemon) => pokemon.name.english.toLowerCase()
            .includes(filter.toLowerCase()))
            .slice(0, 20)
            .map( pokemon => (
              <PokemonRow pokemon={pokemon} key={pokemon.id}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
