import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center max-w-3xl mx-auto mt-24">
      <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
        🚀 Scale Your Channel with <span className="text-secondaryGradientEnd">CreatorPilot</span>
      </h1>
      <p className="text-xl mb-12 text-white/80">
        The all-in-one AI platform to enhance your videos, thumbnails, SEO, and content strategy.
      </p>
      <Link href="/analyze">
        <a className="inline-block px-12 py-4 bg-gradient-to-r from-secondaryGradientStart to-secondaryGradientEnd rounded-full text-2xl font-bold shadow-lg hover:scale-105 transition-transform">
          Upload Video to Start
        </a>
      </Link>
    </div>
  )
}
// This is the main landing page for the CreatorPilot application.
// It introduces the platform and provides a call-to-action button to start analyzing videos.