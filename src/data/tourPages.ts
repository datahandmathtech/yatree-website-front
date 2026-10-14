export interface TourRate {
  vehicle: string;
  capacity: string;
  price: string;
  idealFor: string;
}

export interface TourItineraryItem {
  time?: string;
  title: string;
  desc: string;
}

export interface TourFaq {
  q: string;
  a: string;
}

export interface TourPageData {
  slug: string;
  serviceName: string;
  h1: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  duration: string;
  distance: string;
  startingPrice: string;
  routeSummary: string;
  highlights: string[];
  itinerary: TourItineraryItem[];
  rates: TourRate[];
  inclusions: string[];
  exclusions: string[];
  faqs: TourFaq[];
}

export const TOUR_PAGES_DATA: Record<string, TourPageData> = {
  "udaipur-sightseeing-8-hours-taxi": {
    slug: "udaipur-sightseeing-8-hours-taxi",
    serviceName: "City Local Sightseeing (8 Hours)",
    h1: "Udaipur Local Sightseeing Taxi Service (8 Hours / 80 Km Tour)",
    subtitle: "8 Hours or 80 Km Royal City Palace, Lake Pichola & Cultural Heritage Day Tour",
    metaTitle: "Udaipur Sightseeing Taxi 8 Hours 80 Km | City Palace & Lake Pichola Tour",
    metaDescription: "Book 8 hours / 80 km local sightseeing taxi in Udaipur with Yatree Destination. Explore City Palace, Lake Pichola, Jagdish Temple, Saheliyon Ki Bari & Fateh Sagar. Sedan ₹2,500, Innova ₹3,500.",
    heroImage: "/places/city-palace.jpg",
    duration: "8 Hours / 80 Km",
    distance: "80 Km Included in Package",
    startingPrice: "₹2,500",
    routeSummary: "City Palace → Jagdish Temple → Lake Pichola → Saheliyon Ki Bari → Fateh Sagar Lake → Karni Mata Ropeway",
    highlights: [
      "City Palace Complex - The largest royal palace in Rajasthan overlooking Lake Pichola",
      "Jagdish Temple - 17th-century Indo-Aryan temple dedicated to Lord Vishnu",
      "Saheliyon Ki Bari - Historic royal garden with marble elephant fountains and lotus pools",
      "Fateh Sagar Lake & Moti Magri - Scenic waterfront promenade and Maharana Pratap memorial",
      "Karni Mata Ropeway - Panoramic aerial views of Udaipur city and surrounding lakes"
    ],
    itinerary: [
      { time: "09:00 AM", title: "Hotel Pickup & City Palace", desc: "Your chauffeur arrives at your hotel. Start with the iconic City Palace complex, royal museum, and vintage crystal gallery." },
      { time: "11:30 AM", title: "Jagdish Temple & Old City Walk", desc: "Visit the intricately carved Jagdish Temple and explore vibrant artisan silver and handicraft streets." },
      { time: "01:00 PM", title: "Rajasthani Lunch Break", desc: "Enjoy authentic Dal Baati Churma or multi-cuisine lunch at a lakeside restaurant recommended by your driver." },
      { time: "02:30 PM", title: "Saheliyon Ki Bari", desc: "Stroll through the lush royal gardens designed for royal maidens with natural gravity-fed fountains." },
      { time: "04:00 PM", title: "Fateh Sagar Lake & Moti Magri", desc: "Enjoy the serene views of Fateh Sagar Lake, Nehru Park, and the hilltop memorial of Maharana Pratap." },
      { time: "05:00 PM", title: "Sunset at Lake Pichola & Hotel Drop", desc: "End your 8-hour tour watching a golden sunset at Ambrai Ghat or Karni Mata ropeway before comfortable drop-off." }
    ],
    rates: [
      { vehicle: "Maruti Dzire / Toyota Etios", capacity: "4 Passengers + Chauffeur", price: "₹2,500", idealFor: "Couples, Solo Travelers & Small Families" },
      { vehicle: "Toyota Innova Crysta (Luxury SUV)", capacity: "6-7 Passengers + Chauffeur", price: "₹3,500", idealFor: "Families, Group of Friends & VIP Comfort" },
      { vehicle: "Force Tempo Traveller (12 Seater)", capacity: "12 Passengers + Chauffeur", price: "₹6,500", idealFor: "Large Family Groups & Wedding Guests" }
    ],
    inclusions: [
      "Air-conditioned clean & sanitized vehicle for 8 Hours or 80 Km",
      "Dedicated professional chauffeur in uniform",
      "Fuel costs, toll taxes & parking fees included",
      "Doorstep pickup and drop anywhere in Udaipur city",
      "Flexible schedule to explore at your own pace"
    ],
    exclusions: [
      "Monument entry tickets and boat ride charges",
      "Meals, beverages, and personal shopping expenses",
      "Extra charges beyond 8 Hours (₹150/hr for Sedan, ₹200/hr for SUV)",
      "Extra charges beyond 80 Km (₹12/km for Sedan, ₹17/km for SUV)"
    ],
    faqs: [
      { q: "What is included in the 8 hours / 80 km sightseeing taxi?", a: "The package includes 8 hours of chauffeur-driven car service covering up to 80 km inside Udaipur. All fuel, driver allowances, and parking fees are fully covered." },
      { q: "Can we customize the places we want to visit?", a: "Yes, absolutely! The itinerary is 100% customizable. You can choose which monuments, lakes, or shopping spots you prefer to visit." },
      { q: "What if our tour exceeds 8 hours or 80 km?", a: "Overtime is charged transparently: ₹150/hr for Sedan and ₹200/hr for Innova Crysta. Extra kilometers are billed at ₹12/km for Sedan and ₹17/km for Innova." },
      { q: "How do I book this sightseeing cab?", a: "You can book instantly using our booking form above, or call/WhatsApp us at +91 76270 13579 for instant confirmation." }
    ]
  },

  "udaipur-sightseeing-12-hours-taxi": {
    slug: "udaipur-sightseeing-12-hours-taxi",
    serviceName: "City Local Sightseeing (12 Hours)",
    h1: "Udaipur Full Day Sightseeing Taxi Service (12 Hours / 120 Km Tour)",
    subtitle: "12 Hours or 120 Km Grand Udaipur City, Monsoon Palace & Cultural Folk Dance Tour",
    metaTitle: "Udaipur Full Day Sightseeing Taxi 12 Hours 120 Km | Grand City & Palace Tour",
    metaDescription: "Book full day 12 hours / 120 km sightseeing taxi in Udaipur. Covers City Palace, Sajjangarh Monsoon Palace, Lake Pichola, Shilpgram, Bagore Ki Haveli show & Fateh Sagar. Sedan ₹3,000, Innova ₹4,000.",
    heroImage: "/places/sajjangarh.jpg",
    duration: "12 Hours / 120 Km",
    distance: "120 Km Included in Package",
    startingPrice: "₹3,000",
    routeSummary: "City Palace → Jagdish Temple → Saheliyon Ki Bari → Shilpgram → Sajjangarh Monsoon Palace → Bagore Ki Haveli Dance Show",
    highlights: [
      "All classic Udaipur attractions including City Palace, Jagdish Temple & Saheliyon Ki Bari",
      "Sajjangarh Monsoon Palace - High-altitude hill fort with panoramic views of all Udaipur lakes",
      "Shilpgram Cultural Village - Traditional rural tribal arts and live craftsman demonstrations",
      "Bagore Ki Haveli Dharohar Dance - Evening world-famous Rajasthani folk dance & puppet show",
      "Scenic sunset drive around Fateh Sagar Lake & Rani Road"
    ],
    itinerary: [
      { time: "09:00 AM", title: "Morning Pickup & City Palace", desc: "Hotel pickup by private chauffeur. Tour the grand City Palace and Lake Pichola waterfront." },
      { time: "11:30 AM", title: "Jagdish Temple & Saheliyon Ki Bari", desc: "Marvel at ancient stone carvings and stroll through royal fountains and gardens." },
      { time: "01:30 PM", title: "Lunch at Heritage Restaurant", desc: "Enjoy traditional Rajasthani thali or continental lunch." },
      { time: "03:00 PM", title: "Shilpgram Craft Village", desc: "Explore the living ethnographic museum of Western India's tribal lifestyle and crafts." },
      { time: "04:30 PM", title: "Sajjangarh Monsoon Palace Sunset", desc: "Ascend the Aravalli hilltop to witness the sunset over the lakes from Monsoon Palace." },
      { time: "06:30 PM", title: "Bagore Ki Haveli Folk Show", desc: "Attend the famous 7:00 PM Dharohar cultural performance featuring Rajasthani folk dances." },
      { time: "08:30 PM", title: "Dinner / Hotel Return Drop", desc: "Drop-off at your chosen dinner venue or hotel after an unforgettable 12-hour experience." }
    ],
    rates: [
      { vehicle: "Maruti Dzire / Toyota Etios", capacity: "4 Passengers + Chauffeur", price: "₹3,000", idealFor: "Couples & Small Families" },
      { vehicle: "Toyota Innova Crysta (Luxury SUV)", capacity: "6-7 Passengers + Chauffeur", price: "₹4,000", idealFor: "Family Groups & Ultimate Comfort" },
      { vehicle: "Force Tempo Traveller (12 Seater)", capacity: "12 Passengers + Chauffeur", price: "₹7,500", idealFor: "Large Groups & Family Reunions" }
    ],
    inclusions: [
      "Air-conditioned vehicle for 12 continuous hours or 120 Km",
      "Experienced local chauffeur who knows all scenic routes",
      "All vehicle fuel, tolls, and city parking fees",
      "Complimentary pickup and drop-off anywhere within municipal limits"
    ],
    exclusions: [
      "Entry tickets, Sajjangarh sanctuary shuttle fee, and Bagore Ki Haveli show tickets",
      "Personal meals, snacks, and shopping"
    ],
    faqs: [
      { q: "Why choose 12 hours instead of 8 hours?", a: "The 12-hour tour gives you ample time to visit the hilltop Monsoon Palace for sunset and attend the 7 PM Bagore Ki Haveli dance show without rushing." },
      { q: "Will the driver wait during dinner and cultural shows?", a: "Yes, your dedicated driver and car remain at your service throughout the entire 12-hour period." }
    ]
  },

  "udaipur-to-nathdwara-taxi": {
    slug: "udaipur-to-nathdwara-taxi",
    serviceName: "Eklingji & Nathdwara Day Tour",
    h1: "Taxi from Udaipur to Eklingji & Nathdwara Shrinathji Temple Tour",
    subtitle: "4 to 6 Hours Sacred Pilgrimage | Shrinathji Darshan, Statue of Belief & 1300-Yr Shiva Temple",
    metaTitle: "Udaipur to Nathdwara & Eklingji Taxi | Shrinathji Darshan Same Day Tour",
    metaDescription: "Hire private cab from Udaipur to Nathdwara Shrinathji Temple and Eklingji Mahadev Temple. 4-6 hours comfortable spiritual tour with verified chauffeur. Sedan ₹3,000, Innova ₹4,000.",
    heroImage: "/places/jagdish-temple.jpg",
    duration: "4 to 6 Hours",
    distance: "110 Km Roundtrip",
    startingPrice: "₹3,000",
    routeSummary: "Udaipur → Eklingji Mahadev Temple → Nathdwara Shrinathji Temple → Statue of Belief (Vishwas Swaroopam) → Udaipur",
    highlights: [
      "Shrinathji Temple Nathdwara - Holy 17th-century Vaishnavite shrine of 7-year-old Lord Krishna",
      "Statue of Belief (Vishwas Swaroopam) - World's tallest Lord Shiva statue (369 feet)",
      "Eklingji Temple Complex - 108 stone shrines dating back to 734 AD dedicated to Lord Shiva",
      "Famous Nathdwara culinary treats - Authentic Rabdi, Thandai, and spiced tea"
    ],
    itinerary: [
      { time: "08:00 AM", title: "Departure from Udaipur", desc: "Comfortable morning pickup from your hotel heading towards NH-58." },
      { time: "08:45 AM", title: "Eklingji Temple Darshan", desc: "Visit the sacred 4-faced black marble Shiva idol and ancient stone architecture." },
      { time: "10:30 AM", title: "Nathdwara Shrinathji Darshan", desc: "Arrive at Nathdwara in time for sacred Rajbhog / Gwal darshan." },
      { time: "12:30 PM", title: "Statue of Belief & Nathdwara Sweets", desc: "Visit the towering 369-ft Shiva statue and sample hot Rabdi and local delicacies." },
      { time: "02:00 PM", title: "Return Journey to Udaipur", desc: "Smooth highway drive back to Udaipur with hotel drop-off." }
    ],
    rates: [
      { vehicle: "Maruti Dzire / Toyota Etios", capacity: "4 Passengers", price: "₹3,000", idealFor: "Small Families & Pilgrims" },
      { vehicle: "Toyota Innova Crysta", capacity: "6-7 Passengers", price: "₹4,000", idealFor: "Families with Elderly Members" },
      { vehicle: "Tempo Traveller (12 Seater)", capacity: "12 Passengers", price: "₹9,000", idealFor: "Large Devotional Groups" }
    ],
    inclusions: [
      "Roundtrip transfer from Udaipur to Eklingji and Nathdwara",
      "Chauffeur knowledgeable about temple darshan timings and footwear facilities",
      "Toll charges, parking fees, and fuel costs included"
    ],
    exclusions: [
      "VIP temple darshan passes or puja charges",
      "Food and personal offerings"
    ],
    faqs: [
      { q: "What is the best time for Shrinathji darshan?", a: "Morning Mangala (5:30 AM), Rajbhog (11:15 AM - 12:00 PM), and evening Sandhya (5:00 PM) are prime darshan times. We time the pickup according to your preferred slot." },
      { q: "Is leather allowed inside the temple?", a: "No, leather items (belts, wallets, shoes) and mobile phones are strictly prohibited inside the main sanctum. Locker facilities are available." }
    ]
  },

  "udaipur-to-haldighati-taxi": {
    slug: "udaipur-to-haldighati-taxi",
    serviceName: "Eklingji, Nathdwara & Haldighati",
    h1: "Udaipur to Eklingji, Nathdwara & Haldighati Day Tour Taxi",
    subtitle: "6 Hours Classic Day Tour | Heroic Battleground, Maharana Pratap Museum & Holy Shrines",
    metaTitle: "Udaipur to Haldighati, Nathdwara & Eklingji Taxi Tour | Heritage & Pilgrimage Cab",
    metaDescription: "Same day taxi from Udaipur to Haldighati, Nathdwara & Eklingji. Visit Maharana Pratap Museum, Chetak Samadhi, Shrinathji Mandir & Shiva Temple. Sedan ₹3,500, Innova ₹4,500.",
    heroImage: "/places/haldighati.png",
    duration: "6 Hours",
    distance: "140 Km Roundtrip",
    startingPrice: "₹3,500",
    routeSummary: "Udaipur → Eklingji Temple → Nathdwara Shrinathji → Haldighati Pass & Museum → Chetak Samadhi → Udaipur",
    highlights: [
      "Haldighati Mountain Pass - Legendary 1576 battleground of Maharana Pratap and Mughal forces",
      "Maharana Pratap National Museum - Interactive light & sound show, weapons gallery & dioramas",
      "Chetak Samadhi - Memorial commemorating Maharana Pratap's loyal and valiant horse Chetak",
      "Shrinathji Temple Nathdwara - Holy pilgrimage stop for divine blessings",
      "Eklingji Temple - Historic ruling deity complex of Mewar rulers"
    ],
    itinerary: [
      { time: "08:30 AM", title: "Pickup from Udaipur", desc: "Start along the scenic countryside route towards Kailashpuri." },
      { time: "09:15 AM", title: "Eklingji Temple", desc: "Explore the magnificent pillared temple dedicated to Lord Shiva." },
      { time: "11:00 AM", title: "Nathdwara Shrinathji", desc: "Participate in holy darshan and explore traditional Pichwai painting shops." },
      { time: "01:00 PM", title: "Haldighati Battlefield & Museum", desc: "Walk through the yellow turmeric-colored mountain pass, Chetak Samadhi, and the historical museum." },
      { time: "03:30 PM", title: "Return to Udaipur", desc: "Relaxing drive back through scenic hills with hotel drop-off." }
    ],
    rates: [
      { vehicle: "Maruti Dzire / Toyota Etios", capacity: "4 Passengers", price: "₹3,500", idealFor: "Couples & Small Families" },
      { vehicle: "Toyota Innova Crysta", capacity: "6-7 Passengers", price: "₹4,500", idealFor: "Family Groups" },
      { vehicle: "Tempo Traveller (12 Seater)", capacity: "12 Passengers", price: "₹9,000", idealFor: "Family & Educational Groups" }
    ],
    inclusions: [
      "AC private cab for all three destinations",
      "Fuel, driver allowance, tolls, and parking",
      "Hotel pickup and drop"
    ],
    exclusions: [
      "Museum entry tickets",
      "Meals and refreshments"
    ],
    faqs: [
      { q: "Is this tour suitable for senior citizens?", a: "Yes, our drivers drop guests very close to temple gates and museum entrances to minimize walking." }
    ]
  },

  "udaipur-to-ranakpur-taxi": {
    slug: "udaipur-to-ranakpur-taxi",
    serviceName: "Ranakpur Jain Temple Tour",
    h1: "Taxi from Udaipur to Ranakpur Jain Temple Day Tour",
    subtitle: "6 Hours Architectural Marvel | 1444 Intricately Carved Marble Pillars in Aravalli Valley",
    metaTitle: "Udaipur to Ranakpur Taxi | 1444 Pillars Jain Temple Day Tour Cab",
    metaDescription: "Hire luxury taxi from Udaipur to Ranakpur Jain Temple. Discover 1444 intricately carved marble pillars, Surya Temple & scenic Aravalli mountain drive. Sedan ₹3,500, Innova ₹4,500.",
    heroImage: "/places/ranakpur.png",
    duration: "6 Hours",
    distance: "190 Km Roundtrip",
    startingPrice: "₹3,500",
    routeSummary: "Udaipur → Aravalli Ghat Section → Ranakpur Chaumukha Temple → Surya Temple → Udaipur",
    highlights: [
      "Chaumukha Mandir - 15th-century marvel supported by 1,444 uniquely carved marble pillars",
      "Architectural Wonder - No two marble pillars have identical carvings across the entire complex",
      "Scenic Aravalli Ghats - Breathtaking mountain pass drive through dense green deciduous forests",
      "Surya Narayan Temple - Ancient sun temple featuring thousands of stone chariot carvings"
    ],
    itinerary: [
      { time: "09:00 AM", title: "Udaipur Hotel Departure", desc: "Enjoy a scenic drive through the Aravalli hills and rural villages of Rajasthan." },
      { time: "11:00 AM", title: "Ranakpur Jain Temple Exploration", desc: "Witness the mesmerizing marble carving craftsmanship, tranquil courtyards, and light-filtering dome ceilings." },
      { time: "01:30 PM", title: "Lunch at Nature Resort", desc: "Relax and enjoy pure vegetarian Rajasthani or Indian lunch at nearby garden restaurants." },
      { time: "03:00 PM", title: "Return Drive to Udaipur", desc: "Comfortable drive back through the mountain pass arriving in Udaipur by late afternoon." }
    ],
    rates: [
      { vehicle: "Maruti Dzire / Toyota Etios", capacity: "4 Passengers", price: "₹3,500", idealFor: "Couples & Photographers" },
      { vehicle: "Toyota Innova Crysta", capacity: "6-7 Passengers", price: "₹4,500", idealFor: "Families Seeking Premium Hill Drive" },
      { vehicle: "Tempo Traveller (12 Seater)", capacity: "12 Passengers", price: "₹9,000", idealFor: "Group Excursions" }
    ],
    inclusions: ["All highway tolls, hill permits & parking", "Air-conditioned car with expert mountain driver", "Direct hotel pickup and return"],
    exclusions: ["Temple entry/camera fees and audio guides", "Food and beverages"],
    faqs: [
      { q: "How long does it take to reach Ranakpur from Udaipur?", a: "It takes approximately 2 to 2.5 hours each way covering 95 km through scenic ghat roads." },
      { q: "Is there a dress code for Ranakpur Temple?", a: "Yes, visitors must have shoulders and knees covered. Leather articles (shoes, belts, wallets) must be deposited outside." }
    ]
  },

  "udaipur-to-kumbhalgarh-taxi": {
    slug: "udaipur-to-kumbhalgarh-taxi",
    serviceName: "Kumbhalgarh Fort Day Tour",
    h1: "Taxi from Udaipur to Kumbhalgarh Fort Historical Day Tour",
    subtitle: "6 to 8 Hours Epic Heritage Excursion | The Great Wall of India & Cloud Palace Badal Mahal",
    metaTitle: "Udaipur to Kumbhalgarh Taxi | Great Wall of India Day Tour Cab",
    metaDescription: "Book taxi from Udaipur to Kumbhalgarh Fort. Explore the world's second-longest continuous wall (36 km), Badal Mahal & birthplace of Maharana Pratap. Sedan ₹3,500, Innova ₹4,500.",
    heroImage: "/places/kumbhalgarh.png",
    duration: "6 to 8 Hours",
    distance: "200 Km Roundtrip",
    startingPrice: "₹3,500",
    routeSummary: "Udaipur → Aravalli Forest Sanctuary Route → Kumbhalgarh Fort → Badal Mahal → Udaipur",
    highlights: [
      "The Great Wall of India - 36-kilometer stone wall, the 2nd longest continuous wall in the world after the Great Wall of China",
      "Badal Mahal (Palace of Clouds) - Highest point of the fort with 360-degree views of Thar desert border",
      "Birthplace of Maharana Pratap - Iconic heroic birthplace steeped in Mewar pride",
      "Over 360 Ancient Temples - Ancient Hindu and Jain shrines within the citadel walls",
      "Evening Light & Sound Show - Spectacular illumination of fort ramparts (optional for afternoon bookings)"
    ],
    itinerary: [
      { time: "09:00 AM", title: "Morning Pickup from Udaipur", desc: "Depart Udaipur through lush Aravalli countryside roads." },
      { time: "11:30 AM", title: "Arrive at Kumbhalgarh Citadel", desc: "Climb through Ram Pol and explore the monumental ramparts, temples, and weapon towers." },
      { time: "01:30 PM", title: "Badal Mahal & Lunch", desc: "Reach the cloud palace and enjoy authentic Rajasthani lunch at heritage resorts nearby." },
      { time: "03:30 PM", title: "Scenic Return Drive", desc: "Drive back to Udaipur, arriving by evening around 5:30 PM." }
    ],
    rates: [
      { vehicle: "Maruti Dzire / Toyota Etios", capacity: "4 Passengers", price: "₹3,500", idealFor: "Small Families & History Lovers" },
      { vehicle: "Toyota Innova Crysta", capacity: "6-7 Passengers", price: "₹4,500", idealFor: "Comfortable Mountain Terrain Travel" },
      { vehicle: "Tempo Traveller (12 Seater)", capacity: "12 Passengers", price: "₹9,000", idealFor: "Family Groups & Heritage Trekkers" }
    ],
    inclusions: ["All highway tolls, forest entry & parking", "Air-conditioned car with mountain-expert chauffeur", "Door-to-door transfers"],
    exclusions: ["Fort entrance tickets and evening light/sound show tickets", "Meals and personal expenses"],
    faqs: [
      { q: "Is the road to Kumbhalgarh safe?", a: "Yes, our drivers are specifically trained for the Aravalli ghats with well-maintained suspension and braking systems." },
      { q: "Can we combine Kumbhalgarh and Ranakpur in one day?", a: "Yes, we offer a combined Kumbhalgarh + Ranakpur full day tour package starting at ₹4,500 for Sedan." }
    ]
  },

  "udaipur-to-chittorgarh-taxi": {
    slug: "udaipur-to-chittorgarh-taxi",
    serviceName: "Chittorgarh Fort Day Tour",
    h1: "Taxi from Udaipur to Chittorgarh Fort Heritage Day Tour",
    subtitle: "6 to 8 Hours World Heritage Citadel | Vijay Stambh, Kirti Stambh, Rani Padmini Palace & Meera Temple",
    metaTitle: "Udaipur to Chittorgarh Taxi | Largest Fort in India Same Day Tour Cab",
    metaDescription: "Premium taxi from Udaipur to Chittorgarh Fort UNESCO site. Visit Vijay Stambh, Kirti Stambh, Rani Padmini Palace, Gaumukh Reservoir & Meera Temple. Sedan ₹4,000, Innova ₹5,000.",
    heroImage: "/places/chittorgarh.png",
    duration: "6 to 8 Hours",
    distance: "240 Km Roundtrip",
    startingPrice: "₹4,000",
    routeSummary: "Udaipur → NH-27 Express Highway → Chittorgarh Fort Plateau → Vijay Stambh → Padmini Palace → Udaipur",
    highlights: [
      "Largest Fort in India - Sprawling across 700 acres atop a 180-meter high hill",
      "Vijay Stambh (Tower of Victory) - 9-storeyed 1448 AD tower adorned with Hindu deity carvings",
      "Rani Padmini Palace - Historic water palace surrounded by lotus moat",
      "Gaumukh Kund - Sacred natural water spring carved like a cow's mouth",
      "Meera Bai Temple - 16th-century temple where saint-poetess Meera worshipped Lord Krishna"
    ],
    itinerary: [
      { time: "08:30 AM", title: "Depart Udaipur on NH-27", desc: "Smooth 4-lane highway drive passing scenic Mewar plains." },
      { time: "10:30 AM", title: "Ascend Chittorgarh Fort", desc: "Enter through 7 grand fortified gates (Pol) up to the central plateau." },
      { time: "11:00 AM", title: "Vijay Stambh & Kumbha Palace", desc: "Climb the tower of victory and walk through ancient royal ruins." },
      { time: "01:00 PM", title: "Padmini Palace & Meera Temple", desc: "Discover historic water pavilions and the devotional temple of Meera Bai." },
      { time: "02:30 PM", title: "Lunch Break", desc: "Enjoy lunch in Chittorgarh city." },
      { time: "03:30 PM", title: "Return to Udaipur", desc: "Relaxing highway drive arriving back at your Udaipur hotel by 5:30 PM." }
    ],
    rates: [
      { vehicle: "Maruti Dzire / Toyota Etios", capacity: "4 Passengers", price: "₹4,000", idealFor: "Couples & Small Families" },
      { vehicle: "Toyota Innova Crysta", capacity: "6-7 Passengers", price: "₹5,000", idealFor: "Highway Cruising & Family Comfort" },
      { vehicle: "Tempo Traveller (12 Seater)", capacity: "12 Passengers", price: "₹9,500", idealFor: "Large Family & Tour Groups" }
    ],
    inclusions: ["All 4-lane highway tolls, parking & fuel charges", "Car and chauffeur with drive-inside fort access", "Door-to-door pickup and drop"],
    exclusions: ["Monument entry fee and authorized guide fees", "Meals and personal shopping"],
    faqs: [
      { q: "Can cars go inside Chittorgarh Fort?", a: "Yes, our taxi drives directly inside the fort complex to all monument points, so you don't have to walk long distances across the 700-acre plateau." },
      { q: "How long is the travel time to Chittorgarh?", a: "Thanks to the smooth NH-27 four-lane highway, it takes only about 1.5 to 2 hours each way." }
    ]
  },

  "udaipur-to-mount-abu-taxi": {
    slug: "udaipur-to-mount-abu-taxi",
    serviceName: "Mount Abu Same Day Tour",
    h1: "Taxi from Udaipur to Mount Abu Same Day Tour",
    subtitle: "10 Hours Hill Station Tour | Dilwara Marble Temples, Nakki Lake Boating & Sunset Point",
    metaTitle: "Udaipur to Mount Abu Taxi | Rajasthan Hill Station Same Day Cab Tour",
    metaDescription: "Book same day taxi tour from Udaipur to Mount Abu. Visit famous Dilwara Jain Temples, Nakki Lake boating, Guru Shikhar & Sunset Point. Sedan ₹6,000, Innova ₹8,000.",
    heroImage: "/places/explore-hero.png",
    duration: "10 to 12 Hours",
    distance: "330 Km Roundtrip",
    startingPrice: "₹6,000",
    routeSummary: "Udaipur → Pindwara Highway → Mount Abu Ghat Road → Dilwara Temples → Nakki Lake → Sunset Point → Udaipur",
    highlights: [
      "Dilwara Jain Temples - World's finest marble craftsmanship dating between the 11th and 13th centuries",
      "Nakki Lake - Picturesque mountain lake, boating and scenic promenade",
      "Toad Rock - Giant natural rock formation shaped like a toad with panoramic views",
      "Sunset Point & Honeymoon Point - Spectacular dusk views over lush Aravalli valleys",
      "Guru Shikhar (Optional) - Highest peak of Rajasthan at 1,722 meters above sea level"
    ],
    itinerary: [
      { time: "07:30 AM", title: "Early Morning Udaipur Departure", desc: "Enjoy an early start through lush valley roads and tunnels towards Mount Abu." },
      { time: "10:30 AM", title: "Arrive at Mount Abu & Dilwara Temples", desc: "Spend 2 hours in awe of the unmatched translucent marble ceiling carvings at Dilwara." },
      { time: "01:00 PM", title: "Lunch by Nakki Lake", desc: "Dine at popular hill station restaurants and cafes." },
      { time: "02:30 PM", title: "Boating & Toad Rock Viewpoint", desc: "Enjoy boat rides on Nakki Lake and take photographs from scenic cliff viewpoints." },
      { time: "04:30 PM", title: "Sunset Point / Honeymoon Point", desc: "Watch the golden sun dip below the mountain ranges." },
      { time: "06:00 PM", title: "Return Drive to Udaipur", desc: "Comfortable night highway drive returning to Udaipur by 9:00 PM." }
    ],
    rates: [
      { vehicle: "Maruti Dzire / Toyota Etios", capacity: "4 Passengers", price: "₹6,000", idealFor: "Couples & Day Trippers" },
      { vehicle: "Toyota Innova Crysta", capacity: "6-7 Passengers", price: "₹8,000", idealFor: "Families Travelling Hill Ghats in Luxury" },
      { vehicle: "Tempo Traveller (12 Seater)", capacity: "12 Passengers", price: "₹12,000", idealFor: "Large Groups & Corporate Teams" }
    ],
    inclusions: ["All highway tolls, hill municipality taxes & parking", "Specialized hill-station experienced chauffeur", "Pickup and drop at your Udaipur hotel"],
    exclusions: ["Boat ride fees and monument tickets", "Meals and personal shopping"],
    faqs: [
      { q: "Is a same-day trip from Udaipur to Mount Abu feasible?", a: "Yes, very feasible! Leaving Udaipur at 7:30 AM gives you a full 6 to 7 hours in Mount Abu before returning comfortably by dinner time." },
      { q: "Can we book an outstation overnight stay in Mount Abu?", a: "Yes! If you wish to stay overnight in Mount Abu, we offer 2-day roundtrip packages as well. Call +91 76270 13579 for custom itineraries." }
    ]
  },

  "udaipur-railway-station-taxi": {
    slug: "udaipur-railway-station-taxi",
    serviceName: "Railway Station Pick & Drop",
    h1: "Udaipur Railway Station Taxi Service (City Station & Rana Pratap Nagar)",
    subtitle: "24/7 Professional Chauffeur Transfers at Udaipur City (UDZ) & Rana Pratap Nagar (RPZ)",
    metaTitle: "Udaipur Railway Station Taxi Service | 24/7 Pickup & Drop Cab",
    metaDescription: "24/7 taxi transfer at Udaipur Railway Station (UDZ) & Rana Pratap Nagar (RPZ). Chauffeur greeting, luggage assistance & direct hotel drops across Udaipur. Sedan ₹800, Innova ₹1,200, Tempo ₹2,500.",
    heroImage: "/places/gangaur-ghat.jpg",
    duration: "Point to Point Transfer",
    distance: "Direct Hotel Transfer",
    startingPrice: "₹800",
    routeSummary: "Udaipur Railway Station (UDZ / RPZ) ⇄ Any Hotel, Resort, Homestay or Heritage Haveli in Udaipur",
    highlights: [
      "24/7 Platform Pickup & Greeting - Chauffeur waiting outside your coach platform with name sign",
      "Luggage Assistance - Smooth carrying and trunk loading for heavy bags",
      "All Udaipur Destinations Covered - City center, Lake Pichola ghats, Fatehsagar luxury resorts & outstation",
      "Pre-Fixed Fare Guarantee - Zero bargaining, zero surge pricing even during late midnight or early morning arrivals"
    ],
    itinerary: [
      { time: "Train Arrival", title: "Platform Greeting & Luggage Loading", desc: "Driver contacts you as your train approaches Udaipur and greets you outside the main exit." },
      { time: "Transfer", title: "Comfortable AC Chauffeur Drive", desc: "Direct, smooth drive straight to your hotel or private resort without stops." },
      { time: "Hotel Drop", title: "Safe Arrival & Payment", desc: "Driver unloads your luggage at hotel lobby. Pay easily via cash, UPI or card." }
    ],
    rates: [
      { vehicle: "Maruti Dzire / Toyota Etios", capacity: "4 Passengers + Luggage", price: "₹800", idealFor: "1-4 Travelers with standard luggage" },
      { vehicle: "Toyota Innova Crysta", capacity: "6-7 Passengers + Large Luggage", price: "₹1,200", idealFor: "Families & VIP Heritage Hotel Transfers" },
      { vehicle: "Tempo Traveller (12 Seater)", capacity: "12 Passengers + Group Luggage", price: "₹2,500", idealFor: "Group Pilgrims & Wedding Delegations" }
    ],
    inclusions: ["Station parking and platform entry fees", "AC clean vehicle and professional chauffeur", "Complimentary waiting time for delayed trains"],
    exclusions: ["Extra waiting over 1 hour after train arrival", "Multiple drop locations (available on small extra charge)"],
    faqs: [
      { q: "What if my train is delayed?", a: "We monitor live train tracking. Our chauffeur adjusts the pickup time automatically at zero extra waiting cost." },
      { q: "Do you provide late night 2 AM or early morning 4 AM pickups?", a: "Yes, our service operates 24/7 with confirmed advance bookings." }
    ]
  }
};

// Aliases for user convenience
TOUR_PAGES_DATA["udaipur-to-eklingji-nathdwara-taxi"] = {
  ...TOUR_PAGES_DATA["udaipur-to-nathdwara-taxi"],
  slug: "udaipur-to-eklingji-nathdwara-taxi"
};

TOUR_PAGES_DATA["udaipur-to-eklingji-nathdwara-haldighati-taxi"] = {
  ...TOUR_PAGES_DATA["udaipur-to-haldighati-taxi"],
  slug: "udaipur-to-eklingji-nathdwara-haldighati-taxi"
};
