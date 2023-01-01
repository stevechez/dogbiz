import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="w-full px-8 text-gray-700 bg-white border-b-2 border-blue-100">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row max-[320px]:bg-sky-300">
            <Link
              href="/"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <Image
                src="/images/logo-head.png"
                width={200}
                height={77}
                alt="Steve\'s Walking Dogs"
              />
            </Link>
            <nav className="flex flex-wrap items-center mb-5 text-lg md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <Link
                href="/services"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Servicestesetsesetsetsetset
              </Link>
              <Link
                href="/about"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Meetsdfsdfs
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
            </nav>
          </div>

          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <a
              href="/login"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 mt-1"
            >
              Client Login
            </a>
          </div>
        </div>
      </header>

      {/* mobile */}

      <div className=""></div>
    </>
  );
};

export default Header;
