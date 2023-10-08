import { Link } from "react-router-dom";

const Home = () => {
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

        </>
    )
};

export default Home;