import { useNavigate } from "react-router-dom";

const ServiceDetailsSidebar = ({ service }) => {
    const navigate = useNavigate();
    const path = service.name.toLowerCase().replaceAll(" ", "-");
    return (
        // <div className={`flex flex-col items-stretch justify-between border-2 rounded-xl`} >
        //     <img src={service.image} alt="thumbnail" className="object-cover rounded-t-xl h-[250px]" />
        //     <div className="flex flex-col gap-3 justify-between items-start  h-full p-5">
        //         <h3 className={`text-primary text-center text px-4 py-2 rounded-md font-medium bg-[#f6eaff]`}>${service.price}</h3>
        //         <h2 className="textLg">{service.name}</h2>
        //         <p className="text text-textColor">{service.shortDescription}...</p>
        //         <button className="primaryBtn w-full" onClick={() => navigate(`/${path}`, { state:  service.key })}>View details</button>
        //     </div>
        // </div>

        <div className={`flex gap-3 items-center justify-between border-b-2 rounded-xl py-3 cursor-pointer`} onClick={() => navigate(`/${path}`, { state: service.key })}>
            <img src={service.image} alt="thumbnail" className="object-cover w-1/4 h-24" />
            <div className="flex flex-col gap-2 flex-nowrap">
                <h3 className="text text-sm font-semibold w-full">{service.name}</h3>
                <p className="text-[12px]">{service.shortDescription}</p>
            </div>
        </div>
    )
};

export default ServiceDetailsSidebar;