const InnerPagesHero = ({children}) => {
    return (
        <div className="bg-primaryLight from-primary py-20">
            <div className="container mx-auto">
                {children}
            </div>
        </div>
    );
};

export default InnerPagesHero;