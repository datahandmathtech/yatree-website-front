"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ShieldCheck, ChevronLeft, ChevronRight, ExternalLink, MessageSquarePlus, RefreshCw } from "lucide-react";
import { GOOGLE_BUSINESS_INFO, GOOGLE_REVIEWS_DATA, GoogleReview } from "@/data/reviews";

export default function Testimonials() {
  const [reviews, setReviews] = useState<GoogleReview[]>(GOOGLE_REVIEWS_DATA);
  const [businessInfo, setBusinessInfo] = useState(GOOGLE_BUSINESS_INFO);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isLive, setIsLive] = useState(false);

  // Responsive itemsPerPage calculation
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Fetch live reviews from server
  useEffect(() => {
    let isMounted = true;
    fetch("/api/reviews/google")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => {
        if (isMounted && json.status === "success" && json.data?.reviews?.length > 0) {
          setReviews(json.data.reviews);
          setIsLive(json.source === "live" || json.source === "cache");
          if (json.data.rating && json.data.totalReviews) {
            setBusinessInfo((prev) => ({
              ...prev,
              rating: json.data.rating,
              totalReviews: json.data.totalReviews,
            }));
          }
        }
      })
      .catch((err) => {
        console.warn("Using offline Google reviews fallback:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerPage);

  // Auto-play slider
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section
      className="py-24 bg-gradient-to-b from-[#f8fafc] via-[#eef2f6] to-[#f8fafc] relative overflow-hidden font-sans w-full border-y border-slate-200/60"
      id="google-reviews"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        {/* Header with Google Badge */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Google G Logo Badge with Live Indicator */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-xs mb-4">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Verified Google Business Reviews
            </span>
            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Sync
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Loved By Over <span className="text-orange-500">2,500+ Travelers</span>
          </h2>
          <p className="text-slate-600 font-medium text-sm md:text-base max-w-2xl leading-relaxed">
            Real-time verified feedback from our guests who experienced our luxury chauffeurs, transparent pricing, and royal Mewar hospitality in Udaipur.
          </p>

          {/* Rating Summary Card */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-6 bg-white px-7 py-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-slate-900 leading-none">
                {businessInfo.rating}
              </span>
              <div className="flex flex-col items-start">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  Overall Rating
                </span>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-slate-900">
                  {businessInfo.totalReviews}+ Five-Star Reviews
                </span>
                <span className="text-[11px] text-slate-500">
                  100% Genuine Verified Trips
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Slider */}
        <div
          className="relative mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 hover:bg-orange-500 text-slate-700 hover:text-white border border-slate-200 hover:border-orange-500 shadow-lg flex items-center justify-center transition-all active:scale-90"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 hover:bg-orange-500 text-slate-700 hover:text-white border border-slate-200 hover:border-orange-500 shadow-lg flex items-center justify-center transition-all active:scale-90"
            aria-label="Next Review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track Container */}
          <div className="overflow-hidden px-1 py-3">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {reviews.map((review, idx) => (
                <div
                  key={review.id || idx}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3"
                >
                  <div className="bg-white h-full rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 group">
                    <div>
                      {/* Author Info & Google G */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {review.authorPhoto ? (
                            <img
                              src={review.authorPhoto}
                              alt={review.author}
                              className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-xs"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div
                              className={`w-11 h-11 rounded-full ${
                                review.avatarColor || "bg-orange-600"
                              } text-white font-bold flex items-center justify-center text-sm shadow-xs`}
                            >
                              {review.initials || review.author?.charAt(0) || "U"}
                            </div>
                          )}
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h3 className="font-bold text-slate-900 text-sm">
                                {review.author}
                              </h3>
                              <span
                                className="inline-block w-3.5 h-3.5 bg-blue-500 rounded-full text-white text-[9px] text-center leading-3.5 font-bold"
                                title="Verified Customer"
                              >
                                ✓
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-400 font-medium">
                              {review.relativeTime}
                            </span>
                          </div>
                        </div>

                        <svg className="w-5 h-5 shrink-0 opacity-80" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                          />
                        </svg>
                      </div>

                      {/* Stars */}
                      <div className="flex text-amber-400 gap-1 mb-3">
                        {[...Array(review.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-slate-700 text-sm leading-relaxed mb-4 line-clamp-4">
                        "{review.text}"
                      </p>
                    </div>

                    {/* Service Tag & Google Verified Link */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md text-[11px]">
                        {review.service || "Verified Google Review"}
                      </span>
                      <a
                        href={review.googleMapsUri || GOOGLE_BUSINESS_INFO.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 font-bold text-[11px] flex items-center gap-1 hover:underline"
                      >
                        Google Verified
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-8 bg-orange-500" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons: Leave a Review & View on Google */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={businessInfo.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white text-slate-900 border border-slate-300 hover:border-orange-500 hover:text-orange-600 font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <MessageSquarePlus className="w-4 h-4 text-orange-500" />
            Write a Review on Google
          </a>

          <a
            href={businessInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <span>View All Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
}

