import axios from "axios";
import {addManyCustomersAction} from "./constants";
// Async request to user Api
// to use this func as an action - to through it to dispatch
// we should return new func that receive dispatch as param
export const fetchCustomers = () => {
    const phoneNumber = '998883334438'
    //get dispatch as param
    return async function (dispatch) {
        const {data} = await axios.post('http://localhost:3333/getVisaCards', {"userPhone": phoneNumber });
        dispatch(addManyCustomersAction(data));
    }
}

// worker - func in which we do our async actions
// watcher - функция генератор, в которой через спец функции мы указываем тип action-а
// и worker который будет отрабатывать тогда когда наш тип action-на будет отрабатывать
// effects - набор встроенных в редакс сага фунций которые помогают делать запросы, dispatch
// следить за worker-ами