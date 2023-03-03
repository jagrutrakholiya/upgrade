import Bonus from "./bouns/bouns"
import Cashrewards from "./cashrewardscards"
import Control from "./Control"
import Cryptocurrency from "./cryptocurrency"
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
        </>
    )
}
export default Page