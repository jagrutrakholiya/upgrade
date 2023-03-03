import Bonus from "./bouns/bouns";
import Cashback from "./cashback";
import Cashrewards from "./cashrewardscards";
import Control from "./Control";
import Cryptocurrency from "./cryptocurrency";
import Enabled from "./enabled";
import Howitworks from "./howitworks";
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
      <Cryptocurrency />
      <ImprovingCredit />
      <Control />
      <Howitworks />
      <Cashback />
      <Enabled />
      </div>
    </>
  );
};
export default UpgradeCard;
