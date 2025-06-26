const HeroContactSection: React.FC = () => {
  return (
    <section className="w-full h-[40vh] md:h-[62vh] bg-[url('/images/heroAboutsectionjpg.jpg')] bg-cover bg-no-repeat bg-[center_top_30%] flex items-center justify-center overflow-x-hidden font-sans">
      <div className="text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Contact
        </h2>
        <p className="text-base md:text-lg text-white">
          Need Assistance or Have a Question?
        </p>
      </div>
    </section>
  );
};

export default HeroContactSection;
