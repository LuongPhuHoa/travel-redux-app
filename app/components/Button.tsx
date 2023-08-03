import React from "react";

export const Button = ({text, style}: any) => {
    return (
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 m-4 rounded" style={style}>
            {text}
        </button>
    );
}