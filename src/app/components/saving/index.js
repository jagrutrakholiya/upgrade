import Goals from "./goals"
import Managemoney from "./manageyourmony"
import Premiersavings from "./premiersavings"

const Onecard = () => {
    return (
        <>
        <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
        <Premiersavings/>
        <Goals/>
        <Managemoney/>
        </div>
        </>
    )
}
export default Onecard