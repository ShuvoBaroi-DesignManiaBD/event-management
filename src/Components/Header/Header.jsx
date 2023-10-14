import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import {
    Navbar,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import { FiLogOut } from "react-icons/fi";

export function Header() {
    const [openNav, setOpenNav] = useState(false);
    const { user, logout } = useAuth();
    const activeStatus = ({ isActive }) => (isActive ? "text font-medium text-primary" : "text font-medium");
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="flex p-10 lg:p-0 flex-col gap-5 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

            <NavLink to="/" className={`font-medium ${activeStatus}`}>
                Home
            </NavLink>

            <NavLink to="/our-services" className={activeStatus}>
                Services
            </NavLink>
            {user ?
                <>
                    <NavLink to="/booked-services" className={activeStatus}>
                        Booked services
                    </NavLink>
                    <NavLink to="/bookmarked-services" className={activeStatus}>
                        Bookmarked services
                    </NavLink>
                    <NavLink to="/login" className="primaryBtn text text-white font-medium p-2 px-4 flex items-center gap-3" onClick={logout}>
                        Logout <FiLogOut></FiLogOut>
                    </NavLink>
                    <div className="flex items-center gap-4">
                            <p className="text-lg font-medium">{user?.displayName}</p>
                            <img
                                src={user?.photoURL}
                                alt="avatar"
                                className="w-[50px] transition-all duration-1000 cursor-pointer rounded-full"
                                
                            />
                    </div>

                </>
                : <div className="flex gap-5">
                <NavLink to="/login" className="secondaryBtn text text-headingColor py-2">
                    Login
                </NavLink>
                <NavLink to="/register" className="primaryBtn text text-white py-2">
                    Register
                </NavLink>
            </div>}
        </ul>
    );
    const mobileNavList = (
        <ul className="flex flex-col justify-center items-center gap-8 py-16">
            {user? <div className="flex flex-col justify-center items-center gap-4">
                            <img
                                src={user?user.photoURL : ''}
                                alt="avatar"
                                className="w-[50px] transition-all duration-1000 cursor-pointer rounded-full"
                            /> 
                            <p className="text-lg text-headingColor font-medium">{user?.displayName}</p>

                    </div> : ''}
            <NavLink to="/" className={activeStatus}>
                Home
            </NavLink>

            <NavLink to="/our-services" className={activeStatus}>
                Services
            </NavLink>
            {user ?
                <>
                    <NavLink to="/booked-services" className={activeStatus}>
                        Booked services
                    </NavLink>
                    <NavLink to="/bookmarked-services" className={activeStatus}>
                        Bookmarked services
                    </NavLink>
                    <NavLink to="/login" className="primaryBtn text text-white font-medium p-2 px-4 flex items-center gap-3" onClick={logout}>
                        Logout <FiLogOut></FiLogOut>
                    </NavLink>
                </>
                : <div className="flex gap-5">
                <NavLink to="/login" className="secondaryBtn text text-headingColor py-2">
                    Login
                </NavLink>
                <NavLink to="/register" className="primaryBtn text text-white py-2">
                    Register
                </NavLink>
            </div>}
        </ul>
    );

    return (
        <header className="mx-auto w-full border-gray-200 border-b">
            <div className="container mx-auto">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 md:px-0 lg:py-4 shadow-none">
                <div className="flex items-center justify-between text-primary">
                <img src="/images/logo.webp" alt="logo" className="w-[180px] cursor-pointer" onClick={() => navigate("/")} />
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                    
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {mobileNavList}
                </Collapse>
            </Navbar>
            </div>
        </header>
    );
}
export default Header;