import React from "react";

const Pricing = () => {
  return (
    <>
      <section className="overflow-hidden text-gray-700 bg-white">
        <div className="container px-5 pt-10 pb-24 mx-auto">
          <div className="flex flex-col w-full mb-8 text-center">
            <h1 className="text-6xl font-medium text-blue-900 sm:text-4xl lobster">
              Pricing Plans
            </h1>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full p-2 xl:w-1/4 md:w-1/2">
              <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-gray-200 hover:border-blue-600 rounded-lg">
                <div className="flex flex-col justify-between">
                  <div>
                    <h1 className="flex items-center pb-4 mb-4 text-3xl leading-none text-gray-900 border-b border-gray-200">
                      Dog Walks
                    </h1>
                    <p className="flex items-center mb-2 text-gray-600">
                      If you work long hours and aren’t able to get home to let
                      your dog(s) out, we are here to help! Midday walks/potty
                      breaks happen between 10:30 – 4pm. For people on a non 9-5
                      schedule, we can still provide “midday” walks at alternate
                      times. Afternoon dog walks are available for the occasion
                      or by monthly contract.
                    </p>
                  </div>
                  <p>Starting at $30 per walk</p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 xl:w-1/4 md:w-1/2">
              <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-gray-300 rounded-lg">
                <div className="flex flex-col w-full">
                  <h1 className="flex items-center pb-4 mb-4 text-3xl leading-none text-gray-900 border-b border-gray-200">
                    Daily Visits
                  </h1>
                  <p className="text-xl">
                    These visits are great if you need us to take care of your
                    dog, cat, fish, reptiles, or over, while you are away. We
                    can run your pup in the backyard, play ball with them, rub
                    your cats belly, feed the fish. Your choice. Contact us to
                    discuss options.
                  </p>
                  <p>Starting at $30 per visit</p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 xl:w-1/4 md:w-1/2">
              <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-gray-300 rounded-lg">
                <div className="flex flex-col w-full">
                  <h1 className="flex items-center pb-4 mb-4 text-3xl leading-none text-gray-900 border-b border-gray-200">
                    Overnight Pet Sitting
                  </h1>
                  <p className="text-xl">
                    These visits are great Multiple pet households Visits are
                    for approximately 10 hours and include feeding, walking,
                    playtime, medication and free at home services as required.
                    If your pets are used to sleeping in bed with you, they will
                    get to sleep in bed with us. We generally will arrive around
                    8-9pm and leave around 6-7am. *For holiday bookings, we
                    require a $30 nonrefundable deposit, which will go toward
                    the booking cost.
                  </p>
                  <p>Starting at $30 per walk</p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 xl:w-1/4 md:w-1/2">
              <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-gray-300 rounded-lg">
                <div className="flex flex-col w-full">
                  <h1 className="flex items-center pb-4 mb-4 text-3xl leading-none text-gray-900 border-b border-gray-200">
                    Pet Taxi
                  </h1>
                  <p className="text-xl">
                    If you don’t have the time to take your pet to to the Vet or
                    Groomer, we can do drop off or pick up service. We can also
                    stay for the required service. Additional charges incur if
                    we need to wait for vet or grooming service.
                  </p>

                  <p className="text-xl">
                    Additional mileage charges also apply if over 10 miles from
                    our service area.
                  </p>

                  <p>Starting at $30 per walk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
