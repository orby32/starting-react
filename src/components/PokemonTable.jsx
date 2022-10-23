// import { useContext } from "react";
// import PokemonContext from "../PokemonContext";
import { PokemonRow } from "./PokemonRow";
import store from "../store";

export const PokemonTable = ({ onSelectRow }) => {
  const { filteredPokemons } = store;

  return (
    <table width="100%">
      <thead>
        <tr className="table-header-row">
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {filteredPokemons.slice(0, 20).map((poke) => {
          return (
            <PokemonRow
              pokemon={poke}
              onSelect={(id) => onSelectRow(id)}
              key={poke.id}
            />
          );
        })}
      </tbody>
    </table>
  );
};
