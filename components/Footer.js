import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className="box-border pt-5 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid pb-7">
        <div className="box-border px-4 mx-auto border-solid md:px-6 lg:px-8 max-w-7xl">
          <div className="relative flex flex-col items-start justify-between leading-7 text-gray-900 border-0 border-gray-200 md:flex-row md:items-center">
            <Link
              href="/"
              className="left-0 flex items-center justify-center order-first w-full mb-4 font-medium text-gray-900 md:justify-start md:absolute md:w-64 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
            >
              <Image
                src="/images/logo-footer.png"
                width={350}
                height={150}
                alt="Steve\'s Walking Dogs"
              />
            </Link>
            <ul className="box-border text-center flex mx-auto my-6 space-x-6">
              <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
                <Link
                  href="/services"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Meet Us
                </Link>
                <Link
                  href="/pricing"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Rates
                </Link>
                <Link
                  href="/blog"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
                <Link
                  href="/photos"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Photos
                </Link>
                <Link
                  href="/testimonials"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Testimonials
                </Link>

                <Link
                  href="/contact"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="box-border right-0 flex justify-center w-full mt-4 space-x-3 border-solid md:w-auto md:justify-end md:absolute md:mt-0">
              <a
                href="#_"
                className="inline-flex items-center leading-7 text-gray-900 no-underline border-0 border-gray-200 cursor-pointer hover:text-blue-700 focus-within:text-blue-700"
              >
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none"></path>
                  <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 011-1h3V3h-3a5 5 0 00-5 5v2H7"></path>
                </svg>
              </a>
              <a
                href="#_"
                className="inline-flex items-center leading-7 text-gray-900 no-underline border-0 border-gray-200 cursor-pointer hover:text-blue-700 focus-within:text-blue-700"
              >
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none"></path>
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path>
                </svg>
              </a>
              <a
                href="#_"
                className="inline-flex items-center leading-7 text-gray-900 no-underline border-0 border-gray-200 cursor-pointer hover:text-blue-700 focus-within:text-blue-700"
              >
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M9 3.6c5 6 7 10.5 7.5 16.2M6.4 19c3.5-3.5 6-6.5 14.5-6.4M3.1 10.75c5 0 9.814-.38 15.314-5"></path>
                </svg>
              </a>
              <a
                href="#_"
                className="inline-flex items-center leading-7 text-gray-900 no-underline border-0 border-gray-200 cursor-pointer hover:text-blue-700 focus-within:text-blue-700"
              >
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none"></path>
                  <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M16.5 7.5v.001"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="pt-4 mt-4 leading-7 text-center text-gray-600 border-t border-gray-200 md:mt-5 md:pt-5 md:mt-6 md:pt-6">
            <p className="box-border mt-0 text-sm border-0 border-solid">
              © 2022 Steve's Walking Dogs. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
