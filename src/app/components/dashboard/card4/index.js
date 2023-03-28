"use client";
import { LazyShow } from "../../helper/LazyShow";
import React, { useEffect, useRef, useState } from "react";
const CardFour = () => {
  return (
    <>
      <header id="header" className="header text-center  lg:text-left py-10">
        <div className="lg:grid lg:grid-cols-2 md:grid-cols-2 py-16">
          <LazyShow
            easeOut={true}
            useRef={useRef}
            useState={useState}
            useEffect={useEffect}
          >
            <div className="xl:text-right lg:mr-20 mr-0 col-sm-6">
              <img
                src="./assetes/16550.jpg"
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
              <h3 className="abcd mb-5 text-start">iPayLatr - Buy now, pay later in EMIs</h3>
              <div className="RVACS mb-2">
                <ul className="list-disc cash3">
                  <li className="mb-4 ml-6 text-start">
                    {" "}
                    Get credit instantly{" "}
                  </li>
                  <li className="mb-4 ml-6 text-start">
                  Paperless KYC process
                  </li>
                  <li className="mb-4 ml-6 text-start">
                  Get a full month delay in your payments.
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
export default CardFour;
