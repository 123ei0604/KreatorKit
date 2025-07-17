"use client";

import { Smartphone, Globe, Database, Rocket, Shield, Headphones, ArrowRight, Sparkles, Zap, Star } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies.',
    features: ['React & Next.js', 'TypeScript', 'Responsive Design'],
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.5)',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: ['React Native', 'Flutter', 'App Store Optimization'],
    gradient: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(147, 51, 234, 0.5)',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Scalable server-side solutions and robust database architecture.',
    features: ['Node.js', 'PostgreSQL', 'API Development'],
    gradient: 'from-green-500 to-emerald-500',
    glowColor: 'rgba(34, 197, 94, 0.5)',
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    description: 'Speed up your applications and enhance user experience significantly.',
    features: ['Core Web Vitals', 'SEO Optimization', 'Caching Strategies'],
    gradient: 'from-yellow-500 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.5)',
  },
  {
    icon: Shield,
    title: 'Security Consulting',
    description: 'Comprehensive security audits and implementation of best practices.',
    features: ['Security Audits', 'OWASP Standards', 'Data Protection'],
    gradient: 'from-red-500 to-rose-500',
    glowColor: 'rgba(239, 68, 68, 0.5)',
  },
  {
    icon: Headphones,
    title: 'Support & Maintenance',
    description: 'Ongoing support and maintenance for your digital products.',
    features: ['24/7 Monitoring', 'Regular Updates', 'Bug Fixes'],
    gradient: 'from-indigo-500 to-purple-500',
    glowColor: 'rgba(99, 102, 241, 0.5)',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/50 to-slate-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 morphing-blob blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-pink-500/20 via-red-500/20 to-orange-500/20 morphing-blob blur-3xl" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/20 via-teal-500/20 to-cyan-500/20 morphing-blob blur-2xl" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center p-4 sm:p-6 lg:p-8 min-h-screen">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-6 py-3 glass-neon rounded-full mb-8 cyber-glow">
              <Rocket className="w-5 h-5 text-cyan-300 electric-effect" />
              <span className="text-sm font-bold text-white">PREMIUM SERVICES</span>
              <Zap className="w-5 h-5 text-yellow-300 electric-effect" />
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-8">
              <span className="holographic-bg bg-clip-text text-transparent neon-text">
                DIGITAL
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent text-shimmer">
                SOLUTIONS
              </span>
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-pink-200 bg-clip-text text-transparent">
                  Comprehensive digital solutions tailored to your unique needs. From concept to deployment, 
                  I provide end-to-end services that drive results and exceed expectations.
                </span>
              </p>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-yellow-500/10 blur-xl rounded-2xl"></div>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map(({ icon: Icon, title, description, features, gradient, glowColor }, index) => (
              <div
                key={title}
                className="group relative card-holographic p-8 rounded-3xl hover:scale-105 transition-all duration-500 overflow-hidden"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  boxShadow: `0 0 40px ${glowColor}`,
                }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 blur-xl`}></div>
                </div>
                
                {/* Icon Container */}
                <div className="mb-6 relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${gradient} cyber-glow group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white electric-effect" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white neon-text relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
                  {title}
                </h3>
                
                <p className="text-white/80 mb-6 leading-relaxed relative z-10">
                  {description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-3 mb-8 relative z-10">
                  {features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-white/70 group-hover:text-white transition-colors duration-300"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${gradient} rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <div className="relative z-10">
                  <button className={`flex items-center space-x-2 text-white font-bold hover:text-cyan-300 transition-colors duration-300 group-hover:scale-105 transform`}>
                    <span>Explore Service</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
                
                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full floating-orb opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-pink-400 rounded-full floating-orb opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-500/50 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          
          {/* Call to Action Section */}
          <div className="text-center">
            <div className="inline-block p-10 glass-ultra rounded-3xl relative overflow-hidden group cyber-glow max-w-4xl mx-auto">
              {/* Background Animation */}
              <div className="absolute inset-0 holographic-bg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Star className="w-8 h-8 text-yellow-400 electric-effect" />
                  <h3 className="text-3xl font-black text-white neon-text">Ready to Start Your Project?</h3>
                  <Star className="w-8 h-8 text-yellow-400 electric-effect" />
                </div>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Let's discuss how we can bring your vision to life with cutting-edge technology and exceptional design.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button className="group btn-cyber px-10 py-5 rounded-2xl text-xl font-bold transform hover:scale-110 transition-all duration-300">
                    <span className="relative z-10 flex items-center space-x-3">
                      <Sparkles className="w-6 h-6" />
                      <span>GET IN TOUCH</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>
                  
                  <button className="group px-8 py-4 glass-neon rounded-2xl border-2 rainbow-border hover:scale-110 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-pink-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-white font-bold text-lg flex items-center space-x-2">
                      <Rocket className="w-5 h-5 text-cyan-300" />
                      <span>VIEW PORTFOLIO</span>
                    </span>
                  </button>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-cyan-400 rounded-full floating-orb"></div>
              <div className="absolute top-12 right-12 w-2 h-2 bg-pink-400 rounded-full floating-orb" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-8 left-12 w-4 h-4 bg-yellow-400 rounded-full floating-orb" style={{ animationDelay: '4s' }}></div>
              <div className="absolute bottom-12 right-8 w-2 h-2 bg-green-400 rounded-full floating-orb" style={{ animationDelay: '6s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}