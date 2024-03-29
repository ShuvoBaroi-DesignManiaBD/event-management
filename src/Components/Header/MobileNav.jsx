import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

const MobileNav = () => {
    const { user, logout } = useAuth();
    const activeStatus = ({ isActive }) => (isActive ? "text font-medium text-primary" : "text font-medium");
    return (
        <ul className="flex flex-col gap-4">

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
                            <p className="text-lg font-medium">{user.displayName}</p>
                            <img
                                src={user.photoURL}
                                alt="avatar"
                                className="w-[50px] transition-all duration-1000 cursor-pointer rounded-full"
                                
                            />

                            {/* {offCanvas && <OffCanvas className="transition-all duration-1000" />} */}
                    </div>

                </>
                : <div className="flex gap-5">
                <NavLink to="/login" className="secondaryBtn">
                    Login
                </NavLink>
                <NavLink to="/register" className="primaryBtn">
                    Register
                </NavLink>
            </div>}
        </ul>
    );
};

export default MobileNav;