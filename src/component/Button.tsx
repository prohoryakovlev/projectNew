import React from 'react';

type ButtonType = {
    name: string
}

const Button = (props:ButtonType) => {
    return (
        <div>
            <button >{props.name}</button>
        </div>
    );
};

export default Button;