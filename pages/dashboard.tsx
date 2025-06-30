import Link from "next/link";
import { SparklesIcon, ChartBarIcon, CalendarIcon } from "@heroicons/react/24/solid";

export default function Dashboard() {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="bg-gradient-to-br from-purple-700 via-pink-500 to-yellow-400 rounded-3xl shadow-2xl p-10 mb-8 animate-gradient-x">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4 flex items-center gap-3">
          <SparklesIcon className="h-10 w-10 text-yellow-300 animate-bounce" />
          CreatorPilot Dashboard
        </h1>
        <p className="text-xl text-white/90 mb-8">
          Welcome back! Here’s your creative command center. Analyze videos, optimize thumbnails, generate titles, and chat with your AI mentor—all in one place.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/analyze">
            <a className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition shadow-lg group">
              <ChartBarIcon className="h-12 w-12 text-pink-400 group-hover:animate-pulse" />
              <span className="mt-4 text-xl font-bold text-white">Video Analyzer</span>
              <span className="text-white/70 mt-2 text-center">Get actionable insights and engagement tips for your uploads.</span>
            </a>
          </Link>
          <Link href="/thumbnail">
            <a className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition shadow-lg group">
              <SparklesIcon className="h-12 w-12 text-yellow-400 group-hover:animate-spin" />
              <span className="mt-4 text-xl font-bold text-white">Thumbnail Rater</span>
              <span className="text-white/70 mt-2 text-center">Rate and improve your thumbnails for maximum clicks.</span>
            </a>
          </Link>
          <Link href="/chatbot">
            <a className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition shadow-lg group">
              <CalendarIcon className="h-12 w-12 text-purple-400 group-hover:animate-bounce" />
              <span className="mt-4 text-xl font-bold text-white">Content Mentor</span>
              <span className="text-white/70 mt-2 text-center">Ask your AI assistant for hooks, scripts, and viral ideas.</span>
            </a>
          </Link>
        </div>
      </div>
      {/* Recent Projects Section */}
      <section className="bg-white/10 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Recent Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-pink-500/60 to-purple-600/60 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-white">Fitness Vlog Analysis</h3>
            <ul className="text-white/80 mt-2 list-disc list-inside">
              <li>Suggested hook at 3s</li>
              <li>Engagement score: 8.7/10</li>
              <li>Best posting time: Tue 6PM</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-yellow-400/60 to-pink-400/60 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-white">Unboxing Thumbnail</h3>
            <ul className="text-white/80 mt-2 list-disc list-inside">
              <li>Rating: 9.2/10</li>
              <li>Tip: Add emoji overlay</li>
              <li>Suggested title: “Is This Worth the Hype?”</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
// This is the main dashboard page for CreatorPilot.
// It provides quick access to the main features: video analysis, thumbnail rating, and AI content mentorship.
// The dashboard also includes a recent projects section to showcase past analyses and ratings.