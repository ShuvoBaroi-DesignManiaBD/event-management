import { Link } from "react-router-dom";
import TeamCard from "../Components/Cards/TeamCard";
import ServiceCard from "../Components/Cards/ServiceCard";
import { useServices } from "../Hooks/useServices";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
    const [services] = useServices();
    console.log(services);
    useEffect(() => {
        AOS.init();
      }, []);
    const teamMembers = [
        {
            id: '01',
            name: 'Bonnie Green',
            position: 'CEO',
            description: 'Bonnie drives the technical strategy of the Event Management platform and brand. With a visionary approach, she leads the team towards innovative solutions and unparalleled success.',
            photo: "/public/images/bonnie-green.webp"
        },
        {
            id: '02',
            name: 'Jese Leos',
            position: 'CTO',
            description: 'Jese, as the Chief Technical Officer, spearheads the technical strategy of the Event Management platform and brand. His expertise ensures cutting-edge technology integration and seamless platform development.',
            photo: "/public/images/jese-leos.webp"
        },
        {
            id: '03',
            name: 'Michael Gough',
            position: 'Head of Event Planning',
            description: 'Michael takes charge as the Head of Event Planning, driving the technical strategy of the Event Management platform and brand. His leadership in event planning ensures flawless execution and memorable experiences.',
            photo: "/public/images/michael-gouch.webp"
        },
        {
            id: '04',
            name: 'Lana Byrd',
            position: 'Lead Designer',
            description: 'Lana plays a crucial role in the team, driving the technical strategy of the Event Management platform and brand through her creative prowess as the Lead Designer. Her innovative designs bring life to the platform and elevate user experiences.',
            photo: "/public/images/lana-byrd.webp"
        }
    ]
    return (
        <>
            {/* Hero section */}
            <section className="bg-[#fcf8ff] md:py-5">
                <div className="container flex flex-col-reverse md:flex-row md: items-center  px-4 py-12 mx-auto gap-8 xl:gap-0">
                    <div className="w-full md:w-1/2 flex flex-col gap-5 justify-center text-center md:text-left items-center md:items-start lg:col-span-7" data-aos="fade-in" data-aos-duration="5000">
                        <h1 className="primaryHeading text-3xl lg:text-6xl font-extrabold leading-auto lg:leading-[70px]">
                            Welcome to <br />
                            <span className="text-primary">Event Management</span>
                        </h1>
                        <p className="max-w-xl md:text lg:textLg md:font-normal font-normal text-textColor">
                            Elevating Corporate Events to Unforgettable Experiences
                            Explore Our Expertise in Seamless Event Management
                        </p>

                        <div className="flex justify-center md:justify-start gap-5 py-4">
                            <Link to="/#services" className="primaryBtn">
                                Our services
                            </Link>
                            <Link to="/#about" className="secondaryBtn">
                                About us
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2" data-aos="fade-in" data-aos-duration="3000">
                        <img
                            src="/images/corporate-event-management.svg"
                            alt="corporate event management"
                        />
                    </div>
                </div>
            </section>
            {/* Services section */}
            <section className="bg-white py-20" id="services" >
                <div className="container px-4 mx-auto lg:px-6 ">
                    <div className="mx-auto max-w-screen-md text-center md:text-left" data-aos="fade" data-aos-duration="3000">
                        <h2 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-headingColor">
                            Our Services
                        </h2>
                        <p className="font-light text-center text-textColor lg:mb-16 text">
                            Discover excellence in corporate event management with our tailored services. From conferences to product launches, our team ensures seamless execution and memorable experiences. Trust us to handle logistics and coordination, leaving you free to focus on your event's success.
                        </p>
                    </div>
                    <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="5000">
                        {services.map(service => <ServiceCard key={service.key} service={service}></ServiceCard>)}

                    </div>
                </div>
            </section>
            {/* About us section */}
            <section className="bg-[#fcf8ff] py-16">
                <div className="container flex flex-col-reverse gap-4 lg:flex-row lg:justify-between px-4 mx-auto">
                    <div className="flex flex-col justify-center items-center gap-4 text-center lg:text-left lg:items-start space-y-3 lg:col-span-7"
                    data-aos="fade" data-aos-duration="5000"
                    >
                        <h1 className="md:primaryHeading text-3xl text-center lg:text-left font-extrabold">
                            About <span className="text-primary">Event Management</span>
                        </h1>
                        <p className="text-center lg:text-left max-w-2xl text leading-7 font-normal text-textColor">
                            Welcome to the heartbeat of event innovation. At <strong>Event Management</strong>, we are more than event planners; we are architects of unforgettable experiences. With a passion for precision and a flair for creativity, our team transforms ideas into seamless, memorable events. Backed by expertise and a commitment to excellence, we take pride in crafting moments that linger long after the applause. Learn more about our journey, values, and the faces behind the scenes—because every successful event starts with a great story. Your vision, our dedication. Let's create magic together.
                        </p>

                        <div className="flex gap-5">
                            <Link to="/services" className="primaryBtn">
                                Our services
                            </Link>
                        </div>
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 flex justify-center">
                        <img
                            src="https://i.ibb.co/G3YnVWF/about-us.webp"
                            alt="corporate event management"
                            data-aos="fade-up" data-aos-duration="5000"
                        />
                    </div>
                </div>
            </section>
            {/* Our team section */}
            <section className="bg-white py-20">
                <div className="container px-4 mx-auto">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-headingColor">
                            Our Team
                        </h2>
                        <p className="font-light text-textColor lg:mb-16 sm:text-lg">
                            Meet our dynamic team at Event Management—visionaries, innovators, and experts in their fields, working collaboratively to redefine excellence in event planning and execution.
                        </p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2" data-aos="fade-in" data-aos-duration="5000">
                        {teamMembers.map(member => <TeamCard key={member.id} member={member}></TeamCard>)}

                    </div>
                </div>
            </section>

        </>
    )
};

export default Home;