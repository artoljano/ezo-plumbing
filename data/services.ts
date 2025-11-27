// data/services.ts

export type Service = {
  id: string
  slug: string
  name: string
  short: string
  description: string
}

export const SERVICES: Service[] = [
  {
    id: "emergency",
    slug: "emergency-plumbing",
    name: "24/7 Emergency Plumbing",
    short: "Burst pipes, major leaks, overflowing toilets and urgent issues.",
    description:
      "When water is going where it shouldn’t, EZO responds fast. Late-night bursts, major leaks, overflowing toilets and urgent issues that can’t wait until morning.",
  },
  {
    id: "leaks",
    slug: "leaks-pipe-repairs",
    name: "Leaks & Pipe Repairs",
    short: "Hidden leaks, dripping taps and damaged pipework found and fixed.",
    description:
      "Slow drips, mysterious damp patches or obvious pipe damage – we trace the source and repair it properly, not just patch over the problem.",
  },
  {
    id: "bathrooms",
    slug: "bathroom-plumbing",
    name: "Bathroom Plumbing & Refurbs",
    short: "New bathrooms, shower changes and tidy pipe rerouting.",
    description:
      "From swapping a bath for a walk-in shower to full bathroom refurbs, we handle the pipework, waste and fixtures so everything runs cleanly and reliably.",
  },
  {
    id: "blockages",
    slug: "blockages-drains",
    name: "Blockages & Drains",
    short: "Blocked sinks, showers, baths and toilets cleared cleanly.",
    description:
      "Blocked sinks, slow showers and stubborn toilets cleared with minimum mess. We aim to get water flowing again and reduce the chance of repeat issues.",
  },
  {
    id: "radiators",
    slug: "radiators-heating-pipework",
    name: "Radiators & Heating Pipework",
    short: "Radiator moves, new radiators and heating pipe adjustments.",
    description:
      "Need a radiator moved, added or upgraded? We take care of the wet-side pipework and can work with your heating engineer or Gas Safe engineer where needed.",
  },
  {
    id: "landlords",
    slug: "landlords-letting-agents",
    name: "Landlords & Letting Agents",
    short: "Reliable callouts with clear updates and photos after each job.",
    description:
      "EZO works with landlords and agents who need quick, reliable help for their tenants – including direct tenant contact, photos and short job notes.",
  },
]
