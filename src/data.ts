import { Service, GalleryItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'hair-styling',
    name: 'Hair Styling',
    description: 'From editorial cuts to precision styling, our masters define your signature look and enhance natural texture.',
    category: 'Hair',
    tag: 'STYLING & CUTS',
    price: '₹2,500+',
    duration: '60 mins',
    iconName: 'Scissors',
  },
  {
    id: 'luxury-spa',
    name: 'Luxury Spa',
    description: "Rejuvenating head oil rituals and customized back massages designed to restore peace to your mind and body.",
    category: 'Spa',
    tag: 'REJUVENATION',
    price: '₹3,200+',
    duration: '90 mins',
    iconName: 'Spa',
  },
  {
    id: 'artisanal-color',
    name: 'Artisanal Color',
    description: 'Bespoke balayage, dynamic highlights, and corrective color using organic, damage-free formulas.',
    category: 'Color',
    tag: 'COLOR ARTISTRY',
    price: '₹5,500+',
    duration: '120 mins',
    iconName: 'Palette',
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    description: 'Exquisite bridal transformations that capture the eternal, glowing confidence needed for your special day.',
    category: 'Makeup',
    tag: 'BRIDAL COUTURE',
    price: '₹25,000+',
    duration: '180 mins',
    iconName: 'Sparkles',
  },
  {
    id: 'advanced-facials',
    name: 'Advanced Facials',
    description: 'Targeted moisture skincare treatments using cutting-edge botanical infusions and dermal technology.',
    category: 'Skin',
    tag: 'SKINCARE',
    price: '₹4,000+',
    duration: '75 mins',
    iconName: 'Smile',
  },
  {
    id: 'body-therapy',
    name: 'Body Therapy',
    description: 'Full-body organic exfoliation, mineral-mud wraps, and absolute hydration treatments for velvet-smooth skin.',
    category: 'Body',
    tag: 'BODY GLOW',
    price: '₹4,500+',
    duration: '80 mins',
    iconName: 'HeartPulse',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'priya',
    quote: "The attention to detail at Strivenii is unparalleled. I've never had a stylist take the time to understand my hair texture so deeply. Truly Mumbai's best salon.",
    author: 'Priya Sharma',
    role: 'LIFESTYLE BLOGGER',
    rating: 5,
  },
  {
    id: 'ananya',
    quote: "My bridal makeover was exactly what I dreamed of. They made me feel like royalty and the makeup lasted beautifully through all the ceremonies.",
    author: 'Ananya Malhotra',
    role: 'BRIDE',
    rating: 5,
  },
  {
    id: 'rohan',
    quote: "The spa rituals are a lifesaver. It's the only place in the city where I can truly disconnect and recharge in a completely hygienic environment.",
    author: 'Rohan Verma',
    role: 'CREATIVE DIRECTOR',
    rating: 5,
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHyxT98TmRlqMcM_-7ShL0hqAdtNuOCC8w6MICXAPhph1PTx9ze2GXVYoBh0erwSEh4veRcA5OlrAc0ad_vf08Dt7E_RKRhbt9vTfyVjMTz6ZKgpGL2peSSuyZ8wOvK882wzodOelqxZ4THXJNgIIqT4BDEl3aiMCpVYH0Y3oz_H_q3GPCOF3akKGSHhfyFa3gmAmnYj2oQFxtfhf6CaAeNLNPogjNWOj3sRN3fCnMch7dXHol8xJ14xOpNWr9u_e22PtUOIAMnw',
    altText: 'Ash-blonde balayage with voluminous waves in a high-end salon',
    title: 'Editorial Ash-Blonde Balayage',
    category: 'Color & Styling'
  },
  {
    id: 'gal-2',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC52C-_PmR2KbcurFe3_JKv5ei8oAlU9dudHQNM5bls5TRLALKNNXgGJzzyxlq8GSbhOAIZq3Fvgt8L7LRhezSMmJ_zdaNB_az2KmKkhg8urWfIWMW6aphjkYVQ-2S-mXHcYCZM-Cy8TyFBFUxTP797axS0DxnqFEQgUldW91zP0AwnvHpGd-si5i4b7-YuTEYb5Tsn6vapyKmzBaQMSy3ScVeynAQ2DRMIUYs6kO-o5wNPcO-1b7nS-mfD-Q8xFbHINnG8ATsyTg',
    altText: 'Sophisticated vintage hair updo crafted by expert stylist',
    title: 'Polished Bridal Updo',
    category: 'Styling'
  },
  {
    id: 'gal-3',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFgJFueEHnONE7s-VDv3YOC9OsJYYeRQl7kEJv1_riNBVN3djhN6JQaLaL0Ipj-N18TCg5WNkSF0UHbl2ffccb2A90hj6CDP13YAf7HRyIF0W8ATL39fpO5olVZJpUv447KkuUBer5dcs3Pd4WcXrOMOH2Grg0FUa-m-40eomz8uofaPnBGWGJlERVCu3otqU5bniu_FrokXLdjOj9uZrnWYddC2SooEp4zNpmTh7STNRBUesuiCF9E-XipvP9DvJ7sO6G2qgAQw',
    altText: 'Tranquil facial spa experience with cooling application',
    title: 'Rejuvenating Infusion Facial',
    category: 'Skincare'
  },
  {
    id: 'gal-4',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9tbtKpDPgO_NImzQCnkzfIDSu0TlLn8Po4yp-s6HhPsyg6EmH8iGi0rKdY-09rhQN0F3R8sbDoEX0eBBsTKmurtF0gNHZs5JKeJCKw2lO3dAcT1lrr2RS5SOJYqZKQwEXMlP_q2eK0GyUOLLir7-NikX6SwKK8P8ZsHbUuLSERVsTzBFJWJU23qNiNPJjw5twV_eFZPU5iRz-9W9ZHqxDkCfXXFFbvmvJN_WED77ZzPLHjVtFydEhN8EctmDj9qmrk0CiYiT2kg',
    altText: 'Deep-brunette sleek glossy hair with rich metallic shimmer',
    title: 'Glossy Espresso Brunette',
    category: 'Coloring'
  },
  {
    id: 'gal-5',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgDgVoMLiZpiIxu2BiBXdiLpnhAFMTPRVVpozOz0Ny_Mf8vlqyduafgF1pW6keSGFSBXavLsxAQgv5LUhwHIowlB9TliDyH1L9sFdgie0xAD1wbA3U2CYmXS41093PdxL5alZJvFAbXogxDEolGva0UkgxBEh78B8jkvYMzpPumTLHVqLCJrEFGweQgSO0YkhXBgsEjkDZpVHnTjxGoFRPTCyEmAjhpi3i5pNjbX2Z5zpHA7jat4sOMnWUCfI_8GXmlLKN1KGEGA',
    altText: 'Luminous bridal makeup featuring glowing eyes and neutral lips',
    title: 'Divine Royal Bridal Makeup',
    category: 'Makeup'
  }
];
