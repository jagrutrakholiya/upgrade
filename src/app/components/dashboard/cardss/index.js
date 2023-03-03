const Rewards = () => {
  const RewardCardList = [
    {
      Title: "UNLIMITED 1.5% CASH BACK",
      SubTitle: "Cash Rewards",
      Img: "./assetes/PCL-Cash-Rewards-Meta-card.png",
    },
    {
      Title: "UNLIMITED 3% CASH BACK",
      SubTitle: "Triple Cash Rewards",
      Img: "./assetes/PCL-Triple-Cash-Meta.png",
    },
    {
      Title: "UNLIMITED 1.5% BACK IN BITCOIN",
      SubTitle: "Upgrade Bitcoin Rewards",
      Img: "./assetes/PCL-Bitcoin-Meta.png",
    },
    {
      Title: "",
      SubTitle: "See all Upgrade Cards",
      Img: "./assetes/rebrand-card-life-rewards.svg",
    },
  ];
  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2      md:grid-cols-1 gap-4">
        {RewardCardList.map((item, index) => {
          return (
            <div className="ibFOtI" key={index}>
              <div>
                <span className="irgOp">
                  <p>{item.Title}</p>
                </span>
                <h2 className="kcBZpe flex text-[1.2rem] font-semibold">
                  {item.SubTitle}
                  <div className="w-[25px]">
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
                src={item.Img}
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
export default Rewards;
