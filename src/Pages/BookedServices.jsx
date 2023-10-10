import ServiceCard from "../Components/Cards/ServiceCard";
import InnerPagesHero from "../Components/Hero/InnerPagesHero";
import { getBookedData } from "../Hooks/useBookedData";

const BookedServices = () => {
    const bookedServices = getBookedData();
    return (
        <>
        <InnerPagesHero>
            <h2 className="primaryHeading">Booked services</h2>
        </InnerPagesHero>
        <section className="bg-white" id="services">
            <div className="container py-8 px-4 mx-auto lg:py-16 lg:px-6 ">
                
                <div className="grid gap-10 mb-6 lg:mb-16 md:grid-cols-3">
                    {bookedServices.map(service => <ServiceCard key={service.key} service={service}></ServiceCard>)}

                </div>
            </div>
        </section>
        </>
    );
};

export default BookedServices;