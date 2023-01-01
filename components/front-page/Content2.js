import React from "react";
import Image from "next/image";
import Link from "next/link";

const Content2 = () => {
  return (
    <>
      <section className="w-full px-5 py-12 bg-white sm:py-20 lg:py-24 sm:px-10 md:px-20">
        <div className="flex flex-col mx-auto max-w-7xl lg:flex-row">
          <div className="relative flex flex-col items-start justify-center w-full max-w-sm px-5 mx-auto mb-20 lg:max-w-none md:max-w-md md:px-0 lg:mb-0 lg:w-5/12">
            <h2 className="flex items-center mb-8 text-4xl font-bold">
              <span>How to Get Started</span>
            </h2>
            <ol className="mb-8 space-y-6 text-gray-500 lg:space-y-10 lg:pr-10">
              <li className="flex flex-col items-start space-y-2 lg:flex-row lg:items-center lg:space-x-3 lg:space-y-0">
                <span className="flex items-center justify-start flex-shrink-0 w-20 h-8 text-sm font-semibold text-indigo-500 rounded-full lg:w-10 lg:h-10 lg:bg-gray-100 lg:text-base lg:text-gray-500 lg:font-normal lg:justify-center mr-4">
                  <span className="inline-block mr-1 lg:hidden">Step</span> 1
                </span>
                <span>
                  <p className="text-xl font-bold">Contact Us</p>
                  <p className="text-lg">
                    Start with a meet and greet and get started.
                  </p>
                </span>
              </li>
              <li className="flex flex-col items-start space-y-2 lg:flex-row lg:items-center lg:space-x-3 lg:space-y-0">
                <span className="flex items-center justify-start flex-shrink-0 w-20 h-8 text-sm font-semibold text-indigo-500 rounded-full lg:w-10 lg:h-10 lg:bg-gray-100 lg:text-base lg:text-gray-500 lg:font-normal lg:justify-center mr-4">
                  <span className="inline-block mr-1 lg:hidden">Step</span> 2
                </span>
                <span>
                  <p className="text-xl font-bold">Schedule Visits</p>
                  <p className="text-lg">schedule and pay online</p>
                </span>
              </li>
              <li className="flex flex-col items-start space-y-2 lg:flex-row lg:items-center lg:space-x-3 lg:space-y-0">
                <span className="flex items-center justify-start flex-shrink-0 w-20 h-8 text-sm font-semibold text-indigo-500 rounded-full lg:w-10 lg:h-10 lg:bg-gray-100 lg:text-base lg:text-gray-500 lg:font-normal lg:justify-center mr-4">
                  <span className="inline-block mr-1 lg:hidden">Step</span> 3
                </span>
                <span>
                  <p className="text-xl font-bold">Go on a walk</p>
                  <p className="text-lg">
                    We can cater to your dogs needs. A walk, a brisk jog, or fun
                    in the dog park.
                  </p>
                </span>
              </li>

              <li className="flex flex-col items-start space-y-2 lg:flex-row lg:items-center lg:space-x-3 lg:space-y-0">
                <span className="flex items-center justify-start flex-shrink-0 w-20 h-8 text-sm font-semibold text-indigo-500 rounded-full lg:w-10 lg:h-10 lg:bg-gray-100 lg:text-base lg:text-gray-500 lg:font-normal lg:justify-center mr-4">
                  <span className="inline-block mr-1 lg:hidden">Step</span> 4
                </span>
                <span>
                  <p className="text-xl font-bold">Get Updates</p>
                  <p className="text-lg">
                    With each visit, you'll recieve a photo of your pup having a
                    great time. And, you may contact us anytime along the way to
                    make sure that he is good hands.
                  </p>
                </span>
              </li>
            </ol>
            <div className="mt-8">
              <a
                href="/login"
                className="inline-flex items-center justify-center px-12 py-4 text-xl font-bold leading-6 text-white whitespace-no-wrap bg-blue-800 border border-transparent rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600  ml-24"
              >
                Schedule a Meet and Greet
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-full lg:w-7/12">
            <Image
              src="/images/home-puppy.jpg"
              className="transform lg:scale-125 lg:ml-12"
              alt="How to get started"
              width={420}
              height={420}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content2;
