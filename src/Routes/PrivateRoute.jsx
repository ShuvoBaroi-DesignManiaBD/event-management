import { Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import Login from "../Pages/Login";
import ServicesProvider from "../Contexts/ServicesContext";

const PrivateRoute = ({children}) => {

    const { user } = useAuth();
    if (user) {
        // return children
        return (
            <>
                <ServicesProvider>
                    <Outlet></Outlet>
                    {children}
                </ServicesProvider>
            </>
        );
    }

    return <Login></Login>
};

export default PrivateRoute;