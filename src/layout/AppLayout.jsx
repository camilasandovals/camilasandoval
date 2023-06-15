import { Container } from "react-bootstrap";
import NavMenu from "./NavMenu/NavMenu";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
export default function AppLayout({children}) {
    return(
        <>
            <NavMenu />
            {/* <Main /> */}
            {children}
            <Footer />
        </>
    )
}