import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="w-full py-20 bg-white">
        <div className="flex flex-col items-center px-12 mx-auto max-w-7xl lg:flex-row">
          <div className="relative z-20 flex flex-col items-start justify-center w-full h-full lg:w-5/12">
            <h1 className="text-5xl font-bold xl:text-6xl pb-7 ">
              Welcome to Steve's Walking Dogs!
            </h1>
            <p className="text-xl text-gray-500 pb-7 pr-20">
              With thousands of dog walks and pet visits under our belt, it's no
              wonder why pet owners in south bay area depend on us every day.
            </p>
            <div className="flex flex-col items-center w-full sm:w-auto sm:flex-row sm:space-x-10">
              <a
                href="/login"
                className="inline-flex items-center justify-center px-24 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 mt-1"
              >
                Schedule a Meet and Greet Today
              </a>
            </div>
          </div>

          <div className="relative z-10 w-[200px] h-[500px] my-16 lg:my-0 lg:w-7/12">
            <Image
              className="relative z-40 w-full h-full"
              src="/images/bailey-run.jpeg"
              width={300}
              height={300}
            />
            <div className="box-content absolute inset-0 z-30 hidden scale-150 translate-x-40 translate-y-10 rounded-full w-80 lg:block h-80 xl:w-96 xl:h-96 bg-pink-50"></div>
            <div className="absolute bottom-0 left-0 z-20 hidden -translate-x-3 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-yellow-50"></div>
            <div className="absolute top-0 left-0 z-20 hidden -translate-x-12 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-blue-50"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
