/* ==========================================================================
   TALMA HOMES — Site data
   Edit this file to update your business info and property listings.
   Nothing here needs a developer — it's plain text and numbers.
   ========================================================================== */

const SITE = {
  businessName: "Talma Homes",
  // WhatsApp number in international format, digits only, no + or spaces.
  // Example Kenyan number shown below — REPLACE with your real WhatsApp Business number.
  whatsappNumber: "254700000000",
  phoneDisplay: "+254 700 000 000",
  email: "hello@talmahomes.co.ke",
  address: "5th Floor, Delta Towers, Chiromo Road, Westlands, Nairobi",
  hours: [
    { label: "Mon – Fri", value: "8:30 AM – 6:00 PM" },
    { label: "Saturday", value: "9:00 AM – 2:00 PM" },
    { label: "Sunday", value: "By appointment" }
  ],
  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#"
  },
  defaultWhatsappMessage: "Hi Talma Homes, I'd like to know more about your listings."
};

// PROPERTIES — sample/demo listings. Replace with your real properties.
// type: "House" | "Apartment" | "Townhouse" | "Land"
// images: first image is used as the card + gallery main image.
const PROPERTIES = [
  {
    id: 7,
    title: "Kiambu Road Duplex with SQ",
    area: "Kiambu Road",
    type: "Townhouse",
    status: "For Sale",
    price: 13000000,
    priceLabel: "KES 13,000,000",
    beds: 3,
    baths: null,
    sqft: null,
    lot: "—",
    yearBuilt: null,
    ref: "TH-1204",
    summary: "A 3-bedroom duplex with a private garden and separate servant quarters, off Kiambu Road.",
    description: "A three-bedroom duplex set within a gated compound off Kiambu Road, with a lawned garden and mature tree at the entrance. Inside, an open-plan living and dining area leads to a fitted kitchen with granite worktops, with bedrooms upstairs including an en-suite master finished in marble. A separate servant quarters (SQ) sits within the compound wall.",
    features: [
      "Separate servant quarters (SQ)",
      "Private lawned garden",
      "Granite kitchen worktops",
      "En-suite marble bathroom",
      "Fitted wardrobes in all bedrooms",
      "Private balcony"
    ],
    images: [
      "images/kiambu-road-duplex-01.jpg",
      "images/kiambu-road-duplex-02.jpg",
      "images/kiambu-road-duplex-03.jpg",
      "images/kiambu-road-duplex-04.jpg",
      "images/kiambu-road-duplex-05.jpg",
      "images/kiambu-road-duplex-06.jpg",
      "images/kiambu-road-duplex-07.jpg",
      "images/kiambu-road-duplex-08.jpg",
      "images/kiambu-road-duplex-09.jpg",
      "images/kiambu-road-duplex-10.jpg"
    ]
  },
  {
    id: 8,
    title: "Kileleshwa 2-Bedroom Apartment",
    area: "Kileleshwa",
    type: "Apartment",
    status: "For Sale",
    price: null,
    priceLabel: "Price on Request",
    beds: 2,
    baths: 2,
    sqft: null,
    lot: "—",
    yearBuilt: null,
    ref: "TH-1218",
    summary: "A 2-bedroom apartment in a Kileleshwa high-rise with a shared pool and gym.",
    description: "A two-bedroom apartment in a high-rise development in Kileleshwa, with a shared swimming pool and fully equipped gym within the compound. The open-plan living area opens onto a private balcony, and the kitchen is fitted with granite worktops and gloss-finish cabinetry. Both bedrooms have fitted wardrobes, with an en-suite bathroom off the master.",
    features: [
      "Shared swimming pool",
      "Fully equipped gym",
      "Granite kitchen worktops",
      "En-suite master bedroom",
      "Fitted wardrobes",
      "Private balcony"
    ],
    images: [
      "images/kileleshwa-apartment-01.jpg",
      "images/kileleshwa-apartment-02.jpg",
      "images/kileleshwa-apartment-03.jpg",
      "images/kileleshwa-apartment-04.jpg",
      "images/kileleshwa-apartment-05.jpg",
      "images/kileleshwa-apartment-06.jpg",
      "images/kileleshwa-apartment-07.jpg",
      "images/kileleshwa-apartment-08.jpg",
      "images/kileleshwa-apartment-09.jpg",
      "images/kileleshwa-apartment-10.jpg"
    ]
  },
  {
    id: 1,
    title: "The Karen Garden House",
    area: "Karen",
    type: "House",
    status: "For Sale",
    price: 85000000,
    priceLabel: "KES 85,000,000",
    beds: 5,
    baths: 5,
    sqft: 6200,
    lot: "0.5 acres",
    yearBuilt: 2011,
    ref: "TH-1042",
    summary: "A single-storey estate house set on half an acre of established garden.",
    description: "A single-storey estate house set on half an acre of established garden, with a separate guest cottage and staff quarters. Wide verandas run the length of the house, opening onto a lawn shaded by mature indigenous trees — a quiet, private setting a short drive from Karen shopping centre.",
    features: [
      "Half-acre established garden",
      "Separate one-bedroom cottage",
      "Solar water heating + backup generator",
      "Borehole water supply",
      "Staff quarters",
      "Electric perimeter fencing"
    ],
    images: [
      "https://picsum.photos/seed/karen-house-main/1200/800",
      "https://picsum.photos/seed/karen-house-2/1200/800",
      "https://picsum.photos/seed/karen-house-3/1200/800",
      "https://picsum.photos/seed/karen-house-4/1200/800"
    ]
  },
  {
    id: 2,
    title: "Kilimani Sky Residence",
    area: "Kilimani",
    type: "Apartment",
    status: "For Sale",
    price: 32000000,
    priceLabel: "KES 32,000,000",
    beds: 3,
    baths: 3,
    sqft: 1850,
    lot: "—",
    yearBuilt: 2020,
    ref: "TH-1108",
    summary: "A high-floor apartment with wraparound balcony views across the skyline.",
    description: "A high-floor apartment with wraparound balcony views across the Kilimani skyline, in a serviced building with backup power, backup water and 24-hour security. Finished with engineered oak flooring and a fully fitted kitchen, it's built for a low-maintenance city lifestyle.",
    features: [
      "Wraparound balcony",
      "24-hour backup power & water",
      "Fully fitted kitchen",
      "Two secure parking bays",
      "Gym & rooftop lounge access",
      "Engineered oak flooring throughout"
    ],
    images: [
      "https://picsum.photos/seed/kilimani-apt-main/1200/800",
      "https://picsum.photos/seed/kilimani-apt-2/1200/800",
      "https://picsum.photos/seed/kilimani-apt-3/1200/800",
      "https://picsum.photos/seed/kilimani-apt-4/1200/800"
    ]
  },
  {
    id: 3,
    title: "Runda Courtyard Villa",
    area: "Runda",
    type: "House",
    status: "For Sale",
    price: 120000000,
    priceLabel: "KES 120,000,000",
    beds: 6,
    baths: 6,
    sqft: 8000,
    lot: "0.8 acres",
    yearBuilt: 2016,
    ref: "TH-0967",
    summary: "A gated villa built around a central courtyard, with a pool and home cinema.",
    description: "A gated villa built around a central courtyard, with a swimming pool, home cinema and mature indigenous trees screening the boundary. The layout separates family and entertaining wings, with a self-contained guest suite over the garages.",
    features: [
      "Swimming pool & pool house",
      "Home cinema room",
      "Self-contained guest suite",
      "Triple garage",
      "Full backup generator",
      "24-hour gated security"
    ],
    images: [
      "https://picsum.photos/seed/runda-villa-main/1200/800",
      "https://picsum.photos/seed/runda-villa-2/1200/800",
      "https://picsum.photos/seed/runda-villa-3/1200/800",
      "https://picsum.photos/seed/runda-villa-4/1200/800"
    ]
  },
  {
    id: 4,
    title: "Lavington Townhouse Row",
    area: "Lavington",
    type: "Townhouse",
    status: "For Sale",
    price: 45000000,
    priceLabel: "KES 45,000,000",
    beds: 4,
    baths: 4,
    sqft: 3100,
    lot: "—",
    yearBuilt: 2019,
    ref: "TH-1121",
    summary: "One of four townhouses in a quiet cul-de-sac, each with a private garden.",
    description: "One of four townhouses set back from the road in a quiet cul-de-sac, each with its own private garden and two secure parking bays. A short walk to Lavington Mall and the surrounding cafés, with a shared caretaker and perimeter wall.",
    features: [
      "Private garden",
      "Two secure parking bays",
      "Shared caretaker & perimeter wall",
      "Walking distance to Lavington Mall",
      "Staff quarters",
      "Solar water heating"
    ],
    images: [
      "https://picsum.photos/seed/lavington-town-main/1200/800",
      "https://picsum.photos/seed/lavington-town-2/1200/800",
      "https://picsum.photos/seed/lavington-town-3/1200/800",
      "https://picsum.photos/seed/lavington-town-4/1200/800"
    ]
  },
  {
    id: 5,
    title: "Westlands Loft",
    area: "Westlands",
    type: "Apartment",
    status: "For Sale",
    price: 22500000,
    priceLabel: "KES 22,500,000",
    beds: 2,
    baths: 2,
    sqft: 1200,
    lot: "—",
    yearBuilt: 2021,
    ref: "TH-1187",
    summary: "An open-plan loft above Westlands' café district, in concrete and oak.",
    description: "An open-plan loft above Westlands' café district, finished in exposed concrete and oak with floor-to-ceiling glazing. Steps from restaurants, offices and the Nairobi Expressway on-ramp — built for a tenant or owner who wants to be in the middle of things.",
    features: [
      "Floor-to-ceiling glazing",
      "Open-plan living area",
      "One secure parking bay",
      "Steps from restaurants & offices",
      "Fibre-ready",
      "Rooftop common area"
    ],
    images: [
      "https://picsum.photos/seed/westlands-loft-main/1200/800",
      "https://picsum.photos/seed/westlands-loft-2/1200/800",
      "https://picsum.photos/seed/westlands-loft-3/1200/800",
      "https://picsum.photos/seed/westlands-loft-4/1200/800"
    ]
  },
  {
    id: 6,
    title: "Tigoni Tea Estate Plot",
    area: "Tigoni",
    type: "Land",
    status: "For Sale",
    price: 18000000,
    priceLabel: "KES 18,000,000",
    beds: null,
    baths: null,
    sqft: null,
    lot: "2.0 acres",
    yearBuilt: null,
    ref: "TH-0854",
    summary: "A ready-to-build plot bordered by tea gardens, forty minutes from the city.",
    description: "A ready-to-build plot bordered by working tea gardens, roughly forty minutes from Nairobi's city centre. Power and water connections are already on site, with a title deed ready for transfer — a straightforward start for a country home.",
    features: [
      "Title deed ready for transfer",
      "Power connection on site",
      "Piped water connection on site",
      "Bordered by tea gardens",
      "All-weather access road",
      "40 minutes from the CBD"
    ],
    images: [
      "https://picsum.photos/seed/tigoni-plot-main/1200/800",
      "https://picsum.photos/seed/tigoni-plot-2/1200/800",
      "https://picsum.photos/seed/tigoni-plot-3/1200/800",
      "https://picsum.photos/seed/tigoni-plot-4/1200/800"
    ]
  }
];

// TEAM — shown on the About page.
const TEAM = [
  {
    name: "Wanjiru Kamau",
    role: "Founder & Principal Agent",
    phone: "254700000001",
    photo: "https://picsum.photos/seed/agent-wanjiru/500/650"
  },
  {
    name: "David Otieno",
    role: "Senior Sales Agent",
    phone: "254700000002",
    photo: "https://picsum.photos/seed/agent-david/500/650"
  },
  {
    name: "Fatuma Ali",
    role: "Client Relations",
    phone: "254700000003",
    photo: "https://picsum.photos/seed/agent-fatuma/500/650"
  }
];
