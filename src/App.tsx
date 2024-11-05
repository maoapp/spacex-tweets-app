import React from 'react';

const App = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image container with overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1738402/pexels-photo-1738402.jpeg" 
          alt="Space background" 
          className="w-full h-full object-cover"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center p-8">
        <h1 className="text-6xl font-bold text-white mb-6 tracking-wider">
          Space-X Tracker
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Tracking launches, missions, and achievements across the cosmos
        </p>
      </div>

      {/* Decorative Button */}
      <div className="relative z-10 mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
          Explore Missions
        </button>
      </div>
    </div>
  );
};

export default App;
