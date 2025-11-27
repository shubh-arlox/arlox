"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
  Maximize2,
} from "lucide-react";

export default function ScalingCard() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hovered, setHovered] = useState(false);

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

  const seek = (p) => {
    const v = videoRef.current;
    if (!v || !isFinite(duration) || duration === 0) return;
    v.currentTime = Math.max(0, Math.min(duration, p * duration));
  };

  const formatTime = (t = 0) => {
    if (!isFinite(t)) return "0:00";
    const total = Math.floor(t);
    const s = String(total % 60).padStart(2, "0");
    const m = Math.floor(total / 60);
    return `${m}:${s}`;
  };

  const toggleFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) await document.exitFullscreen();
    else await el.requestFullscreen?.();
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
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [togglePlay]);

  return (
    <section className="w-full flex flex-col items-center mb-8 px-4">
      <h2 className="font-bold text-lg md:text-xl mt-4 text-center">
        <span className="text-[#385179]">Scaling</span> Is Simple,{" "}
        <span className="underline">Scientific</span>, and Predictable.
      </h2>

      <div className="glass shadow-neumorphic rounded-2xl bg-white/70 max-w-xl w-full mt-4 p-4 md:p-5">
        {/* Terminal frame */}
        <div className="bg-[#f3f4f6] border border-gray-200 rounded-2xl overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#e5e7eb] border-b border-gray-200">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f87171]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#facc15]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80]" />
            <span className="ml-3 text-xs font-medium text-gray-500">
              scaling-demo.mp4
            </span>
          </div>

          {/* Video container */}
          <div
            ref={containerRef}
            className="bg-[#f5f5f5] rounded-b-2xl overflow-hidden aspect-video relative flex items-center justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
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

            {/* Center Play/Pause button - softer glow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              aria-label={isPlaying ? "Pause" : "Play"}
              className={`w-14 h-14 rounded-full flex items-center justify-center absolute transition-opacity duration-200
                ${hovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(circle at 30% 30%, #ffffff, #e5e7eb)",
                boxShadow:
                  "0 6px 12px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.6)",
              }}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-[#385179]" />
              ) : (
                <Play className="w-6 h-6 text-[#385179]" />
              )}
            </button>

            {/* Controls: Visible on hover */}
            <div
              className={`absolute left-0 right-0 bottom-0 pb-2 px-3 transition-opacity duration-200
                ${hovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              {/* Progress Bar */}
              <div
                className="w-full h-2 bg-gray-200/80 rounded-full cursor-pointer mb-2"
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
                    background: "linear-gradient(90deg,#9ca3af,#385179)",
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
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-[#f3f4f6] border border-gray-200 hover:bg-gray-100 transition"
                    title="Rewind 10s"
                  >
                    <SkipBack className="w-4 h-4 text-[#385179]" />
                  </button>

                  {/* Play/Pause */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-[#f3f4f6] border border-gray-200 hover:bg-gray-100 transition"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-[#385179]" />
                    ) : (
                      <Play className="w-4 h-4 text-[#385179]" />
                    )}
                  </button>

                  {/* Forward */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      step(10);
                    }}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-[#f3f4f6] border border-gray-200 hover:bg-gray-100 transition"
                    title="Forward 10s"
                  >
                    <SkipForward className="w-4 h-4 text-[#385179]" />
                  </button>

                  {/* Mute/Unmute */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-[#f3f4f6] border border-gray-200 hover:bg-gray-100 transition"
                    title={muted ? "Unmute" : "Mute"}
                  >
                    {muted || volume === 0 ? (
                      <VolumeX className="w-4 h-4 text-[#385179]" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-[#385179]" />
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
                    className="h-1.5 w-24 rounded bg-gray-200 accent-[#385179] ml-2"
                    aria-label="Volume"
                  />

                  {/* Time Display */}
                  <div className="text-[11px] ml-2 text-[#4b5563] font-mono opacity-80 min-w-[72px] text-center">
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
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-[#f3f4f6] border border-gray-200 hover:bg-gray-100 transition"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4 text-[#385179]" />
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
