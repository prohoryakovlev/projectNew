import React, {MouseEvent} from 'react';
import './App.css';
import Button from "./component/Button";


function App() {

    return (
        <div className="App">
            <Button name={"MyYouTobeChanel-1"}/>
            <Button name={"MyYouTobeChanel-2"}/>
            <Button name={"Delete"}/>
        </div>
    );
}

export default App;
