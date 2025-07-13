"use client"
import { useState, useRef, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Suggestion = {
  timestamp: string;
  song: string;
};

export default function SuggestSong() {
  const [video, setVideo] = useState<File | null>(null);
  const [numSongs, setNumSongs] = useState<number>(5);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(e.target.files[0]);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!video) {
      setError('Please select a video file');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuggestions([]);

    const formData = new FormData();
    formData.append('video', video);
    formData.append('num_songs', numSongs.toString());

    try {
      const response = await fetch('https://3a8db5b838ea.ngrok-free.app/suggest_songs', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();
      setSuggestions(data.suggestions);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 to-blue-950 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200 mb-2">
            AI Song Suggester
          </h1>
          <p className="text-blue-200/80">
            Upload your video and discover perfect song matches
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div 
                onClick={triggerFileInput}
                className="border-2 border-dashed border-blue-400/30 rounded-xl p-8 text-center cursor-pointer hover:border-blue-400/50 transition-colors group"
              >
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="p-3 bg-blue-900/30 rounded-full group-hover:bg-blue-800/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-blue-100 font-medium">
                    {video ? video.name : 'Click to upload video'}
                  </p>
                  <p className="text-sm text-blue-300/60">
                    {video ? 'Click to change file' : 'MP4, MOV, AVI (max 100MB)'}
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-200" htmlFor="numSongs">
                Number of song suggestions
              </label>
              <div className="flex items-center space-x-4">
                <input
                  id="numSongs"
                  type="range"
                  min="1"
                  max="20"
                  value={numSongs}
                  onChange={(e) => setNumSongs(parseInt(e.target.value))}
                  className="w-full h-2 bg-blue-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <span className="text-cyan-300 font-mono w-8 text-center">
                  {numSongs}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !video}
              className={`w-full py-3.5 px-6 rounded-xl font-semibold text-lg transition-all flex items-center justify-center space-x-2
                ${isLoading ? 'bg-blue-800 cursor-not-allowed' : 
                  !video ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 
                  'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30'}
              `}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <span>Suggest Songs</span>
                </>
              )}
            </button>
          </form>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 overflow-hidden"
              >
                <div className="p-4 bg-red-900/30 rounded-xl border border-red-700/50">
                  <p className="text-red-200 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-cyan-200 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                Suggested Songs
              </h2>
              <div className="space-y-4">
                {suggestions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-400/30 transition-colors group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 pt-1">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-900/30 text-cyan-400 group-hover:bg-cyan-800/50 transition-colors">
                          <span className="font-mono">{index + 1}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-mono text-cyan-300">{item.timestamp}</p>
                        <p className="text-xl font-medium text-white group-hover:text-cyan-100 transition-colors">
                          {item.song}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}