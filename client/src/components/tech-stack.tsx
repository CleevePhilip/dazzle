import { Marquee } from "./magicui/marquee";
import { SiCanva } from "react-icons/si";
import { FaFigma, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const technologies = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="text-yellow-400" />,
  },
  { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
  { name: "Canva", icon: <SiCanva className="text-cyan-500" /> },
];

export function TechStack() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center mx-6 p-4 rounded-lg   dark:bg-gray-900"
          >
            <div className="text-5xl mb-1">{tech.icon}</div>
            <span className="text-xs font-medium dark:text-white">
              {tech.name}
            </span>
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
