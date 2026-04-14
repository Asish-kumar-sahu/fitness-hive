"use client";

import { FaInstagram, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        padding: "60px 20px 20px",
        borderTop: "1px solid #222",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* 🔥 TOP GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* 🟡 BRAND */}
          <div>
            <h2 style={{ color: "#facc15", marginBottom: "15px" }}>
              FITNESS HIVE
            </h2>

            <p style={{ color: "#aaa", lineHeight: "1.7" }}>
              Transform your body, boost your confidence, and become the best
              version of yourself with Fitness Hive.
            </p>
          </div>

          {/* 🟡 QUICK LINKS */}
          <div>
            <h3 style={heading}>Quick Links</h3>

            <div style={linkBox}>
              <a href="#home" style={link}>Home</a>
              <a href="#services" style={link}>Services</a>
              <a href="#why" style={link}>Why Choose Us</a>
              <a href="#testimonials" style={link}>Testimonials</a>
              <a href="#membership" style={link}>Membership</a>
              <a href="#contact" style={link}>Contact</a>
            </div>
          </div>

          {/* 🟡 CONTACT INFO */}
          <div>
            <h3 style={heading}>Contact Info</h3>

            <div style={{ color: "#ccc", lineHeight: "2" }}>
              <div><MdLocationOn /> Bangalore, India</div>
              <div><FaPhoneAlt /> +91 9482306515</div>
              <div><MdEmail /> fitnesshiveofficial@gmail.com</div>
            </div>
          </div>

          {/* 🟡 SOCIAL + CTA */}
          <div>
            <h3 style={heading}>Follow Us</h3>

            <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
              <a href="https://www.instagram.com/fitnesshive_official/" target="_blank">
                <div style={iconStyle}><FaInstagram /></div>
              </a>

              <a href="https://www.facebook.com/p/Fitness-Hive-Bengaluru-61569802387436/" target="_blank">
                <div style={iconStyle}><FaFacebookF /></div>
              </a>
            </div>

            <a
              href="https://wa.me/919482306515"
              target="_blank"
              style={{
                background: "#facc15",
                padding: "12px 20px",
                borderRadius: "30px",
                color: "black",
                fontWeight: "600",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Join Now 🚀
            </a>
          </div>
        </div>

        {/* 🔥 BOTTOM */}
        <div
          style={{
            borderTop: "1px solid #222",
            paddingTop: "20px",
            textAlign: "center",
            color: "#777",
            fontSize: "14px",
          }}
        >
          © {new Date().getFullYear()} Fitness Hive. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

/* 🔥 STYLES */

const heading = {
  color: "#facc15",
  marginBottom: "15px",
};

const linkBox = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const link = {
  color: "#aaa",
  textDecoration: "none",
  transition: "0.3s",
};

const iconStyle = {
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  background: "#111",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#facc15",
  border: "1px solid #333",
  cursor: "pointer",
};