import { useNavigate } from "react-router-dom";

const ServiceDetailsSidebar = ({ service }) => {
    const navigate = useNavigate();
    const path = service.name.toLowerCase().replaceAll(" ", "-");
    return (
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