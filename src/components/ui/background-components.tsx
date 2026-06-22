import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { RippleGrid } from "./ripple-grid";

export const MainBackground = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("min-h-screen w-full relative", className)}>
      {/* Interactive Ripple Grid Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-auto">
        <RippleGrid 
          size={40} 
          cellSize={60}
          pulseColor="rgba(123, 92, 240, 0.6)" // Theme purple
        />
      </div>
      {/* Soft Yellow/Orange Glow (Dark Theme Adapted) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(226, 252, 55, 0.15) 0%, transparent 70%)`,
          opacity: 0.6,
          mixBlendMode: "screen",
        }}
      />
      
      {/* App Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default MainBackground;
