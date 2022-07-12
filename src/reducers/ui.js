import { fromJS } from "immutable";
import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "../actions/types";

const initialState = fromJS({
    pokemons: [],
    loading: true,
});

export const pokemonsReducer = (state = initialState, action) => {
    // Aca se puede usar switch o if else..
    switch (action.type) {
        case SET_POKEMONS:
            // return {...state, pokemons: action.payload};
            return state.setIn(["pokemons"], fromJS(action.payload));
        case SET_FAVORITE:
            const currentPokemonIndex = state
                .get("pokemons")
                .findIndex((pokemon) => {
                    return pokemon.get("id") === action.payload.pokemonId;
                });
            if (currentPokemonIndex < 0) {
                return state;
            }

            const isFavorite = state.getIn([
                "pokemons",
                currentPokemonIndex,
                "favorite",
            ]);

            return state.setIn(
                ["pokemons", currentPokemonIndex, "favorite"],
                !isFavorite
            );
        case SET_LOADING:
            return state.setIn(["loading"], action.payload);
        default:
            return state;
    }
};