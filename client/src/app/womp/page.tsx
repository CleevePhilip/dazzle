"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Section = ({
  children,
  bgColor,
  delay,
}: {
  children: React.ReactNode;
  bgColor: string;
  delay: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animate only once when section is visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    const target = document.getElementById(`section-${delay}`);
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [delay]);

  return (
    <motion.div
      id={`section-${delay}`}
      className={`h-screen flex items-center justify-center p-10 ${bgColor} rounded-2xl shadow-lg`}
      initial={{ opacity: 0, scale: 0.9, y: 50, rotate: 10 }} // Initial state (before animation)
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.9,
        y: isVisible ? 0 : 50,
        rotate: isVisible ? 0 : 10,
      }}
      transition={{
        duration: 1.5,
        delay: delay / 1000, // Apply staggered delay
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

const Page = () => {
  return (
    <div className="bg-gray-50">
      <Section delay={200} bgColor="bg-blue-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-700">Section 1</h1>
          <p className="mt-4 text-xl text-gray-700">
            This section slides, scales, and rotates into view with a delay.
          </p>
        </div>
      </Section>

      <Section delay={400} bgColor="bg-green-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-green-700">Section 2</h1>
          <p className="mt-4 text-xl text-gray-700">
            The animation effect continues for the next section.
          </p>
        </div>
      </Section>

      <Section delay={600} bgColor="bg-purple-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-purple-700">Section 3</h1>
          <p className="mt-4 text-xl text-gray-700">
            A nice bounce and scale effect makes this one stand out!
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Page;
