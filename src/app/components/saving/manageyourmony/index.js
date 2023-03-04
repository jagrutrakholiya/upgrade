const Managemoney = () => {
    return (
        <>
            <div class="container mx-auto">
                <div className="section--xs row center-xs">
                    <h3 data-color="content" className="cont2">Manage your money on the go</h3>
                </div>
                <header id="header" className="header mb-20 text-center  lg:text-left ">
                    <div className="lg:grid lg:grid-cols-2 md:grid-cols-2">
                        <div className="xl:text-right mt-5 ml-40 xl:mt-12 col-sm-6">
                            <img src="./assetes/premier-savings-large-1x.png" alt="help"
                                width="300" class="styles__StyledImage-sc-y1emrg-0 gYTLux" />
                        </div>
                        <div className="mb-16 xl:ml-20  xl:mt-12 xl:mr-12 lg:mt-32 lg:mr-[0px] lg:ml-[0px]">
                            <h3 className="cFDMvZ mb-5 text-start xl:text-[3rem] lg:text-[32px] text-[32px]">
                                <strong className="xyz font-semibold text-start  ">
                                    Top-rated mobile app
                                </strong>
                            </h3>
                            <div className="RVACS mb-5">
                                <ul className="list-disc">
                                    <li className="mb-4 ml-6 text-start">
                                        Secure 24/7 access to your money
                                    </li>
                                    <li className="mb-4 ml-6 text-start">
                                        View balances, transfer funds between accounts

                                    </li>
                                    <li className="mb-4 ml-6 text-start">
                                        You’re in control. Set up real-time alerts
                                    </li>
                                </ul>
                            </div>
                            <br />

                            <div class="impVAm flex xl:justify-start lg:justify-center flex-wrap">
                                <a href="https://www.apple.com/app-store/" target="_blank">
                                    <img
                                        src="./assetes/download-ios-acc8b28b22c537c4a52e521bcaf80099.svg"
                                        alt="Apple App Store"
                                        class="styles__AppImage-sc-1fivs3v-7 eGgOqX"
                                    />
                                </a>
                                <a href="https://play.google.com" target="_blank">
                                    <img
                                        src="./assetes/download.svg"
                                        alt="Google Play Store"
                                        class="styles__AppImage-sc-1fivs3v-7 eGgOqX"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}
export default Managemoney