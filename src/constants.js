// redux actions types
export const ADD_CASH = "ADD_CASH";
export const GET_CASH = "GET_CASH";
export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
export const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
// redux actions
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const addManyCustomersAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload});