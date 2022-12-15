import React from 'react';

type ButtonType = {
    name: string
}

const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        console.log("im Vasya")
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default Button;