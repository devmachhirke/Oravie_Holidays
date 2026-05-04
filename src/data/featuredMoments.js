/**
 * @file featuredMoments.js
 * @description Destination circles for the Featured Moments carousel.
 */

export const FEATURED_MOMENTS = [
  {
    id: 'kasol',
    label: 'KASOL',
    img: 'https://69f1dcc61c78705e2c4ae10e.imgix.net/Manikaran%20Sahib%20KASOL.jfif.jpeg?w=300&q=80',
    alt: 'Kasol',
  },
  {
    id: 'kalsubai',
    label: 'KALSUBAI',
    img: 'https://69f1dcc61c78705e2c4ae10e.imgix.net/kalsubai%20peak.jfif.jpeg?w=300&q=80',
    alt: 'Kalsubai',
  },
  {
    id: 'konkan',
    label: 'KONKAN',
    img: 'https://69f1dcc61c78705e2c4ae10e.imgix.net/Nature.jfif.jpeg?w=300&q=80',
    alt: 'Konkan',
  },
  {
    id: 'kerala',
    label: 'KERALA',
    img: 'https://69f1dcc61c78705e2c4ae10e.imgix.net/Kerala%20Backwaters%20Serenity.jfif.jpeg?w=300&q=80',
    alt: 'Kerala',
  },
  {
    id: 'goa',
    label: 'GOA',
    img: 'https://69f1dcc61c78705e2c4ae10e.imgix.net/Palolem%20Beach,%20?w=300&q=80',
    alt: 'Goa',
  },
  {
    id: 'manali',
    label: 'MANALI',
    img: 'https://69f1dcc61c78705e2c4ae10e.imgix.net/_Manali%20Magic_%20Stunning%20Winter%20Snowscapes%20&%20Vibrant%20Summer%20Vistas%20_.jfif.jpeg?w=300&q=80',
    alt: 'Manali',
  },
  {
    id: 'kedarnath',
    label: 'KEDARNATH',
    img: 'https://69f1dcc61c78705e2c4ae10e.imgix.net/Kedarnath%20Temple%20Divine%20View%20%F0%9F%95%89%EF%B8%8F%20_%20Himalayan%20Beauty%20&%20Mahadev%20Blessings.jfif.jpeg?w=300&q=80',
    alt: 'Kedarnath',
  },
  {
    id: 'rajasthan',
    label: 'RAJASTHAN',
    img: 'https://69f1dcc61c78705e2c4ae10e.imgix.net/Pink%20city%20Jaipur%20Rajasthan%20%E2%9D%A4%EF%B8%8F%F0%9F%8C%81.jfif.jpeg?w=300&q=80',
    alt: 'Rajasthan',
  },
];

export const BOOKING_DESTINATIONS = [
  'Manali', 'Kerala', 'Goa', 'Kokan', 'Kashmir',
];

export const BOOKING_MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];

export const BOOKING_GROUPS = [
  { label: 'Solo', subGroups: null },
  { label: 'Couple', subGroups: null },
  { label: 'Family', subGroups: ['Family (3–4)', 'Family (5–7)', 'Extended Family (8+)'] },
  {
    label: 'Group',
    subGroups: ['Small Group (3–10)', 'Medium Group (11–20)', 'Large Group (21–50)', 'Corporate Group (50+)'],
  },
];
