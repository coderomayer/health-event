
import { Outlet } from "react-router-dom"
import Header from "../component/Navbar"
import Footer from "../component/footer";

const RootElement = () => {

    return (

        <div className="max-w-[1480px] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    )
}


export default RootElement;