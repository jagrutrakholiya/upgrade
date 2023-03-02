import Header from "./header/header"

const LayOut =({children})=>{
    return(
        <>
        <Header/>
            {children}
        </>
    )
}
export default LayOut