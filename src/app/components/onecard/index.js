import Help from "../dashboard/help/help";
import CashBack from "./Cashback";
import Controls from "./control";
import EnaBled from "./enabled";
import UpgradeOneCard from "./upgradeonecard";
import Work from "./work";

const Onecard = () => {
  return (
    <>
      <UpgradeOneCard />

      <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
        <Controls />
        <Work />
        <CashBack />
        {/* <EnaBled /> */}
        <Help />
      </div>
    </>
  );
};
export default Onecard;
