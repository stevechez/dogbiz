import React from "react";
import Image from "next/image";

const DropIn = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="">
          <Image
            src="/images/cat-sleeping.jpg"
            width={700}
            height={400}
            alt="Drop-in Visits"
            className="h-[300px] w-[1800px]"
          />
        </div>
        <div className="pl-24 pt-12">
          <h1 className="text-4xl font-bold mb-2">Drop-in Visits</h1>
          <p className="mb-4 text-xl">
            Does your pup need a backyard potty break? These quick visits let
            your pup do their business and get back to the important stuff –
            napping and barking at the mailman. Starting at $20 What’s included:
          </p>
          <ul>
            <li className="list-disc list-outside pl-2 ml-4 mb-2 text-xl">
              Up to 15 minutes of backyard companionship, exercise and
              enrichment
            </li>
            <li className="list-disc list-outside pl-2 ml-4 mb-2 text-xl">
              Treats for your well-behaved pup Time-stamped report card{" "}
            </li>
            <li className="list-disc list-outside pl-2 ml-4 mb-2 text-xl">
              Detailed notes Instagram-worthy photos Potty Breaks that require
              feeding must be booked as Most Popular/Standard Walks.
            </li>
            <li className="list-disc list-outside pl-2 ml-4 mb-2 text-xl">
              Potty Breaks are reserved for mid-day visits and cat/exotic animal
              visits. Potty Breaks include up to two dogs; add $5 per extra dog
              & $3 per extra cat. Add $10 for same-day bookings. Potty Breaks
              that run over the allotted time will automatically be upgraded to
              Most Popular/Standard Walk rate.
            </li>
            <li className="list-disc list-outside pl-2 ml-4 mb-2 text-xl">
              Holiday rates may apply; add 50% of standard rate to your
              personalized rate. Cancellation fees may apply.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropIn;
