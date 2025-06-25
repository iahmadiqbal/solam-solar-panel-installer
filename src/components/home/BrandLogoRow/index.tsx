const logos = [
  "/images/logoipsum.png",
  "/images/logoipsum.png",
  "/images/logoipsum.png",
  "/images/logoipsum.png",
  "/images/logoipsum.png",
];

const BrandLogoRow: React.FC = () => {
  return (
    <section className="py-12 bg-white font-['Helvetica']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:pl-24 lg:pr-6">
        {/* Full Width HR Line */}
        <hr className="w-full border-t border-gray-300 mb-8" />

        {/* Logo Row */}
        <div className="overflow-x-auto">
          <div className="flex flex-nowrap justify-start items-center gap-x-6">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogoRow;
