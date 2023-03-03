const Bannar = () => {
    return (
        <>
            <header id="header" className="header  text-center  lg:text-left ">
                <div className="mx-auto md:px-2 lg:grid lg:grid-cols-2 md:grid-cols-2 ml-20 ">
                    <div className="mb-16 lg:mt-32 xl:mt-12 xl:mr-12">
                        <h1 className="text-5xl  abc">Cash Rewards</h1>

                        <div class="section--sm">
                            <div class="row middle-xs">
                                <div class="col-xs-3 start-xs"><img src="./assetes/PCL-Cash-Rewards-Meta.png" alt=""
                                    width="100" height="auto" class="styles__StyledCardImg-sc-b8eu7q-27 ftClIG" />
                                </div>
                                <div class="col-xs-9">
                                    <p class="cash1">Unlimited 1.5% cash back on
                                        payments<sup>1</sup>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a data-size="large" data-full-width="true" data-auto="undefined-hero-cta-button"
                            className="fLJQgB section--sm mt-2" href="">Get
                            Started</a>
                        <div className="col-xs-12 center-xs">
                            <a type="text" href="" className="icGQsB">Learn More</a>
                        </div>
                    </div>

                    <div className="xl:text-right mt-5 xl:mt-12 col-sm-6">
                        <img className="inline" src="./assetes/PCL-LP-Hero.png" alt="alternative" />
                    </div>

                </div>
            </header>
        </>
    )
}
export default Bannar