"use client";
import { useRef, useState, useEffect, useCallback } from "react";

export default function ScalingCard() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Play/pause
  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  }, []);

  // Time and play state handlers
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

  // Step forward/back
  const step = (s) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, Math.min(v.duration || 0, v.currentTime + s));
  };

  // Mute
  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    setVolume(v.muted ? 0 : v.volume);
  };

  // Volume
  const onVolumeChange = (val) => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = val;
    v.muted = val === 0;
    setVolume(val);
    setMuted(val === 0);
  };

  // Seek
  const seek = (p) => {
    const v = videoRef.current;
    if (!v || !isFinite(duration) || duration === 0) return;
    v.currentTime = Math.max(0, Math.min(duration, p * duration));
  };

  // Time format
  const formatTime = (t = 0) => {
    if (!isFinite(t)) return "0:00";
    const total = Math.floor(t);
    const s = String(total % 60).padStart(2, "0");
    const m = Math.floor(total / 60);
    return `${m}:${s}`;
  };

  // Fullscreen
  const toggleFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await el.requestFullscreen?.();
    }
  };

  // Keyboard support
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
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [togglePlay]);

  return (
    <section className="w-full flex flex-col items-center mb-8">
      <h2 className="font-bold text-lg md:text-xl mt-4">
        <span className="text-[#385179]">Scaling</span> Is Simple,{" "}
        <span className="underline">Scientific</span>, and Predictable.
      </h2>

      <div className="glass shadow-neumorphic rounded-2xl bg-white bg-opacity-75 max-w-md w-full mt-3 px-0 py-5">
        <div
          ref={containerRef}
          className="bg-[#f5f5f5] border border-gray-200 rounded-2xl overflow-hidden aspect-video relative flex items-center justify-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Video */}
          <video
            ref={videoRef}
            src="/demo.mp4"
            className="w-full h-full object-cover transition-all duration-150"
            onClick={togglePlay}
            controls={false}
            tabIndex={0}
            style={{
              filter: hovered ? "brightness(0.93)" : "brightness(1)",
              backgroundColor: "#e5e7eb",
            }}
          />

          {/* Center Play/Pause button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            aria-label={isPlaying ? "Pause" : "Play"}
            className={`button-neumorphic w-16 h-16 rounded-full flex items-center justify-center absolute transition-opacity duration-200 ring-2 ring-gray-200
              ${hovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "rgba(245,245,245,0.7)" }}
          >
            {isPlaying ? (
              <svg width="30" height="30" fill="#385179" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="30" height="30" viewBox="0 0 24 24">
                <polygon points="6,4 20,12 6,20" fill="#385179" />
              </svg>
            )}
          </button>

          {/* Controls: Visible on hover */}
          <div
            className={`absolute left-0 right-0 bottom-0 pb-2 px-3 transition-opacity duration-200
              ${hovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            {/* Progress Bar */}
            <div
              className="w-full h-2 bg-gray-100 rounded-full cursor-pointer mb-2"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const p = Math.max(0, Math.min(1, x / rect.width));
                seek(p);
              }}
            >
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${(currentTime / (duration || 1)) * 100}%`,
                  background: "linear-gradient(90deg,#8b95a1,#385179)",
                }}
              />
            </div>

            {/* Main Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Rewind */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-10);
                  }}
                  className="button-neumorphic w-9 h-9 rounded-full flex items-center justify-center bg-[#f3f3f3] border border-gray-200"
                  title="Rewind 10s"
                >
                  <svg width="18" height="18" fill="#385179" viewBox="0 0 24 24">
                    <path d="M11 18V6l-8.5 6L11 18zM21 18V6l-8.5 6L21 18z" />
                  </svg>
                </button>

                {/* Play/Pause */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="button-neumorphic w-9 h-9 rounded-full flex items-center justify-center bg-[#f3f3f3] border border-gray-200"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <svg width="14" height="14" fill="#385179" viewBox="0 0 24 24">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24">
                      <polygon points="6,4 20,12 6,20" fill="#385179" />
                    </svg>
                  )}
                </button>

                {/* Forward */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    step(10);
                  }}
                  className="button-neumorphic w-9 h-9 rounded-full flex items-center justify-center bg-[#f3f3f3] border border-gray-200"
                  title="Forward 10s"
                >
                  <svg width="18" height="18" fill="#385179" viewBox="0 0 24 24">
                    <path d="M3 18V6l8.5 6L3 18zM13 18V6l8.5 6L13 18z" />
                  </svg>
                </button>

                {/* Mute/Unmute */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  className="button-neumorphic w-9 h-9 rounded-full flex items-center justify-center bg-[#f3f3f3] border border-gray-200"
                  title={muted ? "Unmute" : "Mute"}
                >
                  {muted || volume === 0 ? (
                    <svg width="14" height="14" fill="#385179" viewBox="0 0 24 24">
                      <path d="M16.5 12a4.5 4.5 0 0 0-4.5-4.5v9A4.5 4.5 0 0 0 16.5 12z" />
                      <path d="M19 5l-1.4 1.4L20.2 9 18 11.2 19.4 12.6 21.6 10.4 23 11.8 20.8 14 22.2 15.4 24.4 13.2 21.2 10z" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24">
                      <path d="M5 9v6h4l5 4V5L9 9H5z" fill="#385179" />
                    </svg>
                  )}
                </button>

                {/* Volume Slider */}
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => onVolumeChange(Number(e.target.value))}
                  className="h-2 w-24 rounded bg-gray-200 accent-[#385179] ml-2"
                  aria-label="Volume"
                />

                {/* Time Display */}
                <div className="text-xs ml-2 text-[#385179] font-mono opacity-80 min-w-[70px] text-center">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              {/* Fullscreen */}
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFullscreen();
                  }}
                  className="button-neumorphic w-9 h-9 rounded-full flex items-center justify-center bg-[#f3f3f3] border border-gray-200"
                  title="Fullscreen"
                >
                  <svg width="14" height="14" fill="#385179" viewBox="0 0 24 24">
                    <path d="M7 14H5v5h5v-2H7v-3zM19 5h-5v2h3v3h2V5zM5 5v5h2V7h3V5H5zM19 19v-5h-2v3h-3v2h5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
