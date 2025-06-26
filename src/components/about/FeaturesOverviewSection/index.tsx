import EcoEnergySection from "../../home/EcoEnergySection";
import StatsOverviewSection from "../../home/StatsOverviewSection";

const features = [
  {
    image: "/images/Renewablesource.jpg",
    title: "Renewable Source",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur <br />
        adipiscing elit. Ut elit tellus, luctus nec mattis, dapibus leo.
      </>
    ),
  },
  {
    image: "/images/EasyInstallation.jpg",
    title: "Easy Installation",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur <br />
        adipiscing elit. Ut elit tellus, luctus nec mattis, dapibus leo.
      </>
    ),
  },
  {
    image: "/images/LowMaintaince.jpg",
    title: "Low Maintenance",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur <br />
        adipiscing elit. Ut elit tellus, luctus nec mattis, dapibus leo.
      </>
    ),
  },
];

const FeaturesOverviewSection: React.FC = () => {
  return (
    <>
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-x-hidden font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
            {features.map((feature, index) => (
              <div key={index} className="shadow-md overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-56 object-cover"
                />
                <div className="bg-[#FAF5EF] p-5 min-h-[200px] flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-[#000000] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#000000]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EcoEnergySection />
      <StatsOverviewSection />
    </>
  );
};

export default FeaturesOverviewSection;
