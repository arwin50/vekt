import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex flex-col">
        <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-80px)]">
          <HeroSection />
        </div>
        <SolutionsSection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
