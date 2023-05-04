import {ADD_CUSTOMER, ADD_MANY_CUSTOMERS, REMOVE_CUSTOMER} from "../constants";

const defaultState = {
    customers: [],
}

//action = {type:"", payload: "data"}
export const customerReducer = (state = defaultState, action) => {
    // console.log("type: ", action.type)
    // console.log("state: ", action.payload)
    switch (action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        default :
            return state
    };
}

