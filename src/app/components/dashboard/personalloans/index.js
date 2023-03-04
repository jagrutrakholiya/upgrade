const PersonalLoans = () => {
  return (
    <>
      <hr />
      <header id="header" className="header  text-center  lg:text-left ">
        <h1 className="text-3xl text-start">
          <strong className="xyz font-semibold text-start">
          iPayLatr
          </strong>
        </h1>
        <div className="lg:grid lg:grid-cols-2 md:grid-cols-2">
          <div className="mb-16 xl:ml-20 mt-4 lg:mt-32 xl:mt-12 xl:mr-12 lg:ml-[0px] ml-[0px]">
            <h3 className="cFDMvZ mb-5 text-start xl:text-[3rem] lg:text-[32px] text-[32px]">
              Achieve more with fast funding<sup>†</sup>
            </h3>
            <div className="RVACS mb-10">
              <ul className="list-disc">
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
          <div className="xl:text-right mr-40 xl:mt-12 col-sm-6">
            <img src="./assetes/3d ipaylatr.png" alt=""/>
          </div>
        </div>
      </header>
    </>
  );
};
export default PersonalLoans;
