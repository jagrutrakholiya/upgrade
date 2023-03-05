const OneCardMiniScreen = () => {
    return (
        <>
            <section class="hero-section flex-col items-center">
            <div class="OneCard_image w-full sm:w-auto">
                    <div class="flex w-full justify-center sm:h-auto ">
                        <img
                            class="hero_image w-auto"
                            src="https://www.getonecard.app/assets/apply/480x552pix.png" alt="" />
                        
                    </div>
                </div>  
                <div class="introducing_one_card_Mini_Screen text-center">
                    <div class="OneCard_heading_miniScreen">
                        <h1 className="text-center">Say Hi to <span>OneCard</span></h1>
                    </div>
                    <div class="flauntMetal">
                        <h5 className="text-center text-[20px]">#FlauntYourMetal</h5>
                    </div>
                    <div class="m-auto">
                        <p className="text-[15px]">India’s best metal credit card. Built with full-stack tech. Backed by the principles of simplicity,
                            transparency, and giving back control to the user.</p>
                    </div>
                    <div class="OneCard_apply"><button type="button" class="applyNow m-auto">Get OneCard Now!</button></div>
                    <div class="hidden sm:block">
                        <p class="text-lg">Select Authorised issuers:</p>
                        <div class="allBanksDesktop  flex mb-5 sm:mb-0 m-auto"><img
                            src="./assetes/BankLogos_web_833 x 199 – 1.dd0e1695.png" alt="banking partners" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OneCardMiniScreen