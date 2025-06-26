import TeamSection from "../../home/TeamSection";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Meet Consultant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: "/images/step1icon.jpg",
  },
  {
    number: "02",
    title: "Generate Power",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: "/images/step2icon.jpg",
  },
  {
    number: "03",
    title: "Save the Energy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: "/images/step3icon.jpg",
  },
  {
    number: "04",
    title: "Use the Power",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: "/images/step4icon.jpg",
  },
];

const SolarStepsSection: React.FC = () => {
  return (
    <>
      <section className="w-full overflow-hidden">
        {/* Top Yellow Banner */}
        <div className="bg-[#F6A235] text-white text-center py-10 px-4">
          <h2 className="text-xl sm:text-2xl md:text-2xl font-bold uppercase">
            How Our Solar Team Works
          </h2>
        </div>

        {/* Bottom Steps Container */}
        <div className="bg-[#1A1819] py-12 px-4">
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-left text-[#545454] text-[16px] leading-[24px]"
                style={{
                  fontFamily: `"Helvetica Neue", Helvetica, Arial, sans-serif`,
                }}
              >
                {/* Icon */}
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-16 h-16 mb-4 object-contain"
                />

                {/* Step Label */}
                <p className="uppercase text-sm tracking-wide mb-1 text-white">
                  Step
                </p>

                {/* Step Number */}
                <p className="text-[#F6A235] text-xl font-bold mb-1">
                  {step.number}
                </p>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {step.title}
                </h3>

                {/* HR Line */}
                <hr className="w-4 border-t-2 border-[#F6A235] mb-4" />

                {/* Description */}
                <p className="text-[#CDCBC8] text-[14px] leading-[22px] mt-2">
                  Lorem ipsum dolor sit amet, consectetur 
                  <br />
                  adipiscing elit. Ut elit tellus, luctus nec 
                  <br />
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TeamSection />
    </>
  );
};

export default SolarStepsSection;
