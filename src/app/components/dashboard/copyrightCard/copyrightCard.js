const CopyrightCard = () => {
  return (
    <>
      <header id="header" className="header text-center  lg:text-left">
        <div className="grid-flow-col  lg:grid-cols-2 md:grid-cols-2">
          <div className="mb-16 xl:ml-20 lg:ml-[0px] ml-0 lg:mt-32 xl:mt-12 xl:mr-12 flex flex-col justify-center items-start">
            <h3 className="cFDMvZ mb-5 abcd">
              We are a new kid on the block, eager to learn. All ideas and
              suggestions are welcome.
            </h3>
            <h3 className="cFDMvZ mb-5 abcd">
              Copyright © 2023 Incedo Digital
            </h3>
          </div>
          <div className="relative col-span-2">
              <img
                className="inline"
                src="./assetes/card_group.svg"
                alt="alternative"
                className="absolute right-[-120px] bottom-0"
              />
          </div>
        </div>
      </header>
    </>
  );
};
export default CopyrightCard;
