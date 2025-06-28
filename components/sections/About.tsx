"use client";

import { Code, Palette, Zap, Users, Award, Target } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Development',
    description: 'Full-stack development with modern technologies and industry best practices.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Beautiful, user-centered designs that engage users and drive conversions.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast applications optimized for exceptional user experiences.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working seamlessly with teams to deliver outstanding results.',
  },
];

const achievements = [
  { icon: Award, number: '5+', label: 'Years Experience' },
  { icon: Target, number: '50+', label: 'Projects Completed' },
  { icon: Users, number: '100%', label: 'Client Satisfaction' },
];

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-900/40 border border-blue-700/40 backdrop-blur-xl mb-4 sm:mb-6 hover:bg-blue-800/40 hover:border-blue-600/50 transition-all duration-300">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
            <span className="text-xs sm:text-sm text-blue-200">About Me</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Passionate Creator
          </h2>
          
          <p className="text-sm sm:text-lg lg:text-xl text-blue-200/80 max-w-3xl mx-auto leading-relaxed px-4">
            I'm a dedicated developer and designer who thrives on creating digital experiences 
            that make a meaningful impact. With extensive industry experience, I specialize 
            in building scalable, beautiful applications that users genuinely love.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {skills.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="group p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-slate-900/60 border border-blue-800/40 backdrop-blur-xl hover:bg-slate-800/60 hover:border-blue-600/60 transition-all duration-500 hover:scale-105 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-indigo-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:via-indigo-600/10 group-hover:to-purple-600/20 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/5 via-indigo-500/10 to-purple-500/5 transition-opacity duration-500"></div>
              
              <div className="mb-3 sm:mb-4 relative z-10">
                <div className="inline-flex p-2 sm:p-3 rounded-lg bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border border-blue-500/40 backdrop-blur-sm group-hover:from-blue-500/40 group-hover:to-indigo-500/40 transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-300 group-hover:text-indigo-300 group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-blue-100 relative z-10">{title}</h3>
              <p className="text-xs sm:text-sm lg:text-base text-blue-200/70 leading-relaxed relative z-10">{description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl bg-gradient-to-r from-slate-900/60 to-slate-800/60 border border-blue-700/40 backdrop-blur-xl relative overflow-hidden group hover:from-slate-800/70 hover:to-slate-700/70 hover:border-blue-600/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-indigo-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:via-indigo-600/5 group-hover:to-purple-600/10 transition-all duration-500"></div>
            {achievements.map(({ icon: Icon, number, label }, index) => (
              <div key={label} className="flex items-center space-x-3 sm:space-x-0 sm:flex-col sm:text-center relative z-10">
                <div className="flex items-center space-x-2 sm:space-x-0 sm:flex-col">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-300">{number}</div>
                    <div className="text-xs sm:text-sm text-blue-200/70">{label}</div>
                  </div>
                </div>
                {index < achievements.length - 1 && (
                  <div className="hidden sm:block w-px h-8 sm:h-12 bg-blue-700/40 mx-4 sm:mx-6 lg:mx-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}