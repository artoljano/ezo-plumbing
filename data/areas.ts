// data/areas.ts

export type Area = {
  slug: string
  name: string
  region: "West Midlands" | "East Midlands" | "London"
  headline: string
  description: string
}

export const AREAS: Area[] = [
  {
    slug: "birmingham",
    name: "Birmingham",
    region: "West Midlands",
    headline: "Local Plumbers in Birmingham – Fast, Reliable, 24/7",
    description:
      "We provide emergency and planned plumbing services across Birmingham – from burst pipes and leaking toilets to full bathroom installations and boiler work.",
  },
  {
    slug: "coventry",
    name: "Coventry",
    region: "West Midlands",
    headline: "Plumber in Coventry – Same-Day Service Available",
    description:
      "Serving all of Coventry with fast response times for leaks, blockages, bathroom plumbing and landlord repairs.",
  },
  {
    slug: "wolverhampton",
    name: "Wolverhampton",
    region: "West Midlands",
    headline: "Trusted Plumbers in Wolverhampton",
    description:
      "Dependable local plumbers for homes and landlords in Wolverhampton and surrounding areas.",
  },
  {
    slug: "nottingham",
    name: "Nottingham",
    region: "East Midlands",
    headline: "Plumber in Nottingham – Emergency & General Plumbing",
    description:
      "Covering Nottingham with professional plumbing repairs, installations and emergency callouts.",
  },
  {
    slug: "leicester",
    name: "Leicester",
    region: "East Midlands",
    headline: "Leicester Plumbing Services – 24/7 Emergency Callouts",
    description:
      "From burst pipes to full bathroom refurbishments, we help homeowners and landlords across Leicester.",
  },
  {
    slug: "derby",
    name: "Derby",
    region: "East Midlands",
    headline: "Plumber in Derby – Local, Friendly, Professional",
    description:
      "Your local plumber in Derby for leaks, blockages, repairs and new installations.",
  },
  {
    slug: "london",
    name: "London",
    region: "London",
    headline: "Plumber in London – 24/7 Emergency Plumbing & Repairs",
    description:
      "Fast-response plumbers covering Greater London with emergency callouts and planned plumbing work.",
  },
]
