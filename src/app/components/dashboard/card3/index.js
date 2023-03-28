"use client";
import { LazyShow } from "../../helper/LazyShow";
import React, { useEffect, useRef, useState } from "react";

const CardThree = () => {
  return (
    <>
      <header id="header" className="header text-center  lg:text-left py-10">
        <div className="lg:grid lg:grid-cols-2 md:grid-cols-2 py-16 flex flex-col-reverse">
          <LazyShow
            easeOut={true}
            useRef={useRef}
            useState={useState}
            useEffect={useEffect}
          >
            <div className="xl:ml-20 xl:mr-12 lg:ml-[0px] ml-[0px] flex flex-col justify-center items-start">
              <h3 className="abcd mb-5 text-start">
                Elevate Card - Improve your credit score
              </h3>
              <div className="RVACS mb-2">
                <ul className="list-disc cash3">
                  <li className="mb-4 ml-6 text-start">
                    {" "}
                    {`Earn upto 6% of interest on your deposit`}{" "}
                  </li>
                  <li className="mb-4 ml-6 text-start">
                    Improve your credit score by regular repayments
                  </li>
                  <li className="mb-4 ml-6 text-start">
                    Assured credit card and No income documents needed.
                  </li>
                </ul>
              </div>
              <br />

               <div className="text--align-center">
                <button
                  data-size="large"
                  data-full-width="true"
                  type="button"
                  className="eGRUYe kcDzaS kpKnFB cash3 section--sm"
                >
                  Get Started
                </button>
                <br />
              </div> 
            </div>
          </LazyShow>
          <LazyShow
            easeOut={false}
            useRef={useRef}
            useState={useState}
            useEffect={useEffect}
          >
            <div className="xl:text-right col-sm-6 lg:mb-0 mb-5">
              <img
                src="./assetes/600023e6a27f060ac70df7f3_dribbb.gif"
                alt=""
                className="rounded-lg md:max-h-[373px] md:w-[523px] w-full h-full"
              />
            </div>
          </LazyShow>
        </div>
      </header>
    </>
  );
};
export default CardThree;
