import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import OffCanvas from "./OffCanvas";

const Header = () => {
    const { user, logout } = useAuth();
    const [offCanvas, setOffCanvas] = useState(false);
    const activeStatus = ({ isActive }) => (isActive ? "text font-medium text-primary" : "text font-medium");
    const navigate = useNavigate();
    return (
        <header className="bg-white border-gray-200 border-b">
            <div className="container flex flex-wrap items-center justify-between mx-auto p-4 md:py-4">
            <img src="/images/logo.webp" alt="logo" className="w-[180px] cursor-pointer" onClick={() => navigate("/")} />
                {window.innerWidth > 900 ? 
                <>
                    <nav className="space-x-10 flex items-center text">
                        <NavLink to="/" className={`font-medium ${activeStatus}`}>
                            Home
                        </NavLink>
                        <NavLink to="/services" className={activeStatus}>
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
                            : ''}
                    </nav>
                    {!user ? (
                        <div className="flex gap-5">
                            <NavLink to="/login" className="secondaryBtn">
                                Login
                            </NavLink>
                            <NavLink to="/register" className="primaryBtn">
                                Register
                            </NavLink>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <p className="text-lg font-medium">{user?.displayName}</p>
                            <img
                                src={user?.photoURL}
                                alt="avatar"
                                className="w-[50px] transition-all duration-1000 cursor-pointer rounded-full"
                                
                            />

                            {/* {offCanvas && <OffCanvas className="transition-all duration-1000" />} */}
                        </div>
                    )}
                </>
                : <GiHamburgerMenu onClick={() => setOffCanvas(!offCanvas)}></GiHamburgerMenu>}
                {offCanvas?<OffCanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas}></OffCanvas>:''}
            </div>
        </header>
    );
};

export default Header;