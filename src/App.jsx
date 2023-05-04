import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    ADD_CASH,
    GET_CASH,
    addCustomerAction,
    addManyCustomersAction,
    removeCustomerAction
} from "./constants";
import {fetchCustomers} from "./asyncAction";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customer.customer);

    const addCash = (cash) => {
        dispatch({type: ADD_CASH, payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: GET_CASH, payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name: name,
            id: Date.now(),
        }
        console.log("fuck", customer)
        dispatch(addCustomerAction(customer));
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    console.log("cash ", cash)
    console.log("customers ", customers)
    return(
        <div className="app">
            <div>
                <h1>{cash}</h1>
            </div>
            <div>
                <button onClick={()=> addCash(Number(prompt()))}>Add money</button>
                <button onClick={()=> getCash(Number(prompt()))}>Get money</button>
                <button onClick={()=> addCustomer(prompt())}>Add customer</button>
                <button onClick={()=> removeCustomer()}>Remove customer</button>
                <button onClick={()=> dispatch(fetchCustomers())}>Get clients from DB</button>
            </div>
            <div>
                {
                    customers ?
                            <div >
                                {
                                    customers.map(customer =>
                                        <div onClick={removeCustomer(customer)}>{customer.name}</div>)
                                }
                            </div>
                        : <div>You don't have customers!</div>
                }
            </div>
        </div>
    )
}

export default App;