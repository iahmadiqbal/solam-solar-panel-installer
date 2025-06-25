const logos = [
  "/images/logoipsum.png",
  "/images/logoipsum.png",
  "/images/logoipsum.png",
  "/images/logoipsum.png",
  "/images/logoipsum.png",
];

const BrandLogoRow: React.FC = () => {
  return (
    <div className="relative w-full overflow-x-hidden bg-white py-12 font-['Helvetica']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Horizontal Line */}
        <hr className="w-full border-t border-gray-300 mb-8" />

        {/* Logo Slider */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-8"
            style={{
              width: "200%",
              animation: "slide 10s linear infinite",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-10 w-auto object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Inline animation CSS */}
      <style>
        {`
          html, body {
            overflow-x: hidden;
          }

          @keyframes slide {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default BrandLogoRow;
