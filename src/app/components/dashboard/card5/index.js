"use client";
import { LazyShow } from "../../helper/LazyShow";
import React, { useEffect, useRef, useState } from "react";

const CardFive = () => {
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
                Trove - No Fee with cashback
              </h3>
              <div className="RVACS mb-2">
                <ul className="list-disc cash3">
                  <li className="mb-4 ml-6 text-start">
                  Pay more than 50 bills and recharge more than 20 services
                  </li>
                  <li className="mb-4 ml-6 text-start">
                  Earn incredible rewards everytime you make a payments
                  </li>
                  <li className="mb-4 ml-6 text-start">
                  Safe, easy & instant digital payments
                  </li>
                  <li className="mb-4 ml-6 text-start">
                  With supercash, and loyalty points save upto N1000 per month.
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
                src="./assetes/wallet.png"
                alt=""
                className="rounded-lg md:max-h-[373px] md:w-[523px] h-full w-full"
              />
            </div>
          </LazyShow>
        </div>
      </header>
    </>
  );
};
export default CardFive;
