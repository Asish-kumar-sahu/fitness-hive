import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Testimonials from "@/sections/Testimonials";
import Membership from "@/sections/Membership";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

<WhyChooseUs />
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <Membership />
      <Contact />
      <Footer />
    </>
  );
}