import React from "react";
import Image from "next/image";

const Content1 = () => {
  return (
    <>
      <section className="relative bg-white">
        <div className="max-w-2xl lg:max-w-7xl px-12 mx-auto">
          <h1 className="font-bold text-4xl text-blue-900 text-center mt-12 lobster">
            We Specialize In Dog Walks and Pet Sitting...
          </h1>
          <div className="flex py-12 sm:py-12 xl:py-16 lg:flex-row flex-col justify-center items-center">
            <div className="w-full lg:w-1/2 lg:px-0 sm:px-7 lg:pl-0 xl:pl-10 mb-16 lg:mb-0">
              <div className="relative">
                <h2 className="mb-5 xl:mb-12 text-3xl leading-tight md:text-4xl md:leading-tight xl:text-4xl lg:leading-tight text-gray-800 font-bold">
                  Dog Walks
                </h2>

                <div className="flex flex-col mb-6 xl:pr-0 lg:pr-12 mr-12">
                  <p className="mb-8 text-xl">
                    A daily dog walk provides your dog with exercise and, of
                    course, a potty break. But there is another reason why a
                    daily dog walk is so important, ancestral instincts. Dogs
                    need to walk, wild packs start off their day by walking to
                    find food and water. A daily dog walk fulfills this
                    instinct.
                  </p>
                  <p className="text-xl">
                    Running in the backyard or a trip to the dog park is great
                    exercise, but it is not a substitute for walking. They just
                    do not offer the same mental stimulation your dog gets by
                    investigating the smells, sights, and sounds they encounter
                    on a walk. As a dog walks, they are releasing mental energy
                    by processing information about how their territory has
                    changed since their last walk.
                  </p>
                </div>
                <div className="flex xl:pr-0 lg:pr-12"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-full">
              <div className="w-full h-full bg-gradient-to-br shadow-sm border-b-4 border-r-4 border-blue-200 from-blue-100 to-indigo-200 p-4 rounded-2xl">
                <Image
                  alt="img2"
                  src="/images/dog-walk-home.jpg"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:flex-row pb-12 xl:pb-16 flex-col-reverse items-center">
            <div className="w-full lg:w-1/2 lg:px-0 mb-16 lg:mb-0">
              <div className="w-full h-full bg-gradient-to-br shadow-sm border-b-4 border-r-4 border-pink-200 from-red-100 to-pink-200 p-4 pb-0 rounded-2xl">
                <Image
                  alt="img1"
                  src="/images/dog-photo-5.jpg"
                  height={600}
                  width={600}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 mb-16 ml-0 sm:px-5 sm:pl-8 xl:pl-20 lg:mb-0">
              <div className="relative">
                <h2 className="mb-5 xl:mb-12 text-3xl leading-tight md:text-4xl md:leading-tight xl:text-4xl lg:leading-tight font-bold">
                  Pet Sitting
                </h2>
                <div className="text-xl">
                  <p>
                    We will personally develop a walking routine suitable for
                    your dogs. More energetic dogs will go for an invigorating
                    walk and afterward, be well exercised and tired. He will
                    most likely want to sleep until you return home from work!
                    We will walk 95% of the visit and the remaining time will be
                    spent watering and giving your dog belly rubs and hugs for a
                    job well done! For older pups, a leisurely stroll around the
                    block is sufficient so they can potty and stretch their
                    legs. We’ll always take the weather and the hot pavement
                    into consideration. For example, our short nosed breed dogs
                    will only take a quick spin around your neighborhood during
                    our hot summer months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content1;
