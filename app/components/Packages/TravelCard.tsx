import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

export const TravelCard = ({key, title, date, group, price, image, description, rating}: any) => {
  return (
    <Card className="mt-6 w-96 hover:scale-110 p-10 shadow-transparent hover:shadow-neutral-300" key={key}>
      <CardHeader color="blue-gray" className="relative h-50">
        <img className="object-cover w-full h-full rounded-2xl"
          src={image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <div className="flex justify-between">
          <Typography color="blue-gray">{date}</Typography>
          <Typography color="blue-gray">{group}</Typography>
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="flex justify-between items-center">
          <Typography color="blue-gray">{price}</Typography>
          <Typography color="blue-gray">{rating}</Typography>
        </div>
      </CardFooter>
    </Card>
  );
}