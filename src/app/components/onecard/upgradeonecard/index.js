"use client";
import React, { useEffect, useRef, useState } from "react";
import { LazyShow } from "../../helper/LazyShow";

const UpgradeOneCard = () => {
  return (
    <>
      <header id="header" className="header  text-center  lg:text-left mb-20 relative">
        <div className="bg-[#fbfbfb]">
          <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] relative z-10">
         
            <div className="mx-auto md:px-2 lg:grid lg:grid-cols-2 md:grid-cols-2">
            <LazyShow
            easeOut={true}
            useRef={useRef}
            useState={useState}
            useEffect={useEffect}
          >
              <div className="mb-16 lg:mt-32 xl:mt-12 xl:mr-12">
              <h2 class="grsQSd">{`Buy anything with 1 tap. Pay later.`}</h2>
                {/*<h1 className="lg:text-[3.5rem] md:text-[40px]  text-[40px] text-start abc xyz">
                  <strong> iPayLatr<sup>TM</sup></strong>
  </h1> */}
                
               {/*} <h2 className="def mt-3  text-start">
                  $200 welcome bonus when you start using a new Rewards Checking
                  account and make 3 purchases<sup>2</sup>
  </h2>*/}
                <div className="idKZRL mt-10">
                  <svg
                    viewBox="0 0 24 24"
                    style={{
                      width: "1.2000000000000002rem",
                      display: "inline-block",
                      height: "1.2000000000000002rem",
                    }}
                    role="presentation"
                    className="sc-dkrFOg csZVl sc-gikAfH bEPkCb"
                    data-align="middle"
                  >
                    <path
                      d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                      style={{ fill: "#215FD1" }}
                    ></path>
                  </svg>
                  <span>
                    <p className="ml-3  text-start">
                   <strong> Shop online with 26,000+ merchants</strong>
                      <span>
                        <sup>3</sup>
                      </span>
                    </p>
                  </span>
                </div>
                <div className="idKZRL">
                  <svg
                    viewBox="0 0 24 24"
                    style={{
                      width: "1.2000000000000002rem",
                      display: "inline-block",
                      height: "1.2000000000000002rem",
                    }}
                    role="presentation"
                    className="sc-dkrFOg csZVl sc-gikAfH bEPkCb"
                    data-align="middle"
                  >
                    <path
                      d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                      style={{ fill: "#215FD1" }}
                    ></path>
                  </svg>
                  <span>
                    <p className="ml-3  text-start">
                   <strong>Affordability with Pay Later</strong> 
                    </p>
                  </span>
                </div>
                <div className="idKZRL">
                  <svg
                    viewBox="0 0 24 24"
                    style={{
                      width: "1.2000000000000002rem",
                      display: "inline-block",
                      height: "1.2000000000000002rem",
                    }}
                    role="presentation"
                    className="sc-dkrFOg csZVl sc-gikAfH bEPkCb"
                    data-align="middle"
                  >
                    <path
                      d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                      style={{ fill: "#215FD1" }}
                    ></path>
                  </svg>
                  <span>
                    <p className="ml-3  text-start">
                      <strong>Credit decision in few seconds. Zero physical paperwork.</strong>
                    </p>
                  </span>
                </div>
                <div className="idKZRL">
                  <svg
                    viewBox="0 0 24 24"
                    style={{
                      width: "1.2000000000000002rem",
                      display: "inline-block",
                      height: "1.2000000000000002rem",
                    }}
                    role="presentation"
                    className="sc-dkrFOg csZVl sc-gikAfH bEPkCb"
                    data-align="middle"
                  >
                    <path
                      d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                      style={{ fill: "#215FD1" }}
                    ></path>
                  </svg>
                  <span>
                    <p className="ml-3  text-start">
                      <strong>No annual fee</strong>
                    </p>
                  </span>
                </div>
                <button
                 type="button"
                  className="download kcDzaS2 kpKnFB cash3 section--sm"
                >
                 Download Now
                </button>
              </div>

</LazyShow>

              <LazyShow
            easeOut={false}
            useRef={useRef}
            useState={useState}
            useEffect={useEffect}
          >
              <div className="paylater">
                <img
                  className="rounded-lg"
                  src="./assetes/BNPL2.png"
                  alt="alternative"
                />
              </div>
</LazyShow>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default UpgradeOneCard;
