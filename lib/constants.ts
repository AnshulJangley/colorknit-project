export const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery',  href: '/gallery' },
  { label: 'About',    href: '/about' },
  { label: 'Blog',     href: '/blog' },
  { label: 'Contact',  href: '/contact' },
]

export const SERVICES = [
  {
    id: 1,
    title: 'Full Wedding Planning',
    description: 'End-to-end wedding management from concept to execution. We handle every detail so you can enjoy every moment.',
    icon: 'Heart',
    category: 'Planning',
    image: '/images/services/srv-planning.jpg',
  },
  {
    id: 2,
    title: 'Decor & Florals',
    description: 'Breathtaking decor crafted with premium florals, drapes, and lighting that transforms any venue into paradise.',
    icon: 'Flower2',
    category: 'Decor',
    image: '/images/services/srv-decor.jpg',
  },
  {
    id: 3,
    title: 'Catering Coordination',
    description: 'Curated menus from Pune\'s finest caterers. From traditional thalis to global cuisines — every palate satisfied.',
    icon: 'UtensilsCrossed',
    category: 'Catering',
    image: '/images/services/srv-catering.jpg',
  },
  {
    id: 4,
    title: 'Photography & Videography',
    description: 'Cinematic storytelling by our award-winning photographers. Every smile, every tear, preserved forever.',
    icon: 'Camera',
    category: 'Photography',
    image: '/images/services/srv-photo.jpg',
  },
  {
    id: 5,
    title: 'Destination Weddings',
    description: 'From Goa beaches to Rajasthan palaces — we craft extraordinary destination weddings across India and abroad.',
    icon: 'MapPin',
    category: 'Destination',
    image: '/images/services/srv-destination.jpg',
  },
  {
    id: 6,
    title: 'Honeymoon Planning',
    description: 'Your love story continues. We plan bespoke honeymoon experiences — romantic getaways tailored just for you.',
    icon: 'Plane',
    category: 'Honeymoon',
    image: '/images/services/srv-honeymoon.jpg',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya & Rahul Sharma',
    type: 'Full Wedding Planning',
    date: 'February 2024',
    review: 'ColorKnit made our wedding day absolutely magical. Every detail was perfect — from the stunning floral arch to the seamless coordination. We didn\'t have to worry about a single thing!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Anjali & Vikram Patel',
    type: 'Destination Wedding - Goa',
    date: 'December 2023',
    review: 'We wanted a beach wedding in Goa and ColorKnit delivered beyond our dreams. The sunset ceremony with 200 guests was flawlessly executed. Our guests still talk about it!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sneha & Arjun Desai',
    type: 'Decor & Photography',
    date: 'November 2023',
    review: 'The decor was straight out of a fairytale. The marigold mandap combined with fairy lights was breathtaking. And the photography team captured emotions I didn\'t even know existed.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80',
    rating: 5,
  },
  {
    id: 4,
    name: 'Meera & Karan Joshi',
    type: 'Full Wedding Planning',
    date: 'January 2024',
    review: 'Professional, creative, and incredibly warm. The ColorKnit team became like family. They understood our vision instantly and elevated it beyond what we imagined. 10/10!',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80',
    rating: 5,
  },
  {
    id: 5,
    name: 'Riya & Suresh Kulkarni',
    type: 'Catering + Decor',
    date: 'March 2024',
    review: 'The food was outstanding — 5 different cuisines for 400 guests and everything was hot, fresh, and delicious. The decor team transformed our hall into something from a movie set.',
    avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&q=80',
    rating: 5,
  },
]

export const STATS = [
  { number: 500, suffix: '+', label: 'Weddings Planned' },
  { number: 12,  suffix: '',  label: 'Years of Excellence' },
  { number: 50,  suffix: '+', label: 'Trusted Vendors' },
  { number: 98,  suffix: '%', label: 'Happy Couples' },
]

export const HOW_IT_WORKS = [
  { step: 1, title: 'Initial Consultation', desc: 'We sit down with you (virtually or in person) to understand your vision, budget, and dream wedding.', icon: 'MessageCircle' },
  { step: 2, title: 'Custom Planning',       desc: 'Our team crafts a bespoke wedding plan with timelines, vendor shortlists, and mood boards.', icon: 'ClipboardList' },
  { step: 3, title: 'Vendor Coordination',   desc: 'We coordinate with 50+ verified vendors — caterers, decorators, photographers and more.', icon: 'Users' },
  { step: 4, title: 'Your Perfect Day',      desc: 'On your big day, our team is on-ground ensuring everything runs flawlessly while you celebrate.', icon: 'Sparkles' },
]

export const PACKAGES = [
  {
    name: 'Silver',
    tagline: 'Perfect Start',
    color: 'light',
    features: [
      'Venue Coordination',
      'Basic Decor Setup',
      'Catering Consultation',
      'Photography (4 hours)',
      'Guest Management',
      'Day-of Coordination',
      '1 Planning Meeting',
      'Emergency Support',
    ],
  },
  {
    name: 'Gold',
    tagline: 'Most Popular',
    color: 'brand',
    featured: true,
    features: [
      'Full Wedding Planning',
      'Premium Floral Decor',
      'Curated Catering (200 pax)',
      'Photography + Video (Full Day)',
      'Bridal Makeup Coordination',
      'Guest Accommodation Help',
      'Mehendi & Sangeet Planning',
      'Unlimited Planning Meetings',
    ],
  },
  {
    name: 'Platinum',
    tagline: 'Ultimate Luxury',
    color: 'dark',
    features: [
      'Destination Wedding Planning',
      'Luxury Decor & Florals',
      'Celebrity Chef Catering',
      'Cinematography + Drone',
      'Celebrity Entertainment',
      '5-star Accommodation Setup',
      'Honeymoon Planning Included',
      'Dedicated Personal Planner',
    ],
  },
]

export const GALLERY_IMAGES = [
  { id: 1,  src: '/images/gallery/7c643820d3f45b8dd6a7d48d7373c853.jpg', category: 'Decor' },
  { id: 2,  src: '/images/gallery/9baa9fabed9356f3b6e4efefcffbb2c2.jpg', category: 'Ceremony' },
  { id: 3,  src: '/images/gallery/aba07d024ce802990c18ac2d290d05df.jpg', category: 'Decor' },
  { id: 4,  src: '/images/gallery/0712d9ec4b206cadfd67bc315d6ba13a.jpg', category: 'Ceremony' },
  { id: 5,  src: '/images/gallery/d42ce7494282039ff60c76a986856e17.jpg', category: 'Reception' },
  { id: 6,  src: '/images/gallery/g9.webp',   category: 'Reception' },
  { id: 7,  src: '/images/gallery/g10.webp',  category: 'Ceremony' },
  { id: 8,  src: '/images/gallery/g11.webp',  category: 'Decor' },
  { id: 9,  src: '/images/gallery/g12.webp',  category: 'Portraits' },
  { id: 10, src: '/images/gallery/g13.webp',  category: 'Ceremony' },
  { id: 11, src: '/images/gallery/g14.jpg',   category: 'Decor' },
  { id: 12, src: '/images/gallery/g15.jpg',   category: 'Reception' },
  { id: 13, src: '/images/gallery/g16.jpg',   category: 'Portraits' },
  { id: 14, src: '/images/gallery/g17.jpg',   category: 'Ceremony' },
  { id: 15, src: '/images/gallery/be180255541b90e7a082177dec7c0544.jpg', category: 'Decor' },
  { id: 16, src: '/images/gallery/a1cf500eac955cc7ce8b36e8b862c44b.jpg', category: 'Destination' },
  { id: 17, src: '/images/gallery/g20.jpg',   category: 'Decor' },
  { id: 18, src: '/images/gallery/g21.jpg',   category: 'Reception' },
  { id: 19, src: '/images/gallery/g22.jpg',   category: 'Decor' },
  { id: 20, src: '/images/gallery/g23.webp',  category: 'Ceremony' },
  { id: 21, src: '/images/gallery/095d205c7fae06567df80d7cc714a4a7.jpg', category: 'Destination' },
  { id: 22, src: '/images/gallery/6d82292ef7c4d5d2c16a7b4a65e23f39.jpg', category: 'Ceremony' },
]

export const TEAM = [
  { name: 'Priya Kulkarni',  role: 'Founder & Lead Planner',     avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80', bio: '12+ years crafting luxury weddings across Maharashtra.' },
  { name: 'Rohan Mehta',     role: 'Creative Director',           avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80', bio: 'Award-winning designer with a flair for floral artistry.' },
  { name: 'Ananya Singh',    role: 'Vendor Relations Head',       avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&q=80', bio: 'Manages our 50+ vetted vendor network across India.' },
  { name: 'Kabir Deshmukh',  role: 'Destination Wedding Expert',  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80', bio: 'Specializes in destination weddings from Goa to Jaipur.' },
]

export const FAQ = [
  { q: 'How far in advance should I book?', a: 'We recommend booking at least 6–12 months in advance for full wedding planning. For destination weddings, 12–18 months is ideal to secure the best venues and vendors.' },
  { q: 'Do you work within our budget?', a: 'Absolutely. We customize every plan to maximize value within your budget. Our packages are flexible and tailored to your needs. No hidden charges — ever.' },
  { q: 'Can we meet before finalizing?', a: 'Yes! We offer a free 60-minute consultation — in-person in Pune or via video call — before you commit to anything.' },
  { q: 'Do you handle outstation weddings?', a: 'Yes. We regularly plan weddings across Maharashtra and destination weddings across India. Travel charges apply for locations outside Pune.' },
  { q: 'What makes ColorKnit different?', a: 'We combine professional expertise with genuine warmth. We treat every wedding as if it were our own, with dedicated planners, transparent planning, and 24/7 availability on your wedding day.' },
  { q: 'Do you provide wedding day coordination?', a: 'Every package includes day-of coordination. Our team is on-ground from setup to send-off, managing vendors, timeline, and emergencies so you can be fully present.' },
]

export const BLOG_POSTS = [
  {
    id: 1,
    title: '10 Wedding Decor Trends Dominating 2024 in Pune',
    excerpt: 'From maximalist marigold mandaps to minimalist all-white affairs — here are the trends our brides are loving this season.',
    category: 'Trends',
    date: 'March 10, 2024',
    readTime: '5 min read',
    image: '/images/services/srv-decor.jpg',
    slug: 'wedding-decor-trends-2024',
  },
  {
    id: 2,
    title: 'How to Plan a Destination Wedding in Goa on a Budget',
    excerpt: 'Goa weddings don\'t have to break the bank. Our expert guide reveals the secrets to planning a stunning beach wedding without compromise.',
    category: 'Planning',
    date: 'February 28, 2024',
    readTime: '8 min read',
    image: '/images/services/srv-destination.jpg',
    slug: 'destination-wedding-goa-budget',
  },
  {
    id: 3,
    title: 'The Ultimate Wedding Checklist: 12 Months to Your Big Day',
    excerpt: 'Planning a wedding is overwhelming. This month-by-month checklist from our senior planners will keep you on track — stress-free.',
    category: 'Guides',
    date: 'February 15, 2024',
    readTime: '10 min read',
    image: '/images/services/srv-planning.jpg',
    slug: 'wedding-checklist-12-months',
  },
]

export const WA_NUMBER = '919011026236'
export const WA_MESSAGE = 'Hi%20ColorKnit!%20I%20would%20like%20to%20plan%20my%20event%20with%20you.%20Please%20guide%20me.'
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

export const CONTACT_INFO = {
  phone:    '+91 9271114024',
  phoneRaw: 'tel:+919271114024',
  whatsapp: '+91 9011026236',
  email:    'info@colorknitevents.com',
  address:  'Flat No. 303, 3rd Floor, Fortune House, Baner - Pashan Link Rd, Baner, Pune, Maharashtra 411045',
  hours:    'Mon–Sat: 10AM – 7PM',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0!2d73.7742!3d18.5592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e4b9c7d0f7%3A0x1234567890abcdef!2sFortune%20House%2C%20Baner%20-%20Pashan%20Link%20Rd%2C%20Baner%2C%20Pune%2C%20Maharashtra%20411045!5e0!3m2!1sen!2sin!4v1700000000000',
}
