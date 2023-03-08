const OneCard = () => {
    return (
        <>
            <section class="hero-section">
                <div class="introducing_one_card">
                    <div class="OneCard_heading">
                        <h1>Say Hi to <span>OneCard</span></h1>
                    </div>
                    <div class="flauntMetal">
                        <h5>#FlauntYourMetal</h5>
                    </div>
                    <div class="card-info">
                        <p>India’s best metal credit card. Built with full-stack tech. Backed by the principles of simplicity,
                            transparency, and giving back control to the user.</p>
                    </div>
                    <div class="OneCard_apply"><button type="button" class="applyNow">Get OneCard Now!</button></div>
                    <div class="hidden sm:block">
                        <p class="text-lg">Select Authorised issuers:</p>
                        <div class="allBanksDesktop  flex mb-5 sm:mb-0"><img
                            src="./assetes/BankLogos.png" alt="banking partners" /></div>
                    </div>
                </div>

                <div class="OneCard_image w-full sm:w-auto">
                    <div class="flex w-full justify-center sm:h-auto ">
                        <img
                            class="hero_image w-auto h-64 sm:w-full sm:h-full  ml-3 md:w-4/5 hidden sm:block"
                            src="https://www.getonecard.app/assets/apply/480x552pix.png" alt="" />
                        
                    </div>
                </div>
            </section>
        </>
    )
}
export default OneCard