import React from 'react';
import { Play, Volume2 } from 'lucide-react';

interface VideoControlsProps {
  duration: number;
}

export function VideoControls({ duration }: VideoControlsProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full bg-white/20 hover:bg-white/30">
            <Play className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-white/20 hover:bg-white/30">
            <Volume2 className="w-5 h-5" />
          </button>
        </div>
        <div className="text-sm">00:00 / {duration}s</div>
      </div>
    </div>
  );
}