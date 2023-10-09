const Footer = () => {

    return (
        <div className=" bg-blue-gray-100 md:p-24 p-8   md:flex  gap-6 md:gap-24 items-center justify-center  ">

            <div className="md:w-1/2">
                <img className=" w-32 md:w-52" src="WellnessFusion.png" alt="" />
                <p className="text-xs md:text-sm">Join our Health and Wellness Event for a holistic journey to well-being. Discover the latest trends, connect with experts, and nurture your mind, body, and spirit. Explore wellness like never before!</p>
            </div>

            <div className="md:w-1/2 pt-6 font-DM">
                <h3 className="text-xl font-semibold">Contact Information:</h3>
                <p className="text-xs md:text-sm">Email: info@yourwellnessevent.com <br />
                    Phone: +1 (555) 123-4567 <br />
                    Address: 123 Wellness Avenue, Suite 101, Cityville, State, ZIP</p>
            </div>

        </div>
    )
}

export default Footer;