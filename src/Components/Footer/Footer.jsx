import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="border-t bg-gray-50">
            <div className="w-full container mx-auto p-4 md:pt-8">
                <div className="flex flex-col gap-5 items-center justify-between mx-auto py-4">
                    <img src="/images/logo.webp" alt="logo" className="w-[250px] cursor-pointer mt-5" onClick={() => navigate("/")} />
                    <nav className="text-textColor space-x-10 my-5">
                        <NavLink to="/" className="font-medium">
                            Home
                        </NavLink>
                        <NavLink to="/#about" className="font-medium">
                            About
                        </NavLink>
                        <NavLink to="/#services" className="font-medium">
                            Services
                        </NavLink>
                    </nav>
                    <div className="w-full">
                        <p className="text-[12px] mx-auto text-textColor text-center md:w-[40%]">
                            This is a test project created for demonstration purposes. Any resemblance to real events or entities is purely coincidental.
                        </p>
                    </div>
                </div>
                <hr className="my-3 sm:mx-auto md:my-4" />
                <span className="block text-sm text-headingColor sm:text-center">
                    © 2023{" - "} Event Management. All Rights Reserved.
                </span>
            </div>
        </footer>

    );
};

export default Footer;