
import Header from "../Components/Header/Header";

const ErrorPage = () => {
    return (
        <>
        <Header></Header>
        <div className="container mx-auto flex flex-col justify-center items-center">
            <img src="/src/assets/404_error.svg" alt="404 error" className="sm:max-w-[600px] mx-auto"/>
            <h2 className="primaryHeading text-center mb-5">Oops! No data found.</h2>
            <p className="text-center text-xl">Please try another search</p>
        </div>
        </>
    );
};

export default ErrorPage;