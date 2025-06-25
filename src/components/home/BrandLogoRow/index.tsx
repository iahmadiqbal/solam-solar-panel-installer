const logos = [
  "/images/logoipsum.png",
  "/images/logoipsum.png",
  "/images/logoipsum.png",
  "/images/logoipsum.png",
  "/images/logoipsum.png",
];

const BrandLogoRow: React.FC = () => {
  return (
    <>
      <style>
        {`
          @layer utilities {
            @keyframes slide {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }

            .animate-slide {
              animation: slide 20s linear infinite;
            }
          }
        `}
      </style>

      <section className="py-12 bg-white font-['Helvetica'] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:pl-24 lg:pr-6">
          {/* HR Line */}
          <hr className="w-full border-t border-gray-300 mb-8" />

          {/* Sliding Logos */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-x-6 animate-slide w-max">
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-10 w-auto object-contain shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandLogoRow;
