"use client"
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GenTrans() {
  const [prompt, setPrompt] = useState('');
  const [transcript, setTranscript] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [enhancedTranscript, setEnhancedTranscript] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt || !transcript) {
      setError('Please provide both a prompt and transcript');
      return;
    }

    if ((prompt.match(/:/g) || []).length !== 2) {
      setError('Prompt format should be: Channel:Category:Title');
      return;
    }

    setIsLoading(true);
    setError(null);
    setEnhancedTranscript('');

    try {
      const response = await fetch('https://groq-transcipt-api-frdjcqhwejbzdqcp.centralindia-01.azurewebsites.net/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, transcript }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();
      setEnhancedTranscript(data.enhanced_transcript || '');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = () => {
    setPrompt('TechTalks:Programming:React Hooks Explained');
    setTranscript('Today we talk about react hooks. They are functions that let you use state and other react features without writing classes. The most common ones are useState and useEffect.');
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
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
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-200 mb-2">
            Transcript Enhancer
          </h1>
          <p className="text-blue-200/80">
            Elevate your transcripts with AI-powered refinement
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2" htmlFor="prompt">
                  Content Prompt
                </label>
                <input
                  id="prompt"
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Channel:Category:Title (e.g., TechTalks:Programming:React Hooks)"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Format: Channel name:Category:Video title
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2" htmlFor="transcript">
                  Original Transcript
                </label>
                <textarea
                  ref={textareaRef}
                  id="transcript"
                  rows={8}
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 resize-none"
                  placeholder="Paste your transcript here..."
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleExampleClick}
                  className="text-sm text-purple-300 hover:text-purple-200 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Load example
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !prompt || !transcript}
              className={`w-full py-3.5 px-6 rounded-xl font-semibold text-lg transition-all flex items-center justify-center space-x-2
                ${isLoading ? 'bg-purple-800 cursor-not-allowed' : 
                  !prompt || !transcript ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 
                  'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30'}
              `}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Enhancing...</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>Enhance Transcript</span>
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
          {enhancedTranscript && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-purple-200 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Enhanced Transcript
                </h2>
                <button
                  onClick={() => navigator.clipboard.writeText(enhancedTranscript)}
                  className="text-sm text-purple-300 hover:text-purple-200 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copy
                </button>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="p-5 bg-gray-800/30 rounded-xl border border-gray-700/50"
              >
                <pre className="whitespace-pre-wrap font-sans text-gray-100">
                  {enhancedTranscript}
                </pre>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}