"use client";

import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function Hero() {
 return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background Animation - Multiple Layerss */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Grid Pattern with Moving Scan Lins */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 animate-grid-scan [background:linear-gradient(to_bottom,transparent_0%,rgba(59,130,246,0.1)_20%,transparent_40%)] h-[40%]"></div>
          </div>

          {/* Floating Particles with More Motion */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => {
              const size = Math.random() * 4 + 1;
              const duration = Math.random() * 15 + 15;
              const delay = Math.random() * 10;
              const distance = Math.random() * 100 + 50;
              
              return (
                <div 
                  key={i}
                  className="absolute rounded-full bg-blue-400/20 animate-float"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${duration}s linear infinite ${delay}s`,
                    filter: `blur(${size > 2 ? '1px' : '0px'})`,
                    ...({
                      '--float-distance': `${distance}px`
                    } as React.CSSProperties & Record<string, any>)
                  }}
                />
              );
            })}
          </div>

          {/* Meteor Shower - Continuous diagonal shower at 45 degrees */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(25)].map((_, i) => {
              const duration = Math.random() * 1.5 + 2; // 2-3.5 seconds for faster movement
              const delay = (i * 0.3) % 8; // Evenly distributed delays for continuous effect
              const length = Math.random() * 60 + 40; // 40-100px length
              const startOffset = (i * 80) % 400 - 200; // Spread meteors across a wider area
              const brightness = Math.random() * 0.3 + 0.7; // 0.7-1.0 opacity for better visibility
              
              return (
                <div
                  key={i}
                  className="absolute bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-meteor-shower"
                  style={{
                    width: `${length}px`,
                    height: '1.5px',
                    top: '-100px', // Start further off-screen
                    left: `${startOffset}px`,
                    transform: 'rotate(45deg)',
                    transformOrigin: 'left center',
                    animation: `meteorShower ${duration}s linear infinite ${delay}s`,
                    filter: 'blur(0.3px)',
                    opacity: brightness,
                  }}
                >
                  {/* Simple meteor head - just a bright point, no glow */}
                  <div 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-blue-200"
                  />
                  
                  {/* Small sparkle */}
                  <div 
                    className="absolute right-0.5 top-1/2 transform -translate-y-1/2 w-1 h-1 rounded-full bg-white opacity-90"
                  />
                </div>
              );
            })}
          </div>

          {/* Pulsing Glow Spots with Movement */}
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-float-slow delay-3000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 bg-purple-600 rounded-full blur-2xl opacity-20 animate-float-slow delay-1500"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-900/40 border border-blue-700/40 backdrop-blur-xl mb-4 sm:mb-6 hover:bg-blue-800/40 hover:border-blue-600/50 transition-all duration-300">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
              <span className="text-xs sm:text-sm text-blue-200">Welcome to the Future</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-blue-100 via-blue-200 to-indigo-200 bg-clip-text text-transparent leading-tight">
              KreatorKit
              <br className="hidden sm:block" />
            </h1>
            
            <p className="text-sm sm:text-lg lg:text-2xl text-blue-200/80 mb-4 sm:mb-6 lg:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
              Crafting exceptional digital experiences that inspire innovation and transform your vision into reality through cutting-edge technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center mb-6 sm:mb-8 lg:mb-12 px-4">
            {/* <button  className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-blue-500/25 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-indigo-400/0 to-purple-400/0 group-hover:from-blue-400/20 group-hover:via-indigo-400/10 group-hover:to-purple-400/20 transition-all duration-500"></div>
              <span className="flex items-center justify-center space-x-2 relative z-10">
                <span
                 className="text-sm sm:text-base">Get Started</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button> */}
            
            <button className="w-full sm:w-auto px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full border border-blue-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-blue-900/30 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-indigo-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:via-indigo-600/5 group-hover:to-purple-600/10 transition-all duration-500"></div>
              <span className="text-blue-200 text-sm sm:text-base relative z-10">Learn More</span>
            </button>
          </div>
          
          <div className="flex justify-center space-x-3 sm:space-x-4 lg:space-x-6">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' },
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                aria-label={label}
                className="p-2.5 sm:p-3 lg:p-4 rounded-full bg-slate-900/60 border border-blue-800/40 hover:bg-slate-800/60 hover:border-blue-600/60 transition-all duration-300 hover:scale-110 backdrop-blur-xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-indigo-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:via-indigo-600/10 group-hover:to-purple-600/20 transition-all duration-500"></div>
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-300 relative z-10" />
              </a>
            ))}
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx global>{`
          @keyframes meteorShower {
            0% {
              transform: translate(-150px, -150px) rotate(45deg);
              opacity: 0;
            }
            5% {
              opacity: 1;
            }
            95% {
              opacity: 1;
            }
            100% {
              transform: translate(calc(100vw + 150px), calc(100vh + 150px)) rotate(45deg);
              opacity: 0;
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translate(0, 0);
            }
            25% {
              transform: translate(calc(var(--float-distance) * 0.3), calc(var(--float-distance) * -0.2));
            }
            50% {
              transform: translate(calc(var(--float-distance) * 0.1), calc(var(--float-distance) * -0.3));
            }
            75% {
              transform: translate(calc(var(--float-distance) * -0.2), calc(var(--float-distance) * -0.1));
            }
          }
          
          @keyframes float-slow {
            0%, 100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(20px, -20px);
            }
          }
          
          @keyframes grid-scan {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100vh);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              opacity: 0.8;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
        `}</style>
      </div>
    </div>
  );
}