import React from "react";
import Image from "next/image";
import { TechStack } from "@/components/tech-stack";
import { Card, CardContent } from "@/components/ui/card";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <>
      {/*
      -- NAVBAR PAGE
    */}
      <header className="w-full bg-white sticky top-0 z-100">
        <nav className=" flex justify-between items-center max-w-7xl mx-auto py-3">
          <h1 className="text-3xl font-semibold">[D.E]</h1>
          <ul className="flex space-x-5">
            <li className="">
              <a href="#home">Home</a>
            </li>{" "}
            <li className="">
              <a href="#about">About</a>
            </li>{" "}
            <li className="">
              <a href="#background">Background</a>
            </li>{" "}
            <li className="">
              <a href="#projects">Projects</a>
            </li>{" "}
            <li className="">
              <a href="#certifications">Certifications</a>
            </li>
          </ul>
          <button className="group bg-[#F85F00] text-white text-md px-5 py-3 flex items-center gap-2 hover:cursor-pointer transition-all duration-300 transform hover:scale-105">
            <FiMail className="text-lg transform transition-transform duration-300 group-hover:translate-x-1" />
            Contact Me
          </button>
        </nav>
      </header>

      <main className="w-full  py-15" id="home">
        {/*
          -- HERO PAGE
        */}
        <section className="max-w-7xl mx-auto flex justify-between items-center gap-20 ">
          <Image
            src="/hero-img.png"
            height={500}
            width={500}
            alt="hero-image"
          />

          <div className="flex-1 space-y-5">
            <h2 className="text-[24px] font-semibold">
              Hi, I am <span className="text-[#F85F00]">Dazzle</span>
            </h2>
            <h1 className="text-[40px] font-bold">
              UNLEASH YOUR WEBSITE’S POTENTIAL WITH THE BEST DESIGNER
            </h1>
            <div className="flex space-x-5 italic font-light">
              <div className="">
                <span className="text-[#F85F00]">1+</span> Years Experience
              </div>
              <div>
                <span className="text-[#F85F00]">100%</span> Satisfaction
              </div>
              <div>
                <span className="text-[#F85F00]">24/5</span> Customer Service
              </div>
            </div>
            <div className="flex space-x-5">
              <button className="group bg-[#F85F00] text-white text-md px-5 py-3 flex items-center gap-2 hover:cursor-pointer transition-all duration-300 transform hover:scale-105">
                <FiDownload className="text-lg transform transition-transform duration-300 group-hover:translate-x-1" />
                Download CV
              </button>

              <button className="group text-[#F85F00] border border-[#F85F00] text-md px-5 py-3 flex items-center gap-2 hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-[#F85F00] hover:text-white">
                <FiArrowRight className="text-lg transform transition-transform duration-300 group-hover:translate-x-1" />
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/*
          -- TOOLS PAGE
        */}
        <section className="max-w-7xl mx-auto py-10">
          <TechStack />
        </section>

        {/*
          -- ABOUT PAGE
        */}
        <section
          className="max-w-7xl mx-auto  flex justify-between items-center gap-20 m-20  "
          id="about"
        >
          <div className="space-y-5 ">
            <h1 className="text-3xl font-bold">ABOUT</h1>
            <p className="font-light leading-relaxed">
              Hi! I’m Dazzle Estaciones, a 4th-year IT student at Holy Cross of
              Davao College. I specialize in clean, user-friendly designs for
              mobile apps and websites, and I enjoy writing clear documentation.
            </p>
            <p className="font-light leading-relaxed">
              One of my proudest projects is our capstone, SMARTRAX: IoT-Enabled
              Bike Rentals, where I focused on UI design and handled key
              documents like proposals and user guides. I mainly work with Figma
              and Google Docs to bring ideas to life and make systems easy to
              understand.
            </p>
          </div>

          <Image
            src="/about.png"
            height={500}
            width={500}
            alt="about-img"
            className="flex-1"
          />
        </section>

        {/*
          -- BACKGROUND PAGE
        */}
        <section
          className="max-w-7xl mx-auto flex justify-between items-start gap-20 py-40"
          id="background"
        >
          <div className="flex flex-col gap-20">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">EDUCATION</h1>
            <div className="relative border-l-4 border-gray-300 pl-6 space-y-10">
              {[
                {
                  school: "Holy Cross of Davao College",
                  degree: "Bachelor of Science in Information Technology",
                  duration: "2021 – Present",
                },
                {
                  school: "Davao City National High School",
                  degree: "Science, Technology, Engineering & Mathematics",
                  duration: "2019 – 2021",
                },
                {
                  school: "Sta. Ana National High School",
                  degree: "Junior High School",
                  duration: "2015 – 2019",
                },
              ].map((edu, index) => (
                <div key={index} className="relative">
                  {/* Bullet */}
                  <div
                    className={`absolute -left-3.5 top-1 w-6 h-6 rounded-full border-4 border-white shadow-md ${
                      index === 0 ? "bg-orange-500" : "bg-black"
                    }`}
                  />
                  <div className="ml-8">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-gray-600">{edu.degree}</p>
                    <p className="text-xs text-gray-500 italic">
                      {edu.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-20">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
              ACHIEVEMENTS
            </h1>
            <div className="relative border-l-4 border-gray-300 pl-6 space-y-10">
              {[
                {
                  school: "Holy Cross of Davao College",
                  degree: "Bachelor of Science in Information Technology",
                  duration: "2021 – Present",
                },
                {
                  school: "Davao City National High School",
                  degree: "Science, Technology, Engineering & Mathematics",
                  duration: "2019 – 2021",
                },
                {
                  school: "Sta. Ana National High School",
                  degree: "Junior High School",
                  duration: "2015 – 2019",
                },
              ].map((edu, index) => (
                <div key={index} className="relative">
                  {/* Bullet */}
                  <div
                    className={`absolute -left-3.5 top-1 w-6 h-6 rounded-full border-4 border-white shadow-md ${
                      index === 0 ? "bg-orange-500" : "bg-black"
                    }`}
                  />
                  <div className="ml-8">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-gray-600">{edu.degree}</p>
                    <p className="text-xs text-gray-500 italic">
                      {edu.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-20">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
              EXPERIENCE
            </h1>
            <div className="relative border-l-4 border-gray-300 pl-6 space-y-10">
              {[
                {
                  school: "Holy Cross of Davao College",
                  degree: "Bachelor of Science in Information Technology",
                  duration: "2021 – Present",
                },
                {
                  school: "Davao City National High School",
                  degree: "Science, Technology, Engineering & Mathematics",
                  duration: "2019 – 2021",
                },
                {
                  school: "Sta. Ana National High School",
                  degree: "Junior High School",
                  duration: "2015 – 2019",
                },
              ].map((edu, index) => (
                <div key={index} className="relative">
                  {/* Bullet */}
                  <div
                    className={`absolute -left-3.5 top-1 w-6 h-6 rounded-full border-4 border-white shadow-md ${
                      index === 0 ? "bg-orange-500" : "bg-black"
                    }`}
                  />
                  <div className="ml-8">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-gray-600">{edu.degree}</p>
                    <p className="text-xs text-gray-500 italic">
                      {edu.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*
          -- PROJECT PAGE
        */}
        <section className="max-w-7xl mx-auto py-40" id="projects">
          <h1 className="text-3xl font-bold text-center">PROJECTS</h1>
          <div className="grid grid-cols-3 grid-rows-2 gap-10 mt-20">
            <div className="bg-white shadow-md w-[400px] h-[300px] flex flex-col border border-gray-200">
              <img
                src="/dazzle_plantita_project.png"
                alt="Project Screenshot"
                className="w-full h-[150px] object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Project Title
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Short project description that summarizes what the project
                    is about.
                  </p>
                </div>
                <a
                  href="#"
                  className="text-blue-600 text-sm mt-4 hover:underline font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>{" "}
            <div className="bg-white shadow-md w-[400px] h-[300px] flex flex-col border border-gray-200">
              <img
                src="/hcdc_med_project.png"
                alt="Project Screenshot"
                className="w-full h-[150px] object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Project Title
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Short project description that summarizes what the project
                    is about.
                  </p>
                </div>
                <a
                  href="#"
                  className="text-blue-600 text-sm mt-4 hover:underline font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>{" "}
            <div className="bg-white shadow-md w-[400px] h-[300px] flex flex-col border border-gray-200">
              <img
                src="/usermanual_project.png"
                alt="Project Screenshot"
                className="w-full h-[150px] object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Project Title
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Short project description that summarizes what the project
                    is about.
                  </p>
                </div>
                <a
                  href="#"
                  className="text-blue-600 text-sm mt-4 hover:underline font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="bg-white shadow-md w-[400px] h-[300px] flex flex-col border border-gray-200">
              <img
                src="/dazsoul_project.png"
                alt="Project Screenshot"
                className="w-full h-[150px] object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Project Title
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Short project description that summarizes what the project
                    is about.
                  </p>
                </div>
                <a
                  href="#"
                  className="text-blue-600 text-sm mt-4 hover:underline font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>{" "}
            <div className="bg-white shadow-md w-[400px] h-[300px] flex flex-col border border-gray-200 rounded-md">
              <img
                src="/calamity_alert_project.png"
                alt="Project Screenshot"
                className="w-full h-[150px] object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Calamity Alert
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Short project description that summarizes what the project
                    is about.
                  </p>
                </div>
                <a
                  href="#"
                  className="text-blue-600 text-sm mt-4 hover:underline font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*
          -- CONTACT PAGE
        */}
        <section
          className="max-w-7xl mx-auto grid grid-cols-6 gap-20 p-20 md:p-20"
          id="contact"
        >
          <div className="space-y-10 col-span-3">
            <h1 className="text-4xl font-bold leading-relaxed">
              Let’s connect and collaborate in the creative world of{" "}
              <span className="text-[#F85F00]">UI/UX design</span>.
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Whether you have a project in mind or just want to say hello, I’d
              love to hear from you.
            </p>
          </div>

          <div className="col-span-3">
            <form action="" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-[#F85F00] focus:ring-[#F85F00]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-[#F85F00] focus:ring-[#F85F00]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-[#F85F00] focus:ring-[#F85F00]"
                  placeholder="Tell me more about your project or inquiry..."
                />
              </div>
              <button
                type="submit"
                className="bg-[#F85F00] hover:bg-[#d94f00] w-full transition text-white font-semibold px-6 py-3"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
        {/*
          -- CERTIFICATES PAGE
        */}
        <section className="max-w-7xl mx-auto py-40" id="certifications">
          <h1 className="text-3xl font-bold text-center">CERTIFICATES</h1>
          <Carousel className="mt-20">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white h-[300px] w-[400px]">
                  {" "}
                  <Image
                    src="/COA.jpg"
                    alt="certificate"
                    height={300}
                    width={400}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white h-[300px] w-[400px]">
                  {" "}
                  <Image
                    src="/COP.jpg"
                    alt="certificate"
                    height={300}
                    width={400}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white h-[300px] w-[400px]">
                  {" "}
                  <Image
                    src="/MCITS.jpg"
                    alt="certificate"
                    height={300}
                    width={400}
                  />
                </div>
              </CarouselItem>{" "}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white h-[300px] w-[400px]">
                  {" "}
                  <Image
                    src="/UIUX.jpg"
                    alt="certificate"
                    height={300}
                    width={400}
                  />
                </div>
              </CarouselItem>{" "}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white h-[300px] w-[400px]">
                  <Image
                    src="/COA.jpg"
                    alt="certificate"
                    height={300}
                    width={400}
                  />
                </div>
              </CarouselItem>{" "}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white h-[300px] w-[400px]">
                  {" "}
                  <Image
                    src="/COA.jpg"
                    alt="certificate"
                    height={300}
                    width={400}
                  />
                </div>
              </CarouselItem>
            </CarouselContent>{" "}
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="w-full bg-slate-800 p-30">
          <div className="max-w-7xl mx-auto  text-white flex flex-col justify-center items-center space-y-5 ">
            <h2 className="text-4xl font-bold text-white leading-snug">
              Ready to bring your ideas to life?
            </h2>
            <p className="text-white text-lg">
              Let’s build something amazing together. Whether you're starting a
              new project or need a design revamp, I’m here to help you make an
              impact.
            </p>{" "}
            <a
              href="#contact"
              className="bg-[#F85F00] hover:bg-[#d94f00] transition text-white font-semibold rounded-xl px-8 py-4 text-lg"
            >
              Let’s Talk
            </a>
          </div>
        </section>
        <footer className="w-full bg-white  h-[300px]"></footer>
      </main>
    </>
  );
};

export default Home;
