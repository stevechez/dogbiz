import React from "react";
import Image from "next/image";
import Overnight from "../components/services/Overnight";
import DogWalking from "../components/services/dog-walking";
import DropIn from "../components/services/drop-in";
import PetTaxi from "../components/services/pet-taxi";

const Services = () => {
  return (
    <>
      <section className="w-full py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 space-y-5 lg:px-0 lg:text-center lg:mb-16">
            <h1 className="text-4xl font-bold sm:text-5xl lobster text-blue-900">
              Our Services at a Glance
            </h1>
          </div>
          <DogWalking />
          <DropIn />
          <Overnight />
          <PetTaxi />
        </div>
      </section>
    </>
  );
};

export default Services;
