import Bonus from "./bouns/bouns"
import Cashback from "./cashback"
import Cashrewards from "./cashrewardscards"
import Control from "./Control"
import Cryptocurrency from "./cryptocurrency"
import Enabled from "./enabled"
import Howitworks from "./howitworks"
import ImprovingCredit from "./improvingCredit"
import Paynow from "./paynow"
import Bannar from "./upgrade-cards/home"


const Page = () => {
    return (
        <>
        <Bannar/>
        <Bonus/>
        <Cashrewards/>
        <Paynow />
        <Cryptocurrency/>
        <ImprovingCredit/>
        <Control/>
        <Howitworks/>
        <Cashback />
        <Enabled/>
        </>
    )
}
export default Page