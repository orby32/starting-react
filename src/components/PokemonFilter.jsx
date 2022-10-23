import styled from "@emotion/styled";
// import { useContext } from "react";
import { observer } from "mobx-react";
// import PokemonContext from "../PokemonContext";
import store from "../store";

const Input = styled.input`
  width: 100%;
  padding: 0 0.2rem;
`;

export const PokemonFilter = observer(() => {
  // const {
  //   state: { filter },
  //   dispatch,
  // } = useContext(PokemonContext);

  return (
    <Input
      type="text"
      value={store.filter}
      onChange={(e) => store.setFilter(e.target.value)}
    />
  );
});
