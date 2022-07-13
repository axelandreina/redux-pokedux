import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/types";

const initialState = fromJS({
    loading: true,
});

export const uiReducer = (state = initialState, action) => {
    // Aca se puede usar switch o if else..
    switch (action.type) {
        case SET_LOADING:
            return state.setIn(["loading"], action.payload);
        default:
            return state;
    }
};
