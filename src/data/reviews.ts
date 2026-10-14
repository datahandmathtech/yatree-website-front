export interface GoogleReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  relativeTime: string;
  text: string;
  service: string;
  avatarColor: string;
  initials: string;
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
    id: "rev-1",
    author: "Rahul Sharma",
    location: "New Delhi",
    rating: 5,
    date: "2026-09-18",
    relativeTime: "a month ago",
    text: "We booked an Innova Crysta for a 4-day Udaipur and Kumbhalgarh tour with Yatree Destination. The chauffeur was punctual, well-mannered, and the vehicle was immaculately clean. Completely transparent fixed billing with zero hidden surprises. Best cab service in Udaipur!",
    service: "Udaipur & Kumbhalgarh Tour",
    avatarColor: "bg-blue-600",
    initials: "RS"
  },
  {
    id: "rev-2",
    author: "Priya & Aniket Sengupta",
    location: "Kolkata",
    rating: 5,
    date: "2026-09-02",
    relativeTime: "1 month ago",
    text: "Outstanding sightseeing experience! We took the 2-day local lake city package. Our driver knew all the scenic sunset viewpoints at Lake Pichola and helped us navigate City Palace without crowds. Smooth driving and very polite staff.",
    service: "Local Sightseeing Taxi",
    avatarColor: "bg-emerald-600",
    initials: "AS"
  },
  {
    id: "rev-3",
    author: "Vikramaditya Rathore",
    location: "Mumbai",
    rating: 5,
    date: "2026-08-15",
    relativeTime: "2 months ago",
    text: "Hired Yatree Destination for corporate delegation transfers during our MICE event in Udaipur. Fleet of pristine Innovas and sedans handled airport pickups seamlessly. High level of professionalism and luxury.",
    service: "Corporate MICE Travel",
    avatarColor: "bg-purple-600",
    initials: "VR"
  },
  {
    id: "rev-4",
    author: "Dr. Sneha Kulkarni",
    location: "Pune",
    rating: 5,
    date: "2026-07-28",
    relativeTime: "2 months ago",
    text: "Took a same-day roundtrip taxi to Mount Abu and Dilwara Temples. The ghat mountain driving was extremely smooth and safe with my elderly parents. Highway tolls were pre-included as promised. Highly recommend them!",
    service: "Udaipur to Mount Abu Cab",
    avatarColor: "bg-amber-600",
    initials: "SK"
  },
  {
    id: "rev-5",
    author: "Amit Verma",
    location: "Ahmedabad",
    rating: 5,
    date: "2026-07-10",
    relativeTime: "3 months ago",
    text: "Booked a 12-seater Maharaja Tempo Traveller for a large family trip covering Chittorgarh Fort and Shrinathji Nathdwara. Push-back seats were super comfortable, AC chilled quickly in the summer heat, and the chauffeur was very cooperative.",
    service: "Tempo Traveller Rental",
    avatarColor: "bg-rose-600",
    initials: "AV"
  },
  {
    id: "rev-6",
    author: "Meera Nair",
    location: "Bengaluru",
    rating: 5,
    date: "2026-06-22",
    relativeTime: "3 months ago",
    text: "Airport pickup at 11:30 PM was smooth and effortless. The driver was already waiting outside Udaipur Airport with my name board. Clean sanitized car, direct hotel transfer, and I felt completely safe as a solo female traveler.",
    service: "Udaipur Airport Transfer",
    avatarColor: "bg-indigo-600",
    initials: "MN"
  },
  {
    id: "rev-7",
    author: "Rajesh Patel",
    location: "Surat",
    rating: 5,
    date: "2026-05-19",
    relativeTime: "4 months ago",
    text: "Booked a multi-day Rajasthan journey from Udaipur to Jodhpur and Jaisalmer. Chauffeur was skilled, drove responsibly on desert highways, and recommended wonderful Rajasthani food spots. Top-tier service.",
    service: "Multi-Day Rajasthan Tour",
    avatarColor: "bg-cyan-600",
    initials: "RP"
  },
  {
    id: "rev-8",
    author: "David & Sarah Miller",
    location: "United Kingdom",
    rating: 5,
    date: "2026-04-14",
    relativeTime: "5 months ago",
    text: "Our driver in Udaipur was fantastic! Fluent English, very respectful, and gave us brilliant cultural insights into Mewar history. The vehicle was brand new with working air conditioning and water bottles provided.",
    service: "Private Chauffeur Tour",
    avatarColor: "bg-teal-600",
    initials: "DM"
  },
  {
    id: "rev-9",
    author: "Neha Singhal",
    location: "Jaipur",
    rating: 5,
    date: "2026-03-30",
    relativeTime: "6 months ago",
    text: "Used Yatree Destination's fleet for our destination wedding logistics in Udaipur. Multiple cars running between hotels and Lake Pichola venues over 3 days. Flawless coordination and courteous drivers throughout.",
    service: "Wedding Fleet Rental",
    avatarColor: "bg-pink-600",
    initials: "NS"
  }
];
