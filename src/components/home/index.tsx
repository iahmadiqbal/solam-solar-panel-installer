const SolarHero: React.FC = () => {
  return (
    <section className="w-full min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/heroimage.jpeg')]" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6 md:px-16 text-white">
        <div className="max-w-xl">
          <h1 className="text-3xl font-semibold mb-4">
            Solar Panel Installation Solution
          </h1>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Powering Homes <br /> With Solar Panels
          </h2>
          <button className="bg-yellow-400 text-white hover:bg-gray-700 font-semibold px-10 py-4 transition duration-300">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolarHero;
