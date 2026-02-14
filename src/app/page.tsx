import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import NewAndNoteworthy from "@/components/sections/service-categories";
import PopularServices from "@/components/sections/popular-services";
import HowItWorks from "@/components/sections/how-it-works";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <NewAndNoteworthy />
      <PopularServices />
      <HowItWorks />
      <Footer />
    </div>
  );
}
