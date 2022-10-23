import { makeObservable, observable, computed } from "mobx";

class Store {
  pokemon = [];
  filter = "";
  selectedItem = null;

  constructor() {
    makeObservable(this, {
      pokemon: observable,
      filter: observable,
      selectedItem: observable,
      filteredPokemons: computed,
    });
  }

  get filteredPokemons() {
    return this.pokemon.filter((poke) =>
      poke.name.english.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }

  setFilter(filter) {
    this.filter = filter;
  }

  setSelectedItem(selectedItem) {
    this.selectedItem = selectedItem;
  }
}

const store = new Store();

fetch("/pokemon.json")
  .then((response) => response.json())
  .then((data) => store.setPokemon(data));

export default store;
