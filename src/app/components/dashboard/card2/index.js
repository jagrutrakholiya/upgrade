"use client";
import { LazyShow } from "../../helper/LazyShow";
import React, { useEffect, useRef, useState } from "react";
const CardTwo = () => {
  return (
    <>
      <header id="header" className="header text-center  lg:text-left py-10">
        <div className="lg:grid lg:grid-cols-2 md:grid-cols-2c py-16">
          <LazyShow
            easeOut={true}
            useRef={useRef}
            useState={useState}
            useEffect={useEffect}
          >
            <div className="xl:text-right lg:mr-20 mr-0 col-sm-6">
              <img
                src="./assetes/Easy_Card.jpeg"
                alt="alternative"
                className="inline rounded-lg md:max-h-[373px] md:w-[523px] w-full h-full"
              />
            </div>
          </LazyShow>
          <LazyShow
            easeOut={false}
            useRef={useRef}
            useState={useState}
            useEffect={useEffect}
          >
            <div className="xl:ml-20 lg:ml-[0px] ml-0 xl:mr-12 flex flex-col justify-center items-start lg:mt-0 mt-5">
              <h3 className="abcd mb-5 text-start">Easy Card - Most Rewarding</h3>
              <div className="RVACS mb-2">
                <ul className="list-disc cash3">
                  <li className="mb-4 ml-6 text-start">
                    {" "}
                    Earn 5x reward points on top spend categories every month.
                    {" "}
                  </li>
                  <li className="mb-4 ml-6 text-start">
                    You control how you pay for your purchases: Pay
                    <br /> Now with no interest, or Pay Later
                  </li>
                  <li className="mb-4 ml-6 text-start">
                    Cashlimit upto 200K Naira
                  </li>
                  <li className="mb-4 ml-6 text-start">No annual fee</li>
                </ul>
              </div>
              <br />

               <div className="text--align-center">
                <button
                  data-size="large"
                  data-full-width="true"
                  type="button"
                  className="eGRUYe kcDzaS kpKnFB section--sm"
                >
                  Get Started
                </button>
                <br />
              </div> 
            </div>
          </LazyShow>
        </div>
      </header>
    </>
  );
};
export default CardTwo;
