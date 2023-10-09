import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../component/serviceCard";

const ServicePage = () => {

    const services = useLoaderData();

    return (
        <div>
            <div className="p-8 md:p-24 text-center ">
                <h2 className="text-4xl md:text-6xl  font-extrabold uppercase  ">Explore Our Wellness Offerings</h2>
                <p className="py-6 font-DM font-light">Discover a wide range of wellness services tailored to enhance your health and well-being journey. From yoga and nutrition consultations to fitness classes and holistic health guidance, our event offers a diverse selection of experiences to support your path to wellness. Explore our services below and choose the ones that resonate with you. Your well-being is our priority</p>

                <Link to='/'><button className="bg-black py-2 px-4 rounded text-white ">Explore frome Home</button></Link>

                
            </div>.
        </div>
    )
}

export default ServicePage;