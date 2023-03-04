const RewardsChecking = () => {
  return (
    <>
      <hr />
      <h1 className="text-3xl">
        <strong className="xyz font-semibold">Seamless On Boarding</strong>
      </h1>
      <header id="header" className="header mb-20 text-center  lg:text-left ">
        <div className="lg:grid lg:grid-cols-2 md:grid-cols-2">
          <div className="xl:text-right mt-5 mr-20 xl:mt-12 col-sm-6">
            <img className="inline" src="./assetes/1.gif" alt="alternative" />
          </div>
          <div className="mb-16 xl:ml-20  xl:mt-12 xl:mr-12 lg:mt-32 lg:mr-[0px] lg:ml-[0px]">
            <h3 className="cFDMvZ mb-5 text-start xl:text-[3rem] lg:text-[32px] text-[32px]">
              <strong className="xyz font-semibold text-start  ">
                Digital On Boarding less then 5 minutes
              </strong>
            </h3>
            <div className="RVACS mb-10">
              <ul className="list-disc">
                <li className="mb-4 ml-6 text-start">
                  {" "}
                  Get started using a completely digital on-boarding process,
                  and activate your Incedo Card in less than 5 minutes.{" "}
                </li>
                <li className="mb-4 ml-6 text-start">No Hidden Fees Ever</li>
                <li className="mb-4 ml-6 text-start">
                  No Rewards Redemption Fees.
                </li>
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
        </div>
      </header>
    </>
  );
};
export default RewardsChecking;
