"use client";

import { useState } from 'react';
import { Menu, X, Home, User, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const navigation = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'services', label: 'Services', icon: Briefcase },
];

export default function Sidebar({ 
  activeSection, 
  setActiveSection, 
  isSidebarOpen, 
  setSidebarOpen 
}: SidebarProps) {
  const router = useRouter();

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setSidebarOpen(false);
  };

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Desktop: Fixed Sidebar Panel - Always visible with glassmorphism */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-20 backdrop-blur-2xl border-r border-white/20 z-30 shadow-2xl">
        {/* Glassmorphism Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_50%)] backdrop-blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Desktop: Hamburger Button - Fixed position */}
      <button
        onClick={toggleSidebar}
        className="hidden lg:block fixed top-1/2 left-3 transform -translate-y-1/2 z-50 p-4 backdrop-blur-2xl rounded-2xl transition-all duration-300 hover:scale-105"
      >
        <Menu size={24} className="text-white drop-shadow-lg" />
      </button>

      {/* Mobile: Top Navbar with glassmorphism */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-2xl border-b border-white/20 z-30 shadow-2xl">
        {/* Glassmorphism Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_50%)] backdrop-blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        
        {/* Navbar Content */}
        <div className="relative h-full flex items-center justify-between px-4">
          {/* Logo - Left side */}
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              KreatorKit
            </h1>
          </div>
          
          {/* Hamburger Button - Right side */}
          <button
            onClick={toggleSidebar}
            className="p-3 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 hover:scale-105"
          >
            <Menu size={20} className="text-white drop-shadow-lg" />
          </button>
        </div>
      </div>

      {/* Fullscreen Navigation Overlay - Slides from LEFT */}
      <div className={cn(
        "fixed inset-0 bg-gradient-to-br from-black via-slate-900 to-blue-950 bg-white/10 backdrop-blur-3xl z-40 transform transition-transform duration-500 ease-in-out overflow-y-auto",
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        {/* Glassmorphism Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_50%)] backdrop-blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-8 right-8 p-4 bg-black/30 backdrop-blur-xl rounded-full border border-blue-500/30 hover:bg-black/50 hover:border-blue-400/50 transition-all duration-300 shadow-2xl"
        >
          <X size={24} className="text-blue-100" />
        </button>

        {/* Logo */}
        <div className="absolute top-8 left-8">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            KreatorKit
          </h1>
          <p className="text-blue-300/70 text-sm mt-1">Digital Excellence</p>
        </div>

        {/* Centered Navigation - Column layout for all screens */}
        <div className="flex flex-col items-center justify-center h-full px-4 py-20">
          <nav className="w-full max-w-md">
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              {navigation.map(({ id, label, icon: Icon }, index) => {
                const isActive = activeSection === id;
                return (
                  <div
                    key={id}
                    className={cn(
                      "w-full transform transition-all duration-700",
                      isSidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                    )}
                    style={{
                      transitionDelay: isSidebarOpen ? `${index * 150}ms` : '0ms'
                    }}
                  >
                    <button
                      onClick={() => handleNavClick(id)}
                      className={cn(
                        "group flex flex-row items-center space-x-4 p-4 rounded-2xl transition-all duration-300 w-full",
                        isActive 
                          ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-400/40 text-blue-100 shadow-2xl shadow-blue-500/30' 
                          : 'bg-black/20 hover:bg-black/30 text-blue-200/80 hover:text-blue-100 border border-blue-500/20 hover:border-blue-400/40 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20'
                      )}
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-xl",
                        isActive 
                          ? 'bg-gradient-to-br from-blue-500/40 to-cyan-500/40 shadow-2xl shadow-blue-500/40 border border-blue-400/30' 
                          : 'bg-black/30 group-hover:bg-gradient-to-br group-hover:from-blue-500/40 group-hover:to-cyan-500/40 group-hover:shadow-2xl group-hover:shadow-blue-500/40 border border-blue-500/20 group-hover:border-blue-400/30'
                      )}>
                        <Icon size={24} />
                      </div>
                      <span className="text-lg font-semibold">{label}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Bottom Contact - Fixed at bottom */}
        <div className="fixed bottom-8 left-0 right-0 px-4">
          <div className={cn(
            "max-w-md mx-auto transform transition-all duration-700",
            isSidebarOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
          style={{ transitionDelay: isSidebarOpen ? '450ms' : '0ms' }}>
            <button onClick={()=>{router.push('/signup')}} className="w-full bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-xl text-blue-100 py-3 px-6 rounded-2xl font-semibold text-lg hover:from-blue-500/90 hover:to-cyan-500/90 transition-all duration-300 transform hover:scale-[1.02] shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 border border-blue-400/30">
              Sign Up/Sign In
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