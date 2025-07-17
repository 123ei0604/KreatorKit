"use client";

import { ArrowRight, Play, TrendingUp, Sparkles, Zap, Star, Music, Image, FileText, BarChart3 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 gradient-wave-bg"></div>
      
      {/* Particle Field */}
      <div className="particle-field">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle floating-orb"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Morphing Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 morphing-blob blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-500/30 via-red-500/30 to-blue-500/30 morphing-blob blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/30 via-teal-500/30 to-indigo-500/30 morphing-blob blur-2xl" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Electric Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff12_1px,transparent_1px),linear-gradient(to_bottom,#00ffff12_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff00ff08_1px,transparent_1px),linear-gradient(to_bottom,#ff00ff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-7xl mx-auto">
          {/* Platform Badges */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass-neon rounded-full cyber-glow">
              <Play className="w-4 h-4 text-red-400 electric-effect" />
              <span className="text-sm font-bold text-white">YouTube</span>
            </div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass-neon rounded-full cyber-glow">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded electric-effect"></div>
              <span className="text-sm font-bold text-white">Instagram</span>
            </div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass-neon rounded-full cyber-glow">
              <div className="w-4 h-4 bg-black rounded electric-effect"></div>
              <span className="text-sm font-bold text-white">TikTok</span>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="mb-8 animate-bounce">
            <div className="inline-flex items-center space-x-3 px-6 py-3 glass-neon rounded-full cyber-glow">
              <Sparkles className="w-5 h-5 text-cyan-300 electric-effect" />
              <span className="text-sm font-bold text-white neon-text">AI-POWERED CONTENT OPTIMIZATION</span>
              <TrendingUp className="w-5 h-5 text-green-300 electric-effect" />
            </div>
          </div>
          
          {/* Main Title with Enhanced Effects */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="block holographic-bg bg-clip-text text-transparent neon-text mb-4">
              KREATOR
            </span>
            <span className="block bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent text-shimmer">
              KIT
            </span>
          </h1>
          
          {/* Subtitle with Glow Effect */}
          <div className="mb-12 relative">
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-5xl mx-auto font-light">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-pink-200 bg-clip-text text-transparent">
                Stop wasting hours on non-creative tasks. KreatorKit is your all-in-one AI assistant for 
                <span className="text-yellow-300 font-bold"> trending music suggestions</span>, 
                <span className="text-pink-300 font-bold"> thumbnail optimization</span>, and 
                <span className="text-cyan-300 font-bold"> script generation</span> — 
                so you can focus on what matters: creating amazing content.
              </span>
            </p>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-pink-500/20 to-yellow-500/20 blur-xl rounded-full"></div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="glass-ultra p-6 rounded-2xl cyber-glow hover:scale-105 transition-all duration-300">
              <Music className="w-8 h-8 text-purple-400 mx-auto mb-3 electric-effect" />
              <h3 className="text-white font-bold mb-2">Trending Music</h3>
              <p className="text-white/70 text-sm">AI-powered background music suggestions based on trends</p>
            </div>
            <div className="glass-ultra p-6 rounded-2xl cyber-glow hover:scale-105 transition-all duration-300">
              <Image className="w-8 h-8 text-cyan-400 mx-auto mb-3 electric-effect" />
              <h3 className="text-white font-bold mb-2">Thumbnail Scoring</h3>
              <p className="text-white/70 text-sm">Get scored feedback and improvement suggestions</p>
            </div>
            <div className="glass-ultra p-6 rounded-2xl cyber-glow hover:scale-105 transition-all duration-300">
              <FileText className="w-8 h-8 text-yellow-400 mx-auto mb-3 electric-effect" />
              <h3 className="text-white font-bold mb-2">Script Generation</h3>
              <p className="text-white/70 text-sm">LLM-generated transcript suggestions for better retention</p>
            </div>
          </div>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative btn-cyber px-8 py-4 rounded-2xl text-lg font-bold transform hover:scale-110 transition-all duration-300">
              <span className="relative z-10 flex items-center space-x-3">
                <Play className="w-6 h-6" />
                <span>START OPTIMIZING</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            
            <button className="group px-8 py-4 glass-ultra rounded-2xl border-2 rainbow-border hover:scale-110 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-pink-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-white font-bold text-lg flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-green-300" />
                <span>VIEW FEATURES</span>
              </span>
            </button>
          </div>
          
          {/* Stats Section */}
          <div className="flex justify-center space-x-8 text-center">
            <div className="glass-neon p-4 rounded-xl cyber-glow">
              <div className="text-2xl font-black text-cyan-400 neon-text">10x</div>
              <div className="text-white/70 text-sm">Faster Content</div>
            </div>
            <div className="glass-neon p-4 rounded-xl cyber-glow">
              <div className="text-2xl font-black text-pink-400 neon-text">95%</div>
              <div className="text-white/70 text-sm">Accuracy Rate</div>
            </div>
            <div className="glass-neon p-4 rounded-xl cyber-glow">
              <div className="text-2xl font-black text-yellow-400 neon-text">24/7</div>
              <div className="text-white/70 text-sm">AI Assistant</div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full floating-orb blur-sm"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-pink-400 rounded-full floating-orb blur-sm" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-40 w-5 h-5 bg-yellow-400 rounded-full floating-orb blur-sm" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-green-400 rounded-full floating-orb blur-sm" style={{ animationDelay: '6s' }}></div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}