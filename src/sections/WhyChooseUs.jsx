"use client";

import { useEffect, useRef, useState } from "react";
import { FaDumbbell, FaUserTie, FaRupeeSign, FaHeartbeat } from "react-icons/fa";
import { GiMuscleUp, GiGymBag } from "react-icons/gi";

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const data = [
    {
      title: "Expert Trainers",
      icon: <FaUserTie size={32} />,
      desc: "Certified trainers guiding you properly.",
    },
    {
      title: "Modern Equipment",
      icon: <FaDumbbell size={32} />,
      desc: "Latest machines for best performance.",
    },
    {
      title: "Personal Plans",
      icon: <GiGymBag size={32} />,
      desc: "Customized workout & diet plans.",
    },
    {
      title: "Affordable Pricing",
      icon: <FaRupeeSign size={32} />,
      desc: "Best value packages for everyone.",
    },
    {
      title: "Great Environment",
      icon: <FaHeartbeat size={32} />,
      desc: "Motivating and energetic vibe.",
    },
    {
      title: "Proven Results",
      icon: <GiMuscleUp size={32} />,
      desc: "Real transformation and progress.",
    },
  ];

  return (
    <section
      id="why"
      ref={sectionRef}
      style={{
        background: "#0a0a0a",
        padding: "100px 20px",
        color: "white",
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "70px" }}>
        <h2 style={{ fontSize: "40px" }}>
          Why <span style={{ color: "#facc15" }}>Choose Us</span>
        </h2>
        <p
  style={{
    color: "#aaa",
    marginTop: "10px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  }}
>
          We provide everything you need to achieve your fitness goals
        </p>
      </div>

      {/* GRID */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          textAlign: "center",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0px)"
                : "translateY(60px)",
              transition: `all 0.6s ease ${index * 0.15}s`,
            }}
          >
            {/* 🔥 CIRCLE ICON */}
            <div
              style={{
                width: "90px",
                height: "90px",
                margin: "0 auto 20px",
                borderRadius: "50%",
                background: "#111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(250,204,21,0.2)",
                transition: "0.4s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(250,204,21,0.6)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(250,204,21,0.2)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div
                style={{
                  color: "#facc15",
                  filter:
                    "drop-shadow(0 0 10px rgba(250,204,21,0.8))",
                }}
              >
                {item.icon}
              </div>
            </div>

            {/* TITLE */}
            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>
              {item.title}
            </h3>

            {/* TEXT */}
            <p style={{ color: "#aaa", fontSize: "14px" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}