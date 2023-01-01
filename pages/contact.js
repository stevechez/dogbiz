import React from "react";

const Contact = () => {
  return (
    <>
      <div className="py-10 bg-white md:py-16">
        <div className="px-10 mx-auto max-w-7xl md:px-16">
          <div className="max-w-3xl mx-auto mb-10 md:mb-16">
            <p className="text-4xl text-center font-bold text-blue-900 lobster">
              Contact Us
            </p>

            <p className="max-w-screen-md mx-auto mt-4 text-left text-gray-500 md:text-xl md:mt-6">
              Fill out the form below if you have a specific question or would
              like to schedule a meet and greet.
            </p>
          </div>
          <form className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="inline-block mb-2 text-lg font-medium text-gray-500 sm:text-base"
              >
                First name
              </label>
              <input
                name="first-name"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="inline-block mb-2 text-lg font-medium text-gray-500 sm:text-base"
              >
                Last name
              </label>
              <input
                name="last-name"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="inline-block mb-2 text-lg font-medium text-gray-500 sm:text-base"
              >
                Company
              </label>
              <input
                name="company"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="inline-block mb-2 text-lg font-medium text-gray-500 sm:text-base"
              >
                Email
              </label>
              <input
                name="email"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="inline-block mb-2 text-lg font-medium text-gray-500 sm:text-base"
              >
                Subject
              </label>
              <input
                name="subject"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="inline-block mb-2 text-lg font-medium text-gray-500 sm:text-base"
              >
                Message
              </label>
              <textarea
                name="message"
                className="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              ></textarea>
            </div>

            <div className="flex items-center justify-between sm:col-span-2">
              <button className="inline-block px-8 py-3 text-lg font-semibold text-center text-white transition duration-100 bg-blue-600 rounded-md outline-none hover:bg-blue-500 active:bg-blue-700 ring-blue-300 md:text-base mx-auto">
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
