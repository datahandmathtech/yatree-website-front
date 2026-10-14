export interface VehicleRate {
  vehicle: string;
  rate: number;
}

export interface PackageItineraryItem {
  day: number;
  title: string;
  desc: string;
  places: string[];
}

export interface TaxiPackage {
  id: string;
  slug: string;
  title: string;
  stay: string;
  route: string;
  includedKm: number;
  rates: VehicleRate[];
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  duration: string;
  startingPrice: string;
  routeSummary: string;
  highlights: string[];
  itinerary: PackageItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  faqs: { q: string; a: string }[];
}

export const packagesData: TaxiPackage[] = [
  {
    id: "pkg-1",
    slug: "1-night-2-days-udaipur-tour-package",
    title: "1 NIGHT / 2 DAYS - UDAIPUR",
    stay: "1 Night Udaipur",
    route: "Udaipur Sightseeing",
    includedKm: 250,
    rates: [
      { vehicle: "Sedan", rate: 6000 },
      { vehicle: "Premium Sedan", rate: 7000 },
      { vehicle: "Innova Crysta", rate: 8000 },
      { vehicle: "Tempo Traveller - 12 Seater", rate: 11000 }
    ],
    subtitle: "2-Day Private Royal Lake City Sightseeing & Palace Chauffeur Tour",
    metaTitle: "1 Night 2 Days Udaipur Tour Package Taxi | Yatree Destination",
    metaDescription: "Book 1 Night 2 Days Udaipur tour package with private taxi. Explore City Palace, Lake Pichola boat ride, Jagdish Temple, Saheliyon Ki Bari & Monsoon Palace with transparent pricing.",
    heroImage: "/places/city-palace.jpg",
    duration: "1 Night / 2 Days",
    startingPrice: "₹6,000",
    routeSummary: "City Palace → Lake Pichola → Jagdish Temple → Saheliyon Ki Bari → Fateh Sagar Lake → Sajjangarh",
    highlights: [
      "City Palace & Museum - Rajasthan's grandest royal palace complex overlooking Lake Pichola",
      "Lake Pichola Sunset Boat Cruise - Magnificent waterside vistas of Jag Mandir and Lake Palace",
      "Saheliyon Ki Bari - Historic royal leisure gardens with fountains and lotus ponds",
      "Fateh Sagar Lake & Moti Magri - Picturesque lakeside promenade and Maharana Pratap memorial",
      "Sajjangarh (Monsoon Palace) - High hill panoramic sunset across Aravalli ranges"
    ],
    itinerary: [
      {
        day: 1,
        title: "Day 1: Arrival & Historic Royal Palaces Tour",
        desc: "Meet your private chauffeur upon arrival at Udaipur Airport / Railway Station or your hotel. Start your royal tour with the majestic City Palace, visit the 17th-century Jagdish Temple, and enjoy a picturesque boat ride on Lake Pichola with views of Jag Mandir. In the evening, witness the cultural folk performance at Bagore Ki Haveli.",
        places: ["City Palace", "Jagdish Temple", "Lake Pichola", "Bagore Ki Haveli", "Gangaur Ghat"]
      },
      {
        day: 2,
        title: "Day 2: Royal Gardens, Scenic Lakes & Sunset Departure",
        desc: "After breakfast, proceed to visit the exquisite Saheliyon-Ki-Bari royal garden. Drive along the scenic banks of Fateh Sagar Lake, visit Moti Magri memorial, and ascend to the Monsoon Palace (Sajjangarh) for breathtaking panoramic valley views. Explore local handicraft markets before a smooth transfer to your departure point.",
        places: ["Saheliyon Ki Bari", "Fateh Sagar Lake", "Moti Magri", "Monsoon Palace (Sajjangarh)", "Bapu Bazaar"]
      }
    ],
    inclusions: [
      "AC Vehicle with dedicated verified chauffeur",
      "Fuel, all highway toll charges & parking fees",
      "Driver allowance, border tax & state road permits",
      "Doorstep pickup & drop from Udaipur Airport / Station / Hotel",
      "Up to 250 km included travel as per itinerary"
    ],
    exclusions: [
      "Hotel accommodation & daily meals",
      "Monument entrance tickets and camera fees",
      "Boat ride tickets at Lake Pichola",
      "Personal expenses, shopping & porter charges"
    ],
    faqs: [
      { q: "What is included in the 1 Night / 2 Days Udaipur package?", a: "This package includes private AC cab with dedicated chauffeur for 2 full days, covering up to 250 KM, all fuel, tolls, parking, and driver allowances." },
      { q: "Can we customize our pickup time and itinerary?", a: "Yes, our tour packages are 100% private and customizable. You can adjust pickup timings and sightseeing stops according to your schedule." },
      { q: "Which phone number should I contact for instant booking?", a: "You can directly call our tour coordinator at +91 63674 66426 or WhatsApp us for instant confirmation." }
    ]
  },
  {
    id: "pkg-2",
    slug: "2-nights-3-days-udaipur-tour-package",
    title: "2 NIGHTS / 3 DAYS - UDAIPUR + EXCURSION",
    stay: "2 Nights Udaipur",
    route: "Nathdwara / Chittorgarh / Kumbhalgarh (one selected destination)",
    includedKm: 750,
    rates: [
      { vehicle: "Sedan", rate: 9000 },
      { vehicle: "Premium Sedan", rate: 11000 },
      { vehicle: "Innova Crysta", rate: 15000 },
      { vehicle: "Tempo Traveller - 12 Seater", rate: 21000 }
    ],
    subtitle: "Udaipur Royal Sightseeing + Full Day Excursion of Your Choice",
    metaTitle: "2 Nights 3 Days Udaipur Tour Package with Excursion | Yatree Destination",
    metaDescription: "Experience 2 Nights / 3 Days Udaipur tour package with private taxi. Includes full Udaipur sightseeing plus excursion to Chittorgarh, Kumbhalgarh or Nathdwara. Up to 750 km.",
    heroImage: "/places/chittorgarh.png",
    duration: "2 Nights / 3 Days",
    startingPrice: "₹9,000",
    routeSummary: "Udaipur City Tour + Day Excursion to Chittorgarh / Kumbhalgarh / Nathdwara Shrinathji",
    highlights: [
      "Complete Udaipur Highlights - City Palace, Lake Pichola, Saheliyon Ki Bari & Fateh Sagar",
      "Excursion Choice 1: Chittorgarh Fort - UNESCO World Heritage Site with Vijay Stambh & Padmini Palace",
      "Excursion Choice 2: Kumbhalgarh Fort - Great Wall of India & Ranakpur Marble Jain Temple",
      "Excursion Choice 3: Nathdwara Shrinathji Temple - Sacred pilgrimage, Eklingji Shiva temple & Statue of Belief (Vishwas Swaroopam)",
      "Dedicated Private Chauffeur with 750 KM limit for seamless intercity cruising"
    ],
    itinerary: [
      {
        day: 1,
        title: "Day 1: Arrival & Heart of Udaipur Palaces",
        desc: "Arrive in Udaipur and meet your chauffeur. Check in to your hotel and start exploring the majestic City Palace, the intricately carved Jagdish Temple, and take a romantic boat cruise on Lake Pichola. Evening at leisure walking along Gangaur Ghat.",
        places: ["City Palace", "Jagdish Temple", "Lake Pichola", "Gangaur Ghat"]
      },
      {
        day: 2,
        title: "Day 2: Full Day Excursion (Chittorgarh / Kumbhalgarh / Nathdwara)",
        desc: "Embark on an exciting day trip according to your choice: Head to the legendary Chittorgarh Fort to explore Vijay Stambh and Kirti Stambh; OR travel through scenic Aravalli hills to Kumbhalgarh Fort and Ranakpur Jain Temple; OR take the pilgrimage route to Shrinathji Temple in Nathdwara and Eklingji.",
        places: ["Selected Excursion Route", "Heritage Fort / Temples", "Scenic Highway Drive"]
      },
      {
        day: 3,
        title: "Day 3: Udaipur Lakes, Monsoon Palace & Departure",
        desc: "Visit Saheliyon-Ki-Bari, Fateh Sagar Lake, and drive up to Sajjangarh Monsoon Palace for sweeping views of Udaipur's countryside. Spend afternoon shopping for authentic Mewari handicrafts and miniature paintings before departure transfer.",
        places: ["Saheliyon Ki Bari", "Fateh Sagar Lake", "Sajjangarh Palace", "Departure Transfer"]
      }
    ],
    inclusions: [
      "AC Vehicle with experienced outstation chauffeur",
      "Fuel, toll taxes, inter-district road permits & parking",
      "Driver night charges & daily allowance",
      "All sightseeing transfers up to 750 KM",
      "Pickup and drop from Udaipur Airport or Railway Station"
    ],
    exclusions: [
      "Hotel accommodation & meals",
      "Monument entry fees & licensed guide charges",
      "Temple VIP darshan passes",
      "Boat ride fees & personal expenses"
    ],
    faqs: [
      { q: "Can we choose which excursion to take on Day 2?", a: "Yes, you can choose any one full-day excursion among Chittorgarh Fort, Kumbhalgarh Fort & Ranakpur, or Nathdwara & Eklingji. The 750 km limit comfortably covers any choice." },
      { q: "Are highway toll taxes and parking included in the price?", a: "Yes, all toll charges, interstate/district taxes, parking fees, and driver allowances are 100% included in the package rate." },
      { q: "How do I book this tour?", a: "Call our packages specialist at +91 63674 66426 or tap WhatsApp to receive an instant customized itinerary." }
    ]
  },
  {
    id: "pkg-3",
    slug: "3-nights-4-days-udaipur-mount-abu-tour-package",
    title: "3 NIGHTS / 4 DAYS - UDAIPUR + MOUNT ABU",
    stay: "2 Nights Udaipur + 1 Night Mount Abu",
    route: "Pickup: Udaipur | Drop: Mount Abu / Udaipur",
    includedKm: 1000,
    rates: [
      { vehicle: "Sedan", rate: 12000 },
      { vehicle: "Premium Sedan", rate: 14000 },
      { vehicle: "Innova Crysta", rate: 20000 },
      { vehicle: "Tempo Traveller - 12 Seater", rate: 28000 }
    ],
    subtitle: "The Ultimate Royal Lakes & Serene Hill Station Combo",
    metaTitle: "3 Nights 4 Days Udaipur Mount Abu Tour Package | Yatree Destination",
    metaDescription: "Book 3 Nights / 4 Days Udaipur + Mount Abu taxi package. Visit City Palace, Lake Pichola, Dilwara Temples, Nakki Lake & Sunset Point. Up to 1000 km included.",
    heroImage: "/places/explore-hero.png",
    duration: "3 Nights / 4 Days",
    startingPrice: "₹12,000",
    routeSummary: "Udaipur (2 Nights) → Pindwara Ghat Road → Mount Abu Hill Station (1 Night) → Drop Udaipur / Abu Road",
    highlights: [
      "Royal City of Udaipur - City Palace, Lake Pichola, Saheliyon Ki Bari & Sajjangarh Palace",
      "Dilwara Jain Temples - World famous 11th-13th century marble architecture in Mount Abu",
      "Nakki Lake Boating & Toad Rock - High altitude natural lake and mountain rock formations",
      "Spectacular Sunset Point - Golden hour over the lush Aravalli valleys",
      "1,000 KM of comfortable chauffeur-driven travel in luxury Sedan, Innova Crysta or Tempo Traveller"
    ],
    itinerary: [
      {
        day: 1,
        title: "Day 1: Arrival in Udaipur & Royal City Heritage",
        desc: "Pickup from Udaipur Airport or Railway Station. Check in to your hotel and visit the magnificent City Palace complex and Jagdish Temple. In the evening, enjoy a peaceful boat ride on Lake Pichola gazing at the illuminated Lake Palace.",
        places: ["City Palace", "Lake Pichola", "Jagdish Temple", "Local Ghats"]
      },
      {
        day: 2,
        title: "Day 2: Udaipur Lakes & Cultural Sights",
        desc: "Explore Saheliyon-Ki-Bari royal garden, Fateh Sagar Lake, and Moti Magri. Later, drive up the scenic winding road to Sajjangarh Monsoon Palace for breathtaking views across the lakes and wildlife sanctuary. Evening market tour.",
        places: ["Saheliyon Ki Bari", "Fateh Sagar Lake", "Monsoon Palace", "Bapu Bazaar"]
      },
      {
        day: 3,
        title: "Day 3: Scenic Drive to Mount Abu & Hill Station Tour",
        desc: "Morning drive from Udaipur through the scenic Aravalli hills to Mount Abu (approx 3 hours). Check into your Mount Abu hotel. Visit the world-famous Dilwara Marble Temples, followed by boating at Nakki Lake and evening sunset at Sunset Point.",
        places: ["Aravalli Highway Drive", "Dilwara Temples", "Nakki Lake", "Toad Rock", "Sunset Point"]
      },
      {
        day: 4,
        title: "Day 4: Mount Abu Exploration & Departure",
        desc: "Visit Guru Shikhar, the highest peak in Rajasthan, and the ancient Achalgarh Fort. After lunch, enjoy a relaxing descent back to Udaipur (or drop at Abu Road Railway Station) for your onward journey.",
        places: ["Guru Shikhar", "Achalgarh Fort", "Scenic Return Drive", "Airport / Station Drop"]
      }
    ],
    inclusions: [
      "AC Vehicle with experienced hill-station chauffeur",
      "All fuel, hill road tolls, municipality taxes & parking fees",
      "Driver night allowances & interstate / state permits",
      "Doorstep pickup in Udaipur and drop at Udaipur / Abu Road",
      "Up to 1,000 KM total travel included"
    ],
    exclusions: [
      "Hotel stays and meals in Udaipur and Mount Abu",
      "Monument entry fees, guide charges & boat ride tickets",
      "Personal tips, shopping and activity charges"
    ],
    faqs: [
      { q: "Is the hill road driving safe in Mount Abu?", a: "Yes, our drivers are extensively experienced with mountain ghat driving on the Udaipur-Mount Abu highway and maintain high safety standards." },
      { q: "Can we be dropped at Abu Road Railway Station instead of Udaipur?", a: "Yes, drop-off at Abu Road Railway Station is included within this package without any extra charges." },
      { q: "Who do I contact to reserve this package?", a: "Call us directly at +91 63674 66426 or message on WhatsApp to check car availability and book." }
    ]
  },
  {
    id: "pkg-4",
    slug: "4-nights-5-days-udaipur-mount-abu-jodhpur-tour-package",
    title: "4 NIGHTS / 5 DAYS - UDAIPUR + MOUNT ABU + JODHPUR",
    stay: "2 Nights Udaipur + 1 Night Mount Abu + 1 Night Jodhpur",
    route: "Pickup: Udaipur | Drop: Jodhpur",
    includedKm: 1250,
    rates: [
      { vehicle: "Sedan", rate: 15000 },
      { vehicle: "Premium Sedan", rate: 17500 },
      { vehicle: "Innova Crysta", rate: 25000 },
      { vehicle: "Tempo Traveller - 12 Seater", rate: 35000 }
    ],
    subtitle: "Lakes, Hills & The Blue City - Complete Southern & Western Rajasthan Expedition",
    metaTitle: "4 Nights 5 Days Udaipur Mount Abu Jodhpur Tour Package | Yatree Destination",
    metaDescription: "Book 4 Nights 5 Days tour from Udaipur to Mount Abu and Jodhpur. Includes Mehrangarh Fort, Dilwara Temples, City Palace, Lake Pichola & Jaswant Thada. Up to 1250 km.",
    heroImage: "/places/sajjangarh.jpg",
    duration: "4 Nights / 5 Days",
    startingPrice: "₹15,000",
    routeSummary: "Udaipur (2N) → Mount Abu (1N) → Ranakpur → Jodhpur (1N) [Drop Jodhpur]",
    highlights: [
      "Udaipur Heritage - City Palace, Jagdish Temple, Lake Pichola boat cruise & Monsoon Palace",
      "Mount Abu - Dilwara Jain Temples, Nakki Lake & Aravalli Sunset Point",
      "Ranakpur En Route - 1,444 uniquely carved marble pillars in a tranquil forest valley",
      "Jodhpur The Blue City - Imposing Mehrangarh Fort, Jaswant Thada & Umaid Bhawan Palace",
      "1,250 KM comprehensive multi-city package with dedicated point-to-point chauffeur"
    ],
    itinerary: [
      {
        day: 1,
        title: "Day 1: Arrival in Udaipur & Lake Pichola Magic",
        desc: "Meet and greet at Udaipur Airport / Railway Station. Check into hotel and visit the royal City Palace complex, Jagdish Temple, and experience sunset boating on the shimmering waters of Lake Pichola.",
        places: ["City Palace", "Jagdish Temple", "Lake Pichola", "Old City Ghats"]
      },
      {
        day: 2,
        title: "Day 2: Royal Gardens, Monsoon Palace & Lakes",
        desc: "Visit Saheliyon-Ki-Bari, Fateh Sagar Lake, Moti Magri, and climb the winding hills to Sajjangarh Monsoon Palace for picturesque countryside views. Evening stroll through traditional markets.",
        places: ["Saheliyon Ki Bari", "Fateh Sagar Lake", "Monsoon Palace", "Local Bazaars"]
      },
      {
        day: 3,
        title: "Day 3: Udaipur to Mount Abu Hill Station",
        desc: "Drive to Mount Abu hill station. Visit the renowned Dilwara Jain Temples, stroll around Nakki Lake, and watch the sun descend behind the hills at Sunset Point. Overnight stay in Mount Abu.",
        places: ["Mount Abu Ghat Drive", "Dilwara Temples", "Nakki Lake", "Sunset Point"]
      },
      {
        day: 4,
        title: "Day 4: Mount Abu to Jodhpur via Ranakpur",
        desc: "Descend from Mount Abu and journey towards the Sun City of Jodhpur, visiting the architectural marvel of Ranakpur Jain Temple along the way. Arrive in Jodhpur and explore the bustling Clock Tower and colorful Sadar Bazaar. Overnight in Jodhpur.",
        places: ["Ranakpur Marble Temple", "Jodhpur Arrival", "Clock Tower Market"]
      },
      {
        day: 5,
        title: "Day 5: Jodhpur Sightseeing & Departure",
        desc: "Tour the towering Mehrangarh Fort rising 400 feet above the blue city, visit the marble cenotaph of Jaswant Thada, and tour the Umaid Bhawan Palace Museum. Transfer to Jodhpur Airport or Railway Station for departure.",
        places: ["Mehrangarh Fort", "Jaswant Thada", "Umaid Bhawan Palace", "Jodhpur Airport / Station Drop"]
      }
    ],
    inclusions: [
      "AC Vehicle with experienced long-distance highway chauffeur",
      "All intercity fuel, state road tolls, parking & municipality taxes",
      "Driver boarding, night charges & daily allowances",
      "Pickup in Udaipur and drop at Jodhpur Airport or Station",
      "Up to 1,250 KM total included travel"
    ],
    exclusions: [
      "Hotel accommodations & food/drinks",
      "Fort entry fees, museum passes & camera permits",
      "Boating tickets and personal expenses"
    ],
    faqs: [
      { q: "Is pickup in Udaipur and drop in Jodhpur covered in the same price?", a: "Yes, this is an intercity one-way transfer tour package with all return toll and dead mileage covered in the package rate." },
      { q: "Can we visit Ranakpur Jain Temple on the way from Mount Abu to Jodhpur?", a: "Yes, our route naturally accommodates the Ranakpur detour without extra charge." },
      { q: "How can I book this tour?", a: "Call our tour coordinator at +91 63674 66426 or send us an inquiry on WhatsApp for instant confirmation." }
    ]
  },
  {
    id: "pkg-5",
    slug: "5-nights-6-days-udaipur-jodhpur-jaisalmer-tour-package",
    title: "5 NIGHTS / 6 DAYS - UDAIPUR + JODHPUR + JAISALMER",
    stay: "2 Nights Udaipur + 1 Night Jodhpur + 2 Nights Jaisalmer",
    route: "Pickup: Udaipur | Drop: Jaisalmer",
    includedKm: 1500,
    rates: [
      { vehicle: "Sedan", rate: 18000 },
      { vehicle: "Premium Sedan", rate: 21000 },
      { vehicle: "Innova Crysta", rate: 30000 },
      { vehicle: "Tempo Traveller - 12 Seater", rate: 42000 }
    ],
    subtitle: "From Royal Lakes to The Blue City & The Golden Thar Desert Dunes",
    metaTitle: "5 Nights 6 Days Udaipur Jodhpur Jaisalmer Tour Package | Yatree Destination",
    metaDescription: "Experience 5 Nights / 6 Days Rajasthan tour from Udaipur to Jodhpur & Jaisalmer. Includes Thar desert camel safari, Mehrangarh Fort, Golden Fort & Lake Pichola. 1500 km.",
    heroImage: "/places/kumbhalgarh.png",
    duration: "5 Nights / 6 Days",
    startingPrice: "₹18,000",
    routeSummary: "Udaipur (2N) → Kumbhalgarh / Ranakpur → Jodhpur (1N) → Jaisalmer & Sam Sand Dunes (2N) [Drop Jaisalmer]",
    highlights: [
      "Royal City of Lakes - City Palace, Pichola boat cruise, Saheliyon Ki Bari & Sajjangarh",
      "Jodhpur Blue City - Mehrangarh Fort, Jaswant Thada & royal clock tower market",
      "Golden City Jaisalmer - Sonar Qila (Living Golden Fort), Patwon Ki Haveli & Gadisar Lake",
      "Sam Sand Dunes Experience - Sunset camel safari, desert cultural folk music & starlit desert dunes",
      "1,500 KM extensive desert circuit with trusted chauffeur and comfortable AC cab"
    ],
    itinerary: [
      {
        day: 1,
        title: "Day 1: Arrival in Udaipur & Lake Pichola",
        desc: "Arrive at Udaipur. Chauffeur pickup and transfer to your hotel. Visit the grand City Palace and ancient Jagdish Temple. Enjoy an evening sunset boat cruise on Lake Pichola with views of Jag Mandir.",
        places: ["City Palace", "Jagdish Temple", "Lake Pichola", "Gangaur Ghat"]
      },
      {
        day: 2,
        title: "Day 2: Royal Gardens, Monsoon Palace & Cultural Show",
        desc: "Explore Saheliyon-Ki-Bari, Fateh Sagar Lake, and Sajjangarh Monsoon Palace perched atop the hill. Evening cultural folk dance and puppet show at Bagore Ki Haveli.",
        places: ["Saheliyon Ki Bari", "Fateh Sagar Lake", "Monsoon Palace", "Bagore Ki Haveli"]
      },
      {
        day: 3,
        title: "Day 3: Udaipur to Jodhpur via Kumbhalgarh / Ranakpur",
        desc: "Drive from Udaipur towards Jodhpur, visiting either Kumbhalgarh Fort or the magnificent Ranakpur Jain Temple. Arrive in Jodhpur by late afternoon and explore Sadar Bazaar. Overnight in Jodhpur.",
        places: ["Kumbhalgarh / Ranakpur", "Scenic Highway", "Clock Tower Market Jodhpur"]
      },
      {
        day: 4,
        title: "Day 4: Jodhpur Mehrangarh Fort to Jaisalmer",
        desc: "Visit the formidable Mehrangarh Fort and the marble memorial of Jaswant Thada. After lunch, begin the desert highway drive to the Golden City of Jaisalmer. Arrive and check into hotel. Overnight in Jaisalmer.",
        places: ["Mehrangarh Fort", "Jaswant Thada", "Thar Desert Highway", "Jaisalmer Arrival"]
      },
      {
        day: 5,
        title: "Day 5: Jaisalmer Golden Fort & Sam Sand Dunes",
        desc: "Tour the famous Jaisalmer Golden Fort (Sonar Qila), Patwon Ki Haveli, and serene Gadisar Lake. In the afternoon, head to Sam Sand Dunes for an exhilarating camel safari, desert sunset, and Rajasthani cultural evening.",
        places: ["Jaisalmer Fort", "Patwon Ki Haveli", "Gadisar Lake", "Sam Sand Dunes", "Camel Safari"]
      },
      {
        day: 6,
        title: "Day 6: Desert Sunrise, Kuldhara & Departure",
        desc: "Enjoy the peaceful desert sunrise. Visit the haunted abandoned village of Kuldhara and Tanot Mata route before your transfer to Jaisalmer Railway Station or Airport for departure.",
        places: ["Desert Sunrise", "Kuldhara Village", "Jaisalmer Airport / Railway Station Drop"]
      }
    ],
    inclusions: [
      "AC Vehicle for 6 days with experienced highway and desert chauffeur",
      "All intercity fuel, toll charges, state road taxes & parking fees",
      "Driver daily allowances, night charges & state permits",
      "Pickup in Udaipur and drop at Jaisalmer Station / Airport",
      "Up to 1,500 KM included total journey"
    ],
    exclusions: [
      "Hotel & desert camp accommodations",
      "Meals, camel rides, quad biking & monument entry fees",
      "Personal expenses and driver tips"
    ],
    faqs: [
      { q: "Is the desert highway to Jaisalmer in good condition?", a: "Yes, the highways from Udaipur to Jodhpur and onwards to Jaisalmer are excellent multi-lane roads, ensuring a smooth and scenic journey." },
      { q: "Can we be dropped at Jaisalmer railway station or airport?", a: "Yes, airport or railway station drop in Jaisalmer is included in this package without extra charge." },
      { q: "Which phone number should I contact for this booking?", a: "Call our dedicated tour coordinator directly at +91 63674 66426 or tap WhatsApp for a detailed quote." }
    ]
  },
  {
    id: "pkg-6",
    slug: "6-nights-7-days-rajasthan-tour-package",
    title: "6 NIGHTS / 7 DAYS - GRAND RAJASTHAN JOURNEY",
    stay: "2 Nights Udaipur + 1 Night Jodhpur + 1 Night Jaisalmer + 2 Nights Jaipur",
    route: "Pickup: Udaipur | Drop: Jaipur",
    includedKm: 2100,
    rates: [
      { vehicle: "Sedan", rate: 25000 },
      { vehicle: "Premium Sedan", rate: 29500 },
      { vehicle: "Innova Crysta", rate: 42000 },
      { vehicle: "Tempo Traveller - 12 Seater", rate: 59000 }
    ],
    subtitle: "The Ultimate Royal Rajasthan Circuit: Udaipur → Jodhpur → Jaisalmer → Jaipur",
    metaTitle: "6 Nights 7 Days Grand Rajasthan Tour Package Taxi | Yatree Destination",
    metaDescription: "Experience the Grand Rajasthan tour package across Udaipur, Jodhpur, Jaisalmer and Jaipur. Private luxury taxi with verified chauffeur, 2100 km included. Book now.",
    heroImage: "/places/gangaur-ghat.jpg",
    duration: "6 Nights / 7 Days",
    startingPrice: "₹25,000",
    routeSummary: "Udaipur (2N) → Jodhpur (1N) → Jaisalmer (1N) → Pushkar / Ajmer → Jaipur (2N) [Drop Jaipur]",
    highlights: [
      "4 Legendary Cities - Udaipur (Lakes), Jodhpur (Blue City), Jaisalmer (Desert) & Jaipur (Pink City)",
      "Iconic UNESCO Forts - Mehrangarh Fort, Jaisalmer Golden Fort, Amber Fort & City Palace",
      "Thar Desert Experience - Golden sand dunes, camel ride & traditional folk culture",
      "Pink City Grandeur - Hawa Mahal, Jantar Mantar, Jal Mahal & Nahargarh Fort sunset",
      "2,100 KM of seamless intercity luxury private chauffeur travel"
    ],
    itinerary: [
      {
        day: 1,
        title: "Day 1: Royal Welcome to Udaipur",
        desc: "Meet your private chauffeur upon arrival in Udaipur. Check into hotel and explore City Palace, Jagdish Temple, and enjoy a picturesque sunset boat ride across Lake Pichola.",
        places: ["City Palace", "Jagdish Temple", "Lake Pichola Boat Cruise"]
      },
      {
        day: 2,
        title: "Day 2: Udaipur Lakes & Hilltop Palaces",
        desc: "Visit Saheliyon-Ki-Bari, Fateh Sagar Lake, and drive up to the Monsoon Palace (Sajjangarh) for panoramic sunset views across the Aravalli hills. Evening shopping in the old town.",
        places: ["Saheliyon Ki Bari", "Fateh Sagar Lake", "Monsoon Palace", "Bapu Bazaar"]
      },
      {
        day: 3,
        title: "Day 3: Udaipur to Jodhpur Sun City",
        desc: "Scenic morning highway drive to Jodhpur via Ranakpur Jain Temple. Arrive in Jodhpur and visit Mehrangarh Fort, Jaswant Thada, and the lively blue city lanes. Overnight stay in Jodhpur.",
        places: ["Ranakpur Marble Temple", "Mehrangarh Fort", "Jaswant Thada", "Clock Tower"]
      },
      {
        day: 4,
        title: "Day 4: Jodhpur to Jaisalmer & Thar Desert",
        desc: "Drive through the golden desert terrain to Jaisalmer. Visit the living Golden Fort (Sonar Qila) and Patwon Ki Haveli, then head directly to Sam Sand Dunes for an evening camel safari and desert camp.",
        places: ["Sonar Qila", "Patwon Ki Haveli", "Sam Sand Dunes", "Desert Camp"]
      },
      {
        day: 5,
        title: "Day 5: Jaisalmer to Pink City Jaipur via Pushkar",
        desc: "Journey across the heart of Rajasthan towards Jaipur, stopping at holy Pushkar for Brahma Temple and the sacred lake. Arrive in Jaipur by evening and check into hotel. Overnight in Jaipur.",
        places: ["Pushkar Lake & Brahma Temple", "Highway Cruising", "Jaipur Arrival"]
      },
      {
        day: 6,
        title: "Day 6: Full Day Jaipur Pink City Grandeur",
        desc: "Explore the magnificent Amber Fort with panoramic views, see the water-surrounded Jal Mahal, visit the City Palace of Jaipur, astronomical Jantar Mantar, and the facade of Hawa Mahal.",
        places: ["Amber Fort", "Jal Mahal", "City Palace Jaipur", "Hawa Mahal", "Jantar Mantar"]
      },
      {
        day: 7,
        title: "Day 7: Nahargarh Fort, Local Bazaars & Departure",
        desc: "Visit Nahargarh Fort for a breathtaking birds-eye view of Jaipur city. Enjoy afternoon souvenir shopping in Johari Bazaar before chauffeur drop-off at Jaipur Airport or Railway Station.",
        places: ["Nahargarh Fort", "Johari Bazaar", "Jaipur Airport / Railway Station Drop"]
      }
    ],
    inclusions: [
      "AC Vehicle for all 7 days with dedicated professional intercity chauffeur",
      "All intercity fuel, state border taxes, toll gates & vehicle parking fees",
      "Driver daily allowances, night charges & all route permits",
      "Pickup in Udaipur and final drop at Jaipur Airport or Railway Station",
      "Up to 2,100 KM total included travel"
    ],
    exclusions: [
      "Hotel accommodations & meals throughout the 7 days",
      "Monument tickets, elephant/jeep rides at Amber Fort & guide charges",
      "Desert camp activities & personal purchases"
    ],
    faqs: [
      { q: "Can the drop-off be at Jaipur Airport or Railway Station?", a: "Yes, drop-off at Jaipur International Airport (JAI) or Jaipur Junction Railway Station is completely included." },
      { q: "Can we modify the order of cities or add extra days?", a: "Yes! Yatree Destination specializes in 100% customizable private tours. Call +91 63674 66426 to customize this circuit." },
      { q: "How do I confirm this 7-day tour?", a: "Contact our tour manager directly by calling +91 63674 66426 or tapping WhatsApp for an immediate confirmed quote." }
    ]
  }
];
