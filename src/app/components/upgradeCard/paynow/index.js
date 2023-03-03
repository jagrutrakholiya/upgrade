const Paynow = () => {
    return (
        <>
            <hr />
            <h1 className="text-3xl">
                <strong className="xyz font-semibold">Pay now or pay later</strong>
            </h1>
            <header id="header" className="header mb-20 text-center  lg:text-left ">
                <div className="lg:grid lg:grid-cols-2 md:grid-cols-2">
                    <div className="xl:text-right mt-5 mr-20 xl:mt-12 col-sm-6">
                        <img
                            className="inline"
                            src="./assetes/OneCard.png"
                            alt="alternative"
                        />
                    </div>
                    <div className="mb-16 ml-20 lg:mt-32 xl:mt-12 xl:mr-12">
                        <h3 className="cFDMvZ mb-5 ">
                            <strong className="xyz font-semibold">
                                Upgrade OneCard
                            </strong>
                        </h3>
                        <div className="RVACS mb-10">
                            <p>
                                Up to 3% cash back for everyday purchases<sup>5</sup>
                                No interest on Pay Now purchases<sup>6</sup>
                            </p>
                        </div>
                        <div className="center-xs">
                            <a type="text" href="" className="learn mr-80">Learn More</a>
                            <span class="irgOp mr-20">OR</span>
                        </div><br />
                        <a data-size="large" data-full-width="true" data-auto="undefined-hero-cta-button"
                            className="fLJQgB section--sm mt-2" href="">Get
                            Started</a>
                        <div className="text--size-small text-center text--color-slate-dark">
                            <p>No annual fee</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Paynow