import { useState } from 'react'

export default function Thumbnail() {
  const [thumbnailUrl, setThumbnailUrl] = useState('')
  const [rating, setRating] = useState<number | null>(null)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const handleRateThumbnail = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setRating(7.5)
      setSuggestions([
        'Increase text contrast for readability',
        'Add subtle shadow behind main text',
        'Use warmer colors to attract attention',
      ])
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="max-w-3xl mx-auto bg-black bg-opacity-30 rounded-3xl p-10 shadow-xl">
      <h2 className="text-4xl font-bold mb-6 text-secondaryGradientEnd">Thumbnail Rating & Suggestions</h2>
      <input
        type="text"
        placeholder="Paste thumbnail image URL"
        value={thumbnailUrl}
        onChange={(e) => setThumbnailUrl(e.target.value)}
        className="w-full rounded-xl p-4 mb-6 text-black font-semibold focus:outline-none focus:ring-4 focus:ring-secondaryGradientEnd"
      />
      <button
        onClick={handleRateThumbnail}
        disabled={!thumbnailUrl || loading}
        className="w-full py-4 bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd rounded-full font-extrabold text-xl hover:brightness-110 transition disabled:opacity-50"
      >
        {loading ? 'Rating...' : 'Rate Thumbnail'}
      </button>

      {rating !== null && (
        <div className="mt-8 p-6 bg-white bg-opacity-20 rounded-xl">
          <p className="text-2xl font-bold mb-4">
            Rating: <span className="text-yellow-400">{rating}/10</span>
          </p>
          <h3 className="text-xl font-semibold mb-2">Suggestions:</h3>
          <ul className="list-disc list-inside space-y-1 text-lg">
            {suggestions.map((sugg, i) => (
              <li key={i}>{sugg}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
// This component allows users to input a thumbnail URL, rate it, and receive suggestions for improvement.
// It uses local state to manage the thumbnail URL, rating, suggestions, and loading state.