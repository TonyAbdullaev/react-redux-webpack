import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const Some = () => {

    const [numbers, setNumbers] = useState([1,2,3])

    // If there is second argument <[]> in anonymous func, useEffect will behave as:
    // componentDidMount - run at the first time, when component displayed;
    // Others:
    // - componentDidUpdate - when something changed;
    // - componentWillUnmount - before remove;
    // If there isn't second argument in useEffect, this func will act as componentDidMount and componentDidUpdate
    useEffect(() => {
        console.log("Component displayed!");
    }, [numbers]);



    const addNum = () => {
        const newNum = numbers[numbers.length - 1] + 1;
        setNumbers([...numbers, newNum]);
    }
    return (
        <div className="some">
            <ul>
                {numbers.map((num) =>
                    <li key={num}>{num}</li>
                  )}
            </ul>
            <button onClick={addNum}>New number</button>
        </div>
    );
};


export default Some;