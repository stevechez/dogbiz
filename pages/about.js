import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <h1 className="text-blue-900 lobster text-4xl mt-12 text-center">
        About Us
      </h1>
      <section className="flex  w-full overflow-hidden bg-white lg:flex-row sm:mx-auto ">
        <div
          className="flex justify-end p-8 bg-white 
        lg:w-1/2"
        >
          <div className="flex flex-col w-full lg:max-w-lg">
            <h2 className="text-3xl font-bold">About</h2>
            <p className="text-xl mb-4">
              We strive to be the best pet service provider we can so when you
              choose Steve's Walking Dogs, you really can go guilt free.
            </p>
            <h2 className="text-3xl font-bold">Our Philosphy</h2>
            <p className="text-xl mb-4">
              We believe a locally owned business can provide better and more
              personalized care than large franchises. We built our reputation
              for outstanding service one client at a time, by meeting the needs
              both you and your pets expect and deserve.
            </p>
            <h2 className="text-3xl font-bold">Who are we</h2>
            <p className="text-xl">
              We love dogs (and cats, really anything furry). They say that the
              dog is man's best friend. We will strive to give the absolute best
              experience for your pup, whether it walking, jogging or playing
              with them.
            </p>
          </div>
        </div>
        <div className="relative lg:w-1/2 flex justify-center ">
          <Image
            src="/images/bailey-joy-steve.jpeg"
            width={700}
            height={200}
            alt="About Us"
            className="h-[400px] w-[650px] my-12"
          />
        </div>
      </section>
    </>
  );
};

export default About;
