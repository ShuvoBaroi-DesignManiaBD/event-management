import { useLocation } from "react-router-dom";
import { getData, useServices } from "../Hooks/useServices";
import Swal from "sweetalert2";
import { useState } from "react";
import ServiceDetailsSidebar from "../Components/Sidebars/ServiceDetailsSidebar";
import InnerPagesHero from "../Components/Hero/InnerPagesHero";
import { getBookedData, saveBookedData } from "../Hooks/useBookedData";
import { toast } from "react-toastify";
import { BsBookmark } from "react-icons/bs";
import { getBookmarkedData, saveBookmarkedData } from "../Hooks/useBookmarkedData";
// import { useAuth } from "../Components/Hooks/useAuth";

const ServiceDetails = () => {
    const [booked, setBooked] = useState(false);
    const services = getData();
    const location = useLocation();
    const key = location.state;
    console.log(key, services, location);
    const currentService = services?.find(service => service.key === key) || {};
    const otherServices = services.filter(service => service.key !== key);
    console.log(otherServices);

    const addItem = () => {
        const bookedData = getBookedData();
        const filterBooked = bookedData?.filter(service => service.key === key) || {};
        if (filterBooked.length === 0) {
            Swal.fire({
                icon: 'success',
                title: 'Thank you!!!',
                text: 'You have successfully booked this service',
            }) && saveBookedData(currentService);
            console.log(key, services);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'You have already booked this service',
            }) 
        }
            
    }

    const addBookmark = () => {
        const bookmarkedData = getBookmarkedData();
        const filterBooked = bookmarkedData?.filter(service => service.key === key) || {};
        if (filterBooked.length === 0) {
            Swal.fire({
                icon: 'success',
                title: 'Thank you!!!',
                text: 'You have successfully bookmarked this service',
            }) && saveBookmarkedData(currentService);
            console.log(key, services);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'You have already bookmarked this service',
            }) 
        }
            
    }

    // console.log(service);
    // const buttonStyle = {
    //     backgroundColor: service.txt_btn_bg_color
    // }
    return (
        <>
        <InnerPagesHero>
            <h2 className="primaryHeading">Our Services</h2>
        </InnerPagesHero>
            <div className="flex flex-col px-4 md:px-0 md:flex-row items-start gap-10 container mx-auto py-20">
                <div className="md:w-[70%] sm:mx-auto mb-20 space-y-4">
                    <div className={`relative container mx-auto lg:h-[500px] bg-[url(${currentService.image})] bg-cover mb-10 `}>
                        <img src={currentService?.image} width="100%" alt="" className="h-full object-cover rounded-lg" />
                        <div className="px-4 py-5 bg-[#00000080] absolute bottom-0 left-0 w-full rounded-b-lg flex flex-col md:flex-row justify-between gap-3">
                            <button className="primaryBtn py-3 z-20" onClick={addItem}>Book now (${currentService.price}) </button>
                            <button className="primaryBtn text-center hover:text-white text bg-primaryLight border-none z-20 flex justify-center items-center gap-2" onClick={addBookmark}>Bookmark <BsBookmark></BsBookmark> </button>
                        </div>
                    </div>
                    <h2 className="secondaryHeading sm:primaryHeading">{currentService.name}</h2>
                    <p className="text">{currentService.detailedDescription}</p>
                </div>
                <div className="md:w-[30%] border-2 rounded-lg p-5 ">
                    <h2 className="secondaryHeading mb-5">Other services</h2>
                    {otherServices.map(service => <ServiceDetailsSidebar key={service.key} service={service}></ServiceDetailsSidebar>)}
                </div>
            </div>
        </>


    );
};

export default ServiceDetails;