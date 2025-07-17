"use client";

import { useState } from 'react';
import { Menu, X, Home, User, Briefcase, Sparkles, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const navigation = [
  { id: 'home', label: 'Home', icon: Home, gradient: 'from-cyan-500 to-blue-500' },
  { id: 'about', label: 'About', icon: User, gradient: 'from-pink-500 to-purple-500' },
  { id: 'services', label: 'Services', icon: Briefcase, gradient: 'from-yellow-500 to-orange-500' },
];

export default function Sidebar({ 
  activeSection, 
  setActiveSection, 
  isSidebarOpen, 
  setSidebarOpen 
}: SidebarProps) {
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setSidebarOpen(false);
  };

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Desktop: Fixed Sidebar Panel */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-24 glass-ultra z-30 border-r border-cyan-500/30">
        {/* Holographic Background */}
        <div className="absolute inset-0 holographic-bg opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-pink-500/10 to-yellow-500/10"></div>
      </div>
      
      {/* Desktop: Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="hidden lg:block fixed top-1/2 left-4 transform -translate-y-1/2 z-50 p-4 glass-neon rounded-2xl cyber-glow hover:scale-110 transition-all duration-300"
      >
        <Menu size={24} className="text-white electric-effect" />
      </button>

      {/* Mobile: Top Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-20 glass-ultra border-b border-cyan-500/30 z-30">
        {/* Holographic Background */}
        <div className="absolute inset-0 holographic-bg opacity-30"></div>
        
        {/* Navbar Content */}
        <div className="relative h-full flex items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-cyan-400 electric-effect" />
            <h1 className="text-2xl font-black holographic-bg bg-clip-text text-transparent">
              KreatorKit
            </h1>
          </div>
          
          {/* Hamburger Button */}
          <button
            onClick={toggleSidebar}
            className="p-3 glass-neon rounded-2xl cyber-glow hover:scale-110 transition-all duration-300"
          >
            <Menu size={24} className="text-white electric-effect" />
          </button>
        </div>
      </div>

      {/* Fullscreen Navigation Overlay */}
      <div className={cn(
        "fixed inset-0 glass-ultra z-40 transform transition-all duration-700 ease-in-out overflow-y-auto",
        isSidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      )}>
        {/* Enhanced Background */}
        <div className="absolute inset-0 gradient-wave-bg"></div>
        <div className="absolute inset-0 holographic-bg opacity-40"></div>
        
        {/* Particle Field */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full floating-orb opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-8 right-8 p-4 glass-neon rounded-2xl cyber-glow hover:scale-110 transition-all duration-300 z-50"
        >
          <X size={28} className="text-white electric-effect" />
        </button>

        {/* Logo */}
        <div className="absolute top-8 left-8 z-50">
          <div className="flex items-center space-x-3">
            <Zap className="w-10 h-10 text-yellow-400 electric-effect" />
            <div>
              <h1 className="text-3xl font-black holographic-bg bg-clip-text text-transparent neon-text">
                KreatorKit
              </h1>
              <p className="text-cyan-300/80 text-sm font-semibold">Digital Excellence</p>
            </div>
          </div>
        </div>

        {/* Centered Navigation */}
        <div className="flex flex-col items-center justify-center h-full px-6 py-24 relative z-10">
          <nav className="w-full max-w-lg">
            <div className="flex flex-col items-center justify-center gap-8 w-full">
              {navigation.map(({ id, label, icon: Icon, gradient }, index) => {
                const isActive = activeSection === id;
                return (
                  <div
                    key={id}
                    className={cn(
                      "w-full transform transition-all duration-700",
                      isSidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                    )}
                    style={{
                      transitionDelay: isSidebarOpen ? `${index * 200}ms` : '0ms'
                    }}
                  >
                    <button
                      onClick={() => handleNavClick(id)}
                      className={cn(
                        "group flex flex-row items-center space-x-6 p-6 rounded-3xl transition-all duration-500 w-full relative overflow-hidden",
                        isActive 
                          ? 'glass-neon cyber-glow scale-105' 
                          : 'glass-ultra hover:glass-neon hover:scale-105'
                      )}
                    >
                      {/* Background Animation */}
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-30 transition-opacity duration-500",
                        gradient
                      )}></div>
                      
                      {/* Icon Container */}
                      <div className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 relative z-10",
                        isActive 
                          ? `bg-gradient-to-r ${gradient} cyber-glow` 
                          : `glass-neon group-hover:bg-gradient-to-r group-hover:${gradient}`
                      )}>
                        <Icon 
                          size={32} 
                          className={cn(
                            "transition-all duration-300",
                            isActive ? "text-white electric-effect" : "text-cyan-300 group-hover:text-white group-hover:scale-110"
                          )} 
                        />
                      </div>
                      
                      {/* Label */}
                      <span className={cn(
                        "text-2xl font-bold transition-all duration-300 relative z-10",
                        isActive 
                          ? "text-white neon-text" 
                          : "text-cyan-200 group-hover:text-white"
                      )}>
                        {label}
                      </span>
                      
                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute right-6 w-3 h-3 bg-cyan-400 rounded-full electric-effect"></div>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Bottom CTA */}
        <div className="fixed bottom-8 left-0 right-0 px-6 z-10">
          <div className={cn(
            "max-w-lg mx-auto transform transition-all duration-700",
            isSidebarOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
          style={{ transitionDelay: isSidebarOpen ? '600ms' : '0ms' }}>
            <div className="text-center mb-6">
              <p className="text-cyan-300/80 text-lg font-semibold mb-2">Ready to transform your vision?</p>
              <p className="text-white/60 text-sm">Let's create something extraordinary together</p>
            </div>
            
            <button className="w-full btn-cyber py-4 rounded-2xl text-lg font-bold transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <Sparkles className="w-6 h-6" />
                <span>START YOUR PROJECT</span>
                <Zap className="w-6 h-6" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}