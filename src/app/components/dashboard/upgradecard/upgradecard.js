"use client";
import { LazyShow } from "../../helper/LazyShow";
import React, { useEffect, useRef, useState } from "react";
const UpgradeCard = () => {
  return (
    <>
      <header id="header" className="header text-center  lg:text-left py-10">
        <div className="lg:grid lg:grid-cols-2 md:grid-cols-2 flex flex-col-reverse">
          <LazyShow
            easeOut={true}
            useRef={useRef}
            useState={useState}
            useEffect={useEffect}
          >
            <div className="py-[45px] mb-16 xl:ml-20 lg:ml-[0px] ml-0 lg:mt-32 xl:mt-12 xl:mr-12 flex flex-col justify-center items-start">
              <h3 className="abcd mb-5 text-start">100% online attention</h3>
              <div className="RVACS mb-2">
                <ul className="list-disc cash3">
                  <li className="mb-4 ml-6 text-start">
                    {" "}
                    Help, just a WhatsApp away. Anytime, Anyday.{" "}
                  </li>
                  <li className="mb-4 ml-6 text-start">
                  During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.
                  </li>
                  <li className="mb-4 ml-6 text-start">
                  we’re committed to delivering an unmatched credit experience
                  </li>
             </ul>
              </div>
              <br />

              {/* <div className="text--align-center">
                <button
                  data-size="large"
                  data-full-width="true"
                  type="button"
                  className="eGRUYe kcDzaS kpKnFB section--sm"
                >
                  Open account
                </button>
                <br />
              </div> */}
            </div>
          </LazyShow>
          <LazyShow
            easeOut={false}
            useRef={useRef}
            useState={useState}
            useEffect={useEffect}
          >
            <div className="xl:text-right mt-5 lg:mr-20 mr-0 xl:mt-12 col-sm-6">
              <img
                src="./assetes/help2.jpg"
                alt="alternative"
                className="inline rounded-lg"
              />
            </div>
          </LazyShow>
        </div>
      </header>
    </>
  );
};
export default UpgradeCard;
