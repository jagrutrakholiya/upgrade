"use client";
import { LazyShow } from "../../helper/LazyShow";
import React, { useEffect, useRef, useState } from "react";

const CardOne = () => {
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
            <div className="xl:ml-20 xl:mr-12 lg:ml-[0px] ml-[0px] flex flex-col justify-center items-start lg:mt-0 mt-5">
              <h3 className="abcd mb-5 text-start">
              Elite Card - Super charged
              </h3>
              <div className="RVACS mb-2">
                <ul className="list-disc cash3">
                  <li className="mb-4 ml-6 text-start">
                    {" "}
                    {`Personalise your card to make it as unique as you are`}{" "}
                  </li>
                  <li className="mb-4 ml-6 text-start">
                     Personlise your payments with Easy EMI as per your convenience
                  </li>
                  <li className="mb-4 ml-6 text-start">
                     Cash Limit upto 1 million Naira
                  </li>
                  <li className="mb-4 ml-6 text-start">      
Lower International Mark-Up Fees
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
            <div className="xl:text-right lg:ml-20 ml-0 col-sm-6">
              <img src="./assetes/elite_thunder.jpg" alt="" className="rounded-lg md:max-h-[373px] md:w-[523px] w-full h-full"/>
            </div>
          </LazyShow>
        </div>
      </header>
    </>
  );
};
export default CardOne;
