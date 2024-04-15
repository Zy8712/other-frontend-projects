import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ReviewsSection from "./components/ReviewsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

export default function ChirpLandingPage(){
    return(
        <>
            <div className="w-screen min-h-screen flex flex-col font-theme-inter">
                <HeroSection />
                <FeaturesSection />
                <ReviewsSection />
                <PricingSection />
                <Footer />
            </div>
        </>
    );
}