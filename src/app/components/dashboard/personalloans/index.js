"use client";
import { LazyShow } from "../../helper/LazyShow";
import React, { useEffect, useRef, useState } from "react";

const PersonalLoans = () => {
  return (
    <>
      <header id="header" className="header text-center  lg:text-left py-10">
        <div className="lg:grid lg:grid-cols-2 md:grid-cols-2">
          <LazyShow
            easeOut={true}
            useRef={useRef}
            useState={useState}
            useEffect={useEffect}
          >
            <div className="xl:text-right mr-40 xl:mt-12 col-sm-6">
              <img src="./assetes/ipayLatr.png" alt="" />
            </div>
          </LazyShow>
          <LazyShow
            easeOut={false}
            useRef={useRef}
            useState={useState}
            useEffect={useEffect}
          >
            <div className="mb-16 xl:ml-20 mt-4 lg:mt-32 xl:mt-12 xl:mr-12 lg:ml-[0px] ml-[0px] flex flex-col justify-center items-start">
              <h3 className="abcd mb-5 text-start">
                Achieve more with fast funding<sup>†</sup>
              </h3>
              <div className="RVACS mb-2">
                <ul className="list-disc cash3">
                  <li className="mb-4 ml-6 text-start">
                    {" "}
                    {`Get the funds you need – sent directly to your bank account –
                  within a day of clearing verifications, so life won't slow you
                  down`}{" "}
                  </li>
                  <li className="mb-4 ml-6 text-start">
                    Fixed rates and predictable payments
                  </li>
                  <li className="mb-4 ml-6 text-start">
                    Pay off your loan at any time, with no prepayment penalty
                  </li>
                </ul>
              </div>
              <br />

              {/* <div className="text--align-center">
                <button
                  data-size="large"
                  data-full-width="true"
                  type="button"
                  className="eGRUYe kcDzaS kpKnFB cash3 section--sm"
                >
                  Get Started
                </button>
                <br />
              </div> */}
            </div>
          </LazyShow>
        </div>
      </header>
    </>
  );
};
export default PersonalLoans;
