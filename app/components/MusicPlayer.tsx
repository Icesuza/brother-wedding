"use client";
import { useState, useEffect, useRef } from "react";
import { LucideMusic, LucideMusic2, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} loop src="/audio/OLICA_ភ្ជាប់និស្ស័យ_NISAI_ft_KZ_Long_&_Chan_Official_Lyric_Video.mp3" />
      
      <Button
        onClick={toggleMusic}
        variant="outline"
        size="icon"
        className={`rounded-full shadow-lg border-gold/50 transition-all duration-500 ${
          isPlaying ? "bg-gold text-white animate-spin-slow" : "bg-white text-gold"
        }`}
      >
        {isPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </Button>

      {/* Optional: Subtle label */}
      <span className="absolute right-12 top-2 text-[10px] uppercase tracking-widest text-gold font-bold pointer-events-none opacity-70">
        {isPlaying ? "Playing" : "Music Off"}
      </span>
    </div>
  );
}