// Real team data — update bios and socials as needed
export const founder = {
  name:  'Panav Gupta',
  role:  'Founder',
  image: '/images/founder-panav.jpg',
  bio:   'Started KhelSetu after witnessing the gap between children who dream of sport and those who actually have access to it. He drives the vision, strategy, and day-to-day mission of KhelSetu.',
  socials: {
    instagram: 'https://instagram.com/khelsetu_',
    linkedin:  'https://www.linkedin.com/company/khelsetu-in',
    email:     'khelsetu177@gmail.com',
  },
};

export const leadership = [
  {
    name:  'Aarav Aggarwal',
    role:  'Co-Founder',
    image: '/images/cofounder-aarav.jpg',
    bio:   'Co-leads the initiative alongside the founder, helping shape the organisation\'s direction and build the team.',
    socials: { instagram: 'https://instagram.com/khelsetu_', linkedin: 'https://www.linkedin.com/company/khelsetu-in', email: 'khelsetu177@gmail.com' },
  },
  {
    name:  'Aaryav Badhera',
    role:  'Vice President',
    image: '/images/vp-aaryav.jpg',
    bio:   'Oversees day-to-day decision-making and keeps the core team aligned with KhelSetu\'s mission and goals.',
    socials: { instagram: 'https://instagram.com/khelsetu_', linkedin: 'https://www.linkedin.com/company/khelsetu-in', email: 'khelsetu177@gmail.com' },
  },
];

export const coreTeam = [
  {
    name:  'Aaryaman Ojha',
    role:  'Outreach Head',
    image: '/images/outreach-aaryaman.jpg',
    bio:   'Manages community outreach, school partnerships, and donor relations across Jaipur.',
    socials: { instagram: 'https://instagram.com/khelsetu_', linkedin: 'https://www.linkedin.com/company/khelsetu-in', email: 'khelsetu177@gmail.com' },
  },
  {
    name:  'Lakshay Maheshwari',
    role:  'Operations Head',
    image: '/images/operations-lakshay.jpg',
    bio:   'Oversees the end-to-end collection, cleaning, sorting, and redistribution process.',
    socials: { instagram: 'https://instagram.com/khelsetu_', linkedin: 'https://www.linkedin.com/company/khelsetu-in', email: 'khelsetu177@gmail.com' },
  },
  {
    name:  'Daksh Jha',
    role:  'Finance Head',
    image: '/images/finance-daksh.jpg',
    bio:   'Manages KhelSetu\'s budgeting and ensures complete transparency in how funds are used.',
    socials: { instagram: 'https://instagram.com/khelsetu_', linkedin: 'https://www.linkedin.com/company/khelsetu-in', email: 'khelsetu177@gmail.com' },
  },
];

export const logisticsTeam = [
  {
    name:  'Karan Showkatramani',
    role:  'Logistics Head',
    image: '/images/logistics-karan.jpg',
    bio:   'Coordinates equipment pickups, deliveries, and storage across the city.',
    socials: { instagram: 'https://instagram.com/khelsetu_', linkedin: 'https://www.linkedin.com/company/khelsetu-in', email: 'khelsetu177@gmail.com' },
  },
  {
    name:  'Yashraj Sachdev',
    role:  'Logistics Head',
    image: '/images/logistics-yashraj.jpg',
    bio:   'Handles on-ground logistics planning and supports every collection drive.',
    socials: { instagram: 'https://instagram.com/khelsetu_', linkedin: 'https://www.linkedin.com/company/khelsetu-in', email: 'khelsetu177@gmail.com' },
  },
];

// Legacy export kept for backwards compat
export const founderData = {
  id: 'founder-1',
  name:  founder.name,
  role:  founder.role,
  bio:   founder.bio,
  image: founder.image,
  socials: founder.socials,
};
export const teamData = [...leadership, ...coreTeam, ...logisticsTeam].map((m, i) => ({
  id: `member-${i + 1}`,
  name: m.name, role: m.role, bio: m.bio, image: m.image, socials: m.socials,
}));
