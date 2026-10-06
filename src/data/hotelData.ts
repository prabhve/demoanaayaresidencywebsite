export interface Room {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  subParagraph?: string;
  price: string;
  originalPrice?: string;
  priceNote: string;
  pricingTiers?: { label: string; price: string }[];
  guests: string;
  beds: string;
  baths: string;
  size?: string;
  view: string;
  mainImage: string;
  gallery: string[];
  amenities: string[];
  highlights?: { title: string; desc: string }[];
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const HOTEL_INFO = {
  name: "Anaaya Residency",
  tagline: "Comfortable Stays near Kamakhya Temple, Guwahati",
  description:
    "Well-appointed rooms designed for families, business travelers, and city visitors seeking a comfortable and peaceful stay in Guwahati.",
  subDescription:
    "Anaaya Residency is a comfortable and well-maintained hotel in Guwahati, located just minutes from Kamakhya Temple. Our rooms, service, and location are thoughtfully designed for families, business travelers, and guests seeking a calm and convenient city stay.",
  logo: "https://anaayaresidency.com/wp-content/uploads/2025/12/Untitled-design-22-e1766747218223.png",
  logoSmall: "https://anaayaresidency.com/wp-content/uploads/2025/12/Untitled-design-22-e1766747218223-300x104.png",
  heroBg: "https://anaayaresidency.com/wp-content/uploads/2025/12/Hero-04.webp",
  videoUrl: "https://anaayaresidency.com/wp-content/uploads/2025/12/Anaaya-Residency.mp4",
  phonePrimary: "+91 7099070253",
  phonePrimaryRaw: "7099070253",
  phoneSecondary: "+91 7002160113",
  phoneSecondaryRaw: "7002160113",
  whatsapp: "+917099070253",
  whatsappUrl: "https://wa.me/917099070253?text=Hello%20Anaaya%20Residency,%20I%20would%20like%20to%20inquire%20about%20room%20booking.",
  email: "info@anaayaresidency.com",
  address: {
    line1: "3rd & 4th Floor, HG Tower",
    line2: "Near Kamakhya Temple Main Gate",
    line3: "Assam Trunk Road, Opp. LCB College Bus Stop",
    city: "Maligaon, Guwahati",
    pin: "781011",
    state: "Assam, India",
    full: "3rd & 4th Floor, HG Tower, Near Kamakhya Temple Main Gate, Assam Trunk Road, Opp. LCB College Bus Stop, Maligaon, Guwahati – 781011"
  },
  openingHours: [
    { days: "Fri - Sat", hours: "09:00 AM – 09:00 PM" },
    { days: "Sun - Mon", hours: "09:00 AM – 09:00 PM" },
    { days: "Tue - Wed", hours: "09:00 AM – 09:00 PM" },
    { days: "Thursday", hours: "09:00 AM – 09:00 PM" }
  ],
  checkInOut: {
    checkIn: "2:00 PM",
    checkOut: "12:00 PM"
  },
  highlights: [
    { title: "Inhouse Kitchen", subtitle: "24 x 7" },
    { title: "Parking & Security", subtitle: "Top Rated" },
    { title: "Location Advantage", subtitle: "Maligaon Main Road" },
    { title: "Kamakhya Temple", subtitle: "Minutes Away" },
    { title: "Sanjeevani Hospital", subtitle: "Nearby" },
    { title: "Kamakhya Railway Station", subtitle: "Easy Access" }
  ],
  mission: "To provide clean, comfortable, and affordable accommodation with warm hospitality in a well-connected part of Guwahati.",
  vision: "To become a trusted stay choice in Guwahati for travelers seeking comfort, convenience, and reliability.",
  values: "Cleanliness, professionalism, honesty, guest comfort, and personalized service in a welcoming environment."
};

export const ROOMS: Room[] = [
  {
    id: "super-deluxe",
    slug: "super-delux-room",
    name: "Super Deluxe Room with City View",
    subtitle: "Super Deluxe Room",
    tagline: "A Refined Stay Experience",
    shortDesc:
      "Our Super Deluxe Room offers spacious interiors with a city view, modern comfort, and a relaxing stay experience for families and business travelers.",
    longDesc:
      "Our Super Deluxe Room is designed for guests who prefer extra comfort, space, and elegance. Featuring modern interiors, soft ambient lighting, and carefully selected furnishings, the room offers a calm and luxurious environment for relaxation.",
    subParagraph:
      "The room includes a plush premium bed with high-quality linen, upholstered headboard, and thoughtfully arranged décor that enhances both comfort and style. Clean white walls, marble-finish accents, and warm tones create a soothing atmosphere ideal for a restful stay.",
    price: "₹2999",
    originalPrice: "₹3499",
    priceNote: "/Night",
    pricingTiers: [
      { label: "Super Deluxe Double Bedded Room", price: "INR 2499 (exc GST)" },
      { label: "Super Deluxe Triple Bedded Room", price: "INR 3249 (exc GST)" },
      { label: "Super Deluxe 4 Bedded Room", price: "INR 3999 (exc GST)" }
    ],
    guests: "Up to 4 Guests",
    beds: "Spacious Bed",
    baths: "Modern Bathroom",
    view: "City View",
    mainImage: "https://anaayaresidency.com/wp-content/uploads/2025/12/super-delux.jpg",
    gallery: [
      "https://anaayaresidency.com/wp-content/uploads/2025/12/super-delux.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01086-scaled.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01087_web.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01088_web.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01085_web.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01091_web.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01092_web.jpg"
    ],
    amenities: [
      "Free Wifi & Internet",
      "Air Conditioning",
      "Flat-Screen Television",
      "Comfortable Double Bed",
      "Tea & Coffee Maker",
      "Bottled Drinking Water",
      "Attached Bathroom with Hot Water",
      "Daily Housekeeping"
    ],
    highlights: [
      {
        title: "Modern Amenities Paired With Timeless Hospitality Experience",
        desc: "Enjoy a seamless stay with a range of modern amenities including air conditioning, a wall-mounted flat-screen TV, a spacious wardrobe for storage, and a dedicated work or dressing area. Complimentary high-speed Wi-Fi ensures you stay connected throughout your visit."
      },
      {
        title: "Premium Ensuite Bathroom",
        desc: "The attached bathroom is designed with premium tiles and fittings, featuring a hot water shower, modern sanitaryware, and essential toiletries for a refreshing experience."
      }
    ]
  },
  {
    id: "suite",
    slug: "suite-room",
    name: "Suite Room with Mountain View",
    subtitle: "Suite Room With Mountain View",
    tagline: "Experience Elevated Luxury",
    shortDesc:
      "Enjoy premium comfort in our Suite Room with beautiful mountain views, designed for guests seeking extra space and a luxurious stay.",
    longDesc:
      "Our Suite Room is designed for guests who seek an upscale, spacious, and private stay. With a refined layout, elegant interiors, and premium finishes, the suite offers a perfect blend of comfort and sophistication.",
    subParagraph:
      "The room features a plush king-size bed with premium linen, an upholstered headboard, and calming décor that ensures deep rest and relaxation. Soft lighting, marble-finish accents, and modern furnishings create a serene and luxurious ambiance.",
    price: "₹5499",
    originalPrice: "₹6875",
    priceNote: "/Night",
    pricingTiers: [
      { label: "Suite Room Standard", price: "INR 5499 (exc GST)" },
      { label: "Suite Room Luxury Mountain View", price: "INR 6875 (exc GST)" }
    ],
    guests: "3 - 4 Guests",
    beds: "1 King-Size Bed",
    baths: "1 Luxury Bathroom",
    view: "Mountain View & Private Balcony",
    mainImage: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01114_luxury_web.jpg",
    gallery: [
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01114_luxury_web.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01113_luxury_web.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01110_luxury_web.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01115_luxury_web.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01107_luxury_web.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01106_luxury_web.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2025/12/08ba5ed4-d711-4fdd-869d-64bc7dc2aa38.jpg"
    ],
    amenities: [
      "Free Wifi & Internet",
      "Air Conditioning",
      "Flat-Screen Television",
      "Comfortable King Bed",
      "Tea & Coffee Maker",
      "Bottled Drinking Water",
      "Attached Bathroom with Hot Water",
      "Daily Housekeeping",
      "Private Balcony"
    ],
    highlights: [
      {
        title: "Spacious Layout with Added Comfort",
        desc: "The Suite Room offers a well-planned layout that provides more space than standard rooms, making it ideal for families, couples, and long-stay guests. A dedicated seating and relaxation area enhances comfort, while thoughtfully placed storage keeps the space clutter-free."
      },
      {
        title: "Private Balcony with Scenic Surroundings",
        desc: "Enjoy your own private balcony, offering fresh air and peaceful outdoor views. Whether it’s a quiet morning or a relaxed evening, the balcony adds a premium touch to your stay."
      }
    ]
  },
  {
    id: "deluxe",
    slug: "double-bed-room-with-hill-view",
    name: "Deluxe Room (Double Bed with Hill View)",
    subtitle: "Deluxe Room",
    tagline: "Designed Spaces for Relaxation Rest and Privacy.",
    shortDesc:
      "A comfortable Deluxe Room featuring modern amenities, spacious design, and a peaceful atmosphere.",
    longDesc:
      "Our Deluxe Room is thoughtfully designed to offer a peaceful and comfortable stay for both leisure and business travelers. With a modern interior, soothing color tones, and premium furnishings, the room creates a calm and welcoming atmosphere.",
    subParagraph:
      "Enjoy a plush double bed with fresh linens, soft pillows, and ample space to relax after a long day. The room is well-lit with natural light and equipped with air conditioning to ensure year-round comfort. A clean and modern attached bathroom with hot water and essential toiletries enhances your stay experience.",
    price: "₹2199",
    originalPrice: "₹2999",
    priceNote: "/Night",
    pricingTiers: [
      { label: "Deluxe Single/Double Occupancy", price: "INR 2199 (exc GST)" },
      { label: "Deluxe Room with Hill View", price: "INR 2999 (exc GST)" }
    ],
    guests: "2 Guests",
    beds: "1 Double Bed / 2 Beds",
    baths: "1 Modern Bath",
    size: "2,560 sq.ft suite area",
    view: "Hill View",
    mainImage: "https://anaayaresidency.com/wp-content/uploads/2025/12/e0b540e7-af3e-488b-858e-a5898e09a289.jpg",
    gallery: [
      "https://anaayaresidency.com/wp-content/uploads/2025/12/e0b540e7-af3e-488b-858e-a5898e09a289.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2025/12/eaaaf03b-20af-4f59-af8f-e904267650db.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01077_luxury_web.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01078_luxury_web.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01081_luxury_web.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01082_luxury_web.jpg",
      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01083_luxury_web.jpg"
    ],
    amenities: [
      "Free Wifi & Internet",
      "Air Conditioning",
      "Flat-Screen Television",
      "Comfortable Double Bed",
      "Tea & Coffee Maker",
      "Bottled Drinking Water",
      "Attached Bathroom with Hot Water",
      "Daily Housekeeping"
    ],
    highlights: [
      {
        title: "Modern Amenities with Warm Hospitality",
        desc: "Designed to provide optimal relaxation, our Deluxe room combines serene hill surroundings with top-tier comforts, high-speed Wi-Fi, premium mattress, and quick room assistance."
      }
    ]
  }
];

export const HOTEL_RULES = [
  "Check-in time is from 2:00 PM and check-out time is 12:00 PM.",
  "Valid photo identification is required at check-in.",
  "Early check-in and late check-out are subject to availability.",
  "Guests are requested to keep noise levels low after 10:00 PM.",
  "Outside food and beverages are not permitted in the hotel.",
  "Any damage to hotel property will be charged to the guest.",
  "Visitors are not allowed in guest rooms without prior approval.",
  "The hotel is not responsible for loss of personal belongings.",
  "Management reserves the right to refuse service if rules are violated."
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Comfortable Accommodation",
    description: "Well-maintained rooms designed for relaxation, cleanliness, and a peaceful stay near Kamakhya Temple.",
    image: "https://anaayaresidency.com/wp-content/uploads/2025/12/b81404e2-17ea-42a8-b8b2-3a63fc9cfdd6.jpg"
  },
  {
    id: "s2",
    title: "Room Assistance",
    description: "Our staff is available to assist guests with basic room-related needs and ensure a comfortable experience throughout their stay.",
    image: "https://anaayaresidency.com/wp-content/uploads/2025/12/Room-Service-.webp"
  },
  {
    id: "s3",
    title: "Housekeeping Service",
    description: "Daily housekeeping ensures clean, hygienic, and pleasant rooms for a comfortable and worry-free stay.",
    image: "https://anaayaresidency.com/wp-content/uploads/2025/12/Housekeeping-Service-.webp"
  },
  {
    id: "s4",
    title: "24/7 Front Desk",
    description: "Our front desk team is available to assist guests with check-in, inquiries, and local guidance at any time.",
    image: "https://anaayaresidency.com/wp-content/uploads/2025/12/247-Front-Desk-1-1.webp"
  },
  {
    id: "s5",
    title: "Easy Accessibility",
    description: "Conveniently located near Kamakhya Temple with easy access to public transport and nearby facilities.",
    image: "https://anaayaresidency.com/wp-content/uploads/2025/12/Kamakhya_Temple_-_DEV_8829-scaled.jpg"
  }
];

export const GALLERY_IMAGES = [
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01086-scaled.jpg", title: "Luxury Suite Bedroom" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01092_web.jpg", title: "Modern Bed & Lighting" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01091_web.jpg", title: "Executive Room Setup" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01085_web.jpg", title: "Spacious Interiors" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01086_web.jpg", title: "Cozy Furnishings" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01087_web.jpg", title: "Room Ambiance" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01088_web.jpg", title: "TV Unit & Console" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01082_web.jpg", title: "Wardrobe & Storage" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01082_luxury_web-1.jpg", title: "Marble Accents" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01106_luxury_web.jpg", title: "Premium Double Bed" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01107_luxury_web.jpg", title: "Luxury Suite Layout" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01081_luxury_web.jpg", title: "Attached Bathroom" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01082_luxury_web.jpg", title: "Modern Fittings" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01115_luxury_web.jpg", title: "Suite Seating Area" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01077_luxury_web.jpg", title: "Comfortable Stay" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01078_luxury_web.jpg", title: "Fresh Linen & Pillows" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01114_luxury_web.jpg", title: "Mountain View Suite" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01113_luxury_web.jpg", title: "Balcony Room View" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01110_luxury_web.jpg", title: "Balcony Seating" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01083_luxury_web.jpg", title: "Ensuite Shower" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2025/12/eaaaf03b-20af-4f59-af8f-e904267650db.jpg", title: "Deluxe Twin Beds" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2025/12/08ba5ed4-d711-4fdd-869d-64bc7dc2aa38.jpg", title: "Family Room" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2025/12/super-delux.jpg", title: "Super Deluxe Room" },
  { src: "https://anaayaresidency.com/wp-content/uploads/2025/12/e0b540e7-af3e-488b-858e-a5898e09a289.jpg", title: "Deluxe Room Interior" }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Piyali Dey",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLZ3iKIxp-4zOGj8svJMfv75NSGnpKeo9DlNbWFWYvBH-6mfQ=w60-h60-c-rp-mo-br100",
    rating: 5,
    date: "A month ago",
    comment: "Best Stay at Maligaon & excellent foods. The staff behaviour is very good 👍",
    verified: true
  },
  {
    id: "r2",
    name: "Laxmi Adhikari",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjU5rLVmqk7Fn3-y1MYbOyFBo-WvQPf9wA2ctPD5nS-bWdCrsL4=w60-h60-c-rp-mo-br100",
    rating: 5,
    date: "2 months ago",
    comment: "Very clean and comfortable hotel in Maligaon, Guwahati. Kamakhya temple is easily accessible from here. Highly recommended for families.",
    verified: true
  },
  {
    id: "r3",
    name: "Nipu Das",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXhcjuVvxKnMdggJB1OHEgmJA87D8tVmbL79kR6brK4oPLTma4=w60-h60-c-rp-mo-br100",
    rating: 5,
    date: "2 months ago",
    comment: "Peaceful environment, very polite staff, clean washrooms and comfortable bedding. Will definitely visit again.",
    verified: true
  },
  {
    id: "r4",
    name: "Bijoy sing millick Sing",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIJq9zNmmbdUS51RIjZsqRVvU2h7u8JWZs-V6mak63t1396ZA=w60-h60-c-rp-mo-br100",
    rating: 5,
    date: "3 months ago",
    comment: "Spacious rooms with proper ventilation. Prime location on Assam Trunk Road opposite LCB college bus stop. Good parking.",
    verified: true
  },
  {
    id: "r5",
    name: "Biki Medhi",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocImZT5qpGNB78b0b4YcjhFVVfOSqJyAbhhdYo4uUfi850Wyhw=w60-h60-c-rp-mo-br100",
    rating: 5,
    date: "4 months ago",
    comment: "Great hospitalities and very peaceful atmosphere. One of the best stay choices near Kamakhya main gate.",
    verified: true
  },
  {
    id: "r6",
    name: "Apurba Das Das",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJx9kHPzO504jfBut_bWD4dtz7gofXzEsedIzlnibcSAspK1g=w60-h60-c-rp-mo-br100",
    rating: 5,
    date: "5 months ago",
    comment: "Very neat and clean hotel near Kamakhya gate. Staff is very humble and 24/7 service was super helpful.",
    verified: true
  },
  {
    id: "r7",
    name: "Soin Uddin",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXG2m7p_QWFLrzkwFaUk07xeRy9dxbh50h9ZB23N9vyE2AB1D3l=w60-h60-c-rp-mo-br100",
    rating: 5,
    date: "5 months ago",
    comment: "Top notch service, 24x7 kitchen service is a lifesaver. Rooms are large and well maintained.",
    verified: true
  },
  {
    id: "r8",
    name: "Pallabi Das",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIorhYOVXIFo5LDTfFV1aZ5xBdT3n5xbHai_DjpVihSferAWw=w60-h60-c-rp-mo-br100",
    rating: 5,
    date: "6 months ago",
    comment: "Stayed here with family. Super convenient location, prompt assistance and very clean linen.",
    verified: true
  }
];

export const FAQS: FAQ[] = [
  {
    question: "How can I make a reservation?",
    answer: "You can easily book your stay through our website’s online booking system or contact our reservation team directly."
  },
  {
    question: "Do you offer free Wi-Fi at the Hotel?",
    answer: "Yes, complimentary high-speed Wi-Fi is available throughout the resort, including guest rooms and public areas."
  },
  {
    question: "Are meals included with the room booking?",
    answer: "Breakfast is included with select room packages. Additional meal plans are available at our in-house restaurant."
  }
];
