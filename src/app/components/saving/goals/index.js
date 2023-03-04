const Goals = () => {
    return (
        <>
          <div class="container mx-auto mb-20">
                <div className="section--xs row center-xs">
                    <h3 data-color="content" className="cont2">Reach your goals faster with Premier Savings</h3>
                </div>
                <div className="row center-xs">
                    <div className="contdiv">A savings account to fit your ambitions and your life</div>
                </div>
                <div class="flex mt-20">
                    <div className="cont3">
                        <div style={{ width: "100%;" }}><img alt="" src="./assetes/exceptionalapy.svg" width="100"
                            height="120" className="cont4" />
                            <h5 data-color="content" className="cont5">Exceptional APY
                            </h5>
                        </div>
                        <div data-color="content" className="cont6">
                            <p>Earn 4.13% APY on balances of $1000 or more. Start saving for your future now.</p>
                        </div>
                    </div>
                    <div className="cont3">
                        <div style={{ width: "100%;" }}><img alt="" src="./assetes/no-prepayment-fees.svg" width="100"
                            height="120" className="cont4" />
                            <h5 data-color="content" className="cont5">All the savings, none of the fees
                            </h5>
                        </div>
                        <div data-color="content" className="cont6">
                            <p>No monthly account fees or transfer fees</p>
                        </div>
                    </div>
                    <div className="cont3">
                        <div style={{ width: "100%;" }}><img alt="" src="./assetes/24-7secure.svg" width="100"
                            height="120" className="cont4" />
                            <h5 data-color="content" className="cont5">24/7 access
                            </h5>
                        </div>
                        <div data-color="content" className="cont6">
                            <p>Secure, 24/7 mobile access to your account</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Goals