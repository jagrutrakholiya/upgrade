import Achievement from "./achievement/achievement";
import DashboardBanner from "./banner";
import Card from "./card/card";
import Cards from "./cards";
import Rewards from "./cardss";
import Customers from "./customers";
import Help from "./help/help";
import Manageupgrade from "./manageupgrade";
import PersonalLoans from "./personalloans";
import RewardsChecking from "./rewardschecking";
import UpgradeCard from "./upgradecard/upgradecard";

const Dashboard = () => {
  return (
    <>
      <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
        <DashboardBanner />
      </div>
      <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] bg-[#F4F4F4]">
        <RewardsChecking />
      </div>
      <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
        <PersonalLoans />
      </div>
      <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] bg-[#F4F4F4]">
        <UpgradeCard />
      </div>
      <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] Manageupgrade_bg">
        <Manageupgrade />
      </div>
      {/* <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] bg-[#F4F4F4]">
        <Help />
      </div> */}
    </>
  );
};
export default Dashboard;
