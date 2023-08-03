/* eslint-disable @next/next/no-img-element */
import React from "react";

const Card = ({ imgUrl, title, description, style }: any) => {
    return (
        <div className="flex w-60 item-center flex-col bg-white  text-gray-700" style={style}>
            <div className="self-center h-32 w-32  bg-white">
                <img 
                    src= {imgUrl} 
                    alt="" 
                    height={128} 
                    width={128}
                />
            </div>
            <div className="p-6 text-center">
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {title}
                </h4>
                <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                {description}
                </p>
            </div>
        </div>);
}

export default Card;