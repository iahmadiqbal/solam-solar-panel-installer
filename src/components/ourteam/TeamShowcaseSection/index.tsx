import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

const team: TeamMember[] = [
  {
    name: "Robert Smith",
    position: "Director",
    image: "/images/Robertsmith.jpg",
    social: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "John Albert",
    position: "Engineer",
    image: "/images/johnAlbert.jpg",
    social: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Mike Hardson",
    position: "Installer",
    image: "/images/MikeHardson.jpg",
    social: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Kevin Jones",
    position: "Director",
    image: "/images/kevinjones.jpg",
    social: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Jane Cooper",
    position: "Engineer",
    image: "/images/jaanecooper.jpg",
    social: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Arthur Chen",
    position: "Installer",
    image: "/images/authurchen.jpg",
    social: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  },
];

const TeamShowcaseSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-12 bg-white overflow-x-hidden relative">
      <style>
        {`
          @layer utilities {
            @keyframes fadeInUp {
              0% {
                opacity: 0;
                transform: translateY(40px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fadeInUp {
              animation: fadeInUp 0.5s ease-out forwards;
            }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4">
          {team.map((member, idx) => (
            <div key={idx} className="animate-fadeInUp">
              <div className="w-[85%] h-[300px] sm:h-[340px] md:h-[370px] mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="-mt-4 mx-auto w-[85%] bg-[#FFFFFF] pt-4 px-5 pb-5 text-center shadow-md border-t-4 border-[#F6A235]">
                <h3 className="text-xl font-bold text-[#000000]">
                  {member.name}
                </h3>
                <p className="text-sm text-[#7B7B7B] mt-1">{member.position}</p>

                <div className="flex justify-center gap-2 mt-4">
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#FAF5EF] text-[#1A1819] transition hover:bg-[#F6A235] hover:text-white"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#FAF5EF] text-[#1A1819] transition hover:bg-[#F6A235] hover:text-white"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#FAF5EF] text-[#1A1819] transition hover:bg-[#F6A235] hover:text-white"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcaseSection;
