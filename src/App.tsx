import React, {MouseEvent, useState} from 'react';
import './App.css';


function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots ==='RUBLS')

    return (
        <ul>
            {money.map((objFromMomeyArr,index) => {
                return (
                        <li key={index}>
                            <span>{objFromMomeyArr.banknots}</span>
                            <span>{objFromMomeyArr.value}</span>
                            <span>{objFromMomeyArr.number}</span>
                        </li>
                )
            })}
        </ul>

    );

}

export default App;
