"use client";

import { useState, useEffect } from "react";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // 🔥 detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const reviews = [
    {
      name: "Preetham Madyastha",
      image: "/Preetham.png",
      review:
        "Gym is an amazing place to train. Always clean, well-equipped, and has a great motivating atmosphere. Coach Nayan is professional and supportive.",
    },
    {
      name: "Prince Anand",
      image: "/prince.png",
      review:
        "Fitness Hive gave me motivation and energy. Trainers are supportive and environment is amazing.",
    },
    {
      name: "Poornima Vivek",
      image: "/poornima.png",
      review:
        "Very well-equipped gym with positive environment. Trainers give personal attention.",
    },
    {
      name: "Sushmitha KC",
      image: "/sus.png",
      review:
        "Clean gym with great vibe. Perfect place for consistent workouts.",
    },
    {
      name: "Raj Kumar",
      image: "/raj.png",
      review:
        "Great energy and knowledgeable trainers. Seeing real results.",
    },
    {
      name: "Manju Nath",
      image: "/manju.png",
      review:
        "Front desk response is quick. Equipment quality is very good.",
    },
    {
      name: "Pravin Atluri",
      image: "/pravin.png",
      review:
        "One of the best decisions for my fitness journey.",
    },
  ];

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      style={{
        background: "black",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "60px",
        }}
      >
        {/* 🔥 LEFT SIDE */}
        <div
          style={{
            position: "relative",
            width: isMobile ? "100%" : "300px",
          }}
        >
          {/* LINE (desktop only) */}
          {!isMobile && (
            <div
              style={{
                position: "absolute",
                left: "30px",
                top: 0,
                bottom: 0,
                width: "2px",
                background: "#333",
              }}
            />
          )}

          {reviews.map((item, index) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "25px",
                cursor: "pointer",
                gap: "15px",
              }}
            >
              {/* IMAGE */}
              <div
                style={{
                  minWidth: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border:
                    active === index
                      ? "2px solid #facc15"
                      : "2px solid #444",
                  boxShadow:
                    active === index
                      ? "0 0 15px #facc15"
                      : "none",
                  transition: "0.3s",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* TEXT SIDE */}
              <div style={{ flex: 1 }}>
                {/* NAME */}
                <div
                  style={{
                    color: active === index ? "#facc15" : "#fff",
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </div>

                {/* ⭐ RATING */}
                <div
                  style={{
                    color: "#facc15",
                    fontSize: "13px",
                    margin: "4px 0",
                  }}
                >
                  ★★★★★
                </div>

                {/* 🔥 MOBILE ONLY REVIEW PREVIEW */}
                {isMobile && (
                  <div
                    style={{
                      color: "#aaa",
                      fontSize: "13px",
                      lineHeight: "1.5",
                    }}
                  >
                    {item.review.slice(0, 70)}...
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 RIGHT SIDE (HIDE ON MOBILE) */}
        {!isMobile && (
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
              Customer <span style={{ color: "#facc15" }}>Reviews</span>
            </h2>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "40px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p
                key={active}
                style={{
                  color: "#ccc",
                  fontSize: "18px",
                  lineHeight: "1.8",
                  transition: "0.5s",
                }}
              >
                “{reviews[active].review}”
              </p>

              <h3
                style={{
                  marginTop: "20px",
                  color: "#facc15",
                }}
              >
                {reviews[active].name}
              </h3>

              <div style={{ color: "#facc15" }}>★★★★★</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}