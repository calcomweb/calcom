import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CommunityCards from "@/components/home/CommunityCards";
import CommunityMessage from "@/components/home/CommunityMessage";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CommunityMessage />
        <CommunityCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
