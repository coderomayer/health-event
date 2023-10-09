import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const ServiceDetails = () => {

    const services = useLoaderData();
    
    const { id } = useParams();

    const service = services.find(service => service.id == id)

    const handleButtom = () => {

        swal("Thank You!", "Thank you for completing the booking process successfully. All the information will be sent to your email very soon.!", "success");
    }

    return (
        <div>

            <div className="h-screen relative">
            <div className="absolute inset-0" style={{ backgroundImage: `url('${service.image}')`, backgroundSize: 'cover' }}></div>

                <div class="absolute inset-0 bg-blue-900 opacity-75"></div>


                <div className="absolute inset-0 flex flex-col items-start justify-center text-white lg:w-2/3 p-8 md:p-24 text-left font-DM">

                    <h2 className="text-4xl md:text-6xl font-extrabold uppercase  ">{service.title}</h2>

                    <p className="my-4">{service.description}</p>

                    <h2 className="text-2xl md:text-4xl py-4 font-extrabold uppercase  "> Price: {service.price}</h2>

                    <button onClick={handleButtom} className="bg-white text-black px-4 py-2 rounded">Book Now</button>
                </div>


            </div>

        </div>
    )
}

export default ServiceDetails;