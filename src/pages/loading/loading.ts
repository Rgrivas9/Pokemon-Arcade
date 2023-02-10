import { getPokemons } from "../../utils/fetch/data";
import { Pokemon } from "../../utils/fetch/data";
import { login } from "../login/login";
export const loading = async (): Promise<void> => {
  let pokemonList: Pokemon[] = await getPokemons(0, 151);
  if (
    confirm(
      "Pokemons de primera generación cargados. ¿Quieres la segunda? Llevará tiempo..."
    )
  ) {
    pokemonList = [...pokemonList, ...(await getPokemons(151, 251))];
    if (
      confirm(
        "Pokemons de segunda generación cargados. ¿Quieres la tercera? Llevará tiempo..."
      )
    ) {
      pokemonList = [...pokemonList, ...(await getPokemons(251, 386))];
      if (
        confirm(
          "Pokemons de tercera generación cargados. ¿Quieres la cuarta? Llevará tiempo..."
        )
      ) {
        pokemonList = [...pokemonList, ...(await getPokemons(386, 493))];
      }
    }
  }
  login(pokemonList);
};
