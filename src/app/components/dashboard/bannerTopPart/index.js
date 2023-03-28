const BannerTopPart = () => {
  return (
    <>
      <header id="header" className="header  text-center  lg:text-left py-10">
        <div className="lg:grid lg:grid-cols-3 grid-cols-1 lg:block hidden">
          <div className="flex flex-col justify-center items-start">
            <br />
            <br />
            <br />
            <h1 className="text-start text-[60px] font-bold text-[#ffff]">
              Move Forward
            </h1>
            <br />
            <br />
            <br />
          </div>
          <div className="relative flex items-end justify-center h-[390px]">
            <div class="">
              <img
                className="banner absolute h-[350px] top-[-30px]"
                src="./assetes/image_9.png"
                alt="alternative"
              />
              <img
                class=" h-[115px]"
                src="./assetes/3D-podium-with-interior-lighting-on-transparent-background-PNG-2.png"
                alt="powerful_app"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <br />
            <br />
            <br />
            <h1 className="text-start text-[60px] font-bold text-[#ffff]">
              with Incedo
            </h1>
            <br />
            <br />
            <br />
          </div>
        </div>

        {/* ------------------- mini screen -------------- */}

        <div className="lg:grid lg:grid-cols-3 grid-cols-1 lg:hidden block">
          <div className="relative flex items-end  justify-center h-[390px]">
            <div class="">
              <img
                className="banner absolute h-[350px] top-[-30px]"
                src="./assetes/image_9.png"
                alt="alternative"
              />
              <img
                class=" h-[115px]"
                src="./assetes/3D-podium-with-interior-lighting-on-transparent-background-PNG-2.png"
                alt="powerful_app"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center items-start">
            <br />
            <br />
            <br />
            <h1 className="text-start text-[60px] font-bold text-[#ffff]">
              Move Forward
            </h1>
            <h1 className="text-start text-[60px] font-bold text-[#ffff]">
              with Incedo
            </h1>
            <br />
            <br />
            <br />
          </div>
        </div>
      </header>
    </>
  );
};
export default BannerTopPart;
