import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CITIES, SERVICES } from "@/lib/constants";
import { constructMetadata } from "@/lib/seo";
import { TOUR_PAGES_DATA } from "@/data/tourPages";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PremiumBookingForm from "@/components/sections/PremiumBookingForm";
import { 
  ShieldCheck, 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  ChevronRight, 
  MessageCircle, 
  Check, 
  Calendar, 
  Car, 
  Sparkle, 
  CheckCircle2, 
  Compass, 
  Navigation 
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  
  // 1. All Dedicated Tour Pages (SEO Optimized)
  Object.keys(TOUR_PAGES_DATA).forEach((tourSlug) => {
    params.push({ slug: tourSlug });
  });

  // 2. City Services
  SERVICES.forEach((service) => {
    CITIES.forEach((city) => {
      const slug = `${service.id}-in-${city.toLowerCase().replace(/ /g, "-")}`;
      if (!params.some(p => p.slug === slug)) {
        params.push({ slug });
      }
    });
  });
  
  // 3. Outstation destinations
  const outstationDestinations = [
    "mount-abu",
    "kumbhalgarh",
    "ranakpur",
    "nathdwara",
    "chittorgarh",
    "haldighati"
  ];
  
  outstationDestinations.forEach(dest => {
    const slug = `udaipur-to-${dest}-taxi`;
    if (!params.some(p => p.slug === slug)) {
      params.push({ slug });
    }
  });
  
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Check if it's a dedicated tour page
  if (TOUR_PAGES_DATA[slug]) {
    const tour = TOUR_PAGES_DATA[slug];
    return constructMetadata({
      title: tour.metaTitle,
      description: tour.metaDescription,
    });
  }

  const decoded = decodeSlug(slug);
  if (!decoded) return constructMetadata({ title: "Page Not Found" });
  
  const { service, city, type } = decoded;
  
  if (type === "outstation") {
    return constructMetadata({
      title: `Taxi from Udaipur to ${city} | Best Outstation Cabs | Yatree Destination`,
      description: `Book a premium taxi from Udaipur to ${city}. Enjoy luxury Innova Crysta, Tempo Traveller, or Sedans for your outstation journey with Yatree Destination.`,
    });
  }
  
  return constructMetadata({
    title: `${service.name} in ${city} | Yatree Destination`,
    description: `Premium ${service.name} in ${city}. Book luxury Innova Crysta, Tempo Traveller, or Sedans for ${city} sightseeing, airport transfers, and outstation trips.`,
  });
}

function decodeSlug(slug: string) {
  // Pattern 1: service-id-in-city-name
  if (slug.includes("-in-")) {
    const parts = slug.split("-in-");
    if (parts.length === 2) {
      const serviceId = parts[0];
      const cityName = parts[1].replace(/-/g, " ");
      
      const service = SERVICES.find((s) => s.id === serviceId);
      const city = CITIES.find((c) => c.toLowerCase() === cityName.toLowerCase());
      
      if (service && city) return { service, city, type: "local" };
    }
  }
  
  // Pattern 2: udaipur-to-destination-taxi
  if (slug.startsWith("udaipur-to-") && slug.endsWith("-taxi")) {
    const destination = slug.replace("udaipur-to-", "").replace("-taxi", "").replace(/-/g, " ");
    const formattedDestination = destination.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    return {
      service: { id: "outstation-taxi", name: "Outstation Cab", icon: "Car" },
      city: formattedDestination,
      type: "outstation"
    };
  }

  return null;
}

export default async function ProgrammaticPage({ params }: PageProps) {
  const { slug } = await params;
  
  // ----------------------------------------------------
  // CASE A: DEDICATED TOUR PAGE (MATCHES USER SERVICES)
  // ----------------------------------------------------
  if (TOUR_PAGES_DATA[slug]) {
    const tour = TOUR_PAGES_DATA[slug];

    return (
      <main className="min-h-screen bg-slate-50 selection:bg-gold-premium selection:text-midnight">
        <Navbar />
        
        {/* 1. SEO HERO SECTION */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-32 pb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src={tour.heroImage}
              alt={tour.h1}
              fill
              priority
              className="object-cover object-center brightness-[0.4] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
            {/* Breadcrumb & Duration Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gold-premium/40 bg-slate-900/80 backdrop-blur-md text-gold-premium font-black uppercase tracking-[0.25em] text-[10px] md:text-xs">
                <Sparkle className="w-3.5 h-3.5 text-gold-premium animate-pulse" />
                Verified Tour Package
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-white font-bold text-[10px] md:text-xs">
                <Clock className="w-3 h-3 text-gold-premium" />
                {tour.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-white font-bold text-[10px] md:text-xs">
                <Navigation className="w-3 h-3 text-sky-400" />
                {tour.distance}
              </span>
            </div>

            {/* MAIN SEO H1 HEADING */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase mb-6 leading-[1.12] drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
              {tour.h1}
            </h1>

            <p className="text-slate-200/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed font-normal drop-shadow-md">
              {tour.subtitle}
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="#book-tour" 
                className="group flex items-center justify-center relative h-14 px-8 rounded-full overflow-hidden bg-gold-premium text-midnight font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(212,175,55,0.35)] text-sm uppercase tracking-wider"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book This Tour Now <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </a>

              <a 
                href="tel:+917737737937" 
                className="h-14 px-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold flex items-center gap-2 transition-all hover:bg-white/20 hover:border-white/40 active:scale-95 text-sm uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-gold-premium" /> Call +91 77377 37937
              </a>

              <a 
                href={`https://wa.me/917737737937?text=Hi%20Yatree%20Destination,%20I%20want%20to%20book%20the%20${encodeURIComponent(tour.serviceName)}.`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-14 px-7 rounded-full bg-[#25D366] text-white font-bold flex items-center gap-2 hover:bg-[#20b858] transition-all shadow-md active:scale-95 text-sm uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Quote
              </a>
            </div>

            {/* Route Summary Pill */}
            <div className="mt-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900/90 border border-white/10 text-slate-300 text-xs font-semibold max-w-3xl">
              <Compass className="w-4 h-4 text-gold-premium shrink-0" />
              <span className="text-white/60">Route:</span>
              <span className="truncate">{tour.routeSummary}</span>
            </div>
          </div>
        </section>

        {/* 2. INSTANT BOOKING ENGINE */}
        <section id="book-tour" className="container mx-auto px-6 relative z-30 -mt-14 mb-20">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-200">
            <div className="text-center mb-8">
              <span className="text-gold-premium font-black uppercase tracking-[0.25em] text-[10px] block mb-2">Instant Reservation</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">Book {tour.serviceName}</h2>
              <p className="text-slate-500 text-xs md:text-sm mt-1">Starting from <strong className="text-slate-900">{tour.startingPrice}</strong>. Fully transparent fixed price with zero hidden charges.</p>
            </div>
            <PremiumBookingForm />
          </div>
        </section>

        {/* 3. TRANSPARENT FARE TABLE */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-gold-premium font-black uppercase tracking-[0.25em] text-[10px] block mb-2">Official Fixed Tariff</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">Verified Pricing Sheet</h2>
              <p className="text-slate-500 text-sm mt-2">All rates include clean AC car, dedicated chauffeur, fuel, and toll/parking fees.</p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-white">
                    <th className="p-4 font-bold text-xs uppercase tracking-wider">Vehicle Class</th>
                    <th className="p-4 font-bold text-xs uppercase tracking-wider">Passenger Capacity</th>
                    <th className="p-4 font-bold text-xs uppercase tracking-wider text-right">Fixed Package Fare</th>
                    <th className="p-4 font-bold text-xs uppercase tracking-wider">Best Suited For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {tour.rates.map((rate, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900 text-sm">{rate.vehicle}</td>
                      <td className="p-4 text-slate-600 text-sm">{rate.capacity}</td>
                      <td className="p-4 text-right font-black text-gold-premium text-base md:text-lg">{rate.price}</td>
                      <td className="p-4 text-slate-600 text-xs font-medium">{rate.idealFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6">
                <h4 className="font-extrabold text-emerald-950 text-base mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  What's Included in This Tour
                </h4>
                <ul className="space-y-2.5">
                  {tour.inclusions.map((inc, i) => (
                    <li key={i} className="text-xs md:text-sm text-emerald-900 flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-100/70 border border-slate-200 rounded-2xl p-6">
                <h4 className="font-extrabold text-slate-900 text-base mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-slate-500" />
                  What's Excluded
                </h4>
                <ul className="space-y-2.5">
                  {tour.exclusions.map((exc, i) => (
                    <li key={i} className="text-xs md:text-sm text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
                      {exc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SIGHTSEEING HIGHLIGHTS */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-14">
              <span className="text-gold-premium font-black uppercase tracking-[0.25em] text-[10px] block mb-2">What You Will Experience</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">Key Sightseeing Attractions</h2>
              <p className="text-slate-500 text-sm mt-2">Carefully curated by local Rajasthan travel experts for the best photography and experience.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {tour.highlights.map((hl, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3.5 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-xl bg-gold-premium/15 text-gold-premium font-black flex items-center justify-center shrink-0 text-sm">
                    0{i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base leading-snug">{hl.split(" - ")[0]}</h4>
                    {hl.split(" - ")[1] && (
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{hl.split(" - ")[1]}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SUGGESTED DAY ITINERARY */}
        {tour.itinerary && tour.itinerary.length > 0 && (
          <section className="py-20 bg-white border-t border-slate-200">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="text-center mb-14">
                <span className="text-gold-premium font-black uppercase tracking-[0.25em] text-[10px] block mb-2">Step-by-Step Schedule</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900">Suggested Tour Itinerary</h2>
                <p className="text-slate-500 text-sm mt-2">Flexible timings. You can spend more time at your favorite spots as you wish.</p>
              </div>

              <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-10 pl-6 md:pl-8">
                {tour.itinerary.map((step, i) => (
                  <div key={i} className="relative group">
                    {/* Time indicator (on desktop displayed on the left) */}
                    {step.time && (
                      <span className="hidden md:block absolute -left-36 top-0 w-28 text-right font-black text-xs text-gold-premium uppercase tracking-wider">
                        {step.time}
                      </span>
                    )}

                    {/* Dot */}
                    <div className="absolute -left-[31px] md:-left-[39px] top-1 w-4 h-4 rounded-full bg-gold-premium border-4 border-white shadow-sm" />

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 group-hover:border-gold-premium/40 transition-colors">
                      {step.time && (
                        <span className="inline-block md:hidden font-black text-xs text-gold-premium mb-1 uppercase tracking-wider">
                          {step.time}
                        </span>
                      )}
                      <h4 className="font-extrabold text-slate-900 text-base mb-1.5">{step.title}</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6. FAQS WITH FAQPAGE SCHEMA */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-14">
              <span className="text-gold-premium font-black uppercase tracking-[0.25em] text-[10px] block mb-2">Got Questions?</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">Frequently Asked Questions</h2>
              <p className="text-slate-500 text-sm mt-2">Clear answers to help you plan your travel with Yatree Destination.</p>
            </div>

            {/* Schema.org FAQPage */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": tour.faqs.map((faq) => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.a
                    }
                  }))
                })
              }}
            />

            <div className="space-y-4">
              {tour.faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2">{faq.q}</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Callout Banner */}
        <section className="bg-slate-950 py-16 px-6 text-center text-white border-t border-white/10">
          <div className="container mx-auto max-w-3xl">
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
              Ready to Book Your {tour.serviceName}?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-8">
              Speak with our travel concierge directly to customize your pickup time, vehicle preferences, or special requests.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="tel:+917737737937" 
                className="bg-gold-premium text-midnight px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm flex items-center gap-2 hover:bg-white transition-all shadow-lg active:scale-95"
              >
                <Phone className="w-4 h-4" /> Call +91 77377 37937
              </a>
              <a 
                href={`https://wa.me/917737737937?text=Hi%20Yatree%20Destination,%20I%20want%20to%20reserve%20the%20${encodeURIComponent(tour.serviceName)}.`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm flex items-center gap-2 hover:bg-[#20b858] transition-all shadow-lg active:scale-95"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  // ----------------------------------------------------
  // CASE B: STANDARD PROGRAMMATIC PAGES (City / Outstation)
  // ----------------------------------------------------
  const decoded = decodeSlug(slug);
  if (!decoded) notFound();
  
  const { service, city, type } = decoded;

  return (
    <main className="min-h-screen bg-navy-950">
      <Navbar />
      
      {/* Dynamic Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-midnight">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/40 to-midnight z-10" />
        <div className="absolute inset-0 bg-[url(/premium_udaipur_taxi_hero_1778818369975.png)] bg-cover bg-center" />
        
        <div className="container mx-auto px-4 relative z-20 text-center mt-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            {type === "outstation" ? (
              <>Premium <span className="text-gold-premium">Taxi</span> <br /> from Udaipur to {city}</>
            ) : (
              <>Premium <span className="text-gold-premium">{service.name}</span> <br /> in {city}</>
            )}
          </h1>
          <p className="text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {type === "outstation"
              ? `Enjoy a comfortable and luxurious outstation journey from Udaipur to ${city} with our professional drivers and top-rated fleet.`
              : `Luxury travel experiences, professional drivers, and top-rated ${service.name} tailored for your journey in and around ${city}.`
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#book" className="group flex items-center justify-center relative h-14 px-8 rounded-full overflow-hidden bg-gold-premium text-midnight font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                Book Your Ride <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <a href="tel:+917737737937" className="h-14 px-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold flex items-center gap-2 transition-all hover:bg-white/10 hover:border-white/40 active:scale-95">
              <Phone className="w-4 h-4 text-gold-premium" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Booking Form Integration */}
      <div id="book" className="container mx-auto px-4 relative z-30 -mt-24 mb-24">
        <div className="max-w-6xl mx-auto">
          <PremiumBookingForm />
        </div>
      </div>

      {/* SEO Content Section */}
      <section className="py-24 bg-white dark:bg-navy-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-navy-900 dark:text-white">
              {type === "outstation" 
                ? `Why Choose Our Taxi from Udaipur to ${city}?` 
                : `Why Choose Our ${service.name} in ${city}?`
              }
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  When it comes to <strong>{type === "outstation" ? `traveling from Udaipur to ${city}` : `${service.name} in ${city}`}</strong>, Yatree Destination stands out as the premier choice. 
                  We understand that your travel needs are unique, whether you're a tourist exploring 
                  the City of Lakes or a corporate traveler on a tight schedule.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our fleet of well-maintained vehicles, including the luxury <strong>Innova Crysta</strong> and 
                  spacious <strong>Tempo Travellers</strong>, ensures that you travel in comfort and style {type === "outstation" ? `to ${city}` : `throughout ${city}`}.
                </p>
              </div>
              <div className="bg-navy-50 dark:bg-navy-900/50 p-8 rounded-3xl border border-gold-600/20">
                <h3 className="text-xl font-bold mb-4 text-gold-600">Service Highlights:</h3>
                <ul className="space-y-4">
                  {[
                    type === "outstation" ? `24/7 Availability for ${city} route` : `24/7 Availability in all areas of ${city}`,
                    "Verified & Professional English-speaking drivers",
                    "No hidden charges - Transparent pricing",
                    "Luxury fleet with high-end safety features",
                    type === "outstation" ? `Customizable outstation packages for ${city}` : `Customizable tour packages for ${city}`
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-navy-900 dark:text-white/80">
                      <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 border-y border-white/5 bg-navy-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Happy Clients", value: "10,000+" },
              { label: "Luxury Cars", value: "50+" },
              { label: "Expert Drivers", value: "100+" },
              { label: "Years Experience", value: "6+" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <h4 className="text-4xl font-bold text-gold-500 mb-2">{stat.value}</h4>
                <p className="text-white/60 uppercase tracking-widest text-xs font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 bg-white dark:bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-navy-900 dark:text-white text-center">
              Clear & Transparent Pricing for {type === "outstation" ? `Udaipur to ${city}` : `${service.name} in ${city}`}
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-navy-800 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gold-500 text-white">
                    <th className="p-4 font-bold border-b border-white/20">Vehicle Type</th>
                    <th className="p-4 font-bold border-b border-white/20">Seating Capacity</th>
                    <th className="p-4 font-bold border-b border-white/20">{type === "outstation" ? "Per Km Rate" : "Package Price (8Hr/80Km)"}</th>
                    <th className="p-4 font-bold border-b border-white/20">Ideal For</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-navy-950">
                  <tr className="border-b border-gray-200 dark:border-navy-800 hover:bg-gray-50 dark:hover:bg-navy-900/50 transition-colors">
                    <td className="p-4 font-medium text-navy-900 dark:text-white">Sedan (Dzire/Etios)</td>
                    <td className="p-4 text-gray-600 dark:text-gray-400">4 Passengers</td>
                    <td className="p-4 text-gold-600 font-bold">{type === "outstation" ? "₹11 / km" : "₹2,000"}</td>
                    <td className="p-4 text-gray-600 dark:text-gray-400">Couples, Small Families</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-navy-800 hover:bg-gray-50 dark:hover:bg-navy-900/50 transition-colors">
                    <td className="p-4 font-medium text-navy-900 dark:text-white">SUV (Innova/Crysta)</td>
                    <td className="p-4 text-gray-600 dark:text-gray-400">6-7 Passengers</td>
                    <td className="p-4 text-gold-600 font-bold">{type === "outstation" ? "₹16 / km" : "₹3,500"}</td>
                    <td className="p-4 text-gray-600 dark:text-gray-400">Families, Corporate</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-navy-900/50 transition-colors">
                    <td className="p-4 font-medium text-navy-900 dark:text-white">Tempo Traveller</td>
                    <td className="p-4 text-gray-600 dark:text-gray-400">10-17 Passengers</td>
                    <td className="p-4 text-gold-600 font-bold">{type === "outstation" ? "₹24 / km" : "₹5,500"}</td>
                    <td className="p-4 text-gray-600 dark:text-gray-400">Group Tours, Events</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-center text-gray-500 mt-4">Note: Tolls, parking, and driver allowance may be extra based on the actual itinerary.</p>
          </div>
        </div>
      </section>

      {/* SEO FAQs */}
      <section className="py-24 bg-navy-50 dark:bg-navy-950 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold mb-8 text-navy-900 dark:text-white text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {(() => {
              const faqs = [
                {
                  q: type === "outstation" ? `What is the distance from Udaipur to ${city}?` : `How do I book ${service.name} in ${city}?`,
                  a: type === "outstation" ? `The distance from Udaipur to ${city} varies by exact route, but our experienced drivers know the best and fastest roads. You can easily book a direct cab with Yatree Destination for a seamless journey.` : `Booking is easy! You can fill out our online form, call us directly at +91 77377 37937, or WhatsApp us to book your ${service.name} instantly.`
                },
                {
                  q: "Are the drivers experienced and verified?",
                  a: "Yes, all our drivers are police-verified, highly experienced, and familiar with local and outstation routes. They prioritize your safety and comfort."
                },
                {
                  q: "Are there any hidden charges?",
                  a: "No, we believe in transparent pricing. The rates quoted cover the base fare. Toll taxes, state taxes, and parking fees (if applicable) are clearly communicated before the trip."
                }
              ];

              return (
                <>
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map((faq) => ({
                          "@type": "Question",
                          "name": faq.q,
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.a
                          }
                        }))
                      })
                    }}
                  />
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-white dark:bg-navy-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-navy-800">
                      <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-2">{faq.q}</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </>
              );
            })()}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
