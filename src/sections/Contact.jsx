"use client";

import { useState } from "react";
import { FaInstagram, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hi, I'm ${form.name}%0APhone: ${form.phone}%0A${form.message}`;
    window.open(`https://wa.me/919482306515?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      style={{
        background: "black",
        padding: "100px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* 🔥 HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ fontSize: "42px", fontWeight: "700" }}>
            Contact <span style={{ color: "#facc15" }}>Us</span>
          </h2>

          <p
            style={{
              color: "#aaa",
              marginTop: "10px",
              maxWidth: "500px",
            }}
          >
            Let’s start your fitness journey today 💪
          </p>
        </div>

        {/* 🔥 GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
            alignItems: "center",
          }}
        >

          {/* 🔥 LEFT SIDE */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3 style={{ color: "#facc15", marginBottom: "15px" }}>
              Get In Touch
            </h3>

            <p style={{ color: "#bbb", marginBottom: "25px" }}>
              Visit us or contact us directly. We’re here to help you transform your body and lifestyle.
            </p>

            {/* INFO */}
            <div style={{ color: "#ccc", lineHeight: "2.2" }}>
              <div><MdLocationOn /> Bangalore, India</div>
              <div><FaPhoneAlt /> +91 9482306515</div>
              <div><MdEmail /> fitnesshiveofficial@gmail.com</div>
              <div>🕒 Mon - Sun : 6AM - 10PM</div>
            </div>

            {/* SOCIAL */}
            <div style={{ marginTop: "25px", display: "flex", gap: "15px" }}>
              <a href="https://www.instagram.com/fitnesshive_official/" target="_blank">
                <div style={iconStyle}><FaInstagram /></div>
              </a>

              <a href="https://www.facebook.com/p/Fitness-Hive-Bengaluru-61569802387436/" target="_blank">
                <div style={iconStyle}><FaFacebookF /></div>
              </a>
            </div>

            {/* BUTTONS */}
            <div style={{ marginTop: "30px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="https://wa.me/919482306515" target="_blank" style={waBtn}>
                WhatsApp
              </a>

              <a href="tel:9482306515" style={callBtn}>
                Call Now
              </a>
            </div>
          </div>

          {/* 🔥 RIGHT SIDE FORM */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              rows="4"
              style={inputStyle}
            />

            <button type="submit" style={btnStyle}>
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* 🔥 STYLES */

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #333",
  background: "#111",
  color: "white",
};

const btnStyle = {
  width: "100%",
  background: "#facc15",
  padding: "14px",
  borderRadius: "30px",
  border: "none",
  fontWeight: "700",
  cursor: "pointer",
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
};

const waBtn = {
  background: "#25D366",
  padding: "10px 18px",
  borderRadius: "30px",
  color: "black",
  fontWeight: "600",
  textDecoration: "none",
};

const callBtn = {
  background: "#facc15",
  padding: "10px 18px",
  borderRadius: "30px",
  color: "black",
  fontWeight: "600",
  textDecoration: "none",
};