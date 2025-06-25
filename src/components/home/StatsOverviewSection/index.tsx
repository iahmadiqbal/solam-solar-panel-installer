interface StatItem {
  value: number;
  title: string;
  icon: string;
}

const stats: StatItem[] = [
  {
    value: 68,
    title: "Panels Installed",
    icon: "/images/icon1.png",
  },
  {
    value: 54,
    title: "Technical Support",
    icon: "/images/icone2.png",
  },
  {
    value: 33,
    title: "Years Experience",
    icon: "/images/icone3.png",
  },
  {
    value: 88,
    title: "Five Star Reviews",
    icon: "/images/icon4.png",
  },
];

const StatsOverviewSection: React.FC = () => {
  return (
    <section
      className="w-full px-4 py-10 overflow-x-hidden"
      style={{ backgroundColor: "#F8F3EF" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 text-center flex flex-col items-center box-border"
              style={{ backgroundColor: "#F8F3EF" }}
            >
              {/* Icon attached to top-right of number */}
              <div className="relative mb-2">
                <div
                  className="text-8xl font-extrabold"
                  style={{ color: "#FFFFFF" }}
                >
                  {stat.value}
                </div>
                <img
                  src={stat.icon}
                  alt="icon"
                  className="w-12 h-12 absolute -top-6 -right-2"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-bold text-[#1A1819]">
                {stat.title}
              </h3>

              {/* Two-line Description */}
              <p className="text-sm mt-1 text-[#7B7B7B]">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <p className="text-sm mt-1 text-[#7B7B7B]">adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsOverviewSection;
