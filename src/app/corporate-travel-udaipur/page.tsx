"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  CheckCircle2, Clock, MapPin, Users, Building2, Briefcase, 
  PlaneTakeoff, ShieldCheck, Phone, FileText, Gift, Coffee, 
  UserSquare2, Headset, Check, Calendar, Star, Navigation
} from "lucide-react";

export default function CorporateMicePage() {
  const fleetRates = [
    {
      route: "UDAIPUR TO AIRPORT / UDAIPUR DROP",
      icon: <PlaneTakeoff className="w-5 h-5" />,
      prices: ["₹1,050", "₹1,400", "₹1,600", "₹2,000", "₹3,000", "₹4,000", "₹4,500", "₹6,500"]
    },
    {
      route: "AIRPORT PICKUP TO UDAIPUR DROP",
      icon: <PlaneTakeoff className="w-5 h-5 rotate-180" />,
      prices: ["₹1,050", "₹1,400", "₹1,600", "₹2,000", "₹3,000", "₹4,000", "₹4,500", "₹6,500"]
    },
    {
      route: "04 HRS. 40 KM CITY TOUR",
      icon: <Building2 className="w-5 h-5" />,
      prices: ["₹2,500", "₹2,500", "₹2,750", "₹3,500", "₹4,000", "₹5,000", "₹5,000", "₹7,500"]
    },
    {
      route: "08 HRS. 80 KM CITY TOUR",
      icon: <Building2 className="w-5 h-5" />,
      prices: ["₹3,000", "₹3,500", "₹4,000", "₹4,500", "₹5,500", "₹6,500", "₹7,500", "₹12,000"]
    },
    {
      route: "12 HRS. 120 KM CITY TOUR",
      icon: <Building2 className="w-5 h-5" />,
      prices: ["₹3,500", "₹4,000", "₹4,500", "₹6,000", "₹6,500", "₹8,500", "₹10,000", "₹15,000"]
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#FDFDFD] selection:bg-[#B68C5A] selection:text-white pt-20 pb-16 font-sans">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[600px] lg:h-[700px] flex items-center overflow-hidden bg-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/mice_hero_fleet.jpg" 
            alt="Corporate and Wedding Transport Fleet Udaipur" 
            fill 
            className="object-cover object-center"
            priority
          />
          {/* Gradients to make text readable on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full md:w-2/3 lg:w-1/2" />
          <div className="absolute inset-0 bg-white/20 md:hidden" />
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-4 bg-[#B68C5A]" />
                <span className="text-[#B68C5A] font-bold text-xs tracking-[0.2em] uppercase">
                  Premium Transport Solutions
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-[#13264F] leading-[1.1] mb-6 font-serif">
                Corporate & Wedding <br className="hidden lg:block"/> 
                Transport in Udaipur
              </h1>
              
              <p className="text-slate-700 text-lg mb-10 max-w-lg leading-relaxed font-medium">
                Professional fleet movement for Weddings, MICE, Airport Transfers, Hotel Shuttles, VIP Movement and Event Logistics.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href="#contact" className="bg-[#13264F] text-white px-6 py-3.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#1C3A7A] transition-colors shadow-lg">
                  <FileText className="w-4 h-4 text-[#B68C5A]" />
                  Get Transport Proposal
                </a>
                <a href="https://wa.me/919359975658" target="_blank" rel="noreferrer" className="bg-white border border-[#25D366] text-[#25D366] px-6 py-3.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#25D366]/5 transition-colors shadow-sm">
                  <span className="text-xl leading-none w-4 h-4 flex items-center justify-center">💬</span>
                  WhatsApp Your Event Plan
                </a>
                <a href="tel:+919359975658" className="bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
                  <Phone className="w-4 h-4 text-[#B68C5A]" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HERO TRUST BADGES */}
      <div className="container mx-auto px-6 max-w-[1400px] relative z-20 -mt-8">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white px-5 py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-3">
            <div className="text-[#B68C5A]"><CheckCircle2 className="w-6 h-6" strokeWidth={1.5} /></div>
            <p className="text-xs font-bold text-[#13264F] leading-tight">Professional<br/><span className="text-slate-500 font-medium">Fleet Coordination</span></p>
          </div>
          <div className="bg-white px-5 py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-3">
            <div className="text-[#B68C5A]"><UserSquare2 className="w-6 h-6" strokeWidth={1.5} /></div>
            <p className="text-xs font-bold text-[#13264F] leading-tight">Guest &<br/><span className="text-slate-500 font-medium">VIP Movement</span></p>
          </div>
          <div className="bg-white px-5 py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-3">
            <div className="text-[#B68C5A]"><Clock className="w-6 h-6" strokeWidth={1.5} /></div>
            <p className="text-xs font-bold text-[#13264F] leading-tight">On-Time<br/><span className="text-slate-500 font-medium">Event Logistics</span></p>
          </div>
          <div className="bg-white px-5 py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-3">
            <div className="text-[#B68C5A]"><MapPin className="w-6 h-6" strokeWidth={1.5} /></div>
            <p className="text-xs font-bold text-[#13264F] leading-tight">Outstation<br/><span className="text-slate-500 font-medium">Event Support</span></p>
          </div>
          <div className="bg-white px-6 py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#B68C5A]/30 flex items-center gap-4">
            <div className="w-10 h-10 border border-[#B68C5A] rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-[#B68C5A] fill-[#B68C5A]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#13264F]">Trusted by Event Companies,</p>
              <p className="text-sm font-bold text-[#13264F] leading-tight">Corporate Houses & Premium Clients</p>
              <p className="text-[10px] text-slate-500 mt-0.5">for Seamless Movement in Udaipur</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. WHY CHOOSE YATREE DESTINATION? */}
      <section className="py-20 container mx-auto px-6 max-w-[1400px]">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1px] w-16 bg-[#B68C5A]" />
          <div className="w-2 h-2 rotate-45 bg-[#B68C5A]" />
          <h2 className="text-2xl lg:text-3xl font-bold text-[#13264F] uppercase tracking-widest font-serif text-center px-4">
            Why Choose Yatree Destination?
          </h2>
          <div className="w-2 h-2 rotate-45 bg-[#B68C5A]" />
          <div className="h-[1px] w-16 bg-[#B68C5A]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-[#B68C5A]">
              <Users className="w-14 h-14" strokeWidth={1} />
            </div>
            <h3 className="text-xl font-bold text-[#13264F] mb-3 font-serif leading-tight">Wedding Guest<br/>Transfers</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Seamless movement for guests across hotels, venues and attractions.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-[#B68C5A]">
              <Briefcase className="w-14 h-14" strokeWidth={1} />
            </div>
            <h3 className="text-xl font-bold text-[#13264F] mb-3 font-serif leading-tight">Corporate &<br/>MICE Mobility</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Efficient transport solutions for conferences, exhibitions and business events.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-[#B68C5A]">
              <PlaneTakeoff className="w-14 h-14" strokeWidth={1} />
            </div>
            <h3 className="text-xl font-bold text-[#13264F] mb-3 font-serif leading-tight">Airport & Hotel<br/>Coordination</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Punctual airport transfers and hotel logistics for smooth guest experience.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-[#B68C5A]">
              <ShieldCheck className="w-14 h-14" strokeWidth={1} />
            </div>
            <h3 className="text-xl font-bold text-[#13264F] mb-3 font-serif leading-tight">Premium Chauffeur<br/>Fleet</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Well-maintained luxury fleet with professional, trained chauffeurs.</p>
          </div>
        </div>
      </section>

      {/* 3. STANDARD FLEET MOVEMENT RATES */}
      <section className="py-16 bg-white border-y border-slate-100 relative overflow-hidden">
        {/* Very faint background pattern if needed */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#13264F 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#13264F] mb-3 font-serif">Standard Fleet Movement Rates – FY 2026-27</h2>
            <p className="text-slate-600 font-medium">Standard transport reference rates for Weddings, MICE and Corporate Operations in Udaipur</p>
          </div>

          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <div className="min-w-[1100px]">
              {/* Table Header */}
              <div className="grid grid-cols-[280px_repeat(8,1fr)] gap-1 mb-2">
                <div className="bg-[#13264F] rounded-t-lg"></div>
                
                {[
                  { title: "Premium Sedan" },
                  { title: "Innova" },
                  { title: "Innova Crysta" },
                  { title: "Hycross" },
                  { title: "Traveller" },
                  { title: "Luxury Urbania" },
                  { title: "Fortuner" },
                  { title: "Luxury" }
                ].map((col, i) => (
                  <div key={i} className="bg-[#13264F] text-center p-3 rounded-t-lg border-b-2 border-[#B68C5A] flex items-center justify-center">
                    <p className="text-white font-bold text-sm">{col.title}</p>
                  </div>
                ))}
              </div>

              {/* Table Rows */}
              <div className="space-y-1">
                {fleetRates.map((row, i) => (
                  <div key={i} className="grid grid-cols-[280px_repeat(8,1fr)] gap-1">
                    <div className="bg-slate-50 border border-slate-100 p-3 rounded-l-lg flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#B68C5A] text-white flex items-center justify-center text-[10px] font-bold shrink-0">{i+1}.</div>
                      <div className="w-8 h-8 rounded bg-[#13264F] text-white flex items-center justify-center shrink-0">
                        {row.icon}
                      </div>
                      <span className="text-[11px] font-bold text-[#13264F] leading-tight uppercase pr-2">{row.route}</span>
                    </div>
                    {row.prices.map((price, j) => (
                      <div key={j} className="bg-white border border-slate-100 flex items-center justify-center text-slate-700 font-bold text-[15px] p-2 hover:bg-slate-50 transition-colors">
                        {price}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-6">
            <div className="bg-slate-50 border border-slate-200 px-6 py-2.5 rounded-full inline-flex items-center gap-3 text-xs font-semibold text-slate-600 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#B68C5A]" />
              Rates are per vehicle • All rates in INR • Driver charges, fuel & toll included unless specified • Prior booking recommended
            </div>
          </div>
        </div>
      </section>

      {/* 4. EVENT ADD-ON SERVICES */}
      <section className="py-20 container mx-auto px-6 max-w-[1400px]">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1px] w-16 bg-[#B68C5A]" />
          <div className="w-2 h-2 rotate-45 bg-[#B68C5A]" />
          <h2 className="text-2xl lg:text-3xl font-bold text-[#13264F] uppercase tracking-widest font-serif text-center px-4">
            Event Add-On Services
          </h2>
          <div className="w-2 h-2 rotate-45 bg-[#B68C5A]" />
          <div className="h-[1px] w-16 bg-[#B68C5A]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-5 bg-[#13264F] rounded-full flex items-center justify-center text-white shadow-lg">
              <Gift className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#13264F] mb-3 font-serif">Gifting</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Premium gifting options for your guests and business associates.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-5 bg-[#13264F] rounded-full flex items-center justify-center text-white shadow-lg">
              <Coffee className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#13264F] mb-3 font-serif">Meal Refreshment</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Quality meal boxes & refreshments during transfers and tours.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-5 bg-[#13264F] rounded-full flex items-center justify-center text-white shadow-lg">
              <UserSquare2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#13264F] mb-3 font-serif">Guide Service</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Experienced local guides for city tours, heritage visits and guest assistance.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-5 bg-[#13264F] rounded-full flex items-center justify-center text-white shadow-lg">
              <Headset className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#13264F] mb-3 font-serif">Custom Event Support</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Tailored solutions for unique requirements and large-scale event logistics.</p>
          </div>
        </div>
      </section>

      {/* 5. TERMS & CONDITIONS */}
      <section className="pb-20 container mx-auto px-6 max-w-[1400px]">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-10 relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
          
          <div className="flex-1 space-y-5 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center shadow-sm text-[#13264F]">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#13264F] uppercase tracking-wider font-serif">Terms &<br/>Conditions</h3>
            </div>
            
            {[
              "These are standard rates for fleet movement in wedding/MICE transportation. Rates may vary depending on hotel distance within Udaipur and nearby regions.",
              "Applicable GST: 5% extra on the above rates.",
              "We also offer add-on services such as gifting, meal refreshment and guide service.",
              "For any other support during your event, please feel free to contact us."
            ].map((text, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full border border-[#B68C5A] text-[#B68C5A] flex items-center justify-center text-[10px] font-bold shrink-0 bg-white">
                  {i+1}
                </div>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="hidden md:block w-1/3 relative z-10">
            <Image 
              src="/city-palace.png" // Fallback to a png or use the udaipur png
              alt="Udaipur Palace" 
              width={400} 
              height={300} 
              className="object-contain opacity-80"
              onError={(e) => {
                e.currentTarget.src = "/udaipur.png"; // fallback if city-palace.png doesn't exist
              }}
            />
          </div>
        </div>
      </section>

      {/* 6. CTA FOOTER SECTION */}
      <section className="container mx-auto px-6 max-w-[1400px] pb-12">
        <div className="bg-[#13264F] rounded-3xl overflow-hidden relative shadow-2xl">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="p-10 lg:p-14 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#B68C5A] mb-4 font-serif leading-tight">
                Planning a Wedding or <br className="hidden md:block" /> Corporate Event in Udaipur?
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Share your dates, guest count, hotel/venue details and movement needs. We'll handle the rest.
              </p>
            </div>

            {/* Middle Icons */}
            <div className="flex items-center gap-8 justify-center border-y border-white/10 lg:border-y-0 py-6 lg:py-0 lg:border-l lg:pl-12">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full border border-[#B68C5A]/30 flex items-center justify-center mx-auto mb-3 text-white">
                  <UserSquare2 className="w-6 h-6" strokeWidth={1} />
                </div>
                <p className="text-xs font-semibold text-white/90">Dedicated<br/>Account Manager</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full border border-[#B68C5A]/30 flex items-center justify-center mx-auto mb-3 text-white">
                  <FileText className="w-6 h-6" strokeWidth={1} />
                </div>
                <p className="text-xs font-semibold text-white/90">Customized<br/>Transport Plans</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full border border-[#B68C5A]/30 flex items-center justify-center mx-auto mb-3 text-white">
                  <Clock className="w-6 h-6" strokeWidth={1} />
                </div>
                <p className="text-xs font-semibold text-white/90">On-Time &<br/>Seamless Execution</p>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col gap-4 min-w-[240px]">
              <a href="#contact" className="w-full bg-[#B68C5A] text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#A37B4A] transition-colors shadow-lg shadow-[#B68C5A]/20">
                <FileText className="w-5 h-5" />
                Request a Proposal
              </a>
              <a href="tel:+919359975658" className="w-full bg-[#0F1E3F] border border-[#1C3A7A] text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#1C3A7A] transition-colors shadow-lg">
                <Phone className="w-5 h-5 text-[#B68C5A]" />
                Contact Yatree
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="bg-[#0F1E3F] border-t border-white/5 py-4 px-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 relative z-10">
            <div className="flex items-center gap-2 text-white/70 text-xs font-medium">
              <Star className="w-3.5 h-3.5 fill-[#B68C5A] text-[#B68C5A]" /> 15+ Years of Experience
            </div>
            <div className="flex items-center gap-2 text-white/70 text-xs font-medium">
              <Users className="w-3.5 h-3.5 fill-[#B68C5A] text-[#B68C5A]" /> 500+ Events Managed
            </div>
            <div className="flex items-center gap-2 text-white/70 text-xs font-medium">
              <Navigation className="w-3.5 h-3.5 fill-[#B68C5A] text-[#B68C5A]" /> 1000+ Fleet Capacity
            </div>
            <div className="flex items-center gap-2 text-white/70 text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 fill-[#B68C5A] text-[#B68C5A]" /> Pan India Event Support
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
