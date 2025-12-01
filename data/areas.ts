// data/areas.ts

export type Area = {
  slug: string;
  name: string;
  region: "West Midlands" | "East Midlands" | "London";
  headline: string;
  description: string;
  heroImage: {
    src: string;
    alt: string;
  };
};

export const AREAS: Area[] = [
  {
    slug: "birmingham",
    name: "Birmingham",
    region: "West Midlands",
    headline: "Local Plumbers in Birmingham – Fast, Reliable, 24/7",
    description:
      "We provide emergency and planned plumbing services across Birmingham – from burst pipes and leaking toilets to full bathroom installations and boiler work.",
    heroImage: {
      src: "/images/birmingham.jpg",
      alt: "EZO plumber working in a Birmingham home",
    },
  },
  {
    slug: "coventry",
    name: "Coventry",
    region: "West Midlands",
    headline: "Plumber in Coventry – Same-Day Service Available",
    description:
      "Serving all of Coventry with fast response times for leaks, blockages, bathroom plumbing and landlord repairs.",
    heroImage: {
      src: "/images/coventry.jpg",
      alt: "Kitchen leak repair carried out in Coventry",
    },
  },
  {
    slug: "wolverhampton",
    name: "Wolverhampton",
    region: "West Midlands",
    headline: "Trusted Plumbers in Wolverhampton",
    description:
      "Dependable local plumbers for homes and landlords in Wolverhampton and surrounding areas.",
    heroImage: {
      src: "/images/wolves.jpg",
      alt: "EZO Plumbing and Heating van in Wolverhampton",
    },
  },
  {
    slug: "nottingham",
    name: "Nottingham",
    region: "East Midlands",
    headline: "Plumber in Nottingham – Emergency & General Plumbing",
    description:
      "Covering Nottingham with professional plumbing repairs, installations and emergency callouts.",
    heroImage: {
      src: "/images/nottingham.webp",
      alt: "Bathroom plumbing job completed in Nottingham",
    },
  },
  {
    slug: "leicester",
    name: "Leicester",
    region: "East Midlands",
    headline: "Leicester Plumbing Services – 24/7 Emergency Callouts",
    description:
      "From burst pipes to full bathroom refurbishments, we help homeowners and landlords across Leicester.",
    heroImage: {
      src: "/images/leicester.jpg",
      alt: "EZO plumber fixing a leak in Leicester",
    },
  },
  {
    slug: "derby",
    name: "Derby",
    region: "East Midlands",
    headline: "Plumber in Derby – Local, Friendly, Professional",
    description:
      "Your local plumber in Derby for leaks, blockages, repairs and new installations.",
    heroImage: {
      src: "/images/derby.jpeg",
      alt: "Plumbing repair in a Derby kitchen",
    },
  },
  {
    slug: "london",
    name: "London",
    region: "London",
    headline: "Plumber in London – 24/7 Emergency Plumbing & Repairs",
    description:
      "Fast-response plumbers covering Greater London with emergency callouts and planned plumbing work.",
    heroImage: {
      src: "/images/london.jpeg",
      alt: "EZO van on the way to a plumbing job in London",
    },
  },
  {
  slug: "walsall",
  name: "Walsall",
  region: "West Midlands",
  headline: "Plumbers in Walsall – WS Postcode Emergency & General Plumbing",
  description:
    "Covering Walsall and nearby WS postcodes with fast-response plumbing – from emergency leaks and overflows to tap repairs, toilet issues, radiator moves and small bathroom projects.",
  heroImage: {
    src: "/images/walsall.jpg",
    alt: "EZO plumber arriving at a property in Walsall",
  },
},
{
  slug: "northampton",
  name: "Northampton",
  region: "East Midlands",
  headline: "Plumbers in Northampton – NN Postcode Emergency Callouts",
  description:
    "EZO Plumbing and Heating supports Northampton NN postcodes with emergency leak response, toilet and tap repairs, blocked sinks and showers, and planned plumbing work for homes and landlords.",
  heroImage: {
    src: "/images/northampton.jpg",
    alt: "EZO van parked outside a home in Northampton",
  },
},
{
  slug: "milton-keynes",
  name: "Milton Keynes",
  region: "East Midlands",
  headline: "Plumber in Milton Keynes – MK Postcode Plumbing & Heating",
  description:
    "Fast, reliable plumbers for Milton Keynes MK postcodes – handling leaks, heating and radiator problems, blocked toilets and drains, and bathroom plumbing with clear communication and fair pricing.",
  heroImage: {
    src: "/images/milton-keynes.png",
    alt: "EZO plumber working at a property in Milton Keynes",
  },
},
];
