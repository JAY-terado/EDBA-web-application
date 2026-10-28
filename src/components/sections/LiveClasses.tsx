import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Radio,
  MessageSquare,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function LiveClasses() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Guarantee automatic, lag-free autoplay on page load without any user action
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Strict muted settings required by modern browsers for zero-click autoplay
    video.muted = true;
    video.defaultMuted = true;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // If browser policy defers autoplay, start as soon as user touches or scrolls
          const triggerPlay = () => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
            window.removeEventListener("scroll", triggerPlay);
            window.removeEventListener("touchstart", triggerPlay);
            window.removeEventListener("click", triggerPlay);
          };
          window.addEventListener("scroll", triggerPlay, { once: true, passive: true });
          window.addEventListener("touchstart", triggerPlay, { once: true, passive: true });
          window.addEventListener("click", triggerPlay, { once: true });
        });
      }
    };

    playVideo();

    const handleVolumeChange = () => {
      if (videoRef.current) {
        setIsMuted(videoRef.current.muted);
      }
    };

    video.addEventListener("volumechange", handleVolumeChange);

    return () => {
      video.removeEventListener("volumechange", handleVolumeChange);
    };
  }, []);

  // Infinite seamless loop restart
  const handleVideoEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  // Instant hardware-accelerated sound toggle (no toasts, no tooltips, no hover popups)
  const toggleMute = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      if (video.volume === 0) video.volume = 1;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  }, []);

  const features = [
    {
      icon: VideoIcon,
      title: "Live Streaming Sessions",
      desc: "Teachers stream live classes directly through the platform with HD quality.",
    },
    {
      icon: MessageSquare,
      title: "Interactive Live Chat",
      desc: "Students and parents join, interact, and communicate through real-time chat.",
    },
    {
      icon: BookOpen,
      title: "Recorded Classroom Highlights",
      desc: "Recorded sessions and short learning videos help students catch up on missed lessons.",
    },
    {
      icon: Users,
      title: "Parent Participation",
      desc: "Parents can join live classes, stay informed, and follow their child's learning journey.",
    },
  ];

  return (
    <section id="live-classes" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Clean Infinite Video Display */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* Ambient decorative soft halo behind container */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/15 via-sky-500/10 to-indigo-600/15 rounded-3xl blur-2xl -z-10 pointer-events-none" />

            {/* Video Player Shell */}
            <div className="relative bg-slate-950 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/35 border border-slate-800/80 select-none">
              {/* Aspect Ratio Frame - No title attribute, no hover popups */}
              <div
                className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center cursor-pointer"
                onClick={toggleMute}
                style={{
                  transform: "translate3d(0, 0, 0)",
                  WebkitTransform: "translate3d(0, 0, 0)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                {/* Hardware-accelerated Video (100% native quality, autoPlay on load, infinite loop) */}
                <video
                  ref={videoRef}
                  playsInline
                  autoPlay
                  loop
                  muted
                  preload="auto"
                  disablePictureInPicture
                  onEnded={handleVideoEnded}
                  style={{
                    filter: "none",
                    WebkitFilter: "none",
                    imageRendering: "auto",
                    transform: "translate3d(0, 0, 0)",
                    willChange: "transform",
                  }}
                  className="w-full h-full object-contain block bg-black"
                >
                  <source src="/edba-tv-demo.mp4" type="video/mp4" />
                  <source src="/EDBA%20TV%20demo%20(1).mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Top-Left: Discreet Live Status Badge */}
                <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2 pointer-events-none">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-950/80 rounded-full shadow-md border border-white/10 text-white">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-slate-200">LIVE HD</span>
                  </div>
                </div>

                {/* Bottom-Right: Clean Sound Toggle Pill - Zero hover popups or browser tooltips */}
                <div className="absolute bottom-3.5 right-3.5 z-20 pointer-events-auto">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-150 shadow-lg border cursor-pointer select-none ${
                      isMuted
                        ? "bg-slate-950/85 hover:bg-slate-900 text-white border-white/20"
                        : "bg-blue-600 hover:bg-blue-500 text-white border-blue-400/50"
                    }`}
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-slate-200 text-xs">Unmute</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-white" />
                        <span className="text-white text-xs">Mute</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Bottom Presenter Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                    E
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold tracking-wide">EDBA Interactive TV Display</p>
                    <p className="text-teal-400 text-[11px] font-medium flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
                      Live Streaming &amp; Classroom Screen
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-blue-600/20 border border-blue-500/30 rounded-md">
                    <span className="text-blue-300 text-xs font-semibold">Active Session</span>
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center text-teal-400">
                    <Radio className="h-4 w-4 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-5 w-fit shadow-xs">
              <Radio className="w-3.5 h-3.5 text-blue-600 animate-pulse" aria-hidden="true" />
              Live Classroom
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] text-slate-900 tracking-tight mb-5">
              Live Classes &amp; <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500">
                Interactive Learning
              </span>
            </h2>

            <p className="text-slate-700 font-semibold text-lg leading-snug mb-3">
              Bring Teachers, Students, and Parents Together in Real Time
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-4 font-normal">
              Conduct live classes through the EDBA platform, allowing teachers to connect with students and parents through an interactive digital learning experience.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-4 font-normal">
              Teachers can stream live sessions, while students and parents can join, interact, and communicate through live chat. Important updates, discussions, and information can be highlighted and easily accessed when needed.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-8 font-normal">
              Recorded classroom highlights and short learning videos can also be made available alongside the live session, helping students quickly catch up on missed lessons and stay connected with their learning journey.
            </p>

            {/* Feature pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200"
                  >
                    <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 mb-0.5">{feat.title}</p>
                      <p className="text-xs text-slate-500 font-normal leading-snug">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 cursor-pointer w-fit group"
            >
              <span>See Live Classroom in Action</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}
