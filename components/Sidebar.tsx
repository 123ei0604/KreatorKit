"use client";

import { useState } from 'react';
import { Menu, X, Home, Target, Zap, Sparkles, Play, Music, Image, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const navigation = [
  { id: 'home', label: 'Home', icon: Home, gradient: 'from-cyan-500 to-blue-500', description: 'AI Content Platform' },
  { id: 'about', label: 'Problem & Solution', icon: Target, gradient: 'from-red-500 to-orange-500', description: 'Creator Challenges' },
  { id: 'services', label: 'Features', icon: Zap, gradient: 'from-purple-500 to-pink-500', description: 'AI-Powered Tools' },
];

const quickFeatures = [
  { icon: Music, label: 'Music AI', gradient: 'from-purple-500 to-pink-500' },
  { icon: Image, label: 'Thumbnail Score', gradient: 'from-cyan-500 to-blue-500' },
  { icon: FileText, label: 'Script Gen', gradient: 'from-yellow-500 to-orange-500' },
];

export default function Sidebar({ activeSection, setActiveSection, isSidebarOpen, setSidebarOpen }: SidebarProps) {
  const router = useRouter();

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setSidebarOpen(false);
  };

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* ... all previous unchanged JSX ... */}

      {/* Bottom CTA */}
      <div className="fixed bottom-8 left-0 right-0 px-6 z-10">
        <div className={cn(
          "max-w-lg mx-auto transform transition-all duration-700",
          isSidebarOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        )}
        style={{ transitionDelay: isSidebarOpen ? '600ms' : '0ms' }}>
          <div className="text-center mb-6">
            <p className="text-cyan-300/80 text-lg font-semibold mb-2">Ready to go viral?</p>
            <p className="text-white/60 text-sm">Let AI optimize your content for maximum engagement</p>
          </div>
          <button 
            onClick={() => { router.push('/signup'); }}
            className="w-full bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-xl text-blue-100 py-4 px-6 rounded-2xl font-bold text-lg hover:from-blue-500/90 hover:to-cyan-500/90 transition-all duration-300 transform hover:scale-[1.02] shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 border border-blue-400/30"
          >
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <Play className="w-6 h-6" />
              <span>START CREATING</span>
              <Sparkles className="w-6 h-6" />
            </span>
          </button>
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
