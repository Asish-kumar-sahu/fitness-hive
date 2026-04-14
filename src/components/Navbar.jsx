"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // scroll highlight (same)
 useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "services", "why", "testimonials", "membership", "contact"];

    const scrollPosition = window.scrollY + window.innerHeight / 3;

    let currentSection = "home";

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        if (scrollPosition >= element.offsetTop) {
          currentSection = id;
        }
      }
    });

    setActive(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 🔥 important

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* ===== DESKTOP (UNCHANGED) ===== */}
      {!isMobile && (
        <nav
          style={{
            padding: "15px 25px",
            position: "fixed",
            top: 0,
            width: "100%",
            backdropFilter: "blur(10px)",
            background: "rgba(0,0,0,0.4)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <img src="/logo.png" alt="logo" style={{ width: "50px" }} />
             <h1
  style={{
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "2px",
    marginTop: "17px", // 👈 yaha add karo
  }}
>
  <span style={{ color: "#facc15" }}>FITNESS</span>{" "}
  <span style={{ color: "white" }}>HIVE</span>
</h1>
            </div>

            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: "25px",
                fontSize: "14px",
              }}
            >
              <a href="#home" style={{ color: active === "home" ? "#facc15" : "white" }}>Home</a>
              <a href="#services" style={{ color: active === "services" ? "#facc15" : "white" }}>Services</a>
              <a href="#why" style={{ color: active === "why" ? "#facc15" : "white" }}>Why Choose Us</a>
              <a href="#testimonials" style={{ color: active === "testimonials" ? "#facc15" : "white" }}>Testimonials</a>
              <a href="#membership" style={{ color: active === "membership" ? "#facc15" : "white" }}>Membership</a>
              <a href="#contact" style={{ color: active === "contact" ? "#facc15" : "white" }}>Contact</a>

              <a href="https://www.instagram.com/fitnesshive_official/?hl=en" target="_blank">
                <FaInstagram size={20} color="white" />
              </a>

              <a href="https://www.facebook.com/p/Fitness-Hive-Bengaluru-61569802387436/" target="_blank">
                <FaFacebook size={20} color="white" />
              </a>

              <a href="tel:9482306515">
                <button
                  style={{
                    background: "#facc15",
                    color: "black",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    border: "none",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Contact Now
                </button>
              </a>
            </div>
          </div>
        </nav>
      )}

      {/* ===== MOBILE NAVBAR ===== */}
      {isMobile && (
        <nav
          style={{
            padding: "12px 15px",
            position: "fixed",
            top: 0,
            width: "100%",
            backdropFilter: "blur(10px)",
            background: "rgba(0,0,0,0.4)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaBars color="white" size={20} onClick={() => setMenuOpen(true)} />

          <div style={{ margin: "0 auto", display: "flex", alignItems: "center", gap: "8px" }}>
            <img src="/logo.png" style={{ width: "35px" }} />
            <span style={{ fontWeight: "700" }}>
              <span style={{ color: "#facc15" }}>FITNESS</span>{" "}
              <span style={{ color: "white" }}>HIVE</span>
            </span>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <a href="https://www.instagram.com/fitnesshive_official/?hl=en" target="_blank">
              <FaInstagram color="white" />
            </a>

            <a href="https://www.facebook.com/p/Fitness-Hive-Bengaluru-61569802387436/" target="_blank">
              <FaFacebook color="white" />
            </a>
          </div>
        </nav>
      )}

      {/* ===== OVERLAY ===== */}
      {menuOpen && isMobile && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(6px)",
            zIndex: 1500,
          }}
        />
      )}

      {/* ===== MOBILE MENU ===== */}
      {isMobile && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "fixed",
            top: 0,
            left: menuOpen ? "0" : "-100%",
            width: "75%",
            height: "100vh",
            background: "black",
            padding: "20px",
            transition: "0.4s",
            zIndex: 2000,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 style={{ color: "white" }}>
              <span style={{ color: "#facc15" }}>FITNESS</span> HIVE
            </h2>

            <FaTimes
              color="white"
              size={22}
              style={{ cursor: "pointer" }}
              onClick={() => setMenuOpen(false)}
            />
          </div>

          <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "20px", color: "white" }}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#why" onClick={() => setMenuOpen(false)}>Why Choose Us</a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
            <a href="#membership" onClick={() => setMenuOpen(false)}>Membership</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>

          <div style={{ marginTop: "40px" }}>
            <a href="https://wa.me/919482306515">
              <button
                style={{
                  background: "#facc15",
                  width: "100%",
                  padding: "14px",
                  borderRadius: "30px",
                  fontWeight: "600",
                }}
              >
                WhatsApp Us
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}