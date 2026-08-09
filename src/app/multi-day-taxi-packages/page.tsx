"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Calendar, CheckCircle2, Map, CreditCard, ChevronRight, Fuel, 
  MapPin, Check, Car, User, Phone, MessageCircle, Compass 
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { packagesData } from "@/data/packages";
import { useState } from "react";

export default function MultiDayTaxiPackagesPage() {
  const [formData, setFormData] = useState({
    name: "", city: "", days: "", vehicle: "", mobile: "", arrival: "", travelers: "", pickup: "", requirements: ""
  });

  const handleWhatsAppQuote = (packageName: string) => {
    const message = `Hello Yatree Destination! I am interested in the ${packageName} package. Please provide more details and availability.`;
    window.open(`https://wa.me/916367466426?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Yatree Destination! Here are my custom trip requirements:
Name: ${formData.name}
City: ${formData.city}
Mobile: ${formData.mobile}
Arrival Date: ${formData.arrival}
Days: ${formData.days}
Travelers: ${formData.travelers}
Vehicle Pref: ${formData.vehicle}
Pickup Point: ${formData.pickup}
Requirements: ${formData.requirements}`;
    
    window.open(`https://wa.me/916367466426?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="relative min-h-screen bg-slate-50 selection:bg-orange-500 selection:text-white pt-20 md:pb-0 pb-16">
      <Navbar />
      
      {/* 1. Epic Tourism Hero (Aligned with existing site, Layout matched to screenshot) */}
      <section className="relative bg-slate-950 pt-32 pb-24 overflow-hidden min-h-[650px] flex items-center">
        
        {/* Right side image constrained to prevent excessive zoom, with a smooth CSS mask fade to blend into the dark background */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] z-0 [mask-image:linear-gradient(to_right,transparent,black_25%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_25%)]">
          <Image 
            src="/yatree-branded-car-v2.jpg" 
            alt="Yatree Destination Innova Crysta" 
            fill 
            priority
            className="object-cover object-right-bottom opacity-90"
          />
        </div>

        {/* Gradient overlays for text readability and smooth bottom blending */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/95 lg:via-slate-950/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-slate-950/60 lg:bg-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-0 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 w-full">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             
             {/* Left Column: Text */}
             <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="text-left">
               <span className="inline-block bg-orange-500/20 text-orange-500 border border-orange-500/30 px-3 py-1 rounded-sm font-bold uppercase tracking-[0.2em] text-[10px] mb-6 backdrop-blur-sm">
                 Private Multi-Day Taxi Packages
               </span>
               
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
                 Udaipur Multi-Day <br className="hidden lg:block"/> Taxi Packages <span className="text-orange-500">– 2 to 7 Days</span>
               </h1>
               
               <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl font-medium drop-shadow-md">
                 Pre-book your complete transport before arriving in Udaipur. Travel with a private Sedan, Premium Sedan, Innova Crysta or 12-Seater Tempo Traveller with an experienced driver for your entire journey.
               </p>

               {/* City Badges */}
               <div className="flex flex-wrap gap-2 mb-8 max-w-xl">
                 {["Udaipur", "Nathdwara", "Kumbhalgarh", "Chittorgarh", "Mount Abu", "Jodhpur", "Jaisalmer", "Jaipur"].map(city => (
                   <span key={city} className="text-[11px] font-bold text-white flex items-center gap-1 drop-shadow-md">
                     <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_5px_#f97316]"></span> {city}
                   </span>
                 ))}
               </div>

               {/* Pricing & Buttons */}
               <div className="mb-8">
                 <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-1 drop-shadow-md">Packages starting from</p>
                 <div className="flex items-baseline gap-2">
                   <span className="text-4xl font-black text-white drop-shadow-lg">₹6,000</span>
                   <span className="text-sm font-bold text-orange-500 drop-shadow-md">+ GST</span>
                 </div>
               </div>

               <div className="flex flex-wrap items-center gap-4">
                  <button onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth'})} className="bg-orange-500 text-white px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-lg">
                    Get Complete Trip Quote
                  </button>
                  <a href="https://wa.me/916367466426" className="bg-white text-slate-900 px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-lg">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp Your Itinerary
                  </a>
               </div>
             </motion.div>

             {/* Right Column is empty to let the background image shine through */}
             <div className="hidden lg:block h-[500px]"></div>

           </div>
        </div>
      </section>

      {/* 2. Features Banner */}
      <section className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-2">
                <Fuel className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900 text-sm">Fuel Included</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-2">
                <CreditCard className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900 text-sm">Toll & Parking Included</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-2">
                <User className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900 text-sm">Driver Allowance Included</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900 text-sm">Airport Pickup Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">ONE VEHICLE. ONE DRIVER. YOUR COMPLETE TRIP.</h2>
          <p className="text-slate-600 text-lg mb-12 leading-relaxed">Avoid arranging a different taxi every day. Pre-book your complete Udaipur and Rajasthan transport with Yatree Destination before your journey begins.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <Calendar className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-bold text-slate-900 text-lg mb-2">Plan Before Arrival</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Vehicle and itinerary confirmed before you reach Udaipur.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <CreditCard className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-bold text-slate-900 text-lg mb-2">Transparent Package</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Know your transport cost in advance. No hidden charges.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <Map className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-bold text-slate-900 text-lg mb-2">Custom Itinerary</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Routes can be customized as per your travel plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Fleet Display using real images */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">Our Premium Fleet</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Well-maintained vehicles equipped for long multi-day journeys across Rajasthan.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center group">
              <div className="relative w-full h-48 mb-6 transition-transform duration-500 group-hover:scale-110">
                <Image src="/dzire.png" alt="Sedan Taxi Udaipur" fill className="object-contain drop-shadow-xl" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Premium Sedan</h3>
              <p className="text-sm text-slate-500 text-center">Dzire / Etios. Best for couples or small families (up to 4 passengers).</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">Most Popular</div>
              <div className="relative w-full h-48 mb-6 transition-transform duration-500 group-hover:scale-110">
                <Image src="/Innova crysta.png" alt="Innova Crysta Udaipur" fill className="object-contain drop-shadow-xl" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Innova Crysta</h3>
              <p className="text-sm text-slate-500 text-center">Ultimate luxury and space. Perfect for long journeys (up to 6 passengers).</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center group">
              <div className="relative w-full h-48 mb-6 transition-transform duration-500 group-hover:scale-110">
                <Image src="/tempo.png" alt="Tempo Traveller Udaipur" fill className="object-contain drop-shadow-xl" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Tempo Traveller</h3>
              <p className="text-sm text-slate-500 text-center">Spacious 12-seater to 17-seater options for large families and groups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pricing Cards Grid */}
      <section className="py-24 bg-white" id="packages">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">Choose Your Taxi Package</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Popular private transport plans starting from Udaipur. All fares below are exclusive of GST.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagesData.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1">
                <div className="bg-slate-900 text-white p-6 text-center">
                  <h3 className="font-bold text-lg tracking-wide">{pkg.title}</h3>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-8 space-y-4">
                    <div className="flex items-start gap-3">
                       <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                       <p className="text-sm text-slate-600 leading-relaxed"><strong className="text-slate-900">Route:</strong> {pkg.route}</p>
                    </div>
                    <div className="flex items-start gap-3">
                       <Calendar className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                       <p className="text-sm text-slate-600"><strong className="text-slate-900">Stay:</strong> {pkg.stay}</p>
                    </div>
                    <div className="flex items-start gap-3">
                       <Compass className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                       <p className="text-sm text-slate-600"><strong className="text-slate-900">Included KM:</strong> Up to {pkg.includedKm} km</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="bg-slate-50 p-6 rounded-2xl mb-8">
                      <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                        <span>Vehicle</span>
                        <span className="text-right">Rate</span>
                      </div>
                      
                      <div className="space-y-4">
                        {pkg.rates.map((rate, idx) => (
                          <div key={idx} className="flex justify-between items-center group/item hover:text-orange-500 transition-colors">
                            <span className="font-bold text-slate-700 text-sm">{rate.vehicle}</span>
                            <span className="font-black text-slate-900">₹ {rate.rate.toLocaleString('en-IN')}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleWhatsAppQuote(pkg.title)}
                      className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" /> Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Inclusions & Notes */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              
              <div>
                <h2 className="text-2xl font-black uppercase tracking-wider mb-8 text-orange-500">Package Inclusions</h2>
                <ul className="space-y-6">
                  {[
                    "Vehicle, Fuel & Driver allowance", "Pickup / Drop from Udaipur Airport or Railway Station",
                    "Toll charges & Parking charges", "As per confirmed itinerary and KM limit"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                      <span className="text-lg text-slate-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black uppercase tracking-wider mb-8 text-orange-500">Please Note</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 shrink-0"></div>
                    <span className="text-lg text-slate-300 font-medium">GST @ 5% extra.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 shrink-0"></div>
                    <span className="text-lg text-slate-300 font-medium">Additional kilometers, route deviations or itinerary customizations may attract extra charges.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 shrink-0"></div>
                    <span className="text-lg text-slate-300 font-medium">These are transportation-only packages. Hotels, meals, and tickets are <strong className="text-white">not included</strong>.</span>
                  </li>
                </ul>
              </div>

          </div>
        </div>
      </section>

      {/* 5. Form & Custom Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Trust Markers Left */}
            <div>
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-4 block">CUSTOM ROUTE ITINERARY</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Don't see your exact route?</h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Every Rajasthan trip is different. Tell us how many days you are travelling, where you want to go and how many people are travelling. We will create a customized private transport package for you.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Experienced Drivers", desc: "Drivers familiar with Rajasthan routes." },
                  { title: "Transparent Pricing", desc: "Clear package fare for the agreed route." },
                  { title: "Clean Fleet", desc: "Innova, Sedan & Tempo Travellers available." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Form Right */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
               <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Get Your Custom Quote</h2>
               
               <form onSubmit={handleFormSubmit} className="space-y-4">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <input required type="text" placeholder="Your Name" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all" onChange={e => setFormData({...formData, name: e.target.value})} />
                   <input required type="tel" placeholder="WhatsApp Number" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all" onChange={e => setFormData({...formData, mobile: e.target.value})} />
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <input required type="text" placeholder="Your City" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all" onChange={e => setFormData({...formData, city: e.target.value})} />
                   <input required type="date" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all" onChange={e => setFormData({...formData, arrival: e.target.value})} />
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all appearance-none" onChange={e => setFormData({...formData, days: e.target.value})}>
                     <option value="">No. of Days ▾</option>
                     <option value="2-3 Days">2-3 Days</option>
                     <option value="4-5 Days">4-5 Days</option>
                     <option value="6-7+ Days">6-7+ Days</option>
                   </select>
                   <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all appearance-none" onChange={e => setFormData({...formData, travelers: e.target.value})}>
                     <option value="">No. of Travellers ▾</option>
                     <option value="1-3">1-3 People</option>
                     <option value="4-6">4-6 People</option>
                     <option value="7-12">7-12 People</option>
                   </select>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all appearance-none" onChange={e => setFormData({...formData, vehicle: e.target.value})}>
                     <option value="">Vehicle ▾</option>
                     <option value="Sedan">Sedan</option>
                     <option value="Innova Crysta">Innova Crysta</option>
                     <option value="Tempo Traveller">Tempo Traveller</option>
                   </select>
                   <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all appearance-none" onChange={e => setFormData({...formData, pickup: e.target.value})}>
                     <option value="">Pickup Point ▾</option>
                     <option value="Udaipur Airport">Udaipur Airport</option>
                     <option value="Udaipur Railway Station">Udaipur Railway Station</option>
                     <option value="Udaipur Hotel">Udaipur Hotel</option>
                   </select>
                 </div>

                 <textarea placeholder="Places You Want To Visit (Optional)" rows={3} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all resize-none" onChange={e => setFormData({...formData, requirements: e.target.value})}></textarea>
                 
                 <button type="submit" className="w-full bg-slate-900 text-white font-bold uppercase tracking-widest text-sm py-5 rounded-xl hover:bg-orange-500 transition-colors shadow-lg mt-4 flex items-center justify-center gap-2">
                   <MessageCircle className="w-5 h-5" /> Get Trip Quote via WhatsApp
                 </button>
               </form>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-black text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {q: "Can I book a taxi for 3, 4 or 5 days in Udaipur?", a: "Yes, you can select any of our multi-day packages starting from 2 days up to 7+ days."},
              {q: "Is GST included in the package fares?", a: "No, 5% GST will be extra on the mentioned package rates."},
              {q: "Can you pick us up from Udaipur Airport or Railway Station?", a: "Yes, airport and railway station pickups/drops in Udaipur are included."},
              {q: "Are hotel and meals included in the package?", a: "No, these are transportation-only packages. Hotels and meals are not included."}
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3 text-lg">{faq.q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky Mobile Footer (Matched from other pages) */}
      <div className="fixed bottom-0 left-0 w-full z-[100] md:hidden flex border-t border-slate-200 bg-white">
        <a href="tel:+916367466426" className="flex-1 bg-slate-900 text-white flex items-center justify-center gap-2 py-4 font-bold text-sm uppercase tracking-widest">
          <Phone className="w-4 h-4 text-orange-500" /> Call Now
        </a>
        <a href="https://wa.me/916367466426" className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-4 font-bold text-sm uppercase tracking-widest">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </main>
  );
}
