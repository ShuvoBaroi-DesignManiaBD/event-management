import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Spinner } from "@material-tailwind/react";
import ServicesProvider from "../Contexts/ServicesContext";
import { useAuth } from "../Hooks/useAuth";

const MainRoute = () => {
        const { loading } = useAuth();

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center gap-8">
              
              <Spinner color="purple" className="h-12 w-12" />
            </div>
          );
    } else {
        return <>
        <ServicesProvider>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </ServicesProvider>
    </>
    }
};

export default MainRoute;