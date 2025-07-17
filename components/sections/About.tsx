"use client";

import { Code, Palette, Zap, Users, Award, Target, Sparkles, Rocket, Star } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Development',
    description: 'Full-stack development with modern technologies and industry best practices.',
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.5)',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Beautiful, user-centered designs that engage users and drive conversions.',
    gradient: 'from-pink-500 to-rose-500',
    glowColor: 'rgba(236, 72, 153, 0.5)',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast applications optimized for exceptional user experiences.',
    gradient: 'from-yellow-500 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.5)',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working seamlessly with teams to deliver outstanding results.',
    gradient: 'from-green-500 to-emerald-500',
    glowColor: 'rgba(34, 197, 94, 0.5)',
  },
];

const achievements = [
  { icon: Award, number: '5+', label: 'Years Experience', color: 'text-yellow-400' },
  { icon: Target, number: '50+', label: 'Projects Completed', color: 'text-cyan-400' },
  { icon: Users, number: '100%', label: 'Client Satisfaction', color: 'text-pink-400' },
];

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 morphing-blob blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-green-500/20 morphing-blob blur-3xl" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center p-4 sm:p-6 lg:p-8 min-h-screen">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-6 py-3 glass-neon rounded-full mb-8 cyber-glow">
              <Sparkles className="w-5 h-5 text-cyan-300 electric-effect" />
              <span className="text-sm font-bold text-white">ABOUT THE VISION</span>
              <Star className="w-5 h-5 text-yellow-300 electric-effect" />
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-8">
              <span className="holographic-bg bg-clip-text text-transparent neon-text">
                PASSIONATE
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent text-shimmer">
                CREATOR
              </span>
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-pink-200 bg-clip-text text-transparent">
                  I'm a dedicated developer and designer who thrives on creating digital experiences 
                  that make a meaningful impact. With extensive industry experience, I specialize 
                  in building scalable, beautiful applications that users genuinely love.
                </span>
              </p>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-yellow-500/10 blur-xl rounded-2xl"></div>
            </div>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {skills.map(({ icon: Icon, title, description, gradient, glowColor }, index) => (
              <div
                key={title}
                className="group relative card-holographic p-6 rounded-3xl hover:scale-105 transition-all duration-500 overflow-hidden"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  boxShadow: `0 0 30px ${glowColor}`,
                }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 blur-xl`}></div>
                </div>
                
                {/* Icon Container */}
                <div className="mb-6 relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${gradient} cyber-glow group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white electric-effect" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white neon-text relative z-10">{title}</h3>
                <p className="text-white/80 leading-relaxed relative z-10">{description}</p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-yellow-500/10 rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Achievements Section */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-12 p-8 glass-ultra rounded-3xl relative overflow-hidden group cyber-glow">
              {/* Background Animation */}
              <div className="absolute inset-0 holographic-bg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {achievements.map(({ icon: Icon, number, label, color }, index) => (
                <div key={label} className="flex items-center space-x-4 sm:flex-col sm:space-x-0 sm:text-center relative z-10">
                  <div className="flex items-center space-x-3 sm:flex-col sm:space-x-0">
                    <div className="p-3 glass-neon rounded-2xl cyber-glow">
                      <Icon className={`w-8 h-8 ${color} electric-effect`} />
                    </div>
                    <div className="sm:mt-4">
                      <div className={`text-3xl sm:text-4xl font-black ${color} neon-text`}>{number}</div>
                      <div className="text-white/80 font-semibold mt-1">{label}</div>
                    </div>
                  </div>
                  {index < achievements.length - 1 && (
                    <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-cyan-500 via-pink-500 to-yellow-500 mx-8"></div>
                  )}
                </div>
              ))}
              
              {/* Floating Particles */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full floating-orb"></div>
              <div className="absolute top-8 right-8 w-3 h-3 bg-pink-400 rounded-full floating-orb" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-4 left-8 w-2 h-2 bg-yellow-400 rounded-full floating-orb" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="group btn-cyber px-10 py-5 rounded-2xl text-xl font-bold transform hover:scale-110 transition-all duration-300">
              <span className="relative z-10 flex items-center space-x-3">
                <Rocket className="w-6 h-6" />
                <span>LET'S CREATE TOGETHER</span>
                <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}