import React from "react";
import Image from "next/image";

const PetTaxi = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="">
          <Image
            src="/images/bailey-1.jpeg"
            width={800}
            height={400}
            alt="Drop-in Visits"
            className="h-[300px] w-[2100px]"
          />
        </div>
        <div className="pl-24 pt-12">
          <h1 className="text-4xl font-bold mb-2">Pet Taxi</h1>
          {/* <p className="font-bold text-xl mb-4">Starting at $20.00</p> */}
          <p className="text-xl">
            Does your pup need a backyard potty break? These quick visits let
            your pup do their business and get back to the important stuff –
            napping and barking at the mailman. Starting at $20 What’s included:
            Up to 15 minutes of backyard companionship, exercise and enrichment
            Treats for your well-behaved pup Time-stamped report card Detailed
            notes Instagram-worthy photos Potty Breaks that require feeding must
            be booked as Most Popular/Standard Walks. Potty Breaks are reserved
            for mid-day visits and cat/exotic animal visits. Potty Breaks
            include up to two dogs; add $5 per extra dog & $3 per extra cat. Add
            $10 for same-day bookings. Potty Breaks that run over the allotted
            time will automatically be upgraded to Most Popular/Standard Walk
            rate. Holiday rates may apply; add 50% of standard rate to your
            personalized rate. Cancellation fees may apply.
          </p>
        </div>
      </div>
    </>
  );
};

export default PetTaxi;
