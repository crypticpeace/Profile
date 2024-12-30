import React, { useState } from 'react';
import { ShoppingCart, } from 'lucide-react';

import Image1 from './assets/aman_creativelead.JPG';
import Image2 from './assets/_DSC0450.JPG';
import PreviousClientWork from './components/PreviousClientWork';
import Footer from './components/footer';


const App = () => {
  const [selectedImage, setSelectedImage] = useState(0);



  const profileData = {
    name: "Aman Jain",
    title: "Social Media Manager",
    salary: "1,00,000",
    rating: 4.8,
    totalReviews: 47,
    images: [
      Image1,
      Image2,
    ],
    skills: ["UI/UX", "React", "Python", "SQL"],
    creative_skills: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro"],
    description: `
     Experienced Social Media Manager with 2+ years of expertise in creating engaging content and driving brand growth through strategic graphic design and video editing. Skilled in UI/UX design and frontend engineering, bringing a unique blend of creativity and technical proficiency to enhance user experiences and build impactful digital solutions.
    `,
    reviews: [
      {
        author: "Mom",
        rating: 5,
        text: "Exceptional developer who consistently delivers high-quality code. Would definitely hire again!"
      },
    ]
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative max-w-8xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-2">
          {/* Image Gallery */}
          <div className="space-y-4 group">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 animate-gradient" />
              <img
                src={profileData.images[selectedImage]}
                alt={`${profileData.name} - View ${selectedImage + 1}`}
                className="h-full w-full object-cover rounded-lg ring-2 ring-blue-500/20 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex gap-2">
              {profileData.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative overflow-hidden border-2 rounded transition-all duration-300 ${selectedImage === idx
                    ? 'border-blue-500 scale-110'
                    : 'border-slate-700 hover:border-blue-400'
                    }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-16 h-16 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 relative">
            <div className="transform transition-all duration-300 hover:translate-x-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-300% animate-gradient">
                {profileData.name}
              </h1>
              <p className="text-xl text-blue-300">{profileData.title}</p>
            </div>

            <div className="border-t border-b border-slate-700/50 py-6 backdrop-blur-sm bg-slate-900/30 rounded-lg p-4">
              <div className="py-4">
                <div className="text-sm text-gray-400 italic mb-1 animate-pulse">
                  you will underpay me anyway
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-bold text-blue-600 line-through">
                    ₹{profileData.salary}/month
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <ShoppingCart size={20} />
                  Hire Now
                </button>
               
              
            </div>
          </div>

          <div className="transform transition-all duration-300 hover:translate-x-2">
            <h2 className="text-2xl font-bold text-blue-300">About This Developer</h2>
            <div className="text-gray-300 whitespace-pre-line">
              {profileData.description}
            </div>
          </div>

          <div className="flex flex-wrap gap-8 pb-2">
            <div className="w-full">
              <h2 className="text-xl font-bold text-blue-300 mb-2">Creative Skills</h2>
              <div className="flex flex-wrap gap-2 border-b border-slate-700/50 pb-4">
                {profileData.creative_skills.map((creative_skill) => (
                  <span
                    key={creative_skill}
                    className="bg-slate-800/50 backdrop-blur-sm px-3 py-1 rounded-full text-blue-300 transition-all duration-300 hover:bg-blue-500/20 hover:scale-105"
                  >
                    {creative_skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full">
              <h2 className="text-xl font-bold text-blue-300 mb-2">Technical Skills</h2>
              <div className="flex flex-wrap gap-2 border-b border-slate-700/50 pb-4">
                {profileData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-800/50 backdrop-blur-sm px-3 py-1 rounded-full text-blue-300 transition-all duration-300 hover:bg-blue-500/20 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Previous work Section */}
      <PreviousClientWork />

      {/* Footer */}
      <Footer />
    </div>
    </div >
  );
};

export default App;