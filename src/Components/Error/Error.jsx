import Header from "/src/Components/Error/Error";

const Error = () => {
    return (
        <div className="flex items-center pb-20">
            <Header></Header>
            <div className="container mx-auto flex flex-col justify-center items-center">
                <img src="/public/images/404_error.svg" alt="404 error" className="sm:max-w-[600px] mx-auto" />
                <h2 className="primaryHeading text-center mb-5">Oops! No data found.</h2>
                <p className="text-center text-xl">Please try another search</p>
            </div>
        </div>
    );
};

export default Error;