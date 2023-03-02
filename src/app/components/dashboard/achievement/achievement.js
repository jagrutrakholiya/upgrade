/* eslint-disable @next/next/no-img-element */
const Achievement = () => {
  return (
    <>
      <div className="mx-auto md:px-2 py-16">
        <div class="grid xl:grid-cols-3 lg:grid-cols-1 gap-4">
          <div class="jYWMJU flex justify-center">
            <img
              src="./assetes/customers-icon.svg"
              alt=""
              width="84"
              height="84"
            />
            <div className="flex flex-col justify-evenly">
              <div className="kYCPwn section--sm" data-color="#0a4007">
                2 Million
              </div>
              <div data-color="contentWeak" className="iEmjbU">
                Customers
              </div>
            </div>
          </div>
          <div class="jYWMJU flex justify-center">
            <img
              src="./assetes/Loan-Pictogram.svg"
              alt=""
              width="84"
              height="84"
            />
            <div className="flex flex-col justify-evenly">
            <div className="kYCPwn section--sm" data-color="#0a4007">
              $21 Billion
            </div>
            <div data-color="contentWeak" className="iEmjbU">
              Borrowed
            </div>
            </div>
          </div>
          <div class="jYWMJU flex justify-center">
            <img
              src="./assetes/review-star-icon.svg"
              alt=""
              width="84"
              height="84"
            />

            <div className="flex flex-col justify-evenly">
              <img
                className="title--large"
                src="./assetes/trustpilot-8676ee267040750b24aed7b1a3922b72.png"
                alt="TrustScore 4.7 out of 5 (Excellent)"
                width="976"
                height="186"
              />
              <div data-color="contentWeak" className="iEmjbU">
                Trustpilot
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Achievement;
