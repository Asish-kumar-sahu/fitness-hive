"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 📱 detect mobile
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // 🎬 play/pause + animation reset
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();

            setAnimate(false);
            setTimeout(() => setAnimate(true), 50);
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.7,
        }}
      >
        <source
          src={isMobile ? "/hero-video-mobile.mp4" : "/hero-video.mp4"}
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)",
        }}
      />

      {/* CONTENT (same as before) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "white",
          padding: "0 20px",
        }}
      >
        <h1 className={animate ? "fadeUp" : ""}>
          Transform Your Body <br />
          <span style={{ color: "#facc15" }}>make the payment of your website</span>
        </h1>

        <p className={animate ? "fadeUp delay1" : ""}>
          A gym is not just a place for exercise; it’s a space to unwind,
          socialize, and stay fit. We offer group classes, Zumba, Power Yoga,
          Personal Training, and Kickboxing.
        </p>

        <a
          href="https://wa.me/919482306515?text=Hi%20I%20want%20to%20join%20Fitness%20Hive"
          target="_blank"
        >
          <button className={animate ? "fadeUp delay2" : ""}>
            Join Now
          </button>
        </a>
      </div>
    </section>
  );
}