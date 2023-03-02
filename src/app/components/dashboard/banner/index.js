const DashboardBanner = () => {
    return (
        <>
    <header id="header" className="header  text-center  lg:text-left ">
        <div className="container  lg:grid lg:grid-cols-2 md:grid-cols-2">
            <div className="mb-16 lg:mt-32 xl:mt-12 xl:mr-12">
                <h1 className="text-5xl  abc"><strong>Triple Cash <br />Rewards Card</strong></h1>
                <h2 className="def mt-3">Get rewarded with no annual fee</h2>
                <div className="idKZRL mt-10">
                    <svg viewBox="0 0 24 24"
                        style={{ width: "1.2000000000000002rem",display:"inline-block", height: "1.2000000000000002rem" }}
                        role="presentation" className="sc-dkrFOg csZVl sc-gikAfH bEPkCb" data-align="middle">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" style={{ fill: "#0e680e" }}>
                        </path>
                    </svg>
                    <span>
                        <p className="ml-3">3% cash back on Home, Auto and Health Categories. 1% cash back on everything
                            else<span><sup>1</sup></span></p>
                    </span>
                </div>
                <div className="idKZRL">
                    <svg viewBox="0 0 24 24"
                        style={{ width: "1.2000000000000002rem",display:"inline-block", height: "1.2000000000000002rem" }}
                        role="presentation" className="sc-dkrFOg csZVl sc-gikAfH bEPkCb" data-align="middle">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" style={{ fill: "#0e680e" }}>
                        </path>
                    </svg>
                    <span>
                        <p className="ml-3">Check if you're pre-approved in minutes with no impact to your credit score
                        </p>
                    </span>
                </div>
                <a data-size="large" data-full-width="true" data-auto="undefined-hero-cta-button"
                    className="fLJQgB section--sm mt-2" href="">Get
                    Started</a>
                <div className="col-xs-12 center-xs">
                    <a type="text" href="" className="icGQsB">Learn More</a>
                </div>
            </div>

            <div className="xl:text-right mt-5 xl:mt-12 col-sm-6">
                <img className="inline" src="./assetes/triple-cash-hero.png" alt="alternative" />
            </div>

        </div>
    </header>
        </>
    )
}
export default DashboardBanner