import { SET_POKEMONS } from '../actions/types'

const initialState = {
    pokemons: [],
};

export const pokemonsReducer = (state = initialState, action) => {
    // Aca se puede usar switch o if else..
    switch(action.type) {
        case SET_POKEMONS: 
            return {...state, pokemons: action.payload};
    default:
        return state;
    }
}