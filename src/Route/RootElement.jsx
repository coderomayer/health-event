
import { Outlet } from "react-router-dom"
import Header from "../component/Navbar"
import Footer from "../component/footer";

const RootElement = () => {

    return (

        <div>
            <Header></Header>
            
            <Outlet></Outlet>

            <Footer></Footer>

        </div>
    )
}


export default RootElement;