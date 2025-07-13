"use client";
import { useRouter } from 'next/navigation'
import React from 'react';

import { Rocket, Shield, Headphones, ArrowRight, StarIcon, Music, NotebookText } from 'lucide-react';
const services = [
  {
    icon: StarIcon,
    title: 'Rate Your Thumbnail',
    description: 'Custom websites and web applications built with cutting-edge technologies.',
    features: ['React & Next.js', 'TypeScript', 'Responsive Design'],
    route: '/RateThumbnail',
  },
  {
    icon: Music,
    title: 'Song Sugeest',
    description: 'Upload your video and get suggestion about the song by thumbnail!',
    features: ['React Native', 'Flutter', 'App Store Optimization'],
    route: '/Suggest',
  },
  {
    icon: NotebookText,
    title: 'Transcript Generator',
    description: 'Generate the perfect Transcript for your video!',
    features: ['Node.js', 'PostgreSQL', 'API Development'],
    route: '/GenTrans',
  },
];

export default function Services() {
  const router = useRouter();
  return (
    <div className="min-h-screen  bg-slate-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-900/40 border border-blue-700/40 backdrop-blur-xl mb-4 sm:mb-6 hover:bg-blue-800/40 hover:border-blue-600/50 transition-all duration-300">
            <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
            <span className="text-xs sm:text-sm text-blue-200">Services</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Digital Solutions
          </h2>
          
          <p className="text-sm sm:text-lg lg:text-xl text-blue-200/80 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive digital solutions tailored to your unique needs. From concept to deployment, 
            I provide end-to-end services that drive results and exceed expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {services.map(({ icon: Icon, title, description, features,route }, index) => (
            <div
              key={title}
              className="group p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-slate-900/60 border border-blue-800/40 backdrop-blur-xl hover:bg-slate-800/60 hover:border-blue-600/60 transition-all duration-500 hover:scale-105 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-indigo-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:via-indigo-600/10 group-hover:to-purple-600/20 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/5 via-indigo-500/10 to-purple-500/5 transition-opacity duration-500"></div>
              
              <div className="mb-3 sm:mb-4 lg:mb-6 relative z-10">
                <div className="inline-flex p-2 sm:p-3 rounded-lg bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border border-blue-500/40 backdrop-blur-sm group-hover:from-blue-500/40 group-hover:to-indigo-500/40 transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-300 group-hover:text-indigo-300 group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>
              
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-blue-100 group-hover:text-blue-50 transition-colors duration-300 relative z-10">
                {title}
              </h3>
              
              <p className="text-xs sm:text-sm lg:text-base text-blue-200/70 mb-3 sm:mb-4 lg:mb-6 leading-relaxed relative z-10">
                {description}
              </p>
              
            
              
              <div className="pt-3 sm:pt-4 lg:pt-6 border-t border-blue-800/40 relative z-10">
                <button onClick={() => router.push(route)} className="flex items-center space-x-2 text-blue-300 font-medium hover:text-indigo-300 transition-colors duration-300 group-hover:underline text-xs sm:text-sm">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-block p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-700/40 backdrop-blur-xl max-w-2xl mx-auto relative overflow-hidden group hover:from-blue-800/50 hover:to-indigo-800/50 hover:border-blue-600/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-indigo-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:via-indigo-600/5 group-hover:to-purple-600/10 transition-all duration-500"></div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-blue-100 relative z-10">
              Ready to Start Your Project?
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-blue-200/70 mb-3 sm:mb-4 lg:mb-6 leading-relaxed px-4 relative z-10">
              Let's discuss how we can bring your vision to life with cutting-edge technology and exceptional design.
            </p>
            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-blue-500/25 text-sm sm:text-base relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-indigo-400/0 to-purple-400/0 group-hover:from-blue-400/20 group-hover:via-indigo-400/10 group-hover:to-purple-400/20 transition-all duration-500"></div>
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}