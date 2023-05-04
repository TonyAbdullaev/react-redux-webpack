import {ADD_CASH, GET_CASH} from "../constants";

const defaultState = {
    cash: 0,
}

//action = {type:"", payload: "data"}
export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload}
        case GET_CASH:
            return {...state, cash: state.cash - action.payload}
        default :
            return state
    };
}