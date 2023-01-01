import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header2 = () => {
  return (
    <div
      className="
      lg:px-24
      lg: pt-6
    "
    >
      <header>
        <nav
          className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
        >
          <div>
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
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <div
            className="hidden w-full md:flex md:items-center md:w-auto"
            id="menu"
          >
            <ul
              className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
            >
              <li>
                <Link
                  href="/services"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Meetsdfsdfsdf
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Rates
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/photos"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Photos
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Testimonials
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header2;
