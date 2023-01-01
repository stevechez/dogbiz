import React from "react";
import Carousel from "../components/carousel/carousel";

const Photos = () => {
  return (
    <>
      <div className="mt-8">
        <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">
          The animals in action...
        </p>

        <h2 className="relative flex items-center justify-center w-full mx-auto text-center max-w-3xl text-5xl font-bold lg:justify-center">
          Assorted Photos
        </h2>
      </div>

      <Carousel />
    </>
  );
};

export default Photos;
