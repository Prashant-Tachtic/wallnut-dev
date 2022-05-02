import React from 'react';
import { MachineWashableIcon, SupportIcon, ReturnIcon, InterchangableIcon } from './Icons';

const AboutOurChairs = () => (
  <div className="py-12 bg-blue-baby">
    <div className="px-6 md:mx-auto md:px-8 md:w-5/6 text-center lg:max-w-3xl">
      <h3 className="mb-8 text-3xl">About our chairs</h3>
      <p className="text-base">
        Our team spent over a year talking to real people, just like you. We designed the perfect
        chairs to solve their pain points.
      </p>
      <p className="text-base">
        The result? Smart, well-made furniture that is designed for your busy and sometimes messy
        lifestyle.
      </p>
      <p className="text-base">Read on to learn about our favorite features.</p>
    </div>
    <button
      className="bg-white block font-light lg:w-80 mb-12 mx-auto text-base text-center w-52"
      type="button"
    >
      <a
        className="block border border-brown no-underline py-2 rounded-3xl text-brown"
        href="/pages/about"
      >
        LEARN MORE
      </a>
    </button>
    <ul className="justify-between md:flex md:w-full mt-12 mx-auto w-5/6 lg:max-w-6xl">
      <li className="flex mb-4 md:mb-0 md:w-56">
        <div className="w-20 lg:w-32">
          <MachineWashableIcon />
        </div>
        <p className="mt-6 md:ml-1 ml-4 leading-tight text-base">Machine-Washable</p>
      </li>
      <li className="flex mb-4 md:mb-0 md:w-56">
        <div className="w-20 lg:w-32">
          <SupportIcon />
        </div>
        <p className="mt-6 lg:ml-4 md:ml-1 ml-4 leading-tight text-base">Comforable Support</p>
      </li>
      <li className="flex mb-4 md:mb-0 md:w-56">
        <div className="w-20 lg:w-32">
          <ReturnIcon />
        </div>
        <p className="mt-6 lg:ml-4 md:ml-1 ml-4 leading-tight text-base">30 Day Return Guarantee</p>
      </li>
      <li className="flex mb-4 md:mb-0 md:w-56">
        <div className="w-20 lg:w-32">
          <InterchangableIcon />
        </div>
        <p className="mt-6 lg:ml-4 md:ml-1 ml-4 leading-tight text-base">Interchangeable Covers</p>
      </li>
    </ul>
  </div>
);

export default AboutOurChairs;
