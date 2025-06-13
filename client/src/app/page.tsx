"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiArrowRight, FiSend } from "react-icons/fi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TechStack } from "@/components/tech-stack";

const Home = () => {

  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Reset imageLoaded when modal opens
  React.useEffect(() => {
    if (selectedCert) {
      setImageLoaded(false);
    }
  }, [selectedCert]);
  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timelineData = [
    {
      type: "Education",
      items: [
        {
          school: "Holy Cross of Davao College",
          degree: "Bachelor of Science in Information Technology",
          duration: "2021 – Present",
        },
        {
          school: "Sta Ana. Senior High School",
          degree: "General Academic Strand",
          duration: "2018 – 2020",
        },
        {
          school: "Sta. Ana National High School",
          degree: "Junior High School",
          duration: "2014 – 2018",
        },
        {
          school: "Sta. Ana Elementary School",
          degree: "Elementary School",
          duration: "2008 – 2014",
        },
      ],
    },
    {
      type: "Achievements",
      items: [
        {
          school: "Hongkong 5th International Conference.",
          degree: "Paper Presentation",
          duration: "2025",
        },
        {
          school: "4th place Battle of the bands",
          degree: "Recognition",
          duration: "2024",
        },
        {
          school: "7th place cheerdance competition",
          degree: "Recognition",
          duration: "2022",
        },
        {
          school: "1st place COD-M",
          degree: "Recognition",
          duration: "2022",
        },
      ],
    },
    {
      type: "Experience",
      items: [
        {
          school: "Jairosoft",
          degree: "Intern",
          duration: "2025",
        },
        {
          school: "SMARTRAX Capstone",
          degree: "UI Design & Documentation",
          duration: "2023 – 2024",
        },
        {
          school: "Set Up Computer Networks",
          degree: "Networking",
          duration: "2016 – 2017",
        },
      ],
    },
  ];

  const projects = [
    {
      title: "Plantita Project",
      image: "/dazzle_plantita_project.png",
      description:
        "A mobile app design for plant lovers, allowing users to browse top-rated plants and place orders easily through a clean, intuitive interface.",
      tags: ["UI/UX", "Mobile"],
      link: "https://www.figma.com/design/YLlQeAN8knIjJoxZAAi4cu/HCI102-Dazzle-sPlantita?node-id=0-1&t=AEpm9GqxM37ZkrTN-1"
    },
    {
      title: "HCDC Medical Clinic",
      image: "/hcdc_med_project.png",
      description:
        "A user-friendly platform for accessing HCDC Medical Clinic services, including appointment booking, medical record viewing, clinic updates, and health information for students and staff.",
      tags: ["UI/UX", "Web"],
      link: "https://github.com/Dazzle0101/HCDC-Clinic"
    },
    {
      title: "User Manual",
      image: "/usermanual_project.png",
      description:
        "A brief guide to navigating the ColinaHealth website, covering account setup, booking appointments, viewing health records, and using key features with ease.",
      tags: ["UI/UX", "Web"],
      link: "https://www.canva.com/design/DAGpvlMQ68g/xeAxHBz8zw_ejOCJDtRg4Q/edit?utm_content=DAGpvlMQ68g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      title: "Dazsoul",
      image: "/dazsoul_project.png",
      description: "A personal portfolio showcasing creative designs.",
      tags: ["UI/UX", "Web"],
      link: "https://www.figma.com/design/nRvADniSp9FAtOiMYxuMgv/Mock-Up-Design?t=AEpm9GqxM37ZkrTN-1"
    },
    {
      title: "Calamity Alert",
      image: "/calamity_alert_project.png",
      description: "Real-time alert system for natural disasters.",
      tags: ["UI/UX", "Mobile"],
      link: "https://www.figma.com/design/EomRATFOlUySDwepw1Pcqb/CC106-Proj.?t=AEpm9GqxM37ZkrTN-1"
    },
    {
      title: "SmarTrax",
      image: "/SmarTrax.jpg",
      description:
        "A capstone project on a smart bike and e-bike rental app enabling users to locate, unlock via QR scan, and rent bikes. Features include ride history, wallet tracking, real-time GPS, Firebase authentication, and a mobile-friendly UI.",
      tags: ["UI/UX", "Mobile", "Web"],
    },
  ];
  

  const certificates = [
    "OJT cert.jpeg",
    "/COA.jpg",
    "/NetworkingBasics.jpg",
    "/UIUX.jpg",
    "/Intro. to IoT and Digital Transformation.jpg",
    "/COC Security.jpg",
    "/Intro to UI_UX cert_.jpg",
    "/ProjectW1.png",
    "/ProjectW2.png",
    "/COP.jpg"
  ];

  return (
    <>
      {/* Navbar */}
      <header
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-800/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center px-6 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-white"
          >
            {"<DE />"}
          </motion.h1>
          <nav className="flex items-center space-x-8">
            {["Home", "About", "Background", "Projects", "Certifications"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white/90 hover:text-white transition-colors group py-2"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              )
            )}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="bg-orange-500 text-white px-6 py-2.5 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2 group"
              href="#Contact"
            >
              <span>Contact</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </nav>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden w-full">
          <div className="flex items-center justify-between p-4">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-white"
            >
              {"<DE />"}
            </motion.h1>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </motion.button>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                  onClick={() => setMenuOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-md shadow-xl py-6 border-t border-white/10"
                >
                  <div className="px-6 space-y-4">
                    {[
                      "Home",
                      "About",
                      "Background",
                      "Projects",
                      "Contact",
                      "Certifications",
                    ].map((item, index) => (
                      <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="block w-full py-3 px-4 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
                        onClick={() => setMenuOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        {item}
                      </motion.a>
                    ))}
                    <motion.a
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      href="#Contact"
                      className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 group"
                    >
                      <span>Contact</span>
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </header>

      <main className="w-full pt-20">
        {/* Hero Section */}
        <section
          id="home"
          className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8 text-center md:text-left"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="inline-block px-4 py-2 bg-orange-50 text-orange-500 rounded-full text-sm font-medium mb-4">
                    👋 Welcome to my portfolio
                  </span>
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    Hi, I am <span className="text-orange-500">Dazzle</span>
                  </h2>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                >
                  UNLEASH YOUR WEBSITE&apos;S
                  <span className="block text-orange-500">POTENTIAL</span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-gray-600">
                    with the best designer
                  </span>
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center md:justify-start gap-6"
              >
                {[
                  { number: "1+", text: "Years Experience" },
                  { number: "100%", text: "Satisfaction" },
                  { number: "24/5", text: "Customer Service" },
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="flex flex-col items-center md:items-start">
                      <span className="text-2xl font-bold text-orange-500 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </span>
                      <span className="text-sm text-gray-600">{stat.text}</span>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <a
                  href="/CV-D.pdf"
                  download="CV-D.pdf"
                  className="group bg-orange-500 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                >
                  <FiDownload className="text-lg group-hover:animate-bounce" />
                  <span>Download CV</span>
                </a>
                <a
                  href="#projects"
                  className="group border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <span>View Projects</span>
                  <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur-3xl opacity-20 scale-95"></div>
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-orange-500/20 rounded-3xl transform rotate-6"></div>
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
                  <Image
                    src="/hero-img.png"
                    height={600}
                    width={600}
                    alt="Dazzle - UI/UX Designer"
                    priority
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <span className="text-2xl">💻</span>
                      </div>
                      <div>
                        <p className="font-semibold">UI/UX Designer</p>
                        <p className="text-sm text-gray-600">
                          Available for projects
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack */}
        <TechStack />

        {/* About Section */}
        <section
          id="about"
          className="relative max-w-7xl mx-auto px-4 py-20 sm:py-24"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-10 top-1/3 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-10 bottom-1/3 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/20 rounded-3xl transform rotate-6 scale-95"></div>
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/about.png"
                    height={600}
                    width={600}
                    alt="About Dazzle"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <span className="text-2xl">💡</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Creative Designer</p>
                      <p className="text-xs text-gray-500">UI/UX Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-sm font-semibold text-orange-500 tracking-wider uppercase">
                  About Me
                </h2>
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                  Crafting Digital Experiences with Passion & Purpose
                </h1>
              </div>

              <div className="space-y-6 text-gray-600">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="leading-relaxed"
                >
                  Hi! I&apos;m Dazzle Estaciones, a 4th-year IT student at Holy
                  Cross of Davao College. I specialize in creating clean,
                  user-friendly designs for mobile apps and websites, with a
                  keen eye for detail and documentation.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="leading-relaxed"
                >
                  One of my proudest achievements is our capstone project,
                  SMARTRAX: IoT-Enabled Bike Rentals, where I led the UI design
                  and documentation efforts.
                </motion.p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { number: "2+", label: "Years Experience" },
                  { number: "10+", label: "Projects Completed" },
                  { number: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center p-4 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-2xl font-bold text-orange-500">
                      {stat.number}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors duration-300"
                >
                  View Projects
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Contact Me
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Background Section */}
        <section
          id="background"
          className="max-w-7xl mx-auto px-4 py-16 sm:py-20 md:py-24"
        >
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              BACKGROUND
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My educational journey and professional experiences that shape who
              I am today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {timelineData.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl  flex items-center justify-center">
                    <span className="text-white text-xl">
                      {section.type === "Education"
                        ? "🎓"
                        : section.type === "Experience"
                        ? "💼"
                        : "🏆"}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {section.type}
                  </h2>
                </div>

                <div className="relative">
                  {section.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                      viewport={{ once: true }}
                      className="group relative pl-8 pb-8 last:pb-0"
                    >
                      <div className="absolute left-0 top-2 -ml-[6px]">
                        <div
                          className={`w-3 h-3 rounded-full border-2 border-white shadow-md ${
                            i === 0 ? "bg-orange-500" : "bg-gray-700"
                          } group-hover:scale-125 group-hover:bg-orange-500 transition-all duration-300`}
                        />
                        {i !== section.items.length - 1 && (
                          <div className="absolute top-3 left-[5px] w-[2px] h-full bg-gray-200 group-hover:bg-orange-200 transition-colors duration-300" />
                        )}
                      </div>

                      <div className="transform transition-all duration-300 hover:translate-x-2">
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                          {item.school}
                        </h3>
                        <p className="text-gray-600 mt-1">{item.degree}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <svg
                            className="w-4 h-4 text-orange-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-sm text-gray-500">
                            {item.duration}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
  id="projects"
  className="max-w-7xl mx-auto px-4 py-12 sm:py-16 bg-gray-50"
>
  <div className="text-center space-y-4 mb-16">
    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
      PROJECTS
    </h1>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Explore my latest works and creative endeavors in UI/UX design and
      web development.
    </p>
  </div>

  <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16 bg-gray-50">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      >
        {/* Image section with icon */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          {/* View Site Icon Button */}
          <div className="absolute top-2 right-2 group z-10">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/90 text-orange-600 hover:bg-orange-500 hover:text-white px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5H19.5V10.5M19.5 4.5L10.5 13.5M4.5 19.5H10.5V13.5"
                />
              </svg>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Full Site
              </span>
            </a>
          </div>

          {/* Project Image */}
          <Image
            src={project.image}
            alt={`${project.title} Screenshot`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            width={300}
            height={300}
          />
        </div>

        {/* Project Text Info */}
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
            {project.title}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap pt-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  tag === "UI/UX"
                    ? "bg-orange-100 text-orange-600"
                    : tag === "Mobile"
                    ? "bg-green-100 text-green-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

</section>
        {/* Contact Section */}
        <section id="Contact" className="relative py-20 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-slate-50"></div>
            <div className="absolute right-0 bottom-0 w-1/3 h-1/3">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-orange-500/10"
              >
                <path
                  fill="currentColor"
                  d="M37.5,-64.1C48.2,-56.6,56.1,-44.6,63.3,-31.5C70.4,-18.4,76.8,-4.2,75.2,9.2C73.6,22.6,64,35.2,52.9,44.6C41.8,53.9,29.2,60,15.6,63.5C2,67,-12.6,67.8,-25.5,63.6C-38.4,59.3,-49.6,50,-57.7,38.3C-65.8,26.6,-70.8,12.5,-70.9,-1.7C-71,-16,-66.2,-30.3,-57.5,-41.2C-48.7,-52.1,-36.1,-59.6,-23.8,-66C-11.6,-72.3,0.3,-77.5,12.3,-76.4C24.4,-75.4,36.5,-68.1,37.5,-64.1Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div className="absolute left-0 top-0 w-1/3 h-1/3 transform rotate-180">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-orange-500/10"
              >
                <path
                  fill="currentColor"
                  d="M37.5,-64.1C48.2,-56.6,56.1,-44.6,63.3,-31.5C70.4,-18.4,76.8,-4.2,75.2,9.2C73.6,22.6,64,35.2,52.9,44.6C41.8,53.9,29.2,60,15.6,63.5C2,67,-12.6,67.8,-25.5,63.6C-38.4,59.3,-49.6,50,-57.7,38.3C-65.8,26.6,-70.8,12.5,-70.9,-1.7C-71,-16,-66.2,-30.3,-57.5,-41.2C-48.7,-52.1,-36.1,-59.6,-23.8,-66C-11.6,-72.3,0.3,-77.5,12.3,-76.4C24.4,-75.4,36.5,-68.1,37.5,-64.1Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
          {/* Contact Column */}
          <div className="relative max-w-7xl mx-auto px-4" id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <span className="text-sm font-semibold text-orange-500 tracking-wider uppercase">
                    Get in Touch
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    Let&apos;s Build Something
                    <span className="block text-orange-500">
                      Amazing Together
                    </span>
                  </h1>
                  <p className="text-gray-600 max-w-lg">
                    Ready to transform your ideas into reality? I&apos;m here to
                    help bring your vision to life with creative solutions and
                    exceptional design.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      ),
                      title: "Email",
                      value: "dazzestaciones@gmail.com",
                      link: "https://mail.google.com/mail/u/0/#inbox",
                    },
                    {
                      icon: (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      ),
                      title: "Phone",
                      value: "+63 912 345 6789",
                      link: "#",
                    },
                    {
                      icon: (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      ),
                      title: "Location",
                      value: "Davao City, Philippines",
                      link: "#",
                    },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="flex gap-4">
                  {[
                    {
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48C19.14 20.17 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                      ),
                      label: "GitHub",
                      link: "https://github.com/Dazzle0101",
                    },
                    {
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.797c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.296h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                        </svg>
                      ),
                      label: "Facebook",
                      link: "https://www.facebook.com/jazzestaciones",
                    },
                    {
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      ),
                      label: "LinkedIn",
                      link: "https://www.linkedin.com/in/dazzle-estaciones-5a61121b7/",
                    },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-orange-500 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      aria-label={item.label}
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transform rotate-3 rounded-3xl opacity-10"></div>
                <div className="relative bg-white shadow-xl rounded-3xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-orange-500/10">
               <h2 className="text-lg font-semibold text-orange-500 mb-4">Get in Touch</h2>
                <p className="text-sm text-gray-600 mb-6">
                    Feel free to reach out by filling out the form below. Your message will be sent directly to my email, and I’ll get back to you as soon as possible.
                </p>
                  <form
                    action="https://formspree.io/f/mvgrkeoo" // 🔁 Replace with your actual Formspree form ID
                    method="POST"
                    className="space-y-6"
                  >
                    {/* Optional redirect after submit */}
                    <input type="hidden" name="_redirect" value="https://yourwebsite.com/thank-you" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-700"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-gray-700"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                        placeholder="Project Discussion"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-orange-500 text-white font-medium px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors duration-300"
                    >
                      Send Message
                      <FiSend className="text-lg" />
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

                {/* Certificates Section */}
        <section id="certifications" className="py-16 bg-gray-100">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              CERTIFICATIONS
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional certifications and achievements that validate my expertise
            </p>
          </div>
          {/* Carousel */}
          <div className="w-full max-w-7xl mx-auto overflow-x-auto px-4 sm:px-0">
            <div className="flex gap-4 snap-x snap-mandatory scroll-smooth touch-pan-x -mx-4 sm:mx-0 px-4 sm:px-0">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="snap-center shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative group"
                  >
                    <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-white shadow-lg">
                      <Image
                        src={cert}
                        alt={`Certificate ${index + 1}`}
                        height={300}
                        width={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Always visible on mobile, hover on desktop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                        <button
                          onClick={() => setSelectedCert(cert)}
                          className="bg-orange-500 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-medium transform translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-all duration-300"
                        >
                          View Certificate
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Hide arrows on mobile */}
          <div className="hidden sm:flex justify-center gap-2 mt-4">
            <CarouselPrevious className="hover:bg-orange-500 hover:text-white transition-colors" />
            <CarouselNext className="hover:bg-orange-500 hover:text-white transition-colors" />
          </div>

          {/* Modal Viewer */}
          <AnimatePresence>
            {selectedCert && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
              >
                <div className="relative w-full max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-2 right-2 text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition-all duration-200 p-2 rounded-full z-10 shadow-md w-10 h-10 flex items-center justify-center"
                  >
                    ✕
                  </button>

                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
                      <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-orange-500"></div>
                    </div>
                  )}

                  <Image
                    src={selectedCert}
                    alt="Full Certificate"
                    width={1000}
                    height={700}
                    className="w-full h-auto rounded"
                    onLoadingComplete={() => setImageLoaded(true)}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
        
  {/* Call to Action */}
        <section className="relative w-full py-20 overflow-hidden">
          <div className="absolute inset-0 bg-slate-800">
            <div className="absolute inset-0 bg-[url('/globe.svg')] opacity-10"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to Transform Your
                <span className="block text-orange-500">Digital Presence?</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Let&apos;s collaborate to create exceptional user experiences
                that drive results. From concept to completion, I&apos;m here to
                help you succeed in the digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  Start a Project
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#projects"
                  className="group bg-transparent border-2 border-white/20 hover:border-orange-500 text-white font-semibold px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  View Portfolio
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="hidden lg:block flex-1">
              <Image
                src="/window.svg"
                alt="Design Window"
                width={500}
                height={400}
                className="w-full max-w-[500px] mx-auto opacity-90"
              />
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-slate-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Dazzle</h3>
                <p className="text-sm text-gray-300">
                  Transforming ideas into beautiful digital experiences through
                  innovative UI/UX design.
                </p>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48C19.14 20.17 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                      ),
                      label: "GitHub",
                      link: "https://github.com/Dazzle0101",
                    },
                    {
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.797c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.296h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                        </svg>
                      ),
                      label: "Facebook",
                      link: "https://www.facebook.com/jazzestaciones",
                    },
                    {
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      ),
                      label: "LinkedIn",
                      link: "https://www.linkedin.com/in/dazzle-estaciones-5a61121b7/",
                    },
                  ].map((item, index: number) => (
                    <a
                      key={index}
                      href={item.link}
                      className="text-gray-300 hover:text-orange-500 transition"
                      aria-label={item.label}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-2">
                  {["Home", "About", "Background", "Projects", "Contact"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="text-gray-300 hover:text-orange-500 transition text-sm"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Services</h3>
                <ul className="space-y-2">
                  {[
                    "UI/UX Design",
                    "Web Development",
                    "Mobile App Design",
                    "Documentation",
                    "Consulting",
                  ].map((service) => (
                    <li key={service}>
                      <a
                        href="#contact"
                        className="text-gray-300 hover:text-orange-500 transition text-sm"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Info</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300 text-sm flex items-center space-x-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>dazzestaciones@gmail.com</span>
                  </li>
                  <li className="text-gray-300 text-sm flex items-center space-x-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>+63 912 345 6789</span>
                  </li>
                  <li className="text-gray-300 text-sm flex items-center space-x-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Davao City, Philippines</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-sm text-gray-300">
                  &copy; {new Date().getFullYear()} Dazzle Estaciones. All
                  rights reserved.
                </p>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-orange-500 transition"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-orange-500 transition"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
