import Flexible from "./Flexible";
import Itsmetal from "./Itsmetal";
import Nohidden from "./nohidden";
import OneCard from "./onecard";
import OneCardMiniScreen from "./onecard-mini-screen";
import Powerfull from "./powerfull";
import Seamless from "./seamless";
import Xrewards from "./xrewards";

const Apply = () => {
  return (
    <>
      <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
        <div className="lg:block hidden">
          <OneCard />
          <Nohidden />
          <Powerfull />
          <Itsmetal />
          <Seamless />
          <Xrewards />
          <Flexible />
        </div>

        <div className="lg:hidden block">
          <OneCardMiniScreen />
        </div>
      </div>
    </>
  );
};
export default Apply;
