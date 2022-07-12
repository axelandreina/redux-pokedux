// Aca vamos a tener nuestros actions creator.
// Un action creator es una funcion que retorna un action.
// O sea un objeto que describe el cambio que va a pasar
import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "./types";
import { getPokemonDetails } from "../api";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
});

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
});

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload,
});


// Esta es la esturctura con la que funcionan los action creators en Redux thunk
export const getPokemonsWithDetails =
    (pokemons = []) =>
    async (dispatch) => {
        const pokemonsDetailed = await Promise.all(
            pokemons.map((pokemon) => getPokemonDetails(pokemon))
        );
        dispatch(setPokemons(pokemonsDetailed));
    };
