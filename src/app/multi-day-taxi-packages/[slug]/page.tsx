import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { packagesData, TaxiPackage } from "@/data/packages";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
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
  Navigation,
  ShieldCheck,
  Fuel,
  CreditCard,
  User,
  ArrowRight,
  HelpCircle
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packagesData.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);

  if (!pkg) {
    return {
      title: "Package Not Found | Yatree Destination",
      description: "Tour package not found.",
    };
  }

  return {
    title: pkg.metaTitle,
    description: pkg.metaDescription,
    alternates: {
      canonical: `https://www.yatreedestination.com/multi-day-taxi-packages/${pkg.slug}/`,
    },
    openGraph: {
      title: pkg.metaTitle,
      description: pkg.metaDescription,
      url: `https://www.yatreedestination.com/multi-day-taxi-packages/${pkg.slug}/`,
      type: "website",
      images: [
        {
          url: `https://www.yatreedestination.com${pkg.heroImage}`,
          width: 1200,
          height: 630,
          alt: pkg.title,
        },
      ],
    },
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  const phoneDisplay = "+91 63674 66426";
  const phoneLink = "tel:+916367466426";
  const waNumber = "916367466426";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": pkg.title,
    "description": pkg.subtitle,
    "touristType": ["Family", "Couples", "Solo Travelers", "Group Tours"],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": pkg.rates[0]?.rate.toString() || "6000",
      "highPrice": pkg.rates[pkg.rates.length - 1]?.rate.toString() || "59000",
      "offerCount": pkg.rates.length.toString(),
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Yatree Destination",
      "telephone": "+91 63674 66426",
      "url": "https://www.yatreedestination.com",
    },
  };

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-orange-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={pkg.heroImage}
            alt={pkg.title}
            fill
            priority
            className="object-cover object-center brightness-[0.38] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          {/* Breadcrumb & Duration Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <Link
              href="/multi-day-taxi-packages/"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-orange-500/40 bg-slate-900/80 backdrop-blur-md text-orange-400 hover:text-orange-300 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs transition-colors"
            >
              <Sparkle className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
              Multi-Day Tour Packages
            </Link>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-white font-bold text-[10px] md:text-xs">
              <Clock className="w-3 h-3 text-orange-400" />
              {pkg.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-white font-bold text-[10px] md:text-xs">
              <Navigation className="w-3 h-3 text-sky-400" />
              Up to {pkg.includedKm} KM Included
            </span>
          </div>

          {/* MAIN H1 HEADING */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase mb-6 leading-[1.12] drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            {pkg.title}
          </h1>

          <p className="text-slate-200/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed font-normal drop-shadow-md">
            {pkg.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group flex items-center justify-center relative h-14 px-8 rounded-full overflow-hidden bg-orange-500 text-white font-bold transition-all hover:bg-orange-600 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(249,115,22,0.4)] text-sm uppercase tracking-wider"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Rates & Book <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <a
              href={phoneLink}
              className="h-14 px-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold flex items-center gap-2 transition-all hover:bg-white/20 hover:border-white/40 active:scale-95 text-sm uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-orange-400" /> Call {phoneDisplay}
            </a>

            <a
              href={`https://wa.me/${waNumber}?text=Hi%20Yatree%20Destination,%20I%20want%20to%20inquire%20about%20the%20${encodeURIComponent(pkg.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-7 rounded-full bg-[#25D366] text-white font-bold flex items-center gap-2 hover:bg-[#20b858] transition-all shadow-md active:scale-95 text-sm uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Quote
            </a>
          </div>

          {/* Route Summary Pill */}
          <div className="mt-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900/90 border border-white/10 text-slate-300 text-xs font-semibold max-w-3xl">
            <Compass className="w-4 h-4 text-orange-400 shrink-0" />
            <span className="text-white/60">Route:</span>
            <span className="truncate">{pkg.route}</span>
          </div>
        </div>
      </section>

      {/* 2. TRUST HIGHLIGHTS BANNER */}
      <section className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-1">
                <Fuel className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900 text-sm">Fuel & Mileage Included</span>
              <span className="text-xs text-slate-500">Up to {pkg.includedKm} KM package limit</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-1">
                <CreditCard className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900 text-sm">Tolls & Taxes Covered</span>
              <span className="text-xs text-slate-500">Zero hidden road costs</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-1">
                <User className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900 text-sm">Chauffeur Allowance</span>
              <span className="text-xs text-slate-500">Driver night & food charges included</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-1">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900 text-sm">100% Private Cab</span>
              <span className="text-xs text-slate-500">Never shared with other passengers</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRIP HIGHLIGHTS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-orange-500 mb-2 block">
              Experience The Best
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
              Tour Package Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pkg.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:border-orange-500/30 hover:shadow-md transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-slate-800 text-sm md:text-base leading-relaxed font-medium">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DAY-BY-DAY DETAILED ITINERARY */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-orange-500 mb-2 block">
              Day-by-Day Schedule
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
              Complete Tour Itinerary
            </h2>
            <p className="text-slate-600 text-sm mt-3 max-w-xl mx-auto">
              Our itineraries are fully customizable. Your private chauffeur will drive at your desired pace.
            </p>
          </div>

          <div className="relative border-l-2 border-orange-500/30 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
            {pkg.itinerary.map((item) => (
              <div key={item.day} className="relative group">
                {/* Dot Icon */}
                <div className="absolute -left-[35px] md:-left-[51px] top-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs shadow-md">
                  {item.day}
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 hover:border-orange-500/30 hover:shadow-lg transition-all">
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-3 inline-block">
                    Day {item.day}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>

                  {/* Key Stops Chips */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                      Key Highlights & Stops:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.places.map((place, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs"
                        >
                          <MapPin className="w-3 h-3 text-orange-500" />
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRANSPARENT PRICING SECTION */}
      <section className="py-20 bg-slate-900 text-white" id="pricing">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-orange-400 mb-2 block">
              100% Fixed Rates
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Vehicle Rate Cards ({pkg.duration})
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Fixed total transportation fare for the entire tour. Up to {pkg.includedKm} KM included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pkg.rates.map((rate, i) => (
              <div
                key={i}
                className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 flex flex-col justify-between hover:border-orange-500 transition-all hover:scale-102 group shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Car className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{rate.vehicle}</h3>
                  <div className="text-3xl font-black text-orange-400 mb-1">
                    ₹{rate.rate.toLocaleString("en-IN")}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    + GST ({pkg.duration})
                  </span>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700/60 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    Fuel & Driver included
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    All Tolls & Parking covered
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    Up to {pkg.includedKm} KM travel
                  </div>

                  <a
                    href={`https://wa.me/${waNumber}?text=Hi%20Yatree%20Destination,%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(pkg.title)}%20with%20${encodeURIComponent(rate.vehicle)}%20at%20INR%20${rate.rate}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" /> Book {rate.vehicle}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INCLUSIONS & EXCLUSIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Inclusions */}
            <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-3xl p-8">
              <h3 className="text-xl font-black text-emerald-950 uppercase tracking-wide mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                Package Inclusions
              </h3>
              <ul className="space-y-4">
                {pkg.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-emerald-900 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-rose-50/60 border border-rose-200/80 rounded-3xl p-8">
              <h3 className="text-xl font-black text-rose-950 uppercase tracking-wide mb-6 flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-rose-600" />
                Package Exclusions
              </h3>
              <ul className="space-y-4">
                {pkg.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-rose-900 font-medium">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-orange-500 mb-2 block">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
              Tour FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {pkg.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:border-orange-500/30 transition-colors"
              >
                <h4 className="font-bold text-slate-900 text-base md:text-lg mb-2">
                  {faq.q}
                </h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OTHER MULTI-DAY PACKAGES NAVIGATION */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-black text-slate-900 uppercase">
                Explore Other Tour Packages
              </h3>
              <p className="text-slate-500 text-sm">Choose from 2-day to 7-day Rajasthan itineraries</p>
            </div>
            <Link
              href="/multi-day-taxi-packages/"
              className="text-orange-600 hover:text-orange-700 font-bold text-sm uppercase tracking-wider flex items-center gap-1.5"
            >
              View All 6 Packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {packagesData
              .filter((p) => p.slug !== pkg.slug)
              .slice(0, 3)
              .map((otherPkg) => (
                <Link
                  key={otherPkg.id}
                  href={`/multi-day-taxi-packages/${otherPkg.slug}/`}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-500 hover:bg-orange-50/20 transition-all group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 mb-1 block">
                    {otherPkg.duration}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-orange-600 transition-colors mb-2">
                    {otherPkg.title}
                  </h4>
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>From {otherPkg.startingPrice}</span>
                    <span className="text-orange-500 font-bold flex items-center gap-1">
                      Details <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CONCIERGE CALLOUT BANNER */}
      <section className="bg-slate-950 py-16 px-6 text-center text-white border-t border-white/10">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
            Ready to Customize or Book This Tour?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-8">
            Speak directly with our Rajasthan Tour Coordinator to finalize pickup dates, customize places to see, or choose your luxury fleet.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={phoneLink}
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm flex items-center gap-2 hover:bg-orange-600 transition-all shadow-lg active:scale-95"
            >
              <Phone className="w-4 h-4" /> Call {phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${waNumber}?text=Hi%20Yatree%20Destination,%20I%20want%20to%20book%20the%20${encodeURIComponent(pkg.title)}.`}
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
