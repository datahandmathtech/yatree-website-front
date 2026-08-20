"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Calendar, CheckCircle2, MapPin, Check, Phone, MessageCircle, Clock, Navigation, ShieldCheck, ThumbsUp, Star, Car, User
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LiveUdaipurPage() {
  const [formData, setFormData] = useState({
    pickup: "", drop: "", date: "", time: "", service: "City Local Sightseeing (8 Hours)", carType: "Sedan"
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Yatree Destination! I need a local taxi in Udaipur:
Pickup: ${formData.pickup}
Drop/Destination: ${formData.drop}
Date: ${formData.date}
Time: ${formData.time}
Service: ${formData.service}
Car Type: ${formData.carType}`;
    
    window.open(`https://wa.me/919257109729?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleWhatsAppQuote = (packageName: string, carType: string, price: string) => {
    const message = `Hello Yatree Destination! I want to book the "${packageName}" for a ${carType} at ₹${price}. Please confirm availability.`;
    window.open(`https://wa.me/919257109729?text=${encodeURIComponent(message)}`, "_blank");
  };

  const services = [
    { title: "Airport Pickup or Drop", desc: "Maharana Pratap Airport Udaipur", sedan: "1,000", innova: "1,500", icon: "plane", img: "/places/explore-hero.png" },
    { title: "City Local Sightseeing (8 Hours)", desc: "8 Hours or 80 KM City Tour", sedan: "2,500", innova: "3,500", icon: "city", img: "/places/lake-pichola.jpg" },
    { title: "City Local Sightseeing (12 Hours)", desc: "12 Hours or 120 KM City Tour", sedan: "3,000", innova: "4,000", icon: "city", img: "/places/city-palace.jpg" },
    { title: "Eklingji & Nathdwara Day Tour", desc: "4 Hours Half Day Service", sedan: "3,000", innova: "4,000", icon: "temple", img: "/places/jagdish-temple.jpg" },
    { title: "Eklingji, Nathdwara & Haldighati", desc: "6 Hours Classic Day Tour", sedan: "3,500", innova: "4,500", icon: "temple", img: "/places/haldighati.png" },
    { title: "Ranakpur Jain Temple Tour", desc: "6 Hours Day Tour", sedan: "3,500", innova: "4,500", icon: "temple", img: "/places/ranakpur.png" },
    { title: "Kumbhalgarh Fort Day Tour", desc: "6 Hours Historical Tour", sedan: "3,500", innova: "4,500", icon: "fort", img: "/places/kumbhalgarh.png" },
    { title: "Chittorgarh Fort Day Tour", desc: "6 Hours Heritage Tour", sedan: "4,000", innova: "5,000", icon: "fort", img: "/places/chittorgarh.png" },
    { title: "Mount Abu Same Day Tour", desc: "10 Hours Hill Station Tour", sedan: "6,000", innova: "8,000", icon: "mountain", img: "/places/sajjangarh.jpg" },
  ];

  return (
    <main className="relative min-h-screen bg-slate-50 selection:bg-orange-500 selection:text-white pt-20 pb-16">
      <Navbar />
      
      {/* 1. Hero Section (Exact Mockup Match with Floating Car) */}
      <section className="relative pt-16 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-white">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/udaipur.png" 
            alt="Udaipur Background" 
            fill 
            className="object-cover object-top opacity-[0.15] saturate-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
           <div className="flex flex-col lg:flex-row items-center justify-between relative">
             
             {/* Left Text Content (approx 45% width) */}
             <div className="w-full lg:w-[45%] lg:pr-10 z-10">
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                 <div className="inline-block border border-orange-200 text-orange-400 px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-[11px] mb-6 shadow-sm bg-white/50 backdrop-blur-sm">
                   Udaipur Taxi Service
                 </div>
                 
                 <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-slate-900 tracking-tight mb-4 leading-[1.1] font-serif">
                   Book Local Taxi <br/> <span className="text-[#1A4B9F]">in Udaipur</span>
                 </h1>
                 
                 <div className="w-16 h-1 bg-yellow-500 mb-6 rounded-full" />
                 
                 <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-10 max-w-lg font-medium">
                   Reliable city rides, airport transfers, sightseeing & custom day tours with professional drivers and well-maintained cabs.
                 </p>

                 <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-8 h-8 text-[#1A4B9F]" strokeWidth={1.5} />
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-tight">Clean, Safe &</p>
                        <p className="text-xs text-slate-600">Sanitized Cabs</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <User className="w-8 h-8 text-[#1A4B9F]" strokeWidth={1.5} />
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-tight">Professional</p>
                        <p className="text-xs text-slate-600">Drivers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-8 h-8 text-[#1A4B9F]" strokeWidth={1.5} />
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-tight">On-time</p>
                        <p className="text-xs text-slate-600">Every Time</p>
                      </div>
                    </div>
                 </div>

                 {/* Google Reviews Badge */}
                 <div className="inline-flex items-center gap-4 bg-white border border-slate-200 shadow-sm rounded-xl px-4 py-3">
                    <div className="flex -space-x-2">
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center"><User className="w-4 h-4 text-slate-500" /></div>
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center"><User className="w-4 h-4 text-slate-600" /></div>
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center"><User className="w-4 h-4 text-slate-500" /></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">4.9/5</span>
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map(star => <Star key={star} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-500 font-medium">Trusted by 2,500+ Travelers</p>
                    </div>
                 </div>
               </motion.div>
             </div>

             {/* Center Overlapping Car Image (Pushed to the right and scaled) */}
             <div className="w-full lg:w-auto my-12 lg:my-0 lg:absolute lg:left-[55%] lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-[45%] pointer-events-none mix-blend-multiply" style={{ maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 60%, transparent 100%)' }}>
                <motion.div initial={{ opacity: 0, scale: 0.9, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full max-w-[300px] md:max-w-none md:w-[480px] lg:w-[600px] h-[200px] md:h-[320px] lg:h-[400px] mx-auto">
                  <Image 
                    src="/black_innova_rj27ta9053.jpg" 
                    alt="Black Innova RJ27TA9053" 
                    fill 
                    priority
                    className="object-contain object-center scale-110"
                  />
                </motion.div>
             </div>

             {/* Right Column: Quick Quote Form (approx 35% width) */}
             <div className="w-full lg:w-[35%] relative z-30">
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-1 font-serif">Get a Quick Quote</h2>
                      <p className="text-xs text-slate-500 font-medium">Book in 60 seconds. No hidden charges.</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#1A4B9F]">
                      <Car className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#1A4B9F] transition-colors" />
                      <input type="text" placeholder="Pickup Location" required className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 pl-11 pr-4 py-3.5 rounded-xl focus:ring-2 focus:ring-[#1A4B9F] focus:bg-white outline-none placeholder:text-slate-400 text-sm transition-all" onChange={e => setFormData({...formData, pickup: e.target.value})} />
                    </div>
                    
                    <div className="relative group">
                      <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#1A4B9F] transition-colors" />
                      <input type="text" placeholder="Drop / Destination" required className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 pl-11 pr-4 py-3.5 rounded-xl focus:ring-2 focus:ring-[#1A4B9F] focus:bg-white outline-none placeholder:text-slate-400 text-sm transition-all" onChange={e => setFormData({...formData, drop: e.target.value})} />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative group">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#1A4B9F] transition-colors" />
                        <input type="date" required className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 pl-10 pr-4 py-3.5 rounded-xl text-sm focus:ring-2 focus:ring-[#1A4B9F] focus:bg-white outline-none transition-all text-slate-500" onChange={e => setFormData({...formData, date: e.target.value})} />
                      </div>
                      <div className="relative group">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#1A4B9F] transition-colors" />
                        <input type="time" required className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 pl-10 pr-4 py-3.5 rounded-xl text-sm focus:ring-2 focus:ring-[#1A4B9F] focus:bg-white outline-none transition-all text-slate-500" onChange={e => setFormData({...formData, time: e.target.value})} />
                      </div>
                    </div>
                    
                    <select required className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-[#1A4B9F] focus:bg-white outline-none appearance-none transition-all text-sm text-slate-600" onChange={e => setFormData({...formData, service: e.target.value})} value={formData.service}>
                      {services.map((s, i) => <option key={i} value={s.title}>{s.title}</option>)}
                    </select>
                    
                    <div className="flex items-center gap-6 py-4 border-t border-slate-100 mt-4">
                      <span className="text-sm font-medium text-slate-600">Car Type:</span>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="carType" value="Sedan" checked={formData.carType === "Sedan"} onChange={() => setFormData({...formData, carType: "Sedan"})} className="text-[#1A4B9F] focus:ring-[#1A4B9F] w-4 h-4" />
                        <span className="text-sm font-medium text-slate-700 group-hover:text-[#1A4B9F] transition-colors">Sedan</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="carType" value="Innova" checked={formData.carType === "Innova"} onChange={() => setFormData({...formData, carType: "Innova"})} className="text-[#1A4B9F] focus:ring-[#1A4B9F] w-4 h-4" />
                        <span className="text-sm font-medium text-slate-700 group-hover:text-[#1A4B9F] transition-colors">Innova</span>
                      </label>
                    </div>

                    <button type="submit" className="w-full bg-[#FFAC00] text-white font-bold tracking-wide py-4 rounded-xl hover:bg-[#F2A300] transition-all shadow-[0_10px_20px_rgba(255,172,0,0.25)] hover:shadow-[0_10px_20px_rgba(255,172,0,0.4)] hover:-translate-y-0.5 mt-2 flex items-center justify-center gap-2">
                      Get Quote Now <span className="text-lg leading-none">→</span>
                    </button>
                    <p className="text-center text-[10px] font-medium text-slate-400 mt-4">
                      Instant confirmation • 24x7 Support
                    </p>
                  </form>
                </motion.div>
             </div>

           </div>
        </div>
      </section>

      {/* 2. Popular Taxi Services */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Explore Udaipur & Beyond</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Popular Taxi Services</h2>
            <p className="text-slate-500 text-lg">Choose from our most loved local tours and transfers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 relative overflow-hidden bg-slate-200">
                   <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                   <div className="absolute bottom-4 left-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
                     {service.icon === "plane" ? <Navigation className="w-5 h-5" /> : service.icon === "city" ? <MapPin className="w-5 h-5" /> : <MapPin className="w-5 h-5" />}
                   </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                  <p className="text-sm text-slate-500 mb-6">{service.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-slate-100 p-4 rounded-xl text-center shadow-sm cursor-pointer hover:border-orange-500 transition-colors" onClick={() => handleWhatsAppQuote(service.title, "Sedan", service.sedan)}>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Sedan</p>
                      <p className="text-2xl font-black text-slate-900">₹{service.sedan}</p>
                    </div>
                    <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl text-center shadow-sm cursor-pointer hover:border-orange-500 transition-colors" onClick={() => handleWhatsAppQuote(service.title, "Innova", service.innova)}>
                      <p className="text-xs font-bold text-orange-600 uppercase mb-1">Innova</p>
                      <p className="text-2xl font-black text-orange-600">₹{service.innova}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Experience the Difference */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Why Choose Yatree Destination</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Experience the Difference</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Safe & Reliable", desc: "Well-maintained cabs with verified drivers for your safety and peace of mind.", icon: <ShieldCheck className="w-8 h-8 text-orange-500" /> },
              { title: "Punctual Service", desc: "We value your time and ensure on-time pickups and drop-offs.", icon: <Clock className="w-8 h-8 text-orange-500" /> },
              { title: "Transparent Pricing", desc: "No hidden charges. What you see is what you pay.", icon: <span className="text-3xl font-black text-orange-500">₹</span> },
              { title: "24x7 Support", desc: "Our team is available round the clock for your assistance.", icon: <Phone className="w-8 h-8 text-orange-500" /> },
              { title: "Highly Rated", desc: "Loved by thousands of happy travelers in Udaipur.", icon: <Star className="w-8 h-8 text-orange-500" /> }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQs & CTA */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* FAQs */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "Are tolls, parking and driver allowance included?", a: "Tolls and parking are generally extra unless specified. Driver allowance is included for day trips." },
                  { q: "Can I customize my tour itinerary?", a: "Yes, all our local sightseeing packages are fully customizable according to your preferences." },
                  { q: "Do you provide airport waiting?", a: "Yes, we track flights and provide up to 60 minutes of free waiting time at the airport." }
                ].map((faq, i) => (
                  <div key={i} className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{faq.q}</h3>
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-950 rounded-3xl p-10 md:p-16 relative overflow-hidden text-center lg:text-left">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-black text-white mb-6">Ready to explore Udaipur?</h2>
                <p className="text-xl text-slate-300 mb-10 max-w-md mx-auto lg:mx-0">
                  Book your taxi now and travel with comfort and confidence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-orange-600 transition-colors shadow-lg">
                    Book Now →
                  </button>
                  <a href="https://wa.me/919257109729" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" /> WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
