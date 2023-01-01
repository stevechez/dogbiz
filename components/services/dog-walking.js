import React from "react";
import Image from "next/image";

const DogWalking = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="pr-24">
          <h1 className="text-4xl font-bold mb-6">Dog Walking</h1>

          <p className="mb-4 text-xl">
            While you probably take your pet walking at least to relieve itself.
            Walking is beneficial for your pet’s health, behavior, stress, and
            energy level. It is a great way to break up the day. A nice walk
            focused on making your dogs happy! Exploring and sniffs along the
            way are a great way to stimulate your dogs brain, as well!
          </p>

          <p className="mb-4 text-xl">
            During our visit, we will make sure that there is fresh water, bring
            in any packages or mail, and if raining or extreme heat we will
            shorten the walk and spend time with your pet indoors.
          </p>

          <p className="mb-4 text-xl">
            A lot of our dog walking visits are generally set up as a regularly
            scheduled, ongoing service, if this is something that you are
            interested in, we are happy to help! These visits are meant to give
            your dog a break from the kennel or a break from being cooped up
            inside during the day.
          </p>
        </div>
        <div className="">
          <Image
            src="/images/dog-walking.jpg"
            width={700}
            height={400}
            alt="Dog Walking"
            className="w-[1200px] h-[400px]"
          />
        </div>
      </div>
    </>
  );
};

export default DogWalking;
