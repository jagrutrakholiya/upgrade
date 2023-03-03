import Achievement from "./achievement/achievement"
import DashboardBanner from "./banner"
import Card from "./card/card"
import Cards from "./cards"
import Rewards from "./cardss"
import Customers from "./customers"
import Help from "./help/help"
import Manageupgrade from "./manageupgrade"
import PersonalLoans from "./personalloans"
import RewardsChecking from "./rewardschecking"
import UpgradeCard from "./upgradecard/upgradecard"

const Dashboard =()=>{
    return(
        <>
            <DashboardBanner/>
            {/* <Cards/> */}
            {/* <Achievement/> */}
            <RewardsChecking/>
            <PersonalLoans/>
            <Card />
            <UpgradeCard />
            {/* <Rewards /> */}
            {/* <Customers /> */}
            <Manageupgrade/>
            <Help />
        </>
    )
}
export default Dashboard