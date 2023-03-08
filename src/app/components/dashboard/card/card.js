/* eslint-disable @next/next/no-img-element */
const Card = () => {
  const CardList = [
    {
      Title: "BORROW UP TO $50,000",
      SubTitle: "Easy Card",
      img: "./assetes/EasyCard.png",
    },

    {
      Title: "AFFORDABLE CREDIT LINES",
      SubTitle: "Elevate Card",
      img: "./assetes/ElevateCard.png",
    },

    {
      Title: "NO-FEE CHECKING WITH CASH BACK",
      SubTitle: "Elite Card",
      img: "./assetes/EliteCard.png",
    },
  ];
  return (
    <>
    <div className="grid xl:grid-cols-3 mb-6 lg:grid-cols-1 gap-4">
      {CardList.map((item, index) => {
        return (
          <div className="ibFOtI" key={index}>
            <div>
              {/* <span className="irgOp">
                <p>{item.Title}</p>
              </span> */}
              <h2 className="kcBZpe flex text-[1rem] font-semibold">
                {item.SubTitle}
                <div className="w-[20px]">
                  <svg
                    viewBox="0 0 24 24"
                    style={{
                      width:
                        "1.2000000000000002rem;height:1.2000000000000002rem",
                    }}
                    role="presentation"
                    className="sc-dkrFOg csZVl styles__StyledIcon-sc-1fivs3v-10 grYiRx"
                    data-align="middle"
                  >
                    <path
                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                      style={{ fill: "currentColor" }}
                    ></path>
                  </svg>
                </div>
              </h2>
            </div>
            <img
              src={item.img}
              alt="Borrow up to $50,000"
              width="150"
              height="150"
            />
          </div>
        );
      })}
      </div>
    </>
  );
};
export default Card;
