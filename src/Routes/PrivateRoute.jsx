import { Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import Login from "../Pages/Login";
import ServicesProvider from "../Contexts/ServicesContext";

const PrivateRoute = () => {

    const { user } = useAuth();

    if (user) {
        // return children
        return (
            <>
                <ServicesProvider>
                    <Outlet></Outlet>
                </ServicesProvider>
            </>
        );
    }

    return <Login></Login>
};

export default PrivateRoute;