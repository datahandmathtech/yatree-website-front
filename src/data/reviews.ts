export interface GoogleReview {
  id: string;
  author: string;
  location?: string;
  rating: number;
  date?: string;
  relativeTime: string;
  text: string;
  service?: string;
  authorPhoto?: string;
  authorUri?: string;
  avatarColor?: string;
  initials?: string;
  googleMapsUri?: string;
}

export const GOOGLE_BUSINESS_INFO = {
  name: "Yatree Destination Private Limited",
  rating: 4.9,
  totalReviews: 124,
  reviewUrl: "https://g.page/r/CUj5F0eRuHpFEAE/review",
  mapsUrl: "https://g.page/r/CUj5F0eRuHpFEAE",
  address: "Shed no.2, Nokha, 100 Feet Rd, near Bethak Cafe, Mali Colony, Gayariawas, Central Area, Udaipur, Rajasthan 313002",
};

export const GOOGLE_REVIEWS_DATA: GoogleReview[] = [
  {
    id: "rev-pallavi",
    author: "Pallavi Mishra",
    authorPhoto: "https://lh3.googleusercontent.com/a/ACg8ocK3fb3meHPTCkGU1HMsueDCc_2gPXfRFRHAURXbCSFl4Sl7sA=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relativeTime: "6 months ago",
    text: "Awesome trip....We had an amazing experience exploring Udaipur, all thanks to our driver, Mr. Heera Lal. He is extremely professional, punctual, and very understanding. Throughout the trip, he was supportive, patient, and always made sure we were comfortable and enjoying every moment. Highly recommended if you’re planning a trip to Udaipur!",
    service: "Udaipur Sightseeing Tour",
    googleMapsUri: "https://g.page/r/CUj5F0eRuHpFEAE",
    avatarColor: "bg-emerald-600",
    initials: "PM"
  },
  {
    id: "rev-arpit",
    author: "Arpit Pandey",
    authorPhoto: "https://lh3.googleusercontent.com/a-/ALV-UjX-0ekvCB2vB5iHXUBkxy2WzX6Hc5pIFJJtbJQbFFjCYOyrHT1wKA=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relativeTime: "2 months ago",
    text: "⭐️⭐️⭐️⭐️⭐️ Exceptional Service and an Unforgettable Udaipur! We recently used Yatree Destination for our airport pickup/drop off including city tour, and I cannot recommend them highly enough. From the very first inquiry, Kavish and his team provided seamless, professional, and incredibly reliable service.",
    service: "Airport Pickup & City Tour",
    googleMapsUri: "https://g.page/r/CUj5F0eRuHpFEAE",
    avatarColor: "bg-blue-600",
    initials: "AP"
  },
  {
    id: "rev-komal",
    author: "Komal Kataria",
    authorPhoto: "https://lh3.googleusercontent.com/a/ACg8ocKg7g6lVBzCSyMjWyV2y52T3q_knC2V8FR1GP3tog_z9HmKMw=s128-c0x00000000-cc-rp-mo",
    rating: 4,
    relativeTime: "2 months ago",
    text: "Yatree Destination provided great service for our trip in Udaipur. The driver was knowledgeable, polite, and guided us with great patience across all locations. Would definitely book again!",
    service: "Udaipur Taxi Service",
    googleMapsUri: "https://g.page/r/CUj5F0eRuHpFEAE",
    avatarColor: "bg-purple-600",
    initials: "KK"
  },
  {
    id: "rev-pratik",
    author: "Pratik Kumar",
    authorPhoto: "https://lh3.googleusercontent.com/a-/ALV-UjXigNP51e2gV6qbQP_yT14N5xawvdARviDUpF3nNlJz-lpjscJM=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relativeTime: "a year ago",
    text: "Had a very good experience with Yatree Destination Private Limited, Udaipur. I am very happy with their service. I visited Udaipur with my wife and 1 year baby. The driver Heeralal was very friendly and took great care of us. Everything went smoothly.",
    service: "Family Holiday Cab",
    googleMapsUri: "https://g.page/r/CUj5F0eRuHpFEAE",
    avatarColor: "bg-amber-600",
    initials: "PK"
  },
  {
    id: "rev-puja",
    author: "Puja maskara",
    authorPhoto: "https://lh3.googleusercontent.com/a-/ALV-UjXG01sVSrfjdk45pFpnv4lbggRLNLstSt-TSZrTghkwb-Mpx_tP=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relativeTime: "4 months ago",
    text: "We recently used their cab services for Rajasthan trip. The driver was polite and very helpful. Car was clean. Our journey was totally hassle free. Will surely recommend.",
    service: "Rajasthan Roundtrip Tour",
    googleMapsUri: "https://g.page/r/CUj5F0eRuHpFEAE",
    avatarColor: "bg-rose-600",
    initials: "PM"
  },
  {
    id: "rev-rahul-sharma",
    author: "Rahul Sharma",
    rating: 5,
    relativeTime: "1 month ago",
    text: "We booked an Innova Crysta for a 4-day Udaipur and Kumbhalgarh tour with Yatree Destination. The chauffeur was punctual, well-mannered, and the vehicle was immaculately clean. Completely transparent fixed billing with zero hidden surprises. Best cab service in Udaipur!",
    service: "Udaipur & Kumbhalgarh Tour",
    googleMapsUri: "https://g.page/r/CUj5F0eRuHpFEAE",
    avatarColor: "bg-indigo-600",
    initials: "RS"
  },
  {
    id: "rev-priya-sengupta",
    author: "Priya & Aniket Sengupta",
    rating: 5,
    relativeTime: "1 month ago",
    text: "Outstanding sightseeing experience! We took the 2-day local lake city package. Our driver knew all the scenic sunset viewpoints at Lake Pichola and helped us navigate City Palace without crowds. Smooth driving and very polite staff.",
    service: "Local Sightseeing Taxi",
    googleMapsUri: "https://g.page/r/CUj5F0eRuHpFEAE",
    avatarColor: "bg-teal-600",
    initials: "PS"
  },
  {
    id: "rev-vikramaditya",
    author: "Vikramaditya Rathore",
    rating: 5,
    relativeTime: "2 months ago",
    text: "Hired Yatree Destination for corporate delegation transfers during our MICE event in Udaipur. Fleet of pristine Innovas and sedans handled airport pickups seamlessly. High level of professionalism and luxury.",
    service: "Corporate MICE Travel",
    googleMapsUri: "https://g.page/r/CUj5F0eRuHpFEAE",
    avatarColor: "bg-amber-700",
    initials: "VR"
  },
  {
    id: "rev-dr-sneha",
    author: "Dr. Sneha Kulkarni",
    rating: 5,
    relativeTime: "2 months ago",
    text: "Took a same-day roundtrip taxi to Mount Abu and Dilwara Temples. The ghat mountain driving was extremely smooth and safe with my elderly parents. Highway tolls were pre-included as promised. Highly recommend them!",
    service: "Udaipur to Mount Abu Cab",
    googleMapsUri: "https://g.page/r/CUj5F0eRuHpFEAE",
    avatarColor: "bg-cyan-600",
    initials: "SK"
  },
  {
    id: "rev-amit-verma",
    author: "Amit Verma",
    rating: 5,
    relativeTime: "3 months ago",
    text: "Booked a 12-seater Maharaja Tempo Traveller for a large family trip covering Chittorgarh Fort and Shrinathji Nathdwara. Push-back seats were super comfortable, AC chilled quickly in the summer heat, and the chauffeur was very cooperative.",
    service: "Tempo Traveller Rental",
    googleMapsUri: "https://g.page/r/CUj5F0eRuHpFEAE",
    avatarColor: "bg-red-600",
    initials: "AV"
  },
  {
    id: "rev-meera-nair",
    author: "Meera Nair",
    rating: 5,
    relativeTime: "3 months ago",
    text: "Airport pickup at 11:30 PM was smooth and effortless. The driver was already waiting outside Udaipur Airport with my name board. Clean sanitized car, direct hotel transfer, and I felt completely safe as a solo female traveler.",
    service: "Udaipur Airport Transfer",
    googleMapsUri: "https://g.page/r/CUj5F0eRuHpFEAE",
    avatarColor: "bg-pink-600",
    initials: "MN"
  },
  {
    id: "rev-rajesh-patel",
    author: "Rajesh Patel",
    rating: 5,
    relativeTime: "4 months ago",
    text: "Booked a multi-day Rajasthan journey from Udaipur to Jodhpur and Jaisalmer. Chauffeur was skilled, drove responsibly on desert highways, and recommended wonderful Rajasthani food spots. Top-tier service.",
    service: "Multi-Day Rajasthan Tour",
    googleMapsUri: "https://g.page/r/CUj5F0eRuHpFEAE",
    avatarColor: "bg-violet-600",
    initials: "RP"
  }
];
