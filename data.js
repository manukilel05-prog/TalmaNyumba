/* ==========================================================================
   TALMA HOMES — Site data
   Edit this file to update your business info and property listings.
   Nothing here needs a developer — it's plain text and numbers.
   ========================================================================== */

const SITE = {
  businessName: "Talma Homes",
  // WhatsApp number in international format, digits only, no + or spaces.
  // Example Kenyan number shown below — REPLACE with your real WhatsApp Business number.
  whatsappNumber: "254140622401",
  phoneDisplay: "+254702302117",
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


// TEAM — shown on the About page.
const TEAM = [
  {
    name: "Wesley Mataara",
    role: "Founder & Principal Agent",
    phone: "254700000001",
  },
  {
    name: "Benedict Kirui",
    role: "Senior Sales Agent",
    phone: "254700000002",
    photo: "https://picsum.photos/seed/agent-david/500/650"
  },
  {
    name: "Emmanuel",
    role: "Client Relations",
    phone: "254700000003",
    photo: "https://picsum.photos/seed/agent-fatuma/500/650"
  }
];
