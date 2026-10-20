export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  includes: string[];
  bestFor: string;
  icon: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "home-cleaning",
    name: "Home cleaning",
    short: "A calm, consistent reset for the rooms you live in most.",
    description: "Our signature recurring clean keeps the everyday details handled, from kitchen surfaces to the last cushion fluffed.",
    includes: ["Kitchen and bath sanitizing", "Dusting, vacuuming and mopping", "Bed linen change on request", "High-touch surface wipe-down"],
    bestFor: "Busy households, recurring upkeep, and anyone who wants their weekend back.",
    icon: "home",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "deep-cleaning",
    name: "Deep cleaning",
    short: "The detail-led refresh for when good enough is not enough.",
    description: "We go beyond the routine to reach the edges, build-up, and overlooked spaces that make a room feel truly new.",
    includes: ["Baseboards, doors and trim", "Inside reachable cabinets", "Fixtures, grout and detail work", "Appliance exteriors and splash zones"],
    bestFor: "Seasonal resets, first visits, and homes ready for a fresh chapter.",
    icon: "sparkles",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "office-cleaning",
    name: "Office & commercial",
    short: "A polished, healthy environment your team and clients can feel.",
    description: "Flexible plans for studios, offices, retail spaces, and hospitality teams that care about the details.",
    includes: ["Workstations and shared surfaces", "Breakroom and restroom care", "Floor and entryway maintenance", "After-hours scheduling"],
    bestFor: "Small teams, creative studios, clinics, and guest-facing spaces.",
    icon: "building",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "move-cleaning",
    name: "Move-in / move-out",
    short: "A clean handoff for the next set of keys.",
    description: "Take the stress out of moving day with a detailed clean built around empty rooms, deadlines, and final walkthroughs.",
    includes: ["Inside cabinets and closets", "Kitchen appliances and surfaces", "Bathrooms from tile to fixtures", "Final sweep for inspection day"],
    bestFor: "Renters, homeowners, realtors, and property managers.",
    icon: "key",
    image: "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "carpet-upholstery",
    name: "Carpet & upholstery",
    short: "A softer, brighter finish for the surfaces under daily life.",
    description: "Refresh high-use fabrics with careful extraction and fabric-safe methods that bring back the original comfort.",
    includes: ["Pre-treatment and spot work", "Hot-water extraction", "Sofa, chair and ottoman cleaning", "Fast-dry finishing guidance"],
    bestFor: "Pet homes, high-traffic rooms, move-outs, and special occasions.",
    icon: "sofa",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "post-construction",
    name: "Post-construction",
    short: "From final dust to ready-to-open, without the scramble.",
    description: "We turn a finished build into a finished space with detail cleaning that respects new materials and tight timelines.",
    includes: ["Fine dust removal", "Windows, frames and tracks", "Adhesive and paint-spot detail", "Final presentation clean"],
    bestFor: "Builders, designers, landlords, and commercial handovers.",
    icon: "hard-hat",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
  },
];

export const testimonials = [
  { quote: "The kind of clean where you notice it before you can explain it. Our whole home felt lighter.", name: "Maya R.", role: "East Austin homeowner", initials: "MR", tone: "aqua" },
  { quote: "They were early, thoughtful, and incredibly thorough. The team handed our studio back better than we left it.", name: "Jordan K.", role: "Founder, Northline Studio", initials: "JK", tone: "coral" },
  { quote: "Clean Slate made move-out day feel manageable. We got our deposit back and our Saturday back too.", name: "Sam T.", role: "Mueller renter", initials: "ST", tone: "navy" },
];

export const gallery = [
  { title: "Kitchen reset", tag: "Deep clean", image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=85", before: "Built-up splatter and dull surfaces", after: "Bright, ready-to-cook finish" },
  { title: "Living room refresh", tag: "Home clean", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85", before: "High-traffic dust and fabric fatigue", after: "Soft, settled and guest-ready" },
  { title: "Studio handoff", tag: "Commercial", image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=85", before: "End-of-week workday build-up", after: "A polished Monday morning" },
  { title: "Bathroom detail", tag: "Deep clean", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85", before: "Mineral marks and tired grout", after: "Clear fixtures and crisp tile" },
  { title: "New keys", tag: "Move-in", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85", before: "The last owner's fingerprints", after: "A clean start from day one" },
  { title: "Carpet revive", tag: "Fabric care", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1200&q=85", before: "Pet hair and high-traffic shadows", after: "Fresh texture and renewed color" },
];

export const faqs = [
  { q: "Do I need to be home during the clean?", a: "Not at all. Many clients share a smart-lock code or leave a key with a neighbor. We confirm arrival and send a quick completion note when we are done." },
  { q: "Do you bring your own products and equipment?", a: "Yes. We arrive with professional supplies and equipment. If you prefer fragrance-free, pet-safe, or specific products, tell us in the notes and we will plan around them." },
  { q: "How do you price a cleaning?", a: "We use the size, service type, current condition, and any special requests to build a clear quote. Recurring plans receive the best value, and there are no surprise add-ons." },
  { q: "Are you insured and background-checked?", a: "Yes. Clean Slate Co. is fully insured, and every team member completes identity verification and background screening before joining the field team." },
  { q: "Can I book a recurring clean?", a: "Absolutely. Weekly, every two weeks, and monthly rhythms are available. We will help you choose the cadence that fits your home and schedule." },
  { q: "What is your cancellation policy?", a: "We ask for 24 hours notice when plans change. That gives us enough time to offer the appointment to another client and keeps scheduling fair for everyone." },
];

export const pricing = [
  { name: "Basic", eyebrow: "The steady reset", price: "From $119", detail: "Best for recurring upkeep", features: ["Kitchen + 1.5 baths", "Living areas and bedrooms", "Vacuum + mop floors", "High-touch surfaces"], tone: "light" },
  { name: "Standard", eyebrow: "The full refresh", price: "From $189", detail: "Our most requested clean", features: ["Everything in Basic", "Detailed kitchen + baths", "Baseboards and trim", "Inside microwave", "Bed linen change"], tone: "featured" },
  { name: "Premium", eyebrow: "The total reset", price: "From $289", detail: "For big moments and big spaces", features: ["Everything in Standard", "Inside cabinets", "Interior windows", "Fridge exterior", "Priority scheduling"], tone: "dark" },
];

export const blogPosts = [
  { slug: "reset-your-kitchen-in-20-minutes", category: "Kitchen", title: "The 20-minute kitchen reset that actually sticks", excerpt: "A simple order of operations for clearing the visual noise and keeping the heart of your home calm.", date: "May 14, 2026", image: gallery[0].image },
  { slug: "how-often-should-you-deep-clean", category: "Routine", title: "How often should you deep clean? A practical guide", excerpt: "What to do weekly, seasonally, and before a big life moment—without adding another full-time job to your list.", date: "April 28, 2026", image: gallery[1].image },
  { slug: "move-out-cleaning-checklist", category: "Moving", title: "The calm move-out cleaning checklist", excerpt: "The overlooked details that help you pass inspection, protect your deposit, and hand over a home you feel proud of.", date: "April 02, 2026", image: gallery[4].image },
];

export const contact = {
  phone: "+1 (512) 555-0148",
  email: "hello@cleanslate.example",
  whatsapp: "15125550148",
  address: "1101 East 5th Street, Austin, TX 78702",
  hours: "Mon–Sat, 8:00 am–6:00 pm",
};
