
import { Outlet } from "react-router-dom"
import Header from "../component/Navbar"

const RootElement = () => {

    return (

        <div>
            <Header></Header>
            <Outlet></Outlet>

        </div>
    )
}


export default RootElement;