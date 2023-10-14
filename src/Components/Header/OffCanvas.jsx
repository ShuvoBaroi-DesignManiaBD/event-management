import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { FiLogOut } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
const OffCanvas = ({setOffCanvas, offCanvas}) => {
    const { user, logout } = useAuth();
    const activeStatus = ({ isActive }) => (isActive ? "text font-medium text-primary" : "text text-white font-medium");
    const navigate = useNavigate();
    return (
        <div className="w-full h-screen text-white fixed top-0 right-0 shadow-xl bg-[#000000ee] pt-20">
            <div className="flex flex-col gap-8 justify-center items-center z-50">
                <img src="/images/logo.webp" alt="logo" className="w-[180px] cursor-pointer" onClick={() => navigate("/")} />
                <nav className="flex flex-col gap-4 justify-center items-center text ">
                    <NavLink to="/" className={`font-medium ${activeStatus}`} onClick={() => setOffCanvas(!offCanvas)}>
                        Home
                    </NavLink>
                    <NavLink to="/our-services" className={activeStatus} onClick={() => !offCanvas}>
                        Services
                    </NavLink>
                    {user ?
                        <>
                            <NavLink to="/booked-services" className={activeStatus} onClick={() => !offCanvas}>
                                Booked services
                            </NavLink>
                            <NavLink to="/bookmarked-services" className={activeStatus} onClick={() => !offCanvas}>
                                Bookmarked services
                            </NavLink>
                            <NavLink to="/login" className="primaryBtn text text-white font-medium p-2 px-4 flex items-center gap-3" onClick={logout && setOffCanvas(!offCanvas)}>
                                Logout <FiLogOut></FiLogOut>
                            </NavLink>

                        </>
                        : ''}
                </nav>
                {!user ? (
                    <div className="flex flex-col gap-5">
                        <NavLink to="/login" className="secondaryBtn text-white text-center" onClick={() => !offCanvas}>
                            Login
                        </NavLink>
                        <NavLink to="/register" className="primaryBtn" onClick={() => !offCanvas}>
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

                    </div>
                )}
                <AiFillCloseCircle size={40} className="text-primary absolute top-5 right-5" onClick={() => !offCanvas}></AiFillCloseCircle>
            </div>
        </div>
    );
};

export default OffCanvas;