const SolarHero: React.FC = () => {
  return (
    <section className="w-full min-h-screen relative">
      <div className="absolute inset-0 bg-[url('/images/heroimage.jpeg')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="relative z-10 flex items-center min-h-screen px-6 md:px-16 text-white">
        <div className="max-w-xl">
          <h1 className="text-2xl font-semibold mb-4">
            Solar Panel Installation Solution
          </h1>

          <h2 className="text-6xl font-bold mb-6 leading-tight">
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
