"use client";

import { Target, Users, Zap, TrendingUp, Award, Clock, Sparkles, Star, Play, Music, Image, FileText } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Time Wasted on Non-Creative Tasks',
    description: 'Creators spend hours on optimization instead of storytelling and content quality.',
    gradient: 'from-red-500 to-orange-500',
    glowColor: 'rgba(239, 68, 68, 0.5)',
  },
  {
    icon: TrendingUp,
    title: 'Missing Viral Trends',
    description: 'Hard to keep up with trending music, hashtags, and content formats across platforms.',
    gradient: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(147, 51, 234, 0.5)',
  },
  {
    icon: Target,
    title: 'Poor Thumbnail Performance',
    description: 'Low click-through rates due to unoptimized thumbnails and lack of design expertise.',
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.5)',
  },
  {
    icon: Users,
    title: 'Audience Engagement Struggles',
    description: 'Difficulty creating scripts that maintain viewer retention and drive engagement.',
    gradient: 'from-green-500 to-emerald-500',
    glowColor: 'rgba(34, 197, 94, 0.5)',
  },
];

const solutions = [
  {
    icon: Music,
    title: 'Trending Music Suggestions',
    description: 'AI analyzes your video transcript and suggests trending, genre-specific background music that aligns with viral trends.',
    features: ['Transcript Analysis', 'Audio Mood Extraction', 'Viral Trend Alignment'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Image,
    title: 'Thumbnail Scoring & Optimization',
    description: 'Custom-trained model scores your thumbnails using data from top YouTube channels and provides actionable improvements.',
    features: ['AI Scoring System', 'Top Channel Data', 'CTR Optimization'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: FileText,
    title: 'LLM Script Generation',
    description: 'Fine-tuned GPT-2 generates high-quality, context-specific transcript suggestions based on your video title and category.',
    features: ['Context-Aware Scripts', 'Retention Optimization', 'Category-Specific'],
    gradient: 'from-yellow-500 to-orange-500',
  },
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
              <Target className="w-5 h-5 text-cyan-300 electric-effect" />
              <span className="text-sm font-bold text-white">THE CREATOR'S PROBLEM</span>
              <Zap className="w-5 h-5 text-yellow-300 electric-effect" />
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-8">
              <span className="holographic-bg bg-clip-text text-transparent neon-text">
                CREATORS
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent text-shimmer">
                STRUGGLE
              </span>
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-pink-200 bg-clip-text text-transparent">
                  Budding creators on YouTube, Instagram Reels, and TikTok waste countless hours on 
                  optimization tasks instead of focusing on what they do best — creating amazing content 
                  and telling compelling stories.
                </span>
              </p>
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 blur-xl rounded-2xl"></div>
            </div>
          </div>
          
          {/* Problems Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {problems.map(({ icon: Icon, title, description, gradient, glowColor }, index) => (
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
              </div>
            ))}
          </div>

          {/* Solution Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-6 py-3 glass-neon rounded-full mb-8 cyber-glow">
              <Sparkles className="w-5 h-5 text-green-300 electric-effect" />
              <span className="text-sm font-bold text-white">AI-POWERED SOLUTION</span>
              <Star className="w-5 h-5 text-yellow-300 electric-effect" />
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-8">
              <span className="holographic-bg bg-clip-text text-transparent neon-text">
                KREATORKIT
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent text-shimmer">
                SOLVES IT
              </span>
            </h2>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {solutions.map(({ icon: Icon, title, description, features, gradient }, index) => (
              <div
                key={title}
                className="group relative card-holographic p-8 rounded-3xl hover:scale-105 transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
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
                
                <h3 className="text-2xl font-bold mb-4 text-white neon-text relative z-10">{title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed relative z-10">{description}</p>
                
                {/* Features List */}
                <ul className="space-y-3 relative z-10">
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
              </div>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-12 p-8 glass-ultra rounded-3xl relative overflow-hidden group cyber-glow">
              {/* Background Animation */}
              <div className="absolute inset-0 holographic-bg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="flex items-center space-x-4 sm:flex-col sm:space-x-0 sm:text-center relative z-10">
                <div className="flex items-center space-x-3 sm:flex-col sm:space-x-0">
                  <div className="p-3 glass-neon rounded-2xl cyber-glow">
                    <Clock className="w-8 h-8 text-cyan-400 electric-effect" />
                  </div>
                  <div className="sm:mt-4">
                    <div className="text-3xl sm:text-4xl font-black text-cyan-400 neon-text">80%</div>
                    <div className="text-white/80 font-semibold mt-1">Time Saved</div>
                  </div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-cyan-500 via-pink-500 to-yellow-500 mx-8"></div>
              
              <div className="flex items-center space-x-4 sm:flex-col sm:space-x-0 sm:text-center relative z-10">
                <div className="flex items-center space-x-3 sm:flex-col sm:space-x-0">
                  <div className="p-3 glass-neon rounded-2xl cyber-glow">
                    <TrendingUp className="w-8 h-8 text-green-400 electric-effect" />
                  </div>
                  <div className="sm:mt-4">
                    <div className="text-3xl sm:text-4xl font-black text-green-400 neon-text">3x</div>
                    <div className="text-white/80 font-semibold mt-1">Better Engagement</div>
                  </div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-cyan-500 via-pink-500 to-yellow-500 mx-8"></div>
              
              <div className="flex items-center space-x-4 sm:flex-col sm:space-x-0 sm:text-center relative z-10">
                <div className="flex items-center space-x-3 sm:flex-col sm:space-x-0">
                  <div className="p-3 glass-neon rounded-2xl cyber-glow">
                    <Award className="w-8 h-8 text-yellow-400 electric-effect" />
                  </div>
                  <div className="sm:mt-4">
                    <div className="text-3xl sm:text-4xl font-black text-yellow-400 neon-text">95%</div>
                    <div className="text-white/80 font-semibold mt-1">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="group btn-cyber px-10 py-5 rounded-2xl text-xl font-bold transform hover:scale-110 transition-all duration-300">
              <span className="relative z-10 flex items-center space-x-3">
                <Play className="w-6 h-6" />
                <span>START CREATING BETTER CONTENT</span>
                <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}