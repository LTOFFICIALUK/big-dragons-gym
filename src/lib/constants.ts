export const SITE_URL = "https://bigdragonsgym.co.uk";

export const BUSINESS = {
  name: "Big Dragons Gym",
  address: {
    street: "Jerusalem Chapel, 32 High Street",
    locality: "Blaenau Ffestiniog",
    postalCode: "LL41 3AL",
    country: "United Kingdom",
  },
  phone: "+447940125381",
  phoneDisplay: "+44 7940 125381",
  hours: "24/7",
  facebook: "https://www.facebook.com/p/Big-Dragons-Gym-61558675053886/",
  instagram: "https://www.instagram.com/big_dragon_gym/",
  whatsapp: "https://wa.me/447940125381",
  geo: {
    lat: 52.9948,
    lng: -3.9384,
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.5!2d-3.9384!3d52.9948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486522e8c8c8c8c9%3A0x8c8c8c8c8c8c8c8c!2s32%20High%20St%2C%20Blaenau%20Ffestiniog%20LL41%203AL!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk",
} as const;

export const IMAGES = {
  hero: "/media/gym-hero.jpg",
  gymFloor: "/media/gym-floor.jpg",
  personalTraining: "/media/pt-coaching.jpg",
  nutrition: "/media/nutrition.jpg",
  membership: "/media/gym-247.jpg",
  logo: "/media/logo-crest.jpg",
  brand: "/media/gym-brand.jpg",
} as const;

export const SOCIAL_POSTS = [
  {
    id: "post-1",
    image: "/media/gym-hero.jpg",
    captionKey: "post1" as const,
    href: "https://www.instagram.com/big_dragon_gym/",
  },
  {
    id: "post-2",
    image: "/media/pt-coaching.jpg",
    captionKey: "post2" as const,
    href: "https://www.instagram.com/big_dragon_gym/",
  },
  {
    id: "post-3",
    image: "/media/gym-floor.jpg",
    captionKey: "post3" as const,
    href: "https://www.instagram.com/big_dragon_gym/",
  },
] as const;
