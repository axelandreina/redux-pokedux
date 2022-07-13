import { combineReducers } from 'redux';
import dataSlice from '../slices/dataSlice';
import uiReducer from '../slices/uiSlice'

export const rootReducer = combineReducers({
    data: dataSlice,
    ui: uiReducer
})