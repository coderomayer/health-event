import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../component/serviceCard";

const Home = () => {

    const services = useLoaderData();


    return (
        <div>

            <div className="h-screen relative">
                <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=1480&t=st=1696701334~exp=1696701934~hmac=04309c8223419f29d85cc2d4b5da130675ac13163ddc1fdec1df1d4282a16e9d')] bg-cover"></div>
                <div class="absolute inset-0 bg-blue-900 opacity-75"></div>


                <div className="absolute inset-0 flex flex-col items-start justify-center text-white lg:w-2/3 p-8 md:p-24 text-left font-DM">

                    <h2 className="text-4xl md:text-6xl font-extrabold uppercase  ">Discover Wellness & Balance</h2>

                    <p className="my-4">Join us for an inspiring journey to holistic well-being. Explore the latest trends, connect with experts, and nurture your mind, body, and spirit at our Health and Wellness Event.</p>

                    <button className="bg-white text-black px-4 py-2 rounded">Register Now</button>
                </div>


            </div>

            {/* Event Details section */}

            <div className="p-8 md:p-24 md:flex gap-12 bg-light-blue-100">

                <div className="md:w-1/2 ">

                    <h2 className="text-2xl md:text-4xl  font-extrabold uppercase  ">Event Details:</h2>
                    <p className="py-6 font-DM font-light">Welcome to the heart of [Your Wellness Event Name], where wellness enthusiasts gather to explore, learn, and transform. We've curated an enriching experience that caters to all aspects of well-being. Join us on this journey to holistic living. 
                    </p>

                    <h3 className="text-xl font-bold">Date & Time:</h3>
                    <p className=""> <span className="font-semibold">Date:</span> 20 Oct, 23
                        Time: 10 AM to 4 PM
                    </p>
                    <br />
                    <h3 className="text-xl font-bold">Venue:</h3>
                    <p className=""> <span className="font-semibold">Location:</span> Tranquil Meadows Retreat Center
                    </p>
                    <p className=""> <span className="font-semibold">Address:</span> 123 Serenity Lane, Wellnessville, CA 98765, United Noakhali
                    </p>

                </div>

                <div className=" md:w-1/2">
                    <div className="">
                        <img className="w-full " src="Events-cuate.png" alt="" />
                        
                    </div>
                </div>

            </div>



            {/* Service Section */}

            

            <div className="p-8 md:p-24 text-center ">
                <h2 className="text-4xl md:text-6xl  font-extrabold uppercase  ">Explore Our Wellness Offerings</h2>
                <p className="py-6 font-DM font-light">Discover a wide range of wellness services tailored to enhance your health and well-being journey. From yoga and nutrition consultations to fitness classes and holistic health guidance, our event offers a diverse selection of experiences to support your path to wellness. Explore our services below and choose the ones that resonate with you. Your well-being is our priority</p>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-10">
                    {

                        services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)

                    }
                </div>
            </div>


            {/* Sponsors and Partners: */}

            <div className="p-8 md:p-24 md:flex gap-12 bg-light-blue-100">

                <div className="md:w-1/2 ">

                    <h2 className="text-2xl md:text-4xl  font-extrabold uppercase  ">Sponsors and Partners:</h2>
                    <p className="py-6 font-DM font-light">At Wellness Fusion, we are grateful for the generous support of our sponsors and valued partnerships that make this event possible. Together, we share a commitment to promoting well-being and holistic living. <br />


                        We extend our heartfelt thanks to our sponsors and partners for their unwavering support in fostering wellness and making a positive impact on the well-being of our community. Together, we strive to create an enriching and transformative experience for all our attendees.

                    </p>

                </div>

                <div className=" md:w-1/2">
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-8 ">
                        <img className="w-20 " src="1.png" alt="" />
                        <img className="w-20" src="2.png" alt="" />
                        <img className="w-20" src="3.png" alt="" />
                        <img className="w-20" src="4.png" alt="" />
                        <img className="w-20" src="5.png" alt="" />
                        <img className="w-20" src="6.png" alt="" />
                        <img className="w-20" src="5.png" alt="" />
                    </div>
                </div>

            </div>


        </div>

    )
}

export default Home;