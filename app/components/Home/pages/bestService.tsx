import React from "react";
import "../../../styles/styles.css"
import Card from "../Card";

function BestService() {
    return (
        <div className="bestService">
            <div className="container bg-white pt-20">
                <div className="row items-center justify-center">
                    <h2 className="category-text py-2 my-2 text-center">Category</h2>
                    <h1 className="middle-title text-center text-gray-500 text-3xl py-3 my-3">We Offer Best Services</h1>
                    <div className="grid grid-cols-4 gap-3 py-6 items-justify pl-20 ml-5">
                        <Card
                            imgUrl="https://generation-sessions.s3.amazonaws.com/8e0989d6f41319ec6457cd3c6612ae99/img/tour-guide-1@2x.png"
                            title="Tour Guide"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."  
                        />
                        <Card 
                            imgUrl="https://generation-sessions.s3.amazonaws.com/8e0989d6f41319ec6457cd3c6612ae99/img/travelling-1@2x.png"
                            title="Travelling"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
                            style={{
                                borderRadius: '36px',
                                background: 'var(--white, #FFF)',
                                boxShadow: '0px 1.8518518209457397px 3.1481480598449707px 0px rgba(0, 0, 0, 0.00), 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 0, 0, 0.01), 0px 64.81481170654297px 46.85185241699219px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)'
                               }}
                        />
                        <Card
                            imgUrl="https://generation-sessions.s3.amazonaws.com/8e0989d6f41319ec6457cd3c6612ae99/img/hands-1@2x.png"
                            title="Religious Tours"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."  
                        />
                        <Card
                            imgUrl="https://generation-sessions.s3.amazonaws.com/8e0989d6f41319ec6457cd3c6612ae99/img/medical-team-1@2x.png"
                            title="Medical Insurance"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."  
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestService;