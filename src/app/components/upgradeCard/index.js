import Help from "../dashboard/help/help";
import CashBack from "../onecard/Cashback";
import Controls from "../onecard/control";
import Work from "../onecard/work";
import Bonus from "./bouns/bouns";
import Cashrewards from "./cashrewardscards";
import Cryptocurrency from "./cryptocurrency";
import Enabled from "./enabled";
import ImprovingCredit from "./improvingCredit";
import Paynow from "./paynow";
import Bannar from "./upgrade-cards/home";

const UpgradeCard = () => {
  return (
    <>
      <Bannar />
      <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
        <Bonus />
        <Cashrewards />
        <Paynow />
        {/* <Cryptocurrency /> */}
        {/* <ImprovingCredit /> */}
        <Controls />
        <Work />
        <CashBack />
        <Help />
        {/* <Enabled /> */}
      </div>
    </>
  );
};
export default UpgradeCard;
