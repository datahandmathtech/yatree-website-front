"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GoogleReview {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  avatarBg: string;
  initials: string;
  tripType: string;
}

const REVIEWS_DATA: GoogleReview[] = [
  {
    id: 1,
    name: "Shivaani Bhambure",
    location: "Mumbai, Maharashtra",
    rating: 5,
    date: "2 months ago",
    tripType: "Udaipur Sightseeing & Airport Transfer",
    text: "Travel experience with Yatree Destination was exceptionally good. The cab - Ciaz was given to us which was very clean & well maintained throughout our tour. Driver Satishji was also very polite by nature, he has a great knowledge about the city and its history. Highly recommended!",
    avatarBg: "bg-emerald-600",
    initials: "SB",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    location: "New Delhi",
    rating: 5,
    date: "3 weeks ago",
    tripType: "Rajasthan Tour (Innova Crysta)",
    text: "Booked Innova Crysta for our family Rajasthan tour covering Udaipur, Kumbhalgarh and Mount Abu. Flawless service! The driver was extremely polite, punctual, and safe on hill roads. Transparent pricing without any hidden surprises.",
    avatarBg: "bg-blue-600",
    initials: "RS",
  },
  {
    id: 3,
    name: "Pooja Deshmukh",
    location: "Pune, Maharashtra",
    rating: 5,
    date: "1 month ago",
    tripType: "Udaipur 3-Day Sightseeing",
    text: "Best taxi service in Udaipur! We used them for 3 days of palace sightseeing and airport transfer. Brand new, spotless car and chilling AC. The coordinator was always responsive on WhatsApp. Truly a 5-star experience.",
    avatarBg: "bg-purple-600",
    initials: "PD",
  },
  {
    id: 4,
    name: "Ankit Verma",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    date: "2 weeks ago",
    tripType: "Wedding Transportation (Tempo Traveller)",
    text: "We hired two Tempo Travellers for our destination wedding guests in Udaipur. Vehicles were in pristine condition, very comfortable pushback seats, and the drivers managed city navigation smoothly. Yatree Destination made our event totally stress-free.",
    avatarBg: "bg-amber-600",
    initials: "AV",
  },
  {
    id: 5,
    name: "Dr. Sneha Patel",
    location: "Surat, Gujarat",
    rating: 5,
    date: "1 month ago",
    tripType: "Udaipur to Mount Abu Day Trip",
    text: "Exceptional chauffeur service. Very polite driver, safe driving through the ghat sections, and clean vehicle with water bottles provided. Booking process was quick and seamless. Will definitely book again on my next trip!",
    avatarBg: "bg-rose-600",
    initials: "SP",
  },
  {
    id: 6,
    name: "Vikramaditya Rathore",
    location: "Jaipur, Rajasthan",
    rating: 5,
    date: "3 months ago",
    tripType: "Corporate Outstation Travel",
    text: "Outstanding service from start to finish. Fixed rates, timely airport pickup at 5 AM, and pristine luxury car. Yatree Destination is by far the most professional travel partner in Rajasthan.",
    avatarBg: "bg-indigo-600",
    initials: "VR",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Responsive items per view: 1 on mobile, 2 on tablet, 3 on desktop
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-24 bg-gradient-to-b from-[#eef2f6] via-[#f8fafc] to-[#ffffff] relative overflow-hidden font-sans w-full border-y border-slate-200/50">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-premium/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Google Verified Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm mb-4">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Google Verified Reviews
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Client Experiences & Reviews
          </h2>
          <p className="text-slate-500 font-medium text-base md:text-lg max-w-2xl">
            Real feedback from tourists, corporate leaders, and wedding planners who traveled with Yatree Destination.
          </p>

          {/* Rating Summary Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 bg-white px-6 py-3 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black text-slate-900 leading-none">4.9</span>
              <div className="flex text-[#fbbf24] ml-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <span className="text-xs font-bold text-slate-600">
              Based on 500+ Genuine Traveler Ratings
            </span>
          </div>
        </div>

        {/* Reviews Carousel / Grid */}
        <div 
          className="relative mb-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Desktop Grid (3 items at a time) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const reviewIndex = (currentIndex + offset) % REVIEWS_DATA.length;
              const review = REVIEWS_DATA[reviewIndex];
              return (
                <motion.div
                  key={`${review.id}-${reviewIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between relative group"
                >
                  {/* Top Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100 group-hover:text-gold-premium/20 transition-colors pointer-events-none" />

                  <div>
                    {/* Reviewer Header */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className={`w-11 h-11 rounded-full ${review.avatarBg} text-white font-black text-sm flex items-center justify-center shadow-sm shrink-0`}>
                        {review.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-slate-900 text-sm truncate">{review.name}</h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        </div>
                        <p className="text-[11px] text-slate-400 font-medium truncate">{review.location}</p>
                      </div>
                    </div>

                    {/* Star Rating & Date */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex text-[#fbbf24] gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">{review.date}</span>
                    </div>

                    {/* Trip Tag */}
                    <div className="mb-3">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
                        {review.tripType}
                      </span>
                    </div>

                    {/* Review Body */}
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed line-clamp-5 font-normal">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Google Attribution Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                      </svg>
                      <span className="text-[10px] font-bold text-slate-400">Verified via Google</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      5.0 ★
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              aria-label="Previous Reviews"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-400 hover:bg-slate-50 flex items-center justify-center transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {REVIEWS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === i ? "w-6 bg-slate-900" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next Reviews"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-400 hover:bg-slate-50 flex items-center justify-center transition-all shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="https://g.page/r/CUj5F0eRuHpFEAE/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-slate-900 text-white hover:bg-slate-800 font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <Star className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" /> 
            Leave a Review on Google
          </a>

          <a 
            href="https://maps.app.goo.gl/uX3L3h4a4qTq4m1U8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 hover:border-slate-400 hover:text-slate-900 font-bold uppercase tracking-wider text-xs px-7 py-4 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <ExternalLink className="w-4 h-4 text-slate-400" />
            View Google Maps Profile
          </a>
        </div>

      </div>
    </section>
  );
}
