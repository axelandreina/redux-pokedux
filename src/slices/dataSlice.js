import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from '../api'
import {setLoading} from './uiSlice'

const initialState = {
    pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async(_, {dispatch}) => {
        dispatch(setLoading(true))
        const pokemonsRes = await getPokemon();
        const pokemonsDetailed = await Promise.all(
            pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
        );
        // Este promise.all significa que va a lanzar un conjunto de peticiones al mismo tiempo de
        // y se va a resolver cuando todas ellas hayan estado resueltas.
        // Por cada uno de los pokemones que me haya traido la respuesta (pokemonsRes) vamos a obtener
        // sus detalles.
        dispatch(setPokemons(pokemonsDetailed));
        dispatch(setLoading(false));
    }
);

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId;
            });
            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;

                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            }
        },
    },
});



export const { setPokemons, setFavorite } = dataSlice.actions;

export default dataSlice.reducer;