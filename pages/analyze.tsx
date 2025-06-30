import { useState } from 'react'

export default function Analyze() {
  const [videoUrl, setVideoUrl] = useState('')
  const [analysisResult, setAnalysisResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleAnalyze = async () => {
    setLoading(true)
    // Placeholder: simulate API call
    setTimeout(() => {
      setAnalysisResult(
        `Video analyzed! Suggested hook at 3s, add call-to-action at 45s, engagement score: 8.2/10`
      )
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="max-w-3xl mx-auto bg-black bg-opacity-30 rounded-3xl p-10 shadow-xl">
      <h2 className="text-4xl font-bold mb-6 text-secondaryGradientEnd">Smart Video Analyzer</h2>
      <input
        type="text"
        placeholder="Paste YouTube or video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="w-full rounded-xl p-4 mb-6 text-black font-semibold focus:outline-none focus:ring-4 focus:ring-secondaryGradientEnd"
      />
      <button
        onClick={handleAnalyze}
        disabled={!videoUrl || loading}
        className="w-full py-4 bg-gradient-to-r from-secondaryGradientStart to-secondaryGradientEnd rounded-full font-extrabold text-xl hover:brightness-110 transition disabled:opacity-50"
      >
        {loading ? 'Analyzing...' : 'Analyze Video'}
      </button>

      {analysisResult && (
        <div className="mt-8 p-6 bg-white bg-opacity-20 rounded-xl text-lg font-semibold">
          {analysisResult}
        </div>
      )}
    </div>
  )
}
// This component allows users to input a video URL, analyze it, and receive suggestions for improvement.
// It uses local state to manage the video URL, analysis result, and loading state.