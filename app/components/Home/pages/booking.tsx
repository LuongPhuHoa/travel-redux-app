/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../../../styles/styles.css"
import MyImage from "../../../public/Illustration (1).png";
import Image from "next/image";

function Booking() {
    return (
        <div className="booking container bg-white pt-20 px-20 pb-20">
            <div className="grid grid-cols-2 pt-20 px-20">
                <div className="col-span-1">
                    <h1 className="category-text py-2 my-2 text-left">Fast & Easy</h1>
                    <h1 className="middle-title text-left text-gray-500 text-3xl py-3 my-3">Get Your Favorite <br></br> Resort Bookings</h1>
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-5">
                            <div className=" h-10 w-10 bg-yellow-400 self-center flex item-center justify-center rounded-xl">
                                <div className="h-5 w-5 self-center ">
                                    <img src="https://generation-sessions.s3.amazonaws.com/4102714b1f4b0b6fc03951efb4413d1d/img/selection-1@2x.png" height={40} width={40} alt=""/>
                                </div>
                            </div>
                            <p className=" text-gray-500 text-lg font-medium py-3 my-3 text-left">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                        <div className="flex flex-row gap-5">
                            <div className=" h-10 w-10 bg-orange-600 self-center flex item-center justify-center rounded-xl">
                                <div className="h-5 w-5 self-center ">
                                    <img src="https://generation-sessions.s3.amazonaws.com/4102714b1f4b0b6fc03951efb4413d1d/img/taxi-1@2x.png" height={40} width={40} alt=""/>
                                </div>
                            </div>
                            <p className=" text-gray-500 text-lg font-medium py-3 my-3 text-left">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                        <div className="flex flex-row gap-5">
                            <div className=" h-10 w-10 bg-green-900 self-center flex item-center justify-center rounded-xl">
                                <div className="h-5 w-5 self-center ">
                                    <img src="https://generation-sessions.s3.amazonaws.com/4102714b1f4b0b6fc03951efb4413d1d/img/water-sport-1@2x.png" height={40} width={40} alt=""/>
                                </div>
                            </div>
                            <p className=" text-gray-500 text-lg font-medium py-3 my-3 text-left">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="grid grid-cols-1 grid-rows-3 h-10">
                        <div className="row-span-2 row-end-3">
                            <Image src={MyImage} alt="" height={600} width={900}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booking;