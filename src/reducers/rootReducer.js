import { combineReducers } from 'redux-immutable';
import { pokemonsReducer } from './pokemons';
import { uiReducer } from './ui';

export const rootReducer = combineReducers({
    data: pokemonsReducer,
    ui: uiReducer
})

