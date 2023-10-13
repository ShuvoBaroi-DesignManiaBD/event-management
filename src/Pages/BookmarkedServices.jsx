import { useNavigate } from "react-router-dom";
import ServiceCard from "../Components/Cards/ServiceCard";
import InnerPagesHero from "../Components/Hero/InnerPagesHero";
import { getBookmarkedData } from "../Hooks/useBookmarkedData";
import { useAuth } from "../Hooks/useAuth";
import Login from "./Login";
const BookmarkedServices = () => {
    const bookedServices = getBookmarkedData();
    const navigate = useNavigate();
    const {user} = useAuth();
    if(user) {
        return (
            <>
            <InnerPagesHero>
                Bookmarked services
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

export default BookmarkedServices;
