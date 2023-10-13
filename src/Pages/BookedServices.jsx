import ServiceCard from "../Components/Cards/ServiceCard";
import InnerPagesHero from "../Components/Hero/InnerPagesHero";
import { getBookedData } from "../Hooks/useBookedData";
import { useAuth } from "../Hooks/useAuth";
import Login from "./Login";

const BookedServices = () => {
    const bookedServices = getBookedData();
    const {user} = useAuth();
    console.log(user);
    if(user) {
        return (
            <>
            <InnerPagesHero>
                Booked services
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
    } else {
        return <Login></Login>;
    }
    
};

export default BookedServices;