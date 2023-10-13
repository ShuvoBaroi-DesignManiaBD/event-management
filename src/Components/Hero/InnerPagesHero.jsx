const InnerPagesHero = ({children}) => {
    return (
        <div className="bg-primaryLight from-primary py-14 md:py-20">
            <div className="container mx-auto px-4 md:px-0">
            <h2 className="md:primaryHeading secondaryHeading text-[26px] font-bold">{children}</h2>
            </div>
        </div>
    );
};

export default InnerPagesHero;