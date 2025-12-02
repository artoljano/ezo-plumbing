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
      src: "/images/areas/birmingham.jpg",
      alt: "View of Birmingham city centre, one of the areas covered by EZO Plumbing and Heating",
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
      src: "/images/areas/coventry.jpg",
      alt: "Coventry city centre and local streets served by EZO Plumbing and Heating",
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
      src: "/images/areas/wolves.jpg",
      alt: "Street scene from Wolverhampton city centre within the EZO Plumbing and Heating coverage area",
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
      src: "/images/areas/nottingham.webp",
      alt: "Nottingham city skyline in one of the areas covered by EZO Plumbing and Heating",
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
      src: "/images/areas/leicester.jpg",
      alt: "Leicester city centre streets in the EZO Plumbing and Heating service area",
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
      src: "/images/areas/derby.jpeg",
      alt: "Derby city centre, one of the towns served by EZO Plumbing and Heating",
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
      src: "/images/areas/london.jpeg",
      alt: "London skyline with landmarks in the wider EZO Plumbing and Heating coverage area",
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
      src: "/images/areas/walsall.jpg",
      alt: "Walsall town centre, part of the WS postcode area covered by EZO Plumbing and Heating",
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
      src: "/images/areas/northampton.jpg",
      alt: "Northampton town centre streets in the NN postcode area served by EZO Plumbing and Heating",
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
      src: "/images/areas/milton-keynes.png",
      alt: "Central Milton Keynes with modern buildings in the MK postcode coverage area for EZO Plumbing and Heating",
    },
  },

  // Newer areas
  {
    slug: "sheffield",
    name: "Sheffield",
    region: "East Midlands",
    headline: "Emergency Plumbers in Sheffield – S Postcode Callouts",
    description:
      "EZO Plumbing and Heating supports Sheffield S postcodes with emergency leak response, blocked toilets and drains, tap and shower repairs, and small bathroom plumbing projects.",
    heroImage: {
      src: "/images/areas/sheffield.jpg", // replace when you add a Sheffield city image
      alt: "View across Sheffield city, within the S postcode area covered by EZO Plumbing and Heating",
    },
  },
  {
    slug: "peterborough",
    name: "Peterborough",
    region: "East Midlands",
    headline: "Plumbers in Peterborough – PE Postcode Plumbing & Heating",
    description:
      "Serving Peterborough PE postcodes with emergency plumbing callouts, blocked toilet and drain clearances, leak detection and repair, and small bathroom plumbing upgrades.",
    heroImage: {
      src: "/images/areas/peterborough.webp", // replace with a Peterborough city image later
      alt: "Peterborough city centre and cathedral area, part of the PE postcode coverage for EZO Plumbing and Heating",
    },
  },
  {
    slug: "worcester",
    name: "Worcester",
    region: "West Midlands",
    headline: "Plumbers in Worcester – WR Postcode Leaks & Blockages",
    description:
      "Fast-response plumbers for Worcester WR postcodes, handling kitchen and bathroom leaks, blocked toilets and drains, and general plumbing repairs for homeowners and landlords.",
    heroImage: {
      src: "/images/areas/worcester.jpg", // replace with Worcester city image
      alt: "Worcester riverside and cathedral area served by EZO Plumbing and Heating",
    },
  },
  {
    slug: "oxford",
    name: "Oxford",
    region: "East Midlands",
    headline: "Plumbers in Oxford – OX Postcode Emergency & General Plumbing",
    description:
      "Covering Oxford OX postcodes with emergency plumbing, leak repairs, blocked toilets and drains, and bathroom plumbing projects with clear, upfront communication.",
    heroImage: {
      src: "/images/areas/oxford.jpg", // replace with Oxford city image
      alt: "Oxford skyline with historic university buildings in the OX postcode service area for EZO Plumbing and Heating",
    },
  },
  {
    slug: "luton",
    name: "Luton",
    region: "London",
    headline: "Plumber in Luton – LU Postcode Emergency Callouts",
    description:
      "EZO Plumbing and Heating helps Luton LU postcodes with emergency leaks, no-water issues, blocked toilets and drains, and everyday plumbing repairs.",
    heroImage: {
       src: "/images/areas/luton.webp", // replace with Luton city image
      alt: "Luton town centre in the LU postcode area covered by EZO Plumbing and Heating",
    },
  },
  {
    slug: "hemel-hempstead",
    name: "Hemel Hempstead",
    region: "London",
    headline:
      "Plumbers in Hemel Hempstead – HP Postcodes Plumbing & Heating",
    description:
      "Supporting Hemel Hempstead HP postcodes with leak detection, pipe and radiator repairs, blocked toilets and sinks, and small bathroom plumbing projects.",
    heroImage: {
      src: "/images/areas/hemel.jpg", // replace with Hemel Hempstead image
      alt: "Hemel Hempstead town centre in the HP postcode area served by EZO Plumbing and Heating",
    },
  },
  {
    slug: "st-albans",
    name: "St Albans",
    region: "London",
    headline: "Plumbers in St Albans – AL Postcode Plumbing & Heating",
    description:
      "Local-style service for St Albans AL postcodes, including emergency callouts for leaks and overflows, blocked toilets and drains, and everyday plumbing repairs.",
    heroImage: {
      src: "/images/areas/st-albans.jpg", // replace with St Albans city image
      alt: "St Albans city centre with cathedral in the AL postcode area covered by EZO Plumbing and Heating",
    },
  },
  {
    slug: "slough",
    name: "Slough",
    region: "London",
    headline: "Plumbers in Slough – SL Postcode Leaks & Blockages",
    description:
      "EZO Plumbing and Heating supports Slough SL postcodes with rapid response for leaks, blocked toilets and drains, and general plumbing repairs for homes and landlords.",
    heroImage: {
      src: "/images/areas/slough.png", // replace with Slough city image
      alt: "Slough town centre streets in the SL postcode area served by EZO Plumbing and Heating",
    },
  },
];
