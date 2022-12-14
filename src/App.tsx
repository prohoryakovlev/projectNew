import React, {MouseEvent} from 'react';
import './App.css';
import {logDOM} from "@testing-library/react";


function App() {
    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello Im Vasya")
    // }
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello Im Ivan")
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    const foo1 = () => {
        console.log(100200)
        //ничего не передавать, но в консоле должн опоказаться 100200
    }
    const foo2 = (name: number) => {
        //передать цифру 100200
        console.log(name)
    }

    return (
        <div className="App">
            {/*<button onClick={(event) => (console.log("HELLO")}>MyYouTobeChanel-1*/}
            {/*</button>*/}
            {/*<button onClick={(event) => onClickHandler("Vasya")}>MyYouTobeChanel-1</button>*/}
            {/*<button onClick={(event) => onClickHandler("Prohor")}>MyYouTobeChanel-2</button>*/}
            {/*<button onClick={() => onClickHandler("some info")}>MyYouTobeChanel-3</button>*/}


            <button onClick={foo1}>1</button>
            <button onClick={(event)=> foo2(10002000)}>2</button>
        </div>
    );
}

export default App;
