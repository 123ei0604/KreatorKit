"use client";
import React from 'react';
import { useState } from 'react';

const RateThumbnail = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setScore(null);
      setError(null);
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      setError("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(process.env.RATING_API_URL!, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
        mode: 'cors',
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      const confidence = data.confidence;
      const scaledScore = Math.round((confidence * 10) );

      setScore(scaledScore);
    } catch (err: any) {
      console.error('Fetch error:', err);
      setError(err.message || 'Failed to connect to the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-blue-800/30 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-blue-700/50">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
            Thumbnail Rater
          </h1>
          
          <div className="space-y-6">
            <div className="flex flex-col items-center justify-center">
              {preview ? (
                <div className="relative group mb-4">
                  <img 
                    src={preview} 
                    alt="Preview" 
                    className="w-full max-h-64 object-contain rounded-lg border-2 border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-all duration-300 rounded-lg" />
                </div>
              ) : (
                <div className="w-full h-48 flex items-center justify-center rounded-lg border-2 border-dashed border-blue-500/30 mb-4 bg-blue-900/10 hover:bg-blue-900/20 transition-all duration-300">
                  <span className="text-blue-300/70">No image selected</span>
                </div>
              )}
              
              <label className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20 active:scale-95">
                Choose Image
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading || !image}
              className={`w-full py-3 px-4 rounded-full font-semibold transition-all duration-300 ${loading || !image ? 'bg-blue-900/50 text-blue-300/50 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-400 text-blue-900 shadow-lg hover:shadow-cyan-500/30 active:scale-[0.98]'}`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </span>
              ) : 'Rate My Thumbnail'}
            </button>

            {score !== null && (
              <div className="mt-6 p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                    {score.toFixed(1)}
                  </div>
                  <div className="text-blue-200">/ 5</div>
                </div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${i < Math.floor(score) ? 'text-yellow-400' : 'text-blue-400/30'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-center mt-2 text-blue-300 text-sm">
                  {score >= 4 ? 'Excellent! 🎉' : 
                   score >= 3 ? 'Good job! 👍' : 
                   'Could be better ✏️'}
                </div>
              </div>
            )}

            {error && (
              <div className="mt-4 p-3 bg-red-900/30 text-red-300 rounded-lg border border-red-700/50 text-center">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RateThumbnail;