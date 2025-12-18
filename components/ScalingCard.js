"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipForward,
  Maximize2,
  Minimize2,
  Gauge,
} from "lucide-react";

export default function ScalingCard() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [seeking, setSeeking] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [quality, setQuality] = useState("Auto");
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onTime = () => setCurrentTime(v.currentTime);
    const onLoaded = () => setDuration(v.duration || 0);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);

    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  const step = (s) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, Math.min(v.duration || 0, v.currentTime + s));
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    setVolume(v.muted ? 0 : v.volume);
  };

  const onVolumeChange = (val) => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = val;
    v.muted = val === 0;
    setVolume(val);
    setMuted(val === 0);
  };

  const handleProgressClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const v = videoRef.current;
    const progressBar = progressRef.current;
    if (!v || !progressBar || !isFinite(duration) || duration === 0) return;

    const rect = progressBar.getBoundingClientRect();
    let clientX;

    if (e.type === 'touchstart' || e.type === 'touchmove') {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    v.currentTime = percentage * duration;
  };

  const handleProgressMouseDown = (e) => {
    setSeeking(true);
    handleProgressClick(e);
  };

  const handleProgressTouchStart = (e) => {
    setSeeking(true);
    handleProgressClick(e);
  };

  const handleProgressMove = (e) => {
    if (!seeking) return;
    e.preventDefault();
    handleProgressClick(e);
  };

  const handleProgressEnd = () => {
    setSeeking(false);
  };

  useEffect(() => {
    if (seeking) {
      const handleMouseMove = (e) => handleProgressMove(e);
      const handleTouchMove = (e) => handleProgressMove(e);

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('mouseup', handleProgressEnd);
      document.addEventListener('touchend', handleProgressEnd);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('mouseup', handleProgressEnd);
        document.removeEventListener('touchend', handleProgressEnd);
      };
    }
  }, [seeking, duration]);

  const changePlaybackRate = (rate) => {
    const v = videoRef.current;
    if (v) {
      v.playbackRate = rate;
      setPlaybackRate(rate);
    }
    setShowSettings(false);
  };

  const formatTime = (t = 0) => {
    if (!isFinite(t)) return "0:00";
    const total = Math.floor(t);
    const s = String(total % 60).padStart(2, "0");
    const m = Math.floor(total / 60);
    return `${m}:${s}`;
  };

  const toggleFullscreen = async () => {
    try {
      const container = containerRef.current;
      const video = videoRef.current;
      
      if (!container || !video) return;

      if (!document.fullscreenElement && 
          !document.webkitFullscreenElement && 
          !document.mozFullScreenElement &&
          !document.msFullscreenElement) {
        
        // Enter fullscreen
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
          await container.webkitRequestFullscreen();
        } else if (container.mozRequestFullScreen) {
          await container.mozRequestFullScreen();
        } else if (container.msRequestFullscreen) {
          await container.msRequestFullscreen();
        } else if (video.webkitEnterFullscreen) {
          video.webkitEnterFullscreen();
        }
        
        // Lock to landscape orientation
        if (screen.orientation && screen.orientation.lock) {
          try {
            await screen.orientation.lock('landscape');
          } catch (err) {
            console.log('Orientation lock not supported or failed:', err);
          }
        }
        
        setIsFullscreen(true);
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          await document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          await document.msExitFullscreen();
        }
        
        // Unlock orientation when exiting fullscreen
        if (screen.orientation && screen.orientation.unlock) {
          try {
            screen.orientation.unlock();
          } catch (err) {
            console.log('Orientation unlock failed:', err);
          }
        }
        
        setIsFullscreen(false);
      }
    } catch (error) {
      console.log('Fullscreen error:', error);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement || 
        document.webkitFullscreenElement || 
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
      
      setIsFullscreen(isCurrentlyFullscreen);
      
      // If exiting fullscreen, unlock orientation
      if (!isCurrentlyFullscreen && screen.orientation && screen.orientation.unlock) {
        try {
          screen.orientation.unlock();
        } catch (err) {
          console.log('Orientation unlock failed:', err);
        }
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const handleVideoClick = (e) => {
    e.stopPropagation();
    setShowControls(!showControls);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;
      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      } else if (e.key === "ArrowLeft") {
        step(-5);
      } else if (e.key === "ArrowRight") {
        step(5);
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [togglePlay]);

  useEffect(() => {
    if (showControls && isPlaying) {
      const timer = setTimeout(() => setShowControls(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showControls, isPlaying]);

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="w-full flex flex-col items-center mb-8 px-4">
      <h2 className="font-bold text-lg md:text-xl mt-4 text-center">
        <span className="text-[#385179]">Scaling</span> Is Simple,{" "}
        <span className="underline">Scientific</span>, and Predictable.
      </h2>

      <div className="rounded-2xl bg-[#E0E5EC] shadow-[inset_6px_6px_12px_rgba(163,177,198,0.5),inset_-6px_-6px_12px_rgba(255,255,255,0.4)] max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl w-full mt-4 p-3 md:p-5 lg:p-6">
        <div className="bg-[#D1D9E6] border border-[#A3B1C6]/20 rounded-2xl overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-[#C8D0DD] border-b border-[#A3B1C6]/20">
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#f87171]" />
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#facc15]" />
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#4ade80]" />
            <span className="ml-2 md:ml-3 text-[10px] md:text-xs lg:text-sm font-medium text-[#556d92] truncate">
              scaling-demo.mp4
            </span>
          </div>

          {/* Video container */}
          <div
            ref={containerRef}
            className="bg-black rounded-b-2xl overflow-hidden aspect-video relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              width: isFullscreen ? '100vw' : '100%',
              height: isFullscreen ? '100vh' : 'auto',
            }}
          >
            <video
              ref={videoRef}
              src="/demo.mp4"
              className="w-full h-full"
              onClick={handleVideoClick}
              controls={false}
              tabIndex={0}
              playsInline
              preload="metadata"
              style={{
                objectFit: isFullscreen ? "contain" : "contain",
                backgroundColor: "#000000",
              }}
            />

            {/* Center Play button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              aria-label={isPlaying ? "Pause" : "Play"}
              className={`w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center absolute transition-all duration-200 bg-white/10 backdrop-blur-sm z-10
                ${hovered || showControls ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
              ) : (
                <Play className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white ml-1" />
              )}
            </button>

            {/* Controls */}
            <div
              className={`absolute inset-x-0 bottom-0 transition-opacity duration-200 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-1.5 md:pb-3 px-2 md:px-4 lg:px-6 z-20
                ${hovered || showControls ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              {/* Progress Bar */}
              <div 
                ref={progressRef}
                className="w-full h-0.5 md:h-1 bg-white/30 rounded-full cursor-pointer mb-1.5 md:mb-2 relative group"
                onMouseDown={handleProgressMouseDown}
                onTouchStart={handleProgressTouchStart}
                onClick={handleProgressClick}
              >
                <div
                  className="h-full bg-white rounded-full relative transition-all pointer-events-none"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full shadow-lg pointer-events-none" />
                </div>
              </div>

              {/* Main Controls */}
              <div className="flex items-center justify-between gap-0.5 md:gap-1">
                <div className="flex items-center gap-0.5 md:gap-1.5 flex-1 min-w-0">
                  {/* Play/Pause */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center text-white hover:text-white/80 transition flex-shrink-0"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 md:w-5 md:h-5" />
                    ) : (
                      <Play className="w-4 h-4 md:w-5 md:h-5" />
                    )}
                  </button>

                  {/* Skip Forward */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      step(10);
                    }}
                    className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center text-white hover:text-white/80 transition flex-shrink-0"
                  >
                    <SkipForward className="w-4 h-4 md:w-5 md:h-5" />
                  </button>

                  {/* Volume */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center text-white hover:text-white/80 transition flex-shrink-0"
                  >
                    {muted || volume === 0 ? (
                      <VolumeX className="w-4 h-4 md:w-5 md:h-5" />
                    ) : (
                      <Volume2 className="w-4 h-4 md:w-5 md:h-5" />
                    )}
                  </button>

                  {/* Volume Slider - Desktop only */}
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => onVolumeChange(Number(e.target.value))}
                    className="hidden md:block h-1 w-16 lg:w-20 rounded accent-white cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, white ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%)`
                    }}
                  />

                  {/* Time */}
                  <div className="text-[9px] md:text-xs text-white/90 font-medium whitespace-nowrap ml-0.5">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>

                <div className="flex items-center gap-0.5 md:gap-1.5">
                  {/* Settings */}
                  <div className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowSettings(!showSettings);
                      }}
                      className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center text-white hover:text-white/80 transition flex-shrink-0"
                    >
                      <Gauge className="w-4 h-4 md:w-5 md:h-5" />
                    </button>

                    {showSettings && (
                      <div className="absolute bottom-full right-0 mb-2 bg-[#1e293b] rounded-lg shadow-xl p-1.5 min-w-[110px] border border-white/10 z-40 max-h-[60vh] overflow-y-auto">
                        <div className="text-[9px] font-bold text-white/60 mb-1 px-1.5">Speed</div>
                        {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                          <button
                            key={rate}
                            onClick={() => changePlaybackRate(rate)}
                            className={`w-full text-left px-1.5 py-1 rounded text-[10px] transition ${
                              playbackRate === rate
                                ? "bg-white/20 text-white"
                                : "text-white/80 hover:bg-white/10"
                            }`}
                          >
                            {rate === 1 ? "Normal" : `${rate}x`}
                          </button>
                        ))}
                        <div className="border-t border-white/10 my-1" />
                        <div className="text-[9px] font-bold text-white/60 mb-1 px-1.5">Quality</div>
                        {["Auto", "1080p", "720p", "480p"].map((q) => (
                          <button
                            key={q}
                            onClick={() => setQuality(q)}
                            className={`w-full text-left px-1.5 py-1 rounded text-[10px] transition ${
                              quality === q
                                ? "bg-white/20 text-white"
                                : "text-white/80 hover:bg-white/10"
                            }`}
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Fullscreen */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFullscreen();
                    }}
                    className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center text-white hover:text-white/80 transition flex-shrink-0"
                    title={isFullscreen ? "Exit Fullscreen (F)" : "Fullscreen (F)"}
                  >
                    {isFullscreen ? (
                      <Minimize2 className="w-4 h-4 md:w-5 md:h-5" />
                    ) : (
                      <Maximize2 className="w-4 h-4 md:w-5 md:h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
