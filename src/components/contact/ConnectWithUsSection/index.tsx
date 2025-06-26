import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ConnectWithUsSection: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = (data: FormData) => {
    localStorage.setItem("contactFormSubmission", JSON.stringify(data));
    setSuccessMessage("✅ Your information has been sent to the admin.");
    reset();
  };

  return (
    <section className="w-full px-4 pb-12 bg-[#FAF5EF] overflow-x-hidden -mt-1">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left Content */}
        <div className="bg-white p-6 shadow-md flex flex-col justify-between h-full">
          <div>
            <div className="w-5 h-1 bg-[#F6A235] mb-2" />
            <h2 className="text-xl font-normal text-gray-300 mb-1">
              Get in touch
            </h2>
            <h3 className="text-4xl font-bold text-[#000000] mb-4">
              Schedule a Quote
            </h3>
            <p className="text-gray-600 mb-6 flex items-start gap-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-3 text-gray-800">
                  <FaPhoneAlt className="text-[#F6A235]" />
                  (123) 456-7890
                </div>
                <hr className="mt-2 border-t border-gray-300" />
              </div>
              <div>
                <div className="flex items-center gap-3 text-gray-800">
                  <FaEnvelope className="text-[#F6A235]" />
                  needhelp@company.com
                </div>
                <hr className="mt-2 border-t border-gray-300" />
              </div>
              <div>
                <div className="flex items-center gap-3 text-gray-800">
                  <FaMapMarkerAlt className="text-[#F6A235]" />
                  60 Brooklyn Street, New York, USA
                </div>
                <hr className="mt-2 border-t border-gray-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-[#FAF5EF] p-6 shadow-md h-full flex flex-col justify-between">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 h-full flex flex-col"
          >
            <input
              type="text"
              placeholder="Your Name"
              {...register("name")}
              className="w-full p-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F6A235]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <input
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className="w-full p-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F6A235]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <input
              type="text"
              placeholder="Your Subject"
              {...register("subject")}
              className="w-full p-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F6A235]"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}

            <textarea
              placeholder="Your Message"
              {...register("message")}
              className="w-full p-3 border border-gray-300 bg-white resize-none h-32 focus:outline-none focus:ring-2 focus:ring-[#F6A235]"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}

            <div className="mt-auto">
              <button
                type="submit"
                className="bg-[#F6A235] text-white font-semibold py-3 px-6 w-full hover:bg-[#e29425] transition duration-300"
              >
                Send Message
              </button>
              {successMessage && (
                <p className="text-[#000000] font-medium mt-3 text-center">
                  {successMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUsSection;
