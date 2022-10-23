import "./App.css";
import { useEffect, useReducer, useState } from "react";
import styled from "@emotion/styled";
import { PokemonTable } from "./components/PokemonTable";
import { PokemonInfo } from "./components/PokemonInfo";
import { PokemonFilter } from "./components/PokemonFilter";
import PokemonContext from "./PokemonContext";
import store from "./store";
import { observer } from "mobx-react";

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "SET_SELECTED_ITEM":
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      throw new Error("No Action");
  }
};

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {
  // const [pokemon, setPokemon] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [state, dispatch] = useReducer(pokemonReducer, {
    pokemon: [],
    filter: "",
    selectedItem: null,
  });

  useEffect(() => {
    fetch("/pokemon.json")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "SET_POKEMON",
          payload: data,
        })
      );
  }, []);

  const handleSelectedPokemon = (pokeId) => {
    const selectedPokemon = store.pokemon.find((poke) => poke.id === pokeId);
    store.setSelectedItem(selectedPokemon);
  };

  return (
    <PokemonContext.Provider
      value={{
        filter,
        setFilter,

        selectedItem,
        setSelectedItem,
        state,
        dispatch,
      }}
    >
      <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            {store.filteredPokemons.length ? (
              <PokemonTable onSelectRow={(id) => handleSelectedPokemon(id)} />
            ) : (
              <p>No Pokemons found</p>
            )}
          </div>
          {store.selectedItem && <PokemonInfo />}
        </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
  );
}

export default observer(App);
