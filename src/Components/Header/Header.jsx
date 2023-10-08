import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="bg-white border-gray-200 border-b">
            <div className="container flex flex-wrap items-center justify-between mx-auto py-4">
                <img src="/src/assets/logo.webp" alt="logo" className="w-[180px] cursor-pointer" onClick={() => navigate("/")}/>
                <nav className="space-x-10">
                    <NavLink to="/" className="text-lg font-medium">
                        Home
                    </NavLink>
                    <NavLink to="/#about" className="text-lg font-medium">
                        About
                    </NavLink>
                    <NavLink to="/#services" className="text-lg font-medium">
                        Services
                    </NavLink>
                </nav>
                <nav className="flex gap-5">
                    <NavLink to="/login" className="secondaryBtn">
                        Login
                    </NavLink>
                    <NavLink to="/register" className="primaryBtn">
                        Register
                    </NavLink>
                </nav>
                
            </div>
        </header>
    );
};

export default Header;