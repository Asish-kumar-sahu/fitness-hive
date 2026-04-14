"use client";

import { useEffect, useState } from "react";

export default function Membership() {
  const [timeLeft, setTimeLeft] = useState(86400); // 24 hours

  // ⏳ TIMER
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const plans = [
    {
      title: "3 Months",
      price: "₹3999",
      features: [
        "Full Gym Access",
        "Basic Trainer Support",
        "Cardio + Strength Area",
        "Locker Facility",
      ],
    },
    {
      title: "6 Months",
      price: "₹5999",
      features: [
        "Full Gym Access",
        "Trainer Guidance",
        "All Equipment Access",
        "Diet Suggestions",
      ],
    },
    {
      title: "12 Months",
      price: "₹7999",
      oldPrice: "₹15000",
      highlight: true,
      tag: "Best Value + 3 Months Free",
      features: [
        "Full Gym Access",
        "Personal Trainer Support",
        "Diet Plan + Progress Tracking",
        "All Classes Included",
        "Priority Support",
      ],
    },
  ];

  return (
    <section
      id="membership"
      style={{
        background: "black",
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      {/* 🔥 TITLE */}
      <h2 style={{ fontSize: "42px" }}>
        Membership <span style={{ color: "#facc15" }}>Plans</span>
      </h2>

      {/* 🔥 SUBTEXT */}
      <p
        style={{
          color: "#aaa",
          marginTop: "10px",
          marginBottom: "20px",
          textAlign: "center",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Choose the plan that fits your fitness journey
      </p>

      {/* 🔥 BLINKING OFFER */}
      <div
        style={{
          color: "#facc15",
          fontWeight: "600",
          marginBottom: "10px",
          animation: "blink 1.2s infinite",
        }}
      >
        ⚡ Limited Time Offer – Grab Now!
      </div>

      {/* 🔥 TIMER */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "60px",
        }}
      >
        {[hours, minutes, seconds].map((t, i) => (
          <div
            key={i}
            style={{
              background: "#111",
              padding: "10px 15px",
              borderRadius: "10px",
              border: "1px solid #facc15",
              boxShadow: "0 0 10px rgba(250,204,21,0.3)",
            }}
          >
            <div style={{ color: "#facc15", fontSize: "20px" }}>
              {t.toString().padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 CARDS */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              background: plan.highlight
                ? "linear-gradient(145deg, #111, #1a1a1a)"
                : "#111",
              borderRadius: "20px",
              padding: "30px",
              border: plan.highlight
                ? "2px solid #facc15"
                : "1px solid rgba(255,255,255,0.1)",
              transform: plan.highlight ? "scale(1.05)" : "scale(1)",
              transition: "0.4s",
              boxShadow: plan.highlight
                ? "0 0 40px rgba(250,204,21,0.3)"
                : "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = plan.highlight
                ? "scale(1.05)"
                : "scale(1)";
            }}
          >
            {/* TAG */}
            {plan.tag && (
              <div
                style={{
                  background: "#facc15",
                  color: "black",
                  fontSize: "12px",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  marginBottom: "15px",
                  display: "inline-block",
                  fontWeight: "600",
                }}
              >
                {plan.tag}
              </div>
            )}

            {/* TITLE */}
            <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
              {plan.title}
            </h3>

            {/* PRICE */}
            <div style={{ marginBottom: "20px" }}>
              {plan.oldPrice && (
                <div
                  style={{
                    color: "#888",
                    textDecoration: "line-through",
                  }}
                >
                  {plan.oldPrice}
                </div>
              )}

              <div
                style={{
                  fontSize: "32px",
                  color: "#facc15",
                  fontWeight: "700",
                }}
              >
                {plan.price}
              </div>
            </div>

            {/* FEATURES */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginBottom: "25px",
                color: "#ccc",
                fontSize: "14px",
                lineHeight: "1.8",
              }}
            >
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            {/* BUTTON */}
            <a
              href="https://wa.me/919482306515"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  background: "#facc15",
                  color: "black",
                  padding: "10px 25px",
                  borderRadius: "30px",
                  border: "none",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Join Now
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}