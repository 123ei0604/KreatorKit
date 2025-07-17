"use client";

import { Target, Users, Zap, TrendingUp, Award, Clock, Sparkles, Star, Play, Music, Image, FileText, Rocket } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Time Wasted on Non‑Creative Tasks',
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

const upcomingFeatures = [
  { icon: Rocket, title: 'Video Analytics', description: 'Advanced metrics and performance forecasting' },
  { icon: Users, title: 'Sentiment Analysis', description: 'Deep audience engagement insights' },
];

export default function About() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-slate-900 py-20 px-6 flex flex-col items-center">
      {/* Background visuals */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900"></div>
      <div className="absolute inset-0 grid bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px] opacity-10"></div>

      <div className="relative z-10 max-w-7xl w-full space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center px-6 py-3 glass-neon rounded-full cyber-glow space-x-3">
            <Target className="w-5 h-5 text-cyan-300 electric-effect" />
            <span className="text-sm font-bold text-white">THE CREATOR'S PROBLEM</span>
            <Zap className="w-5 h-5 text-yellow-300 electric-effect" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-orange-300 to-yellow-300 neon-text">
            Creators Struggle
          </h2>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/90 leading-relaxed">
            Budding creators on YouTube, Instagram Reels, and TikTok waste countless hours on optimization tasks instead of focusing on storytelling and content creation.
          </p>
        </div>

        {/* Problem grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => (
            <div key={idx} className="group relative p-6 rounded-3xl card-holographic hover:scale-105 transition-transform duration-500" style={{ boxShadow: `0 0 30px ${item.glowColor}` }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br blur-xl" style={{ background: item.gradient }}></div>
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.gradient} cyber-glow`}>
                  <item.icon className="w-8 h-8 text-white electric-effect" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white neon-text">{item.title}</h3>
                <p className="mt-2 text-white/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Solutions grid */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center px-6 py-3 glass-neon rounded-full cyber-glow space-x-3">
              <Sparkles className="w-5 h-5 text-green-300 electric-effect" />
              <span className="text-sm font-bold text-white">AI‑POWERED SOLUTION</span>
              <Star className="w-5 h-5 text-yellow-300 electric-effect" />
            </div>
            <h2 className="text-4xl sm:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-cyan-300 to-blue-300 neon-text">
              How KreatorKit Solves It
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
              <div key={idx} className="group relative p-8 rounded-3xl card-holographic hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br blur-xl" style={{ background: item.gradient }}></div>
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.gradient} cyber-glow`}>
                    <item.icon className="w-10 h-10 text-white electric-effect" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-white neon-text">{item.title}</h3>
                  <p className="mt-4 text-white/80">{item.description}</p>
                  <ul className="mt-4 space-y-2 text-white/70">
                    {item.features.map((f, fi) => (
                      <li key={fi} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient}`}></div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming features */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-white">Coming Soon</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {upcomingFeatures.map((up, ui) => (
              <div key={ui} className="group p-6 rounded-2xl bg-slate-800/60 border border-purple-700/40 backdrop-blur-xl hover:scale-105 transition-transform duration-500">
                <div className="inline-flex items-center space-x-4">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm">
                    <up.icon className="w-6 h-6 text-pink-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{up.title}</h4>
                    <p className="text-white/80">{up.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
