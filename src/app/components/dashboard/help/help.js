const Help = () => {
  const HelpList = [
    {
      icone: "./assetes/address.svg",
      Title: "Our Address",
      SubTitle:
        "Otunba Olufemi Adesulu Avenue, Brig. Ademulegun Road, Ondo, Ondo State",
    },
    {
      icone: "./assetes/email.svg",
      Title: "Email Us",
      SubTitle: "contact@example.com",
    },
    {
      icone: "./assetes/call.svg",
      Title: "Call Us",
      SubTitle: "+1 5589 55488 55",
    },
    {
      icone: "./assetes/share.svg",
      Title: "Opening Hours",
      SubTitle: "Mon-Sat: 11AM - 23PM; Sunday:Closed",
    },
  ];
  return (
    <>
      <div  className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4" class="mlawj">
        {HelpList.map((item, index) => {
          return (
            <div className="flex bg-[#F4F4F4] px-4 py-6" key={index}>
              <div className="Help_icon_box">
                <img src={item.icone} alt="" width="40px" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-[18px]">
                  {item.Title}
                </div>
                <div className="font-normal text-slate-900 text-[14px]">
                  {item.SubTitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Help;
