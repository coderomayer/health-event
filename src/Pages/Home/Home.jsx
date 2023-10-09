const Home = () => {

    return (
        <div class="relative h-screen ">

            <div class="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=1480&t=st=1696701334~exp=1696701934~hmac=04309c8223419f29d85cc2d4b5da130675ac13163ddc1fdec1df1d4282a16e9d')] bg-cover"></div>
            <div class="absolute inset-0 bg-blue-900 opacity-75"></div>


            <div class="absolute inset-0 flex flex-col items-start justify-center text-white lg:w-2/3 p-8 md:p-24 text-left font-DM">

                <h2 className="text-4xl md:text-6xl font-extrabold uppercase  ">Discover Wellness & Balance</h2>

                <p className="my-4">Join us for an inspiring journey to holistic well-being. Explore the latest trends, connect with experts, and nurture your mind, body, and spirit at our Health and Wellness Event.</p>

                <button className="bg-white text-black px-4 py-2 rounded">Register Now</button>

                
            </div>
        </div>

    )
}

export default Home;