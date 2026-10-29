import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Radio,
  MessageSquare,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function LiveClasses() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Keep video unmuted by default with seamless autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.defaultMuted = false;
    video.volume = 1;

    const startPlayback = async () => {
      try {
        video.muted = false;
        video.volume = 1;
        await video.play();
      } catch {
        // If the browser autoplay policy defers unmuted audio without prior interaction,
        // start playback and immediately unmute on first user interaction (touch, click, scroll)
        video.muted = true;
        video.play().catch(() => {});

        const enableAudioOnGesture = () => {
          if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.volume = 1;
            videoRef.current.play().catch(() => {});
          }
          window.removeEventListener("pointerdown", enableAudioOnGesture);
          window.removeEventListener("touchstart", enableAudioOnGesture);
          window.removeEventListener("click", enableAudioOnGesture);
          window.removeEventListener("scroll", enableAudioOnGesture);
          window.removeEventListener("keydown", enableAudioOnGesture);
        };

        window.addEventListener("pointerdown", enableAudioOnGesture, { once: true, passive: true });
        window.addEventListener("touchstart", enableAudioOnGesture, { once: true, passive: true });
        window.addEventListener("click", enableAudioOnGesture, { once: true });
        window.addEventListener("scroll", enableAudioOnGesture, { once: true, passive: true });
        window.addEventListener("keydown", enableAudioOnGesture, { once: true });
      }
    };

    startPlayback();
  }, []);

  // Infinite seamless loop restart (keeps unmuted)
  const handleVideoEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = false;
      video.volume = 1;
      video.play().catch(() => {});
    }
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    if (video.paused) {
      video.play().catch(() => {});
    }
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start lg:items-center">

          {/* Top on Mobile / Right Row 1 on Desktop: Header & Story */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 lg:col-start-7 lg:row-start-1 flex flex-col items-center lg:items-start"
          >
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-3 sm:mb-4 w-fit shadow-2xs self-center lg:self-start">
              <Radio className="w-3 h-3 text-blue-600 animate-pulse" aria-hidden="true" />
              Live Classroom
            </span>

            <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-[42px] leading-[1.15] text-slate-900 tracking-tight mb-4 sm:mb-5 text-center lg:text-left">
              Live Classes &amp; <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500">
                Interactive Learning
              </span>
            </h2>

            <p className="text-slate-700 font-semibold text-base sm:text-lg leading-snug mb-3 text-center lg:text-left">
              Bring Teachers, Students, and Parents Together in Real Time
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-normal">
              Conduct live classes through the EDBA platform, allowing teachers to connect with students and parents through an interactive digital learning experience.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-normal">
              Teachers can stream live sessions, while students and parents can join, interact, and communicate through live chat. Important updates, discussions, and information can be highlighted and easily accessed when needed.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Recorded classroom highlights and short learning videos can also be made available alongside the live session, helping students quickly catch up on missed lessons and stay connected with their learning journey.
            </p>
          </motion.div>

          {/* Middle on Mobile (under learning journey) / Left Col (spanning rows) on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:row-span-2 relative lg:self-center"
          >
            {/* Ambient decorative soft halo behind container */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/15 via-sky-500/10 to-indigo-600/15 rounded-3xl blur-2xl -z-10 pointer-events-none" />

            {/* Video Player Shell */}
            <div className="relative bg-slate-950 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/35 border border-slate-800/80 select-none">
              {/* Aspect Ratio Frame */}
              <div
                className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center cursor-pointer"
                onClick={handleVideoClick}
                style={{
                  transform: "translate3d(0, 0, 0)",
                  WebkitTransform: "translate3d(0, 0, 0)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                {/* Hardware-accelerated Video (100% native quality, autoPlay on load, infinite loop, unmuted by default) */}
                <video
                  ref={videoRef}
                  playsInline
                  autoPlay
                  loop
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
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-20 flex items-center gap-1.5 pointer-events-none">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-0.5 bg-slate-950/80 rounded-full shadow-md border border-white/10 text-white backdrop-blur-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[9.5px] sm:text-[10px] font-semibold tracking-wider uppercase text-slate-200">LIVE HD</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom on Mobile / Right Row 2 on Desktop: Features & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-6 lg:col-start-7 lg:row-start-2 flex flex-col"
          >
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

            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 cursor-pointer group active:scale-95 mx-auto lg:mx-0 text-center"
              >
                <span>See Live Classroom in Action</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </button>
            </div>
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
