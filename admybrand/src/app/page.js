import FAQSection from './components/faqs';
import FeaturesSection from './components/features';
import Footer from './components/footer';
import Hero from './components/hero';
import PricingSection from './components/pricing';
import TestimonialCarousel from './components/reviews';
import VideoFrame from './components/video';


export default function Home() {
  return (
    <div>
      <Hero />
      <VideoFrame />
      <FeaturesSection />
      <PricingSection />
      <TestimonialCarousel />
      <FAQSection />  
      <Footer />
    </div>
  );
}
