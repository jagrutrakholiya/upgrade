import Footer from "./footer/footer"
import Header from "./header/header"

const LayOut = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default LayOut