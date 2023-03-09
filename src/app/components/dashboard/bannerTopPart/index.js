const BannerTopPart = () => {
  return (
    <>
      <header id="header" className="header  text-center  lg:text-left py-10">
        <div className="mx-auto md:px-2 lg:grid lg:grid-cols-2 md:grid-cols-2">
          <div className="mb-16 lg:mt-32 xl:mt-12 xl:mr-12 flex flex-col justify-center items-start">
            <h1 className="text-start abc">Welcome to Incedo</h1>
            <h2 className="def mt-3  text-start">
            Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
            </h2>
          </div>

          <div className="xl:text-right mt-5 xl:mt-12 col-sm-6 items-center lg:flex hidden">
            <img className="inline" src="./assetes/ipayLatr.png" alt="alternative" />
          </div>
        </div>
      </header>
    </>
  );
};
export default BannerTopPart;
