import { Button } from "@mui/material";
import PokemonType from "../PokemonType";

export const PokemonRow = ({ pokemon, onSelect }) => (
  <tr
    key={[pokemon.id, pokemon.name.english].join(":")}
    style={{ textAlign: "left" }}
  >
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSelect(pokemon.id)}
      >
        Select
      </Button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PokemonType,
};
