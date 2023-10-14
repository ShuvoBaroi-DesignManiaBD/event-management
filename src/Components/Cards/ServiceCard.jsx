import { Link, NavLink, useNavigate } from "react-router-dom";

const ServiceCard = ({service}) => {

    const navigate = useNavigate();
    const path = service.name.toLowerCase().replaceAll(" ", "-");
    return (
        <div className={`flex flex-col items-stretch justify-between border-2 rounded-xl`} >
            <img src={service.image} alt="thumbnail" className="object-cover rounded-t-xl h-[200px] md:h-[250px]" />
            <div className="flex flex-col gap-3 justify-between items-start  h-full p-5">
                <h3 className={`text-primary text-center text px-4 py-2 rounded-md font-medium bg-[#f6eaff]`}>${service.price}</h3>
                <h2 className="textLg">{service.name}</h2>
                <p className="text text-textColor">{service.shortDescription}...</p>
                <NavLink className="primaryBtn w-full text-center" state={service.key} onClick={() => navigate(`/services/${path}`, { state: service.key })}>View details</NavLink>
            </div>
        </div>
    );
};

export default ServiceCard;