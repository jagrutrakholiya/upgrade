"use client";
import React, { useEffect, useRef, useState } from "react";
import { LazyShow } from "../../components/helper/LazyShow";

const Merchants = () => {
  return (
    <>
      <header id="header" className="header  text-center  lg:text-left relative">
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
              <h2 class="grsQSd">{`Shop online with iPayLatr`}</h2>
                {/*<h1 className="lg:text-[3.5rem] md:text-[40px]  text-[40px] text-start abc xyz">
                  <strong> iPayLatr<sup>TM</sup></strong>
  </h1> */}
                
                <h2 className="def mt-3  text-start">
                Explore our network of 26,000+ merchants
  </h2>
  <br/>
  <br/>
  <br/>
                <button 
                 type="button"
                  className="download kcDzaS2 kpKnFB cash3 section--sm"
                >
                See All Merchants
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
                  src="./assetes/merchants.png"
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
export default Merchants;
