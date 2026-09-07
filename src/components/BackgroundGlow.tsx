'use client';

import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Radial Grid */}
      <div className="absolute inset-0 bg-radial-grid opacity-30" />

      {/* Top Right Luxury Burgundy Ambient Orb */}
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #9B1B30 0%, rgba(155,27,48,0) 70%)' }}
      />

      {/* Center Left Subtle Burgundy Ambient Orb */}
      <div 
        className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #800020 0%, rgba(128,0,32,0) 70%)' }}
      />

      {/* Bottom Right Deep Burgundy Glow */}
      <div 
        className="absolute bottom-10 -right-20 w-[450px] h-[450px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C72C41 0%, rgba(0,0,0,0) 70%)' }}
      />
    </div>
  );
}
