import React from "react";
import Image from "next/image";

const Overnight = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-14">
        <div className="pr-24 mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Overnight Stay Pet Sitting
          </h1>

          <p className="text-xl">
            We will come to stay with your pet for the night. This service also
            includes one day visit as well for that same day as the night stays.
          </p>

          <p className="text-xl mt-6">Overnight Pet Sitting is great for:</p>
          <ul className="text-xl mt-6">
            <li className="list-disc list-outside pl-2 ml-4 text-xl">
              Great for older pets, pets with frequent medication or needs,
              multiple pets or pets that do NOT do well in crates or kennels.
            </li>
            <li className="list-disc list-outside pl-2 ml-4 text-xl">
              Pets who get anxious or lonely when by themselves for long
              stretches.
            </li>
            <li className="list-disc list-outside pl-2 ml-4 text-xl">
              Pet parents who are uncomfortable leaving their pets alone at
              night.
            </li>
            <li className="list-disc list-outside pl-2 ml-4 text-xl">
              Special needs or senior pets.
            </li>
            <li className="list-disc list-outside pl-2 ml-4 text-xl">
              Puppies who need more frequent potty breaks.
            </li>
            <li className="list-disc list-outside pl-2 ml-4">
              Owners who feel more secure with their home occupied overnight.
            </li>
          </ul>
        </div>
        <div className="">
          <Image
            src="/images/dog-sleeping.jpg"
            width={700}
            height={300}
            alt="Dog Walking"
            className="w-[1200px] h-[4\300px]"
          />
        </div>
      </div>
    </>
  );
};

export default Overnight;
