const RewardsChecking = () => {
  return (
    <>
      <hr />
      <h1 className="text-3xl">
        <strong className="xyz font-semibold">Rewards Checking</strong>
      </h1>
      <header id="header" className="header mb-20 text-center  lg:text-left ">
        <div className="lg:grid lg:grid-cols-2 md:grid-cols-2">
          <div className="xl:text-right mt-5 mr-20 xl:mt-12 col-sm-6">
            <img
              className="inline"
              src="./assetes/RC-Spot illustration.png"
              alt="alternative"
            />
          </div>
          <div className="mb-16 xl:ml-20  xl:mt-12 xl:mr-12 lg:mt-32 lg:mr-[0px] lg:ml-[0px]">
            <h3 className="cFDMvZ mb-5 text-start xl:text-[3rem] lg:text-[32px] text-[32px]">
              <strong className="xyz font-semibold text-start  ">
                No-fee checking account with cashback
              </strong>
            </h3>
            <div className="RVACS mb-10">
              <ul className="list-disc">
                <li className="mb-4 ml-6 text-start">
                  {" "}
                  Earn up to 2% cash back on common everyday expenses**{" "}
                </li>
                <li className="mb-4 ml-6 text-start">
                  No fees, really<sup>*</sup>
                </li>
                <li className="mb-4 ml-6 text-start">
                  Lower rates on new loans and cards through Upgrade
                  <sup>***</sup>
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
                Open account
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
