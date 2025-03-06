import React, { useState } from 'react';

const DayNightToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Start with night mode
  
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-xl font-bold">{isDarkMode ? 'Night Mode' : 'Day Mode'}</h2>
      
      <button 
        onClick={toggleMode}
        className="relative w-64 h-32 flex items-center justify-center focus:outline-none group"
        aria-label={isDarkMode ? "Currently night mode, click to switch to day mode" : "Currently day mode, click to switch to night mode"}
        role="button"
        aria-pressed={isDarkMode}
        style={{ perspective: "400px" }}
      >
        {/* Main toggle container with enhanced 3D inset styling */}
        <div
          className="absolute w-56 h-24 bg-gray-200 rounded-full overflow-hidden"
          style={{
            boxShadow:
              "inset 0 6px 15px rgba(0,0,0,0.6), inset 0 -4px 8px rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.2)",
            border: "1px solid rgba(0,0,0,0.2)",
            transform: "rotateX(5deg)"
          }}
        >
          {/* Background that shifts based on mode */}
          <div
            className="absolute inset-0 transition-colors duration-700 ease-in-out"
            style={{
              background: isDarkMode
                ? 'linear-gradient(to bottom, #1a202c, #2d3748)'
                : 'linear-gradient(to bottom, #63b3ed, #90cdf4)',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2)'
            }}
          ></div>
          
          {/* Stars (night mode) */}
          <div
            className={`
              absolute inset-0 transition-all duration-700 transform
              ${isDarkMode ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-24'}
            `}
          >
            <div className="absolute h-1 w-1 bg-white rounded-full left-6 top-5"></div>
            <div className="absolute h-2 w-2 bg-white rounded-full left-12 top-8 transform rotate-45">
              <div className="absolute inset-0 bg-white rounded-full animate-pulse"></div>
            </div>
            <div className="absolute h-1 w-1 bg-white rounded-full left-20 top-4"></div>
            <div className="absolute h-1 w-1 bg-white rounded-full left-24 top-10"></div>
            <div className="absolute h-1 w-1 bg-white rounded-full left-8 top-12"></div>
            <div className="absolute h-1 w-1 bg-white rounded-full left-16 top-16"></div>
            <div className="absolute h-1 w-1 bg-white rounded-full left-28 top-18"></div>
          </div>
          
          {/* Clouds (day mode) */}
          <div
            className={`
              absolute inset-0 transition-all duration-700 transform
              ${isDarkMode ? 'opacity-0 translate-y-24' : 'opacity-100 translate-y-0'}
            `}
          >
            <div className="absolute right-6 top-10 w-16 h-6 bg-white rounded-full"></div>
            <div className="absolute right-12 top-6 w-12 h-6 bg-white rounded-full"></div>
            <div className="absolute right-20 top-14 w-10 h-5 bg-white rounded-full"></div>
            <div className="absolute right-2 top-16 w-8 h-4 bg-white rounded-full"></div>
          </div>
          
          {/* Sun/Moon container */}
          <div
            className="absolute top-4"
            style={{
              left: isDarkMode ? `calc(100% - 4rem - 4px)` : '4px',
              transition: "left 700ms ease-in-out",
              zIndex: 20 // Ensure container is above background elements
            }}
          >
            <div className="relative">
              {/* Gradient circle 1 (largest, lowest opacity) */}
              <div
                className="absolute w-48 h-48 rounded-full transition-colors duration-700"
                style={{
                  backgroundColor: isDarkMode ? '#374151' : '#93c5fd',
                  opacity: 0.4,
                  left: '-64px',
                  top: '-64px',
                  zIndex: 10
                }}
              ></div>
              
              {/* Gradient circle 2 (medium, medium opacity) */}
              <div
                className="absolute w-36 h-36 rounded-full transition-colors duration-700"
                style={{
                  backgroundColor: isDarkMode ? '#4b5563' : '#60a5fa',
                  opacity: 0.5,
                  left: '-40px',
                  top: '-40px',
                  zIndex: 11
                }}
              ></div>
              
              {/* Gradient circle 3 (smallest, highest opacity) */}
              <div
                className="absolute w-24 h-24 rounded-full transition-colors duration-700"
                style={{
                  backgroundColor: isDarkMode ? '#6b7280' : '#3b82f6',
                  opacity: 0.6,
                  left: '-16px',
                  top: '-16px',
                  zIndex: 12
                }}
              ></div>
              {/* Sun/Moon main circle */}
              <div
                className="w-16 h-16 rounded-full transition-colors duration-700 ease-in-out cursor-pointer hover:scale-105"
                style={{
                  backgroundColor: isDarkMode ? '#e5e7eb' : '#fbbf24',
                  boxShadow: isDarkMode
                    ? "0 4px 12px rgba(0,0,0,0.4), 0 8px 14px rgba(0,0,0,0.3), inset 0 -3px 6px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.15)"
                    : "0 4px 12px rgba(0,0,0,0.3), 0 8px 14px rgba(0,0,0,0.2), inset 0 -3px 6px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.15)",
                  position: "relative",
                  zIndex: 15
                }}
              >
                {/* Moon craters - appear in dark mode */}
                <div
                  className="absolute inset-0 transition-all duration-700"
                  style={{
                    opacity: isDarkMode ? 1 : 0,
                    transform: isDarkMode ? 'scale(1)' : 'scale(0)'
                  }}
                >
                  <div className="absolute bg-gray-300 w-4 h-4 rounded-full left-6 top-4"></div>
                  <div className="absolute bg-gray-300 w-3 h-3 rounded-full left-10 top-8"></div>
                  <div className="absolute bg-gray-300 w-2 h-2 rounded-full left-4 top-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
      
      <p className="text-center text-gray-600">
        Click to toggle between day and night mode
      </p>
    </div>
  );
};

export default DayNightToggle;