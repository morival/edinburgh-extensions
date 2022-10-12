import React from 'react';


export function Button({ text, onClick, ...other }) {

    return (
        <button
        onClick={onClick}
        {...other}>
            {text}
        </button>
    )
};