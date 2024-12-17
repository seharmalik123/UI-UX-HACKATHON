import Announcement from "@/components/Announcement";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoSection from "@/components/Logo";
import Products from "./Products/page";
import Top_sell from "./Products/sell";
import DressStyle from "@/components/DressStyle/page";
import RatingReviews from "@/components/Ratings";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <div>
     <Announcement />
     <Header />
     <Hero />
     <LogoSection />
     <Products />
     <Top_sell />
     <DressStyle />
     <RatingReviews />
     <Footer />
    
    </div>
  );
}
