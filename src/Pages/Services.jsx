import ServiceCard from "../Components/Cards/ServiceCard";
import InnerPagesHero from "../Components/Hero/InnerPagesHero";
import { useServices } from "../Hooks/useServices";

const Services = () => {
    const [services] = useServices();
    return (
        <>
            <InnerPagesHero>
                Our services
            </InnerPagesHero>
            <section className="bg-white">
                <div className="container py-8 px-4 mx-auto lg:py-16 lg:px-6 ">

                    <div className="grid gap-10 mb-6 lg:mb-16 md:grid-cols-3">
                        {services.map(service => <ServiceCard key={service.key} service={service}></ServiceCard>)}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;