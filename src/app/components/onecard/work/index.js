const Work = () => {
    return (
        <>
          <div class="container mx-auto mb-20">
                <div class="section--xs row center-xs">
                    <h3 class="work cont2">How it Works</h3>
                </div>
                <div class="xl:mx-20 lg:mx-4 mx-4 grid lg:grid-cols-3 md:grid-cols-1 gap-4">
                    <div class="border-t border-black">
                        <div style={{ width: "100%;" }}>
                            <h2 class="work1 mb-5">1</h2>
                            <h5 class="work2 mb-5 mr-10">Get your Upgrade OneCard</h5>
                        </div>
                        <div class="work3">
                            <p>Apply online and get a credit line up to $25,000<sup>6</sup> with your Upgrade OneCard</p>
                        </div>
                    </div>
                    <div class="border-t border-black">
                        <div style={{ width: "100%;" }}>
                            <h2 class="work1 mb-5">2</h2>
                            <h5 class="work2 mb-5">Make purchases and/or get funds sent to your account</h5>
                        </div>
                        <div class="work3">
                            <p>Pay with Upgrade OneCard at retail locations and online and get up to 3% cash back for everyday purchases and 2% for all other purchases<sup>3</sup> by activating Pay Now and linking it to your Rewards Checking account</p>
                        </div>
                    </div>
                    <div class="border-t border-black">
                        <div style={{ width: "100%;" }}>
                            <h2 class="work1 mb-5">3</h2>
                            <h5 class="work2 mb-5">Pay it down</h5>
                        </div>
                        <div class="work3">
                            <p>You control how you pay for your purchases: Pay Now with no interest, or Pay Later<sup>4</sup>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Work