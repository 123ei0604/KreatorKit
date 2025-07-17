"use client";

import { Music, Image, FileText } from "lucide-react";

const services = [
  {
    icon: Music,
    title: "Music Suggestions",
    description: "Suggests trending music based on transcript and genre.",
  },
  {
    icon: Image,
    title: "Thumbnail Optimizer",
    description: "Scores your thumbnails and gives feedback to improve CTR.",
  },
  {
    icon: FileText,
    title: "Script Generator",
    description: "Uses AI to create engaging scripts tailored to your topic.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black text-white px-6">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 text-transparent bg-clip-text">
          Tools We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-slate-800/50 border border-purple-500/20 backdrop-blur-lg hover:scale-105 transition-transform duration-300">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-zinc-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
