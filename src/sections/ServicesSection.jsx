"use client";

import { useEffect, useRef, useState } from "react";

export default function ServicesSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // 🔥 Scroll Animation (हर बार view में आए तो trigger)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const services = [
    {
      title: "Group Classes",
      image: "/group.png",
      desc: "Train together in a motivating group environment with structured sessions for consistency and better results.",
    },
    {
      title: "Zumba",
      image: "/zumba.png",
      desc: "Fun and energetic dance workouts that help burn calories, boost stamina, and improve mood.",
    },
    {
      title: "Power Yoga",
      image: "/yoga.png",
      desc: "Enhance flexibility, balance, and strength with guided yoga sessions for mind and body wellness.",
    },
    {
      title: "Personal Training",
      image: "/pt.png",
      desc: "Get personalized one-on-one coaching tailored to your goals with expert trainers.",
    },
    {
      title: "Kickboxing",
      image: "/kick.png",
      desc: "High-energy training combining strength and cardio to build power and confidence.",
    },
    {
      title: "Weight Training",
      image: "/weight.png",
      desc: "Build muscle, strength, and endurance with professional guidance and modern equipment.",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        background: "black",
        padding: "100px 20px",
      }}
    >
      {/* 🔥 HEADER */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "700",
          }}
        >
          Our <span style={{ color: "#facc15" }}>Services</span>
        </h2>

        <p
          style={{
            color: "#aaa",
            marginTop: "10px",
            fontSize: "16px",
            maxWidth: "600px",
            margin: "10px auto 0",
          }}
        >
          Everything you need to transform your body and lifestyle
        </p>
      </div>

      {/* 🔥 GRID */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {services.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#111",
              borderRadius: "16px",
              overflow: "hidden",
              transition: "all 0.5s ease",
              transform: visible
                ? "translateY(0px)"
                : "translateY(60px)",
              opacity: visible ? 1 : 0,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(255, 204, 21, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px) scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            {/* CONTENT */}
            <div style={{ padding: "20px" }}>
              <h3
                style={{
                  color: "#facc15",
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#ccc",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}