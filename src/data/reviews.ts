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
    rating: 5,
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
  }
];
