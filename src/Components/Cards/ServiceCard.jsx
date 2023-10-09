import { Link, useNavigate } from "react-router-dom";

const ServiceCard = ({service, key}) => {

    const navigate = useNavigate();
    const path = service.name.toLowerCase().replaceAll(" ", "-");
    return (
        <div className={`flex flex-col items-stretch justify-between border-2 rounded-xl cursor-pointer`} onClick={() => navigate(`/${path}`, { state:  key })}>
            <img src={service.image} alt="thumbnail" className="object-cover rounded-t-xl h-[250px]" />
            <div className="flex flex-col gap-3 justify-between items-start  h-full p-5">
                <h3 className={`text-primary text-center text px-4 py-2 rounded-md font-medium bg-[#ecd2ff]`}>${service.price}</h3>
                <h2 className="textLg">{service.name}</h2>
                <p className="text text-textColor">{service.shortDescription}...</p>
                <button className="primaryBtn w-full">View details</button>
            </div>
        </div>
    );
};

export default ServiceCard;