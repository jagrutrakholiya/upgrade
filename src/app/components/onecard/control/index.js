const Controls = () => {
  return (
    <>
      <div class="container mx-auto">
        <div className="section--xs row center-xs ">
          <h3 data-color="content" className="cont2">
            The most flexible way to borrow
          </h3>
        </div>
        <div class="mt-20 xl:mx-20 lg:mx-4 mx-4 grid lg:grid-cols-3 md:grid-cols-1 gap-4">
          <div className="cont3">
            <div style={{ width: "100%;" }}>
              <img
                alt=""
                src="./assetes/payLater.svg"
                width="100"
                height="120"
                className="cont4"
              />
              <h5 data-color="content" className="cont5">
                Pay Later
              </h5>
            </div>
            <div data-color="content" className="cont6">
              <p>
                You decide which purchases you want to Pay Now with no interest,
                and which to Pay Later over time at a fixed rate
              </p>
            </div>
          </div>
          <div className="cont3">
            <div style={{ width: "100%;" }}>
              <img
                alt=""
                src="./assetes/ExtraSpendingPower.svg"
                width="100"
                height="120"
                className="cont4"
              />
              <h5 data-color="content" className="cont5">
                Extra Spending Power
              </h5>
            </div>
            <div data-color="content" className="cont6">
              <p>
                Connect your OneCard to Rewards Checking and get extra spending
                power
              </p>
            </div>
          </div>
          <div className="cont3">
            <div style={{ width: "100%;" }}>
              <img
                alt=""
                src="./assetes/umbrella-icon.svg"
                width="100"
                height="120"
                className="cont4"
              />
              <h5 data-color="content" className="cont5">
                Predictable Payment
              </h5>
            </div>
            <div data-color="content" className="cont6">
              <p>
                Pay down balances each month at a fixed rate and over a fixed
                repayment term when you Pay Later
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Controls;
