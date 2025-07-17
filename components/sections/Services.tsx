"use client";

import { Music, Image, FileText, BarChart3, Zap, Clock, ArrowRight, Sparkles, Star, Play, TrendingUp, Target } from 'lucide-react';

const currentFeatures = [
  {
    icon: Music,
    title: 'Trending Background Music Suggestion',
    description: 'AI-powered music recommendations based on video transcript analysis and audio mood extraction.',
    features: ['Transcript Analysis', 'Audio Mood Detection', 'Viral Trend Alignment', 'Genre-Specific Suggestions'],
    gradient: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(147, 51, 234, 0.5)',
    status: 'Available Now',
    statusColor: 'text-green-400',
  },
  {
    icon: Image,
    title: 'Thumbnail Scoring & Suggestions',
    description: 'Custom-trained model scores thumbnails using data from top YouTube channels with actionable improvements.',
    features: ['AI Scoring System', 'Top Channel Data Analysis', 'CTR Optimization Tips', 'Design Recommendations'],
    gradient: 'from-cyan-500 to-blue-500',
    glowColor: 'rgba(59, 130, 246, 0.5)',
    status: 'Available Now',
    statusColor: 'text-green-400',
  },
  {
    icon: FileText,
    title: 'LLM-Generated Transcript Suggestions',
    description: 'Fine-tuned GPT-2 model generates high-quality, context-specific transcript suggestions.',
    features: ['Context-Aware Scripts', 'Retention Optimization', 'Category-Specific Content', 'Engagement Hooks'],
    gradient: 'from-yellow-500 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.5)',
    status: 'Available Now',
    statusColor: 'text-green-400',
  },
];

const upcomingFeatures = [
  {
    icon: BarChart3,
    title: 'Advanced Video & Channel Analytics',
    description: 'Deep insights into your content performance across all platforms with predictive analytics.',
    features: ['Multi-Platform Analytics', 'Performance Predictions', 'Competitor Analysis', 'Growth Insights'],
    gradient: 'from-green-500 to-emerald-500',
    glowColor: 'rgba(34, 197, 94, 0.5)',
    status: 'Coming Soon',
    statusColor: 'text-yellow-400',
  },
  {
    icon: Zap,
    title: 'Automated Video Optimization Workflows',
    description: 'End-to-end automation for video optimization from upload to publication.',
    features: ['Auto-Optimization', 'Batch Processing', 'Smart Scheduling', 'Cross-Platform Publishing'],
    gradient: 'from-indigo-500 to-purple-500',
    glowColor: 'rgba(99, 102, 241, 0.5)',
    status: 'Coming Soon',
    statusColor: 'text-yellow-400',
  },
  {
    icon: Image,
    title: 'AI-Generated Thumbnail Creator',
    description: 'Automatically generate high-converting thumbnails based on your video content and trending styles.',
    features: ['Auto-Generation', 'Style Templates', 'Brand Consistency', 'A/B Testing'],
    gradient: 'from-red-500 to-rose-500',
    glowColor: 'rgba(239, 68, 68, 0.5)',
    status: 'Coming Soon',
    statusColor: 'text-yellow-400',
  },
  {
    icon: Target,
    title: 'Deep Audience Sentiment Analysis',
    description: 'Advanced NLP analysis of comments and engagement to predict content performance.',
    features: ['Sentiment Analysis', 'Engagement Forecasting', 'Audience Insights', 'Content Recommendations'],
    gradient: 'from-teal-500 to-cyan-500',
    glowColor: 'rgba(20, 184, 166, 0.5)',
    status: 'Coming Soon',
    statusColor: 'text-yellow-400',
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
              <Play className="w-5 h-5 text-cyan-300 electric-effect" />
              <span className="text-sm font-bold text-white">AI-POWERED FEATURES</span>
              <Sparkles className="w-5 h-5 text-yellow-300 electric-effect" />
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-8">
              <span className="holographic-bg bg-clip-text text-transparent neon-text">
                CONTENT
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent text-shimmer">
                OPTIMIZATION
              </span>
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-pink-200 bg-clip-text text-transparent">
                  Comprehensive AI-powered tools designed specifically for content creators. 
                  From trending music suggestions to thumbnail optimization — everything you need 
                  to create viral content and grow your audience.
                </span>
              </p>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-yellow-500/10 blur-xl rounded-2xl"></div>
            </div>
          </div>

          {/* Current Features Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-3 px-6 py-3 glass-neon rounded-full mb-6 cyber-glow">
                <Star className="w-5 h-5 text-green-300 electric-effect" />
                <span className="text-sm font-bold text-white">AVAILABLE NOW</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white neon-text mb-4">Core Features</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {currentFeatures.map(({ icon: Icon, title, description, features, gradient, glowColor, status, statusColor }, index) => (
                <div
                  key={title}
                  className="group relative card-holographic p-8 rounded-3xl hover:scale-105 transition-all duration-500 overflow-hidden"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    boxShadow: `0 0 40px ${glowColor}`,
                  }}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className={`px-3 py-1 glass-neon rounded-full text-xs font-bold ${statusColor}`}>
                      {status}
                    </div>
                  </div>

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
                      <span>Try Now</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Features Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-3 px-6 py-3 glass-neon rounded-full mb-6 cyber-glow">
                <Clock className="w-5 h-5 text-yellow-300 electric-effect" />
                <span className="text-sm font-bold text-white">COMING SOON</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white neon-text mb-4">Upcoming Features</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingFeatures.map(({ icon: Icon, title, description, features, gradient, glowColor, status, statusColor }, index) => (
                <div
                  key={title}
                  className="group relative card-holographic p-6 rounded-3xl hover:scale-105 transition-all duration-500 overflow-hidden opacity-80 hover:opacity-100"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    boxShadow: `0 0 30px ${glowColor}`,
                  }}
                >
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <div className={`px-2 py-1 glass-neon rounded-full text-xs font-bold ${statusColor}`}>
                      {status}
                    </div>
                  </div>

                  {/* Animated Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-15 blur-xl`}></div>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="mb-4 relative z-10">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${gradient} cyber-glow group-hover:scale-110 transition-transform duration-300 opacity-70 group-hover:opacity-100`}>
                      <Icon className="w-8 h-8 text-white electric-effect" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-white/80 group-hover:text-white relative z-10 transition-colors duration-300">
                    {title}
                  </h3>
                  
                  <p className="text-white/60 mb-4 leading-relaxed relative z-10 text-sm group-hover:text-white/80 transition-colors duration-300">
                    {description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 relative z-10">
                    {features.slice(0, 3).map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-white/50 group-hover:text-white/70 transition-colors duration-300 text-sm"
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${gradient} rounded-full mr-2 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action Section */}
          <div className="text-center">
            <div className="inline-block p-10 glass-ultra rounded-3xl relative overflow-hidden group cyber-glow max-w-4xl mx-auto">
              {/* Background Animation */}
              <div className="absolute inset-0 holographic-bg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <TrendingUp className="w-8 h-8 text-green-400 electric-effect" />
                  <h3 className="text-3xl font-black text-white neon-text">Ready to Optimize Your Content?</h3>
                  <TrendingUp className="w-8 h-8 text-green-400 electric-effect" />
                </div>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Join thousands of creators who are already using KreatorKit to create viral content, 
                  save time, and grow their audience faster than ever before.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button className="group btn-cyber px-10 py-5 rounded-2xl text-xl font-bold transform hover:scale-110 transition-all duration-300">
                    <span className="relative z-10 flex items-center space-x-3">
                      <Play className="w-6 h-6" />
                      <span>START FREE TRIAL</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>
                  
                  <button className="group px-8 py-4 glass-neon rounded-2xl border-2 rainbow-border hover:scale-110 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-pink-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-white font-bold text-lg flex items-center space-x-2">
                      <BarChart3 className="w-5 h-5 text-cyan-300" />
                      <span>VIEW DEMO</span>
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