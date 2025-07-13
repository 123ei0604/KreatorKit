"use client";

import { Music, Image, FileText, TrendingUp, Users, Rocket } from 'lucide-react';

const features = [
  {
    icon: Music,
    title: 'Trending Music Suggestions',
    description: 'AI-powered background music recommendations based on video content and current viral trends to boost engagement.',
  },
  {
    icon: Image,
    title: 'Thumbnail Optimization',
    description: 'Get instant scores and improvement suggestions for your thumbnails using our custom-trained CTR prediction model.',
  },
  {
    icon: FileText,
    title: 'Smart Transcripts',
    description: 'AI-generated transcript suggestions to improve your scripts and maximize audience retention.',
  },
  {
    icon: TrendingUp,
    title: 'Trend Analysis',
    description: 'Stay ahead with real-time insights into platform trends and content opportunities.',
  },
];

const upcomingFeatures = [
  { icon: Rocket, title: 'Video Analytics', description: 'Advanced metrics and performance forecasting' },
  { icon: Users, title: 'Sentiment Analysis', description: 'Deep audience engagement insights' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-purple-900/40 border border-purple-700/40 backdrop-blur-xl mb-4 sm:mb-6 hover:bg-purple-800/40 hover:border-purple-600/50 transition-all duration-300">
            <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300" />
            <span className="text-xs sm:text-sm text-purple-200">KreatorKit</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Content Creation Supercharged
          </h2>
          
          <p className="text-sm sm:text-lg lg:text-xl text-purple-200/80 max-w-3xl mx-auto leading-relaxed px-4">
            KreatorKit is an AI-powered suite that automates and optimizes every stage of your content pipeline. 
            From music selection to thumbnail design and script writing - we handle the busywork so you can focus on storytelling.
          </p>
        </div>
        
        <div className="mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
            Core Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16">
            {features.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="group p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-slate-900/60 border border-purple-800/40 backdrop-blur-xl hover:bg-slate-800/60 hover:border-purple-600/60 transition-all duration-500 hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-rose-600/0 group-hover:from-purple-600/20 group-hover:via-pink-600/10 group-hover:to-rose-600/20 transition-all duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500/5 via-pink-500/10 to-rose-500/5 transition-opacity duration-500"></div>
                
                <div className="mb-3 sm:mb-4 relative z-10">
                  <div className="inline-flex p-2 sm:p-3 rounded-lg bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/40 backdrop-blur-sm group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-purple-300 group-hover:text-pink-300 group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-purple-100 relative z-10">{title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-purple-200/70 leading-relaxed relative z-10">{description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
            Coming Soon
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-2xl mx-auto">
            {upcomingFeatures.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-slate-900/60 border border-pink-800/40 backdrop-blur-xl hover:bg-slate-800/60 hover:border-pink-600/60 transition-all duration-500 hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/0 via-rose-600/0 to-red-600/0 group-hover:from-pink-600/20 group-hover:via-rose-600/10 group-hover:to-red-600/20 transition-all duration-500"></div>
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="inline-flex p-2 sm:p-3 rounded-lg bg-gradient-to-r from-pink-600/30 to-rose-600/30 border border-pink-500/40 backdrop-blur-sm group-hover:from-pink-500/40 group-hover:to-rose-500/40 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-300 group-hover:text-rose-300 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 text-pink-100">{title}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-pink-200/70 leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* <div className="text-center p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl bg-gradient-to-r from-slate-900/60 to-slate-800/60 border border-purple-700/40 backdrop-blur-xl relative overflow-hidden group hover:from-slate-800/70 hover:to-slate-700/70 hover:border-purple-600/50 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-pink-600/0 to-rose-600/0 group-hover:from-purple-600/10 group-hover:via-pink-600/5 group-hover:to-rose-600/10 transition-all duration-500"></div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 relative z-10 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto relative z-10">
            {['Next.js', 'Tailwind', 'FastAPI', 'PyTorch'].map((tech) => (
              <div key={tech} className="px-3 py-2 rounded-lg bg-purple-900/30 border border-purple-700/40 text-purple-200 text-sm sm:text-base">
                {tech}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}