import React, { useState } from 'react'

interface UploadFormProps {
  onSubmit: (file: File) => void
}

export default function UploadForm({ onSubmit }: UploadFormProps) {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (file) onSubmit(file)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <input type="file" accept="video/*" onChange={handleFileChange} className="text-white" />
      <button
        type="submit"
        disabled={!file}
        className="px-6 py-3 bg-gradient-to-r from-secondaryGradientStart to-secondaryGradientEnd rounded-full font-bold hover:brightness-110 transition disabled:opacity-50"
      >
        Upload Video
      </button>
    </form>
  )
}
