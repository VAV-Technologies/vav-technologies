// Centralized Unsplash URL constants
// Single source of truth for all image URLs used across the site

export const IMAGES = {
  // Hero backgrounds
  heroes: {
    home: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    company: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    about: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80",
    contact: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80",
  },

  // Home page
  home: {
    trust: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
  },

  // About page
  about: {
    story: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },

  // Our companies (cards + company page)
  companies: {
    acfi: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    nobridge: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
} as const;
