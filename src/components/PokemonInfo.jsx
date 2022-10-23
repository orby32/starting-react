// import { useContext } from "react";
// import PokemonContext from "../PokemonContext";
import PokemonType from "../PokemonType";
import store from "../store";

export const PokemonInfo = () => {
  // const {
  //   state: { selectedItem },
  // } = useContext(PokemonContext);
  const { selectedItem } = store;
  const { name, base } = selectedItem;

  if (!selectedItem) return <div>Loading...</div>;

  return (
    <div>
      <h1>{name.english}</h1>
      <table>
        {Object.keys(base).map((key) => (
          <thead key={key}>
            <tr>
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>
          </thead>
        ))}
      </table>
    </div>
  );
};

PokemonInfo.propTypes = PokemonType;
