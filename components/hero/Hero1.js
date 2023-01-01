import React from "react";

const Hero1 = () => {
  return (
    // wrap
    <div className="bg-cover bg-center bg-hero-1 h-[600px] w-full">
      {/* flex */}
      <div className="flex justify-between">
        {/* first */}
        <div className="w-1/2 flex-1 mt-24 ml-24 bg-gray-200 opacity-90 rounded-lg p-12">
          <h1 className="text-5xl font-extrabold xl:text-6xl pb-7 leading-10">
            Welcome to Steve's Walking Dogs!
          </h1>
          <p className="text-2xl text-black pb-7 pr-20">
            With dozens of dog walks and pet visits under our belt, it's no
            wonder why pet owners across the south bay area depend on us every
            day.
          </p>
          <div className="flex flex-col items-center w-full sm:w-auto sm:flex-row sm:space-x-10 ml-24">
            <a
              href="/login"
              className="inline-flex items-center justify-center px-24 py-4 text-xl font-bold leading-6 text-white whitespace-no-wrap bg-blue-800 border border-transparent rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 mt-6"
            >
              Schedule a Meet and Greet Today
            </a>
          </div>
        </div>

        {/* second */}
        <div className="w-1/2 flex-1"></div>
      </div>
    </div>
  );
};

export default Hero1;
