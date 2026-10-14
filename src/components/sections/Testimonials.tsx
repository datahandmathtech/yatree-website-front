"use client";

import { useState } from "react";
import { Star, ShieldCheck, ChevronLeft, ChevronRight, ExternalLink, MessageSquarePlus } from "lucide-react";
import { GOOGLE_BUSINESS_INFO, GOOGLE_REVIEWS_DATA } from "@/data/reviews";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = GOOGLE_REVIEWS_DATA;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= reviews.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#f8fafc] via-[#eef2f6] to-[#f8fafc] relative overflow-hidden font-sans w-full border-y border-slate-200/60" id="google-reviews">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Header with Google Badge */}
        <div className="flex flex-col items-center text-center mb-14">
          {/* Google G Logo Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-xs mb-5">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
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
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Loved By Over <span className="text-orange-500">2,500+ Travelers</span>
          </h2>
          <p className="text-slate-600 font-medium text-sm md:text-base max-w-2xl leading-relaxed">
            Authentic feedback from real guests who experienced our luxury chauffeurs, transparent pricing, and royal hospitality in Udaipur.
          </p>

          {/* Rating Summary Card */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 bg-white px-8 py-4.5 rounded-2xl border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-slate-900 leading-none">
                {GOOGLE_BUSINESS_INFO.rating}
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
                  {GOOGLE_BUSINESS_INFO.totalReviews}+ Five-Star Reviews
                </span>
                <span className="text-[11px] text-slate-500">
                  100% Genuine Verified Trips
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Reviews Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-12">
          {reviews.slice(0, 6).map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-orange-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Author Info & Google G */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full ${review.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-xs`}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-slate-900 text-sm">{review.author}</h3>
                        <span className="inline-block w-3.5 h-3.5 bg-blue-500 rounded-full text-white text-[9px] text-center leading-3.5 font-bold" title="Verified Customer">
                          ✓
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {review.location} • {review.relativeTime}
                      </span>
                    </div>
                  </div>

                  <svg className="w-5 h-5 shrink-0 opacity-80" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex text-amber-400 gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  "{review.text}"
                </p>
              </div>

              {/* Service Tag */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md text-[11px]">
                  {review.service}
                </span>
                <span className="text-emerald-600 font-bold text-[11px] flex items-center gap-1">
                  Google Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Slider */}
        <div className="lg:hidden mb-12">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full ${reviews[currentIndex].avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-xs`}
                >
                  {reviews[currentIndex].initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-slate-900 text-base">{reviews[currentIndex].author}</h3>
                    <span className="inline-block w-4 h-4 bg-blue-500 rounded-full text-white text-[10px] text-center leading-4 font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {reviews[currentIndex].location} • {reviews[currentIndex].relativeTime}
                  </span>
                </div>
              </div>

              <svg className="w-6 h-6 shrink-0 opacity-80" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
            </div>

            <div className="flex text-amber-400 gap-1 mb-4">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-slate-800 text-base leading-relaxed mb-6 font-normal min-h-[90px]">
              "{reviews[currentIndex].text}"
            </p>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-md text-xs">
                {reviews[currentIndex].service}
              </span>
              <span className="text-xs text-slate-400">
                {currentIndex + 1} of {reviews.length}
              </span>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-1.5">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? "w-6 bg-orange-500" : "bg-slate-200"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons: Leave a Review & View on Google */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={GOOGLE_BUSINESS_INFO.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white text-slate-900 border border-slate-300 hover:border-orange-500 hover:text-orange-600 font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <MessageSquarePlus className="w-4 h-4 text-orange-500" />
            Write a Review on Google
          </a>

          <a
            href={GOOGLE_BUSINESS_INFO.mapsUrl}
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
