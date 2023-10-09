import { Link } from "react-router-dom";
import TeamCard from "../Components/Cards/TeamCard";
import UseData from "../Hooks/UseData";
import ServiceCard from "../Components/Cards/ServiceCard";
import { useEffect, useState } from "react";

const Home = () => {
    // const data = UseData();
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
        await fetch('/public/data.json')
                .then(res => res.json())
                .then(data2 => setData(data2))
        }
        getData();
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
            <section className="bg-[#fcf8ff] py-5">
                <div className="container grid px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
                    <div className="flex flex-col justify-center items-start space-y-5 lg:col-span-7">
                        <h1 className="primaryHeading text-6xl font-extrabold md:leading-[70px]">
                            Welcome to <br />
                            <span className="text-primary">Event Management</span>
                        </h1>
                        <p className="max-w-2xl textLg font-normal text-textColor">
                            Elevating Corporate Events to Unforgettable Experiences
                            Explore Our Expertise in Seamless Event Management
                        </p>

                        <div className="flex gap-5 py-4">
                            <Link to="/#services" className="primaryBtn">
                                Our services
                            </Link>
                            <Link to="/#about" className="secondaryBtn">
                                About us
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img
                            src="/images/corporate-event-management.svg"
                            alt="corporate event management"
                        />
                    </div>
                </div>
            </section>
            {/* Services section */}
            <section className="bg-white">
                <div className="container py-8 px-4 mx-auto lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-headingColor">
                            Our Team
                        </h2>
                        <p className="font-light text-textColor lg:mb-16 sm:text-lg">
                            Meet our dynamic team at Event Management—visionaries, innovators, and experts in their fields, working collaboratively to redefine excellence in event planning and execution.
                        </p>
                    </div>
                    <div className="grid gap-10 mb-6 lg:mb-16 md:grid-cols-3">
                        {data.map(service => <ServiceCard key={service.key} service={service}></ServiceCard>)}

                    </div>
                </div>
            </section>
            {/* Our team section */}
            <section className="bg-white">
                <div className="container py-8 px-4 mx-auto lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-headingColor">
                            Our Team
                        </h2>
                        <p className="font-light text-textColor lg:mb-16 sm:text-lg">
                            Meet our dynamic team at Event Management—visionaries, innovators, and experts in their fields, working collaboratively to redefine excellence in event planning and execution.
                        </p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        {teamMembers.map(member => <TeamCard key={member.id} member={member}></TeamCard>)}

                    </div>
                </div>
            </section>

        </>
    )
};

export default Home;