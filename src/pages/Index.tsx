import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import GeometricBackground from '@/components/GeometricBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <GeometricBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <SolutionsSection />
        <TeamSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;