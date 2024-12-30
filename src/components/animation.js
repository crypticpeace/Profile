import React, { useState, useEffect } from 'react';

const InteractiveBackground = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Base background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Interactive gradient */}
      <div 
        className="fixed inset-0 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent opacity-50 transition-transform duration-100 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgb(59 130 246 / 0.2), rgb(168 85 247 / 0.1), transparent 50%)`,
        }}
      />
      
      {/* Existing background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

// Wrap the existing content with the new background
const EnhancedLayout = () => (
  <InteractiveBackground>
    <div className="relative max-w-8xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-2">
        {/* Your existing content here */}
      </div>
    </div>
  </InteractiveBackground>
);

export default EnhancedLayout;