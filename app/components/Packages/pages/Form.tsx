"use client"
import React from "react";
import { Button } from "../Button";
import { TravelCard } from "../TravelCard";
import type { FC } from "react";
import { TravelTable } from "@/database/database.config";
import { useLiveQuery } from "dexie-react-hooks";
import { useState } from "react";
import "../../../styles/styles.css";

export const Form: FC = () => {
    const travelArr = useLiveQuery(() => TravelTable.toArray(), []);
    console.log(travelArr);
  return <>
    <div className=" bg-slate-50 mb-10 pb-10">
      <div className="container flex flex-col items-center align-middle justify-center">
        <div className="grid grid-cols-4 gap-0 ">
          <div className="">
            <Button text="Date" />
          </div>
          <div className="">
            <Button text="Price Low To High" />
          </div>
          <div className="">
            <Button text="Price High To Low" />
          </div>
          <div className="">
            <Button text="Name (A-Z)" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 p-8 bg-white">
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-7">
              {travelArr?.map((travel) => (
                <TravelCard
                  key={travel.id}
                  title={travel.name}
                  date={travel.date}
                  group={travel.group}
                  price={travel.price}
                  image={travel.image}
                  description={travel.description}
                  rating={travel.rating}
                />
              ))}
            </div>
          </div>
          <div className="col-span-1 bg-gray-200 p-1">
            <div className="flex flex-col items-center justify-between py-10 gap-10 max-w-sm">
              <div className="row text-center align-middle justify-between">
                <h1 className="middle-title text-sm">Plan Your Trip</h1>
              </div>
              <div className="row text-center align-middle justify-between">
                <p className="text-sm line-clamp-5">
                  Ex optio sequi et quos praesentium in nostrum labore nam rerum
                  iusto aut magni nesciunt? Quo quidem neque iste expedita est
                  dolo.
                </p>
              </div>
              <form className=" dest-form flex flex-col justify-between items-center gap-2">
                <input
                  className="form-input text-justify text-lg p-5"
                  type="text"
                  placeholder="Search Tour"
                />
                <input
                  className="form-input text-justify text-lg p-5"
                  type="text"
                  placeholder="Where To ?"
                />
                <input
                  className="form-input text-justify text-lg p-5"
                  type="text"
                  placeholder="Date"
                />
                <input
                  type="range"
                  className="transparent cursor-pointer appearance-none bg-white"
                  min="0"
                  max="5"
                  step="0.5"
                  id="customRange3"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};
