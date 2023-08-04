/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../../../styles/styles.css"
import { Button } from "../Button";
import MyImage  from "../../../public/Illustration.png";
import Image from "next/image";

function Romantic() {
    return (
        <div className="romantic container bg-white pt-20">
            <div className="grid grid-cols-2 gap-2 pt-20">
                <div className="col-span-1">
                    <Image src={MyImage} alt="" height={600}/>
                </div>
                <div className="col-span-1">
                    <h1 className="category-text py-2 my-2 text-left">Honeymoon specials</h1>
                    <h1 className="middle-title text-left text-gray-500 text-3xl py-3 my-3">Our Romantic Tropical Destinations</h1>
                    <p className=" text-gray-500 text-lg font-medium py-3 my-3 text-left">Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                    <Button 
                        text="View Packages"
                    />
                </div>
            </div>
        </div>
    );
}

export default Romantic;