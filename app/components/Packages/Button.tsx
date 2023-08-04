import React from "react";
import "../../styles/styles.css";

export const Button = ({text}: any) => {
    return (
        <button className="form-button bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
            {text}
        </button>
    )
}