export const SITE_URL = "https://bigdragonsgym.co.uk";

export const BUSINESS = {
  name: "Big Dragons Gym",
  address: {
    street: "Jerusalem Chapel, 32 High Street",
    locality: "Blaenau Ffestiniog",
    postalCode: "LL41 3AL",
    country: "United Kingdom",
  },
  primaryContact: {
    name: "Dei",
    phone: "+447940125381",
    phoneDisplay: "+44 7940 125381",
  },
  secondaryContact: {
    name: "Jon",
    phone: "+447415436694",
    phoneDisplay: "+44 7415 436694",
  },
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
  hero: "/media/gym-floor-overview.jpg",
  gymFloor: "/media/free-weights-welsh-flag.jpg",
  personalTraining: "/media/strength-training-area.jpg",
  nutrition: "/media/dumbbell-free-weights.jpg",
  membership: "/media/reception-gym-floor.jpg",
  logo: "/media/logo-crest.jpg",
  brand: "/media/reception-desk.jpg",
} as const;

export const FACILITY_GALLERY = [
  {
    src: "/media/gym-floor-overview.jpg",
    key: "overview",
  },
  {
    src: "/media/free-weights-welsh-flag.jpg",
    key: "freeWeights",
  },
  {
    src: "/media/dumbbell-free-weights.jpg",
    key: "dumbbells",
  },
  {
    src: "/media/strength-training-area.jpg",
    key: "strength",
  },
  {
    src: "/media/resistance-machines.jpg",
    key: "machines",
  },
  {
    src: "/media/gym-interior-cable-area.jpg",
    key: "cables",
  },
  {
    src: "/media/boxing-area.jpg",
    key: "boxing",
  },
  {
    src: "/media/reception-desk.jpg",
    key: "reception",
  },
  {
    src: "/media/reception-gym-floor.jpg",
    key: "welcome",
  },
] as const;

/** ClubRight online membership signup — monthly & weekly plans. */
export const MEMBERSHIP_SIGNUP_URL =
  "https://bigdragonsgym.clubright.co.uk/memberarea/selectmembership" as const;

/** Published membership rates (GBP) — keep in sync with in-gym pricing. */
export const MEMBERSHIP_PRICES = {
  monthly: 30,
  weekly: 15,
  kidsStamp: 20,
} as const;

/** Developer credit — required on every client site footer (Benza pattern). */
export const BUILT_BY = {
  name: "Luke Carter",
  href: "https://www.linkedin.com/in/luke-carter-developer/",
} as const;
