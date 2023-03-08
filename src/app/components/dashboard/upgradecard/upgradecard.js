const UpgradeCard = () => {
  return (
    <>
      <header id="header" className="header text-center  lg:text-left py-10">
        <div className="lg:grid lg:grid-cols-2 md:grid-cols-2">
          <div className="mb-16 xl:ml-20 lg:ml-[0px] ml-0 lg:mt-32 xl:mt-12 xl:mr-12 flex flex-col justify-center items-start">
            <h3 className="cFDMvZ mb-5 abcd">Rewards Wallets</h3>
            <div className="RVACS mb-2">
              <ul className="list-disc cash3">
                <li className="mb-4 ml-6 text-start">
                  {" "}
                  Get 3% cash back on everyday purchases, 2% on
                  <br /> everything else<sup>2</sup>{" "}
                </li>
                <li className="mb-4 ml-6 text-start">
                  You control how you pay for your purchases: Pay
                  <br /> Now with no interest, or Pay Later<sup>3</sup>
                </li>
                <li className="mb-4 ml-6 text-start">
                  Extra Spending Power when you have Rewards
                  <br /> Checking through Upgrade4<sup>4</sup>
                </li>
                <li className="mb-4 ml-6 text-start">No annual fee</li>
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
          <div className="xl:text-right mt-5 mr-20 xl:mt-12 col-sm-6">
            <img
              className="inline"
              src="./assetes/Rewards.png"
              alt="alternative"
            />
          </div>
        </div>
      </header>
    </>
  );
};
export default UpgradeCard;
