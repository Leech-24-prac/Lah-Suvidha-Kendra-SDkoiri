import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { CategoryCards } from './components/CategoryCards';
import { ProductCatalog } from './components/ProductCatalog';
import { LacSeedsShowcase } from './components/LacSeedsShowcase';
import { BroodCalculator } from './components/BroodCalculator';
import { SeasonalCalendar } from './components/SeasonalCalendar';
import { BookingAppointment } from './components/BookingAppointment';
import { FarmerSection } from './components/FarmerSection';
import { KnowledgeHub } from './components/KnowledgeHub';
import { B2BSection } from './components/B2BSection';
import { InternationalSection } from './components/InternationalSection';
import { GallerySection } from './components/GallerySection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleSelectCategory = (catId: 'materials' | 'products' | 'equipment' | 'inputs') => {
    setSelectedCategory(catId);
    const elem = document.getElementById('products');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FAF7F2] text-[#2C241E] flex flex-col font-sans selection:bg-[#6E1B24] selection:text-white">
        {/* Top Header & Sticky Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* 4 Feature Trust Bar */}
          <TrustBar />

          {/* About Section: 25+ Years of Experience in Lac Industry & Shri Shakti Dhar Koiri */}
          <AboutSection />

          {/* Product Categories Overview Cards with Direct Anchors */}
          <CategoryCards onSelectCategory={handleSelectCategory} />

          {/* Comprehensive Product Catalogue with 4 Categories */}
          <ProductCatalog
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Dedicated Lac Seeds in Photo Showcase Section */}
          <LacSeedsShowcase />

          {/* Farmer Planning Tool: Brood Lac & Seed Requirement Calculator */}
          <BroodCalculator />

          {/* Seasonal Crop Cycle & Advance Booking Calendar */}
          <SeasonalCalendar />

          {/* Consultation & Brood Reservation Booking (Connected to Supabase Database) */}
          <BookingAppointment />

          {/* Farmers Section: Everything You Need for Lac Cultivation */}
          <FarmerSection />

          {/* Lac Knowledge Hub: Understanding Lac, Process Flow, Kusmi vs Rangini */}
          <KnowledgeHub />

          {/* B2B Commercial Supplies Section & Interactive Enquiry Form */}
          <B2BSection />

          {/* For International Buyers */}
          <InternationalSection />

          {/* Lac Cultivation & Product Gallery with Lightbox Inspection */}
          <GallerySection />

          {/* Comprehensive FAQ Section */}
          <FAQSection />

          {/* Contact Coordinates & Inquiries */}
          <ContactSection />
        </main>

        {/* Site Footer */}
        <Footer />

        {/* Floating Bottom-Right WhatsApp Component */}
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
