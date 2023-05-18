import Navbar from "../pages/components/Navbar";
import Banner from "../pages/components/Banner";
import Testimonials from "../pages/components/Testimonials";
import Hero from "../pages/components/Hero";
import Email from "../pages/components/Email";
import Footer from "../pages/components/Footer";
import Article from "../pages/components/Article";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Navbar />
      <Hero />
      <Testimonials />
      <Article />
      <Email />
      <Footer />
    </main>
  );
}
