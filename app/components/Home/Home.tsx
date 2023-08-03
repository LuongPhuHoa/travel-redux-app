import React from "react";
import { Nav } from "../Nav";
import { Partners } from "./partner";
import BestService from "./bestService";
import Romantic from "./romantic";
import Booking from "./booking";
import Separatir from "./separatir";
import Europe from "./europe";

export const Home = () => {
    return (
        <div className="main bg-white">
            <Partners />
            <BestService />
            <Romantic />
            <Booking />
            <Separatir />
            <Europe />
        </div>
    );
};