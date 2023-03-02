const PersonalLoans = () => {
    return (
        <>
        <hr />
            <header id="header" className="header  text-center  lg:text-left ">
            <h1 className="text-3xl"><strong className="xyz">Personal Loans</strong></h1>
        <div className="container  lg:grid lg:grid-cols-2 md:grid-cols-2">
        <div className="mb-16 ml-20 lg:mt-32 xl:mt-12 xl:mr-12">
                <h3 className="cFDMvZ mb-5">Achieve more with fast<br />funding<sup>†</sup></h3>
                <div className="RVACS mb-10">
                    <ul>
                        <li className="mb-4 ml-6"> Earn up to 2% cash back on common everyday <br />expenses** </li>
                        <li className="mb-4 ml-6">No fees, really<sup>*</sup></li>
                        <li className="mb-4 ml-6">Lower rates on new loans and cards through<br /> Upgrade<sup>***</sup>
                        </li>
                    </ul>
                </div><br />

                <div className="text--align-center"><button data-size="large" data-full-width="true" type="button"
                        className="eGRUYe kcDzaS kpKnFB section--sm">Open
                        account</button><br />
                </div>
            </div>
            <div className="xl:text-right mr-40 xl:mt-12 col-sm-6">
                <img className="inline" src="./assetes/PL-Spot-illustration.png" alt="alternative" />
            </div>

        </div>
    </header>
        </>
    )
}
export default PersonalLoans;