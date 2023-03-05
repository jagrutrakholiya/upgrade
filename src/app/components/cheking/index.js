import PairEveryday from "./paireveryday"
import Everything from "./everything"
import ChekingRewards from "./rewardschecking"
import Saveinterest from "./saveintrest"
import UnlimitedCash from "./unlimitedcash"
import Cheking from "./upgredechaking"

const Upgredcheking =()=>{
    return(
        <>
          <Cheking/>
          <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
          <UnlimitedCash/>
          <Everything/>
          <ChekingRewards/>
          <PairEveryday/>
          <Saveinterest/>
          </div>
        </>
    )
}
export default Upgredcheking