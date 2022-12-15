import React, {MouseEvent} from 'react';
import './App.css';
import Button from "./component/Button";




function App() {
    const Button1Foo = (subscriber : string, age: number) => {
        console.log(subscriber, age)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)

    }
    return (
        <div className="App">
            <Button name={"MyYouTobeChanel-1"} callBack={()=>Button1Foo('Im Vasya', 21)}/>
            <Button name={"MyYouTobeChanel-2"} callBack={()=>Button2Foo('Im Prohor')}/>
            {/*<Button name={"Delete"}/>*/}
        </div>
    );
}

export default App;
