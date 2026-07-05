import { IMAGES } from "./constants";

export type BlogPost = {
  slug: string;
  readTime: number;
  image: string;
  en: {
    title: string;
    excerpt: string;
    content: string[];
  };
  cy: {
    title: string;
    excerpt: string;
    content: string[];
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-big-dragons-gym-24-7-blaenau-ffestiniog",
    readTime: 5,
    image: IMAGES.gymFloor,
    en: {
      title:
        "Why Big Dragons Gym is Blaenau Ffestiniog's 24/7 Fitness Home",
      excerpt:
        "Discover why Big Dragons Gym has become the go-to 24/7 fitness facility in Blaenau Ffestiniog and North Wales.",
      content: [
        "When you're looking for a gym in Blaenau Ffestiniog, you want more than just equipment — you want a place that fits your life. Big Dragons Gym offers exactly that: 24/7 access, expert personal training with Dei, and a premium training environment in the heart of High Street.",
        "Located inside Jerusalem Chapel at 32 High Street, Big Dragons Gym is a dedicated fitness facility — completely separate from Little Dragons Softplay in the same building. We're proud to serve the local community with unrestricted access, quality equipment, and a no-nonsense approach to training.",
        "Whether you're an early riser hitting the gym before work, a shift worker training at midnight, or someone who prefers the quiet of late evening sessions, our 24/7 model means you're never restricted by someone else's schedule.",
        "Beyond access, we offer personal training and nutrition guidance to help you train smarter. Dei provides one-to-one coaching for all levels — from complete beginners to experienced lifters chasing new personal bests.",
        "We're more than a gym — we're a North Wales training community. If you're in Blaenau Ffestiniog, Ffestiniog, Dolwyddelan, or the wider Snowdonia area, we'd love to welcome you. Contact Dei today to find out more about membership and personal training.",
      ],
    },
    cy: {
      title:
        "Pam mae Big Dragons Gym yn Gartref Campfa 24/7 Llan Ffestiniog",
      excerpt:
        "Dysgwch pam mae Big Dragons Gym wedi dod yn gyfleuster campfa 24/7 prif ddewis yn Llan Ffestiniog a Gogledd Cymru.",
      content: [
        "Pan fyddwch chi'n chwilio am gampfa yn Llan Ffestiniog, mae angen mwy na offer — mae angen lle sy'n ffitio eich bywyd. Mae Big Dragons Gym yn cynnig hynny'n union: mynediad 24/7, hyfforddi personol arbenigol gyda Dei, ac amgylchedd hyfforddi premium yng nghanol Stryd Fawr.",
        "Wedi'i leoli y tu mewn i Gapl Jerwsalem ar 32 Stryd Fawr, mae Big Dragons Gym yn gyfleuster ffitrwydd pwrpasol — gwbl ar wahân i Little Dragons Softplay yn yr un adeilad.",
        "P'un a ydych chi'n codi'n gynnar, yn gweithio shifft, neu'n well gennych chi sesiynau nos, mae ein model 24/7 yn golygu nad ydych chi byth yn cael eich cyfyngu gan amserlen rhywun arall.",
        "Tu hwnt i fynediad, rydym yn cynnig hyfforddi personol a chyngor bwyta iach i'ch helpu i hyfforddi'n g smarter. Mae Dei yn darparu hyfforddi un-i-un ar gyfer pob lefel.",
        "Rydym yn fwy na campfa — rydym yn gymuned hyfforddi Gogledd Cymru. Cysylltwch â Dei heddiw i ddarganfod mwy am aelodaeth a hyfforddi personol.",
      ],
    },
  },
  {
    slug: "personal-training-north-wales-dei",
    readTime: 6,
    image: IMAGES.personalTraining,
    en: {
      title: "Personal Training in North Wales: What to Expect with Dei",
      excerpt:
        "Thinking about personal training in Blaenau Ffestiniog? Here's what a session with Dei at Big Dragons Gym looks like.",
      content: [
        "Personal training isn't just for athletes — it's for anyone who wants expert guidance, accountability, and a programme built around their goals. At Big Dragons Gym, Dei works with complete beginners through to experienced lifters.",
        "Your journey starts with a conversation. Dei will discuss your goals, experience, any injuries or limitations, and your schedule. From there, a personalised programme is designed — whether you're focused on strength, fat loss, general fitness, or sport-specific training.",
        "Sessions include hands-on form coaching, progressive overload planning, and the kind of accountability that keeps you showing up. Training takes place in our premium facility on High Street — a clean, professional environment with serious equipment.",
        "Many clients combine personal training with 24/7 membership access, training independently between coached sessions. This hybrid approach gives you expert guidance when you need it and the freedom to train on your own schedule.",
        "Rates vary depending on frequency and goals — contact Dei for an honest, no-pressure conversation about what would work best for you.",
      ],
    },
    cy: {
      title:
        "Hyfforddi Personol yn Gogledd Cymru: Beth i'w Disgwyl gyda Dei",
      excerpt:
        "Yn ystyried hyfforddi personol yn Llan Ffestiniog? Dyma beth mae sesiwn gyda Dei yn Big Dragons Gym yn edrych fel.",
      content: [
        "Nid yw hyfforddi personol dim ond ar gyfer athletwyr — mae ar gyfer unrhyw un sydd eisiau arweiniad arbenigol ac atebolrwydd. Mae Dei yn gweithio gyda dechreuwyr cyflawn hyd at lifters profiadol.",
        "Mae eich taith yn dechrau gyda sgwrs. Bydd Dei yn trafod eich nodau, profiad, anafiadau, ac amserlen. O hynny, mae rhaglen bersonol yn cael ei dylunio.",
        "Mae sesiynau yn cynnwys hyfforddi ffurf ymarferol, cynllunio gorload progresyddol, a'r math o atebolrwydd sy'n eich cadw'n dychwelyd.",
        "Mae llawer o gleientiaid yn cyfuno hyfforddi personol â mynediad aelodaeth 24/7.",
        "Mae prisiau'n amrywio — cysylltwch â Dei am sgwrs onest am beth fyddai'n gweithio orau i chi.",
      ],
    },
  },
  {
    slug: "simple-nutrition-tips-gym-goals",
    readTime: 4,
    image: IMAGES.nutrition,
    en: {
      title: "Simple Nutrition Tips to Support Your Gym Goals",
      excerpt:
        "Practical nutrition advice from Big Dragons Gym — no fad diets, just sustainable habits that support your training.",
      content: [
        "Nutrition doesn't need to be complicated. At Big Dragons Gym, we focus on practical, sustainable habits that support your training — not restrictive diets or unrealistic meal plans.",
        "Start with protein at every meal. Whether your goal is building muscle or losing fat, adequate protein supports recovery and helps you feel satisfied. Think chicken, fish, eggs, Greek yoghurt, or plant-based alternatives.",
        "Don't fear carbohydrates — they're your training fuel. Time carbs around your workouts for best results: more before and after training, slightly less on rest days if fat loss is your goal.",
        "Hydration matters more than most people realise. Aim for consistent water intake throughout the day, especially before and during training sessions.",
        "Consistency beats perfection. An 80% good diet you can stick to will outperform a perfect diet you abandon after two weeks. For personalised nutrition guidance aligned with your training, speak to Dei about our coaching packages.",
      ],
    },
    cy: {
      title: "Awgrymiadau Bwyta Iach Syml i Gefnogi Eich Nodau Campfa",
      excerpt:
        "Cyngor bwyta iach ymarferol o Big Dragons Gym — dim dietau ffug, dim ond arferion cynaliadwy.",
      content: [
        "Nid oes angen i fwyd fod yn gymhleth. Mae Big Dragons Gym yn canolbwyntio ar arferion ymarferol, cynaliadwy sy'n cefnogi eich hyfforddiant.",
        "Dechreuwch gyda protein ym mhob pryd. P'un a yw eich nod yn adeiladu cyhyrau neu golli braster, mae protein ddigonol yn cefnogi adferiad.",
        "Peidiwch â phoeni am garbohydradau — maent yn eich tanio hyfforddiant. Amserwch garbohydradau o amgylch eich sesiynau hyfforddi.",
        "Mae dwr yn bwysicach nag y mae'r rhan fwyaf o bobl yn sylweddoli. Anelwch at ddŵr cyson trwy'r dydd.",
        "Mae cysondeb yn drech na pherffeithrwydd. Am arweiniad bwyta iach personol, siaradwch â Dei am ein pecynnau hyfforddi.",
      ],
    },
  },
];

export const getBlogPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getBlogPostContent = (slug: string, locale: "en" | "cy") => {
  const post = getBlogPost(slug);
  if (!post) return null;
  return { ...post, content: post[locale] };
};
