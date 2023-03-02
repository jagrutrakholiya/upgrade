const UpgradeCard = () => {
    return (
       <>
       <hr />
    <h1 className="text-3xl"><strong className="xyz">Upgrade Card</strong></h1>
    <header id="header" className="header mb-20 text-center  lg:text-left ">
        <div className="lg:grid lg:grid-cols-2 md:grid-cols-2">
            <div className="xl:text-right mt-5 mr-20 xl:mt-12 col-sm-6">
                <img className="inline" src="./assetes/PCL-Spot illustration.png" alt="alternative" />
            </div>
            <div className="mb-16 ml-20 lg:mt-32 xl:mt-12 xl:mr-12">
                <h3 className="cFDMvZ mb-5">Upgrade OneCard</h3>
                <div className="RVACS mb-10">
                    <ul>
                        <li className="mb-4 ml-6"> Get 3% cash back on everyday purchases, 2% on<br/> everything else<sup>2</sup> </li>
                        <li className="mb-4 ml-6">You control how you pay for your purchases: Pay<br/> Now with no interest, or Pay Later<sup>3</sup></li>
                        <li className="mb-4 ml-6">Extra Spending Power when you have Rewards<br/> Checking through Upgrade4<sup>4</sup></li>
                        <li className="mb-4 ml-6">No annual fee</li>
                    </ul>
                </div><br />

                <div className="text--align-center"><button data-size="large" data-full-width="true" type="button"
                        className="eGRUYe kcDzaS kpKnFB section--sm">Open
                        account</button><br />
                </div>
            </div>
        </div>
    </header>
       </> 
    )
}
export default UpgradeCard;