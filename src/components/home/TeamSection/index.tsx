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
];

const TeamSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-12 bg-white overflow-x-hidden relative">
      {/* Custom animation */}
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
        {/* Section Heading */}
        <div className="text-center">
          <hr className="w-8 border-t-4 border-[#F6A235] mx-auto mb-2" />
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            QUALITY PROFESSIONALS
          </p>
          <h2 className="text-4xl sm:text-4xl font-bold text-[#1A1819] mt-2 mb-10">
            Our Team
          </h2>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4">
          {team.map((member, idx) => (
            <div key={idx} className="animate-fadeInUp">
              {/* Image */}
              <div className="w-[85%] h-[300px] sm:h-[340px] md:h-[370px] mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Box */}
              <div className="-mt-4 mx-auto w-[85%] bg-[#FFFFFF] pt-4 px-5 pb-5 text-center shadow-md border-t-4 border-[#F6A235]">
                <h3 className="text-xl font-bold text-[#000000]">
                  {member.name}
                </h3>
                <p className="text-sm text-[#7B7B7B] mt-1">{member.position}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-2 mt-4">
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${member.name} on Facebook`}
                    className="p-2 rounded-full bg-[#FAF5EF] text-[#1A1819] transition hover:bg-[#F6A235] hover:text-white"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${member.name} on Twitter`}
                    className="p-2 rounded-full bg-[#FAF5EF] text-[#1A1819] transition hover:bg-[#F6A235] hover:text-white"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${member.name} on LinkedIn`}
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

export default TeamSection;
