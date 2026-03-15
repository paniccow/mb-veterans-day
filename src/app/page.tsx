import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramSection from "@/components/ProgramSection";
import MilitaryDisplaysSection from "@/components/MilitaryDisplaysSection";
import StudentSection from "@/components/StudentSection";
import VeteranOutreachSection from "@/components/VeteranOutreachSection";
import PublicitySection from "@/components/PublicitySection";
import VendorSignupSection from "@/components/VendorSignupSection";
import AttendeeRegisterSection from "@/components/AttendeeRegisterSection";
import CommitteeSection from "@/components/CommitteeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117]">
      <Navbar />
      <HeroSection />
      <ProgramSection />
      <MilitaryDisplaysSection />
      <StudentSection />
      <VeteranOutreachSection />
      <PublicitySection />
      <VendorSignupSection />
      <AttendeeRegisterSection />
      <CommitteeSection />
      <Footer />
    </main>
  );
}
