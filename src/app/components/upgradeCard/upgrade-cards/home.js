const Bannar = () => {
  return (
    <>
      <header
        id="header"
        className="header  text-center  lg:text-left relative"
      >
        <div className="bg-[#153271]">
          <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] relative z-10">
            <div className="items-center lg:grid lg:grid-cols-2 md:grid-cols-2">
              <div className="mb-16 lg:mt-32 xl:mt-12 xl:mr-12">
                <h1 className="text-5xl  abc text-start">Move Forward with Incedo Card</h1>

                <div class="section--sm">
                  <div class="row middle-xs">
                    <div class="col-xs-3 start-xs">
                     {/* <img
                        src="./assetes/PCL-Cash-Rewards-Meta.png"
                        alt=""
                        width="100"
                        height="auto"
                        class="styles__StyledCardImg-sc-b8eu7q-27 ftClIG"
  /> */}
                    </div>
                  
                    <div class="col-xs-9">
                      <p class="cash1">
                      <br></br>
                        No Annual Fee
                        <br/>
                        No Joining Fee
                        <br/>
                        No Reward Redemption Fee
                      </p>
                    </div>
                  </div>
                </div>
               {/* <a
                  data-size="large"
                  data-full-width="true"
                  data-auto="undefined-hero-cta-button"
                  className="fLJQgB section--sm mt-2"
                  href=""
                >
                  Get Started
</a> */}
                <div className="col-xs-12 center-xs">
                 {/* <a type="text" href="" className="icGQsB">
                    Learn More
</a> */}
                </div>
              </div>

              <div className="xl:text-right mt-5 xl:mt-12 col-sm-6 xl:block lg:block hidden">
                <img
                  className="card-intro right-[-10px]"
                  src="./assetes/card_home9.png"
                  alt="alternative"
/> 
              </div>
            </div>
          </div>
        </div>

        <div class="bg-red z-1">
          <div className="styles__BackgroundSwitcher-sc-1qr7c4u-0 eHXRQy">
            <svg width="375" height="279" viewBox="0 0 375 279" fill="none">
              <path
                d="M0 278.821C182.733 278.821 375 162.567 375 9.15527e-05V278.821H0Z"
                fill="#ffffff"
              ></path>
            </svg>
            <svg width="720" height="279" viewBox="0 0 720 279" fill="none">
              <path
                d="M720 0.820923C720 39.8209 550 278.821 0 278.821H720V0.820923Z"
                fill="#ffffff"
              ></path>
            </svg>
            <svg width="1440" height="388" viewBox="0 0 1440 388" fill="none">
              <path
                d="M1440 0C1207.96 286 595 388 0 388H1440V0Z"
                fill="#ffffff"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </>
  );
};
export default Bannar;
