import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, Play, ArrowRight, Zap } from "lucide-react";

// Optimized Typewriter Hook with immediate start
const useTypewriter = (text, reset, speed = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true); // Start typing immediately

  useEffect(() => {
    if (reset) {
      setDisplayedText("");
      setIsTyping(true);
      return;
    }

    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [displayedText, text, reset, speed, isTyping]);

  return {
    displayedText,
    isComplete: !isTyping && displayedText.length === text.length,
  };
};

// Memoized Button Component with mobile optimization
const CustomButton = React.memo(
  ({ children, variant = "primary", onClick }) => {
    const variants = useMemo(
      () => ({
        primary:
          "bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-700 focus:ring-orange-300",
        secondary:
          "bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 focus:ring-violet-300",
        accent:
          "bg-gradient-to-r from-gray-600 to-slate-600 text-white hover:from-gray-700 hover:to-slate-700 focus:ring-gray-300",
      }),
      []
    );

    return (
      <button
        className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 active:scale-95 ${variants[variant]}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

// Memoized Particle Background with reduced particles on mobile
const ParticleBackground = React.memo(() => {
  const particles = useMemo(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const particleCount = isMobile ? 10 : 20; // Reduce particles on mobile for performance

    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 3,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/10 rounded-full animate-pulse"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
});

// Loading placeholder component
const LoadingPlaceholder = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-stone-800">
    <div className="absolute inset-0 bg-black/30" />
    <div className="relative z-10 h-full flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-pulse">
          <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full" />
          <div className="h-4 bg-white/20 rounded w-48 mx-auto mb-2" />
          <div className="h-4 bg-white/20 rounded w-32 mx-auto" />
        </div>
      </div>
    </div>
  </div>
);

// Main HeroSlider Component
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [resetTypewriter, setResetTypewriter] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slides = useMemo(
    () => [
      {
        id: 1,
        background:
          "bg-gradient-to-br from-orange-900 via-orange-800 to-amber-800",
        bgImage:
          "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=2069&q=80",
        image:
          "https://i.ibb.co/vxmCgRd8/Chat-GPT-Image-Jun-24-2025-09-50-17-AM.png",
        heading: "Don't Just Learn Computers — Master Your Future.",
        text: "At BitByte, you gain practical, job-ready skills that make you confident, capable, and career-ready.",
        buttonText: "Start Your Journey",
        buttonVariant: "primary",
        icon: <Play className="w-4 h-4 sm:w-6 sm:h-6" />,
        progressColor: "from-orange-500 to-amber-500",
        indicatorColor: "bg-orange-400",
        glowColor: "from-orange-600/20 to-amber-600/20",
        accentColor: "from-orange-500/30 to-amber-500/30",
      },
      {
        id: 2,
        background:
          "bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-800",
        bgImage:
          "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=2069&q=80",
        image:
          "https://i.ibb.co/v4gjFyqS/Whats-App-Image-2025-06-22-at-12-15-27-2bd9a741.jpg",
        heading: "Hinjilicut's Most Trusted Computer Institute",
        text: "1000+ students trained. ISO Certified. NBCEST Approved. BitByte is the first choice for quality IT education in Ganjam.",
        buttonText: "Explore Solutions",
        buttonVariant: "secondary",
        icon: <Zap className="w-4 h-4 sm:w-6 sm:h-6" />,
        progressColor: "from-violet-500 to-purple-500",
        indicatorColor: "bg-violet-400",
        glowColor: "from-violet-600/20 to-purple-600/20",
        accentColor: "from-violet-500/30 to-purple-500/30",
      },
      {
        id: 3,
        background:
          "bg-gradient-to-br from-gray-900 via-slate-800 to-stone-800",
        bgImage:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2072&q=80",
        image:
          "https://i.ibb.co/20yMnLRH/Chat-GPT-Image-Jun-24-2025-10-03-21-AM.png",
        heading: "BitByte: Hinjilicut's Digital Skill Hub",
        text: "Offering practical training in PGDCA, DCA, Tally, Python, Java & more — built for real jobs.",
        buttonText: "Get Started Now",
        buttonVariant: "accent",
        icon: <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />,
        progressColor: "from-gray-500 to-slate-500",
        indicatorColor: "bg-gray-400",
        glowColor: "from-gray-600/20 to-slate-600/20",
        accentColor: "from-gray-500/30 to-slate-500/30",
      },
    ],
    []
  );

  const currentSlideData = slides[currentSlide];

  // Typewriter effects with mobile-optimized speeds
  const typewriterSpeed = isMobile ? 80 : 40;
  const headingTypewriter = useTypewriter(
    currentSlideData.heading,
    resetTypewriter,
    typewriterSpeed
  );
  const textTypewriter = useTypewriter(
    currentSlideData.text,
    resetTypewriter,
    isMobile ? 60 : 20
  );

  // Preload images and show content immediately
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = slides.length * 2; // Each slide has 2 images

    const imagePromises = slides.map((slide) => {
      const promises = [];

      if (slide.image) {
        const img = new Image();
        promises.push(
          new Promise((resolve) => {
            img.onload = () => {
              loadedCount++;
              resolve();
            };
            img.onerror = () => {
              loadedCount++;
              resolve(); // Still resolve on error to not block
            };
            img.src = slide.image;
          })
        );
      }

      if (slide.bgImage) {
        const bgImg = new Image();
        promises.push(
          new Promise((resolve) => {
            bgImg.onload = () => {
              loadedCount++;
              resolve();
            };
            bgImg.onerror = () => {
              loadedCount++;
              resolve(); // Still resolve on error to not block
            };
            bgImg.src = slide.bgImage;
          })
        );
      }

      return Promise.all(promises);
    });

    // Show content immediately, don't wait for all images
    setImagesLoaded(true);

    // Continue loading images in background
    Promise.all(imagePromises).then(() => {
      // Images fully loaded
    });
  }, [slides]);

  const changeSlide = useCallback(
    (newIndex) => {
      if (isTransitioning || newIndex === currentSlide) return;

      setIsTransitioning(true);
      setResetTypewriter(true);

      // Faster transitions on mobile
      const transitionDelay = isMobile ? 200 : 300;
      const totalTransitionTime = isMobile ? 600 : 1000;

      setTimeout(() => {
        setCurrentSlide(newIndex);
        setResetTypewriter(false);
      }, transitionDelay);

      setTimeout(() => {
        setIsTransitioning(false);
      }, totalTransitionTime);
    },
    [currentSlide, isTransitioning, isMobile]
  );

  const nextSlide = useCallback(() => {
    changeSlide((currentSlide + 1) % slides.length);
  }, [changeSlide, currentSlide, slides.length]);

  const prevSlide = useCallback(() => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [changeSlide, currentSlide, slides.length]);

  // Auto-advance slides with longer interval on mobile to account for slower reading
  useEffect(() => {
    const interval = setInterval(nextSlide, isMobile ? 8000 : 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isMobile]);

  // Show loading placeholder only very briefly or not at all
  if (!imagesLoaded) {
    return <LoadingPlaceholder />;
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {slide.bgImage && (
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              />
            )}
            <div
              className={`absolute inset-0 ${slide.background} opacity-80`}
            />
            <div className="absolute inset-0 bg-black/40 sm:bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:from-black/50" />
          </div>
        ))}
      </div>

      <ParticleBackground />

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center pt-16 sm:pt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left flex-1 order-2 lg:order-1">
              {/* Icon and tagline */}
              <div className="mb-4 sm:mb-6">
                <div
                  className={`inline-flex items-center gap-2 sm:gap-3 transition-all duration-500 ease-out ${
                    isTransitioning
                      ? "opacity-0 transform -translate-y-4"
                      : "opacity-100 transform translate-y-0"
                  }`}
                  style={{ transitionDelay: isTransitioning ? "0ms" : "100ms" }}
                >
                  <div className="p-1.5 sm:p-2 bg-white/10 rounded-full backdrop-blur-sm">
                    {currentSlideData.icon}
                  </div>
                  <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wide uppercase">
                    Education • Technology • Future
                  </span>
                </div>
              </div>

              {/* Heading with typewriter */}
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight transition-opacity duration-300`}
                style={{
                  opacity: isTransitioning ? 0.3 : 1,
                  filter: isTransitioning ? "blur(2px)" : "blur(0px)",
                  minHeight: isMobile ? "80px" : "120px",
                }}
              >
                {headingTypewriter.displayedText}
                <span className="animate-pulse">|</span>
              </h1>

              {/* Text with typewriter */}
              <p
                className={`text-base italic sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-xl transition-opacity duration-300`}
                style={{
                  opacity: isTransitioning ? 0.3 : 1,
                  filter: isTransitioning ? "blur(2px)" : "blur(0px)",
                  minHeight: isMobile ? "48px" : "60px",
                }}
              >
                {textTypewriter.displayedText}
                {textTypewriter.isComplete ? (
                  ""
                ) : (
                  <span className="animate-pulse">|</span>
                )}
              </p>

              {/* Button */}
              <div
                className={`transition-all duration-500 ease-out ${
                  isTransitioning
                    ? "opacity-0 transform translate-y-4"
                    : "opacity-100 transform translate-y-0"
                }`}
                style={{ transitionDelay: isTransitioning ? "0ms" : "300ms" }}
              >
                <CustomButton variant={currentSlideData.buttonVariant}>
                  <span className="flex items-center gap-2">
                    {currentSlideData.buttonText}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </CustomButton>
              </div>
            </div>

            {/* Image - Now visible on all devices with responsive sizing */}
            <div className="flex justify-center flex-shrink-0 order-1 lg:order-2">
              <div className="relative">
                <div
                  className={`absolute -inset-2 sm:-inset-4 bg-gradient-to-r ${currentSlideData.glowColor} rounded-xl sm:rounded-2xl blur-xl sm:blur-2xl transition-all duration-700`}
                />
                <img
                  key={currentSlideData.id}
                  src={currentSlideData.image}
                  alt="Hero"
                  className={`relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-700 ease-out ${
                    isTransitioning
                      ? "opacity-30 transform scale-95 blur-sm"
                      : "opacity-100 transform scale-100 blur-0"
                  }`}
                />
                <div
                  className={`absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br ${currentSlideData.accentColor} rounded-full blur-xl animate-pulse`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls - Mobile optimized */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 active:scale-95"
        disabled={isTransitioning}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 active:scale-95"
        disabled={isTransitioning}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Slide Indicators - Mobile optimized */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => changeSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
              index === currentSlide
                ? `${slide.indicatorColor} scale-125 shadow-lg`
                : "bg-white/50 hover:bg-white/70"
            }`}
            disabled={isTransitioning}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-white/20 z-20">
        <div
          className={`h-full bg-gradient-to-r ${currentSlideData.progressColor} transition-all duration-500 ease-out`}
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default HeroSlider;
