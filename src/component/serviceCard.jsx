const ServiceCard = ({service}) => {

    const {buttonText,price, description, title, image} = service;

    console.log('Hellooooooo',service);

    return (
        <div  className="w-auto lg:w-80 bg-blue-gray-50 rounded-lg p-6">

            <div>
                <img className="rounded-lg" src={image} alt="" />
            </div>

            <div>
                <h2 className="text-2xl font-bold py-4 font-DM ">{title}</h2>
                <p className="text-sm font-extralight text-light-blue-900">{description}</p>
                <h3 className="textxl font-bold py-4">Price: {price}</h3>
                <button className="bg-light-blue-900 font-DM font-extralight text-white rounded w-full py-2">{buttonText}</button>
            </div>

        </div>
    )
}

export default ServiceCard;