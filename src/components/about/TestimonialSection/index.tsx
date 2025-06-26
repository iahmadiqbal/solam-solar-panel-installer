interface Testimonial {
  message: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    message:
      "I was very impressed by the new company service. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolor ipsum quia.",
    name: "Sarah Albert",
    role: "Customer",
    image: "/images/saraalbert.png",
  },
  {
    message:
      "I was very impressed by the new company service. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolor ipsum quia.",
    name: "John Doe",
    role: "Customer",
    image: "/images/johndoe.png",
  },
  {
    message:
      "I was very impressed by the new company service. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolor ipsum quia.",
    name: "Lilly Rowe",
    role: "Customer",
    image: "/images/lillyrow.png",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="w-full overflow-hidden px-4 py-12 bg-[#FAF5EF]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl sm:text-xl md:text-xl font-normal text-[#CDCBC8] mb-2">
          Our Testimonials
        </h2>

        {/* HR Line */}
        <div className="w-8 h-1 mx-auto bg-[#F6A235] mb-2"></div>

        {/* Subheading */}
        <p className="text-4xl text-[#1A1819] font-bold mb-10">
          Customer Feedback
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md relative text-left flex flex-col items-start justify-between font-[Helvetica]"
            >
              {/* Quotation Mark (Above Box) */}
              <div className="absolute -top-4 left-6 text-6xl text-[#F6A235] font-serif leading-none">
                “
              </div>

              {/* Message */}
              <p className="text-gray-700 text-sm mb-6 leading-relaxed mt-6">
                {testimonial.message}
              </p>

              {/* Image, Name & Role */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#F6A235]"
                />
                <div>
                  <h3 className="text-gray-900 font-semibold text-base">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#F6A235] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
