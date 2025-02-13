import React, { useState, useEffect, useRef } from "react";
import { Music, PauseCircle } from "lucide-react";
import { motion } from "framer-motion";
import { differenceInSeconds } from "date-fns";
import "./all.css";

// 🔹 Ensuring correct UTC time (December 31, 2024, 00:00:00 UTC)
const WEDDING_DATE = new Date("2024-12-31T00:00:00Z");

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const audioRef = useRef<HTMLAudioElement>(null);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);

  // Function to update the countdown
  const updateTimer = () => {
    const now = new Date();
    const diff = differenceInSeconds(WEDDING_DATE, now);

    // Debugging logs
    console.log("Current Time:", now.toISOString());
    console.log("Wedding Time:", WEDDING_DATE.toISOString());
    console.log("Time Difference in Seconds:", diff);

    // Stop the countdown if the date has passed
    if (diff <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      if (timerInterval.current) {
        clearInterval(timerInterval.current); // Stop the countdown once it reaches zero
      }
      return;
    }

    // Calculate days, hours, minutes, and seconds from the remaining seconds
    const days = Math.floor(diff / (24 * 60 * 60));
    const hours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((diff % (60 * 60)) / 60);
    const seconds = diff % 60;

    // Set the updated time left
    setTimeLeft({ days, hours, minutes, seconds });
  };

  // Start the countdown on component mount
  useEffect(() => {
    // Initial update before starting the interval
    updateTimer();
    
    // Start the interval to update every second
    timerInterval.current = setInterval(updateTimer, 1000);

    // Cleanup on component unmount
    return () => {
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
      }
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  // Toggle audio play/pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.muted = false; // Unmute before playing
      audioRef.current.play().catch((error) => console.error("Playback failed:", error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} loop muted>
        <source src="/audio/exciting-day-inspiring-piano-176148.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Button */}
      <button
        onClick={togglePlay}
        className="music absolute top-4 right-4 hover:scale-110 transition-transform"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <PauseCircle size={32} /> : <Music size={32} />}
      </button>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-serif mb-4"
        >
          Sarah & Michael
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl mb-12"
        >
          Are getting married
        </motion.p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl md:text-4xl font-bold">
                {String(value).padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base capitalize">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;