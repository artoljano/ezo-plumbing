// data/services.ts

export type Service = {
  id: string;
  slug: string;
  name: string;
  short: string;
  description: string;
  heroImage: {
    src: string;
    alt: string;
  };
};

export const SERVICES: Service[] = [
  {
    id: "emergency",
    slug: "emergency-plumbing",
    name: "24/7 Emergency Plumbing",
    short: "Burst pipes, major leaks, overflowing toilets and urgent issues.",
    description:
      "When water is going where it shouldn’t, EZO responds fast. Late-night bursts, major leaks, overflowing toilets and urgent issues that can’t wait until morning.",
    heroImage: {
      src: "/images/ezo-hero-plumber.webp",
      alt: "EZO plumber dealing with an emergency leak in a kitchen",
    },
  },
  {
    id: "leaks",
    slug: "leaks-pipe-repairs",
    name: "Leaks & Pipe Repairs",
    short: "Hidden leaks, dripping taps and damaged pipework found and fixed.",
    description:
      "Slow drips, mysterious damp patches or obvious pipe damage – we trace the source and repair it properly, not just patch over the problem.",
    heroImage: {
      src: "/images/ezo-kitchen-leak.webp",
      alt: "Close-up of EZO plumber repairing a leaking copper pipe under a sink",
    },
  },
  {
    id: "bathrooms",
    slug: "bathroom-plumbing",
    name: "Bathroom Plumbing & Refurbs",
    short: "New bathrooms, shower changes and tidy pipe rerouting.",
    description:
      "From swapping a bath for a walk-in shower to full bathroom refurbs, we handle the pipework, waste and fixtures so everything runs cleanly and reliably.",
    heroImage: {
      src: "/images/ezo-bathroom-plumbing.webp",
      alt: "Modern bathroom installation completed by EZO Plumbing and Heating",
    },
  },
  {
    id: "blockages",
    slug: "blockages-drains",
    name: "Blockages & Drains",
    short: "Blocked sinks, showers, baths and toilets cleared cleanly.",
    description:
      "Blocked sinks, slow showers and stubborn toilets cleared with minimum mess. We aim to get water flowing again and reduce the chance of repeat issues.",
    heroImage: {
      src: "/images/blockage.webp",
      alt: "EZO engineer unblocking a household drain in a bathroom",
    },
  },
  {
    id: "radiators",
    slug: "radiators-heating-pipework",
    name: "Radiators & Heating Pipework",
    short: "Radiator moves, new radiators and heating pipe adjustments.",
    description:
      "Need a radiator moved, added or upgraded? We take care of the wet-side pipework and can work with your heating engineer or Gas Safe engineer where needed.",
    heroImage: {
      src: "/images/heating.webp",
      alt: "EZO plumber adjusting radiator pipework in a living room",
    },
  },
  {
    id: "landlords",
    slug: "landlords-letting-agents",
    name: "Landlords & Letting Agents",
    short: "Reliable callouts with clear updates and photos after each job.",
    description:
      "EZO works with landlords and agents who need quick, reliable help for their tenants – including direct tenant contact, photos and short job notes.",
    heroImage: {
      src: "/images/landlord.webp",
      alt: "EZO engineer talking to a tenant and checking under-sink plumbing",
    },
  },
];
