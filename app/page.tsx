"use client";

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  from-[#020617] via-[#0b1120] to-[#0c1a35]

 text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      {/* Main Content - Now full width and centered */}
      <main className="relative min-h-screen w-full">
        <div className="h-full">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}