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
          <div className="mb-16 ml-20 lg:mt-32 xl:mt-12 xl:mr-12">
            <h3 className="cFDMvZ mb-5 ">
              <strong className="xyz font-semibold">
                No-fee checking account with cashback
              </strong>
            </h3>
            <div className="RVACS mb-10">
              <ul className="list-disc">
                <li className="mb-4 ml-6">
                  {" "}
                  Earn up to 2% cash back on common everyday expenses**{" "}
                </li>
                <li className="mb-4 ml-6">
                  No fees, really<sup>*</sup>
                </li>
                <li className="mb-4 ml-6">
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
