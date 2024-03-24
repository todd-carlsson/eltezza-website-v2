import { BrandsData, BtsData, CarouselData, TeamData } from "@/types";

// WEBSITE INFO
export const pageTags = {
  design: ["Web Development", "Branding & Design", "Social Media"],
  creative: [
    "Promotional Videos",
    "Advertising Imagery",
    "Paid Ads Management",
  ],
};

export const navigationLinks = {
  desktop: [
    {
      title: "Our work",
      href: "#work",
    },
    {
      title: "What we do",
      href: "#services",
    },
    {
      title: "Clients",
      href: "#clients",
    },
    {
      title: "About us",
      href: "#about",
    },
    {
      title: "Get in touch",
      href: "#contact",
    },
  ],

  mobile: [
    {
      title: "Our work",
      href: "#work",
    },
    {
      title: "What we do",
      href: "#services",
    },
    {
      title: "Get in touch",
      href: "#contact",
    },
  ],
};

export const headerDescription = {
  design:
    "An innovative creative powerhouse, based in a dynamic studio. We craft stories that resonate positively in our culture spanning every social channel - from user-centric web experiences to bite-sized content and beyond.",
  creative:
    "Enter Eltezza Creative, where we're not just content creators; we're storytellers crafting authentic, scroll-stopping content. Collaborating with amazing brands, our space thrives on genuine creativity and remarkable results.",
};

export const services = {
  design: [
    {
      id: "1",
      title: "WEB DEVELOPMENT",
      description:
        "From coding to launch, our web development team is your path to a digital masterpiece. Empower your business with a website that impresses and converts.",
      wrap: true,
    },
    {
      id: "2",
      title: "WEB DESIGN",
      description:
        "Our web design services blend aesthetics with user experience because we understand first impressions matter, and your website is your introduction.",
      wrap: false,
    },
    {
      id: "3",
      title: "BRANDING",
      description:
        "Our expert team specializes in the art of crafting distinctive and unforgettable brand identities. This includes the creation of unique logos, compelling messaging, and captivating visual elements.",
      wrap: false,
    },
    {
      id: "4",
      title: "GRAPHIC DESIGN",
      description:
        "Our designs at Eltezza are not just visually pleasing; they're strategically crafted to meet your objectives. We work hand in hand with you to create attention-grabbing assets that get your message across effectively.",
      wrap: false,
    },
    {
      id: "5",
      title: "SOCIAL MEDIA",
      description:
        "We start by creating a unique social media kit that aligns with your brand. Our team then curates high-quality, purposeful content strategies. We actively participate in the content collection to guarantee your social channels capture attention. With this, we then leverage our expertise and deliver captivating, scroll-stopping content.",
      wrap: false,
    },
  ],

  creative: [
    {
      id: "1",
      title: "PROMOTIONAL VIDEOS",
      description:
        "We create promotional videos that are more than just stories; they're connections with your audience. From brainstorming wild ideas to bringing them to life on screen, we turn brand tales into visual experiences. Join us, and let’s make your brand story one that resonates, connects, and converts.",
      wrap: true,
    },
    {
      id: "2",
      title: "POST PRODUCTION",
      description:
        "Transform your content game with our post-production finesse. We take raw footage and sculpt it into polished masterpieces, ensuring each frame aligns seamlessly with your brand's identity.",
      wrap: true,
    },
    {
      id: "3",
      title: "ADVERTISING IMAGERY",
      description:
        "We carefully curate striking visuals that communicate your brand's essence, creating a lasting impression across diverse channels. Releasing a new product or planning for an upcoming marketing campaign? Get in touch and let's see what we can cook up together - so many other brands already have 😉",
      wrap: true,
    },
    {
      id: "4",
      title: "PAID ADS MANAGEMENT",
      description:
        "We craft ad campaigns to elevate your brand above digital noise, ensuring it resonates with your audience. From engaging ad content to meticulous tracking of performance metrics, we make sure that you are put in front of the right people. Pair that with continuous optimization, and the possibilities are endless.",
      wrap: true,
    },
  ],
};

export const ourProcess = {
  design: [
    {
      id: "1",
      title: "DISCOVERY",
    },
    {
      id: "2",
      title: "AUDIT",
    },
    {
      id: "3",
      title: "CONCEPT & CREATION",
    },
    {
      id: "4",
      title: "REVIEW",
    },
  ],

  creative: [
    {
      id: "1",
      title: "DISCOVERY",
    },
    {
      id: "2",
      title: "RESEARCH",
    },
    {
      id: "3",
      title: "QUOTE",
    },
    {
      id: "4",
      title: "PRODUCTION",
    },
    {
      id: "5",
      title: "DELIVERY",
    },
  ],
};

export const teamDescription = {
  design:
    "At Eltezza, a united and passionate team works tirelessly to transform challenges into opportunities and ideas into innovation, ensuring every client's purpose is not just met but exceeded",
  creative:
    "Get acquainted with the team pulling the strings behind the mess and outrageous rigs...",
};

export const faqs = {
  design: [
    {
      id: "1",
      title: "How do I request a quote or estimate for a project?",
      description:
        "Quite simply, scroll to the bottom of our site and submit your request!",
      wrap: false,
    },
    {
      id: "2",
      title: "What industries does your agency specialize in?",
      description:
        "We’ve worked with many different clients, ranging from construction all the way to museums. If we are a good fit, no creative endeavor is beyond our capabilities.",
      wrap: false,
    },
    {
      id: "3",
      title: "What is the typical timeline for project completion?",
      description:
        "Depending on the services you require, our timelines range from 3 weeks to 12 weeks. We work on a monthly basis with a lot of our clients, let’s hope we do the same for you!",
      wrap: false,
    },
    {
      id: "4",
      title: "How much do you charge?",
      description:
        "We work on project-cost pricing, which ensures we can amend the work to your vision without charging for extra hours (if required). Rest assured, we don’t charge for the sake of it, we carefully analyze the problem, craft the solution, and then deploy our strategies within a budget that suits both parties.",
      wrap: false,
    },
    {
      id: "5",
      title:
        "Do you offer ongoing support or maintenance for projects after completion?",
      description:
        "We offer web maintenance for our web projects, this will allow us to assist you with any updates you may have in the future on top of keeping you safe from any potential cyber-attacks. Whatever the project, we will always be here to help.",
      wrap: false,
    },
    {
      id: "6",
      title:
        "What sets your creative agency apart from others in the industry?",
      description:
        "Quite simply, scroll It’s quite simple, the level of care and attention we give to all of our clients is second to none. We want YOU to succeed as badly as WE want to breathe. the bottom of our site and submit your request!",
      wrap: false,
    },
  ],

  creative: [
    {
      id: "1",
      title: "How do I request a quote or estimate for a project?",
      description:
        "Quite simply, scroll to the bottom of our site and submit your request!",
      wrap: false,
    },
    {
      id: "2",
      title: "What industries do you specialize in?",
      description:
        "Our bread & butter are FMCG brands. Spanning from drinks all the way to crackers, we have the the know-how to get you seen.",
      wrap: false,
    },
    {
      id: "3",
      title: "What is the typical timeline for project completion?",
      description:
        "Depending on the services you require, our timeline ranges from 2 to 6 weeks.",
      wrap: false,
    },
    {
      id: "4",
      title: "Does this stuff even work?",
      description: "Well, we probably wouldn’t be here if it didn’t ...",
      wrap: false,
    },
    {
      id: "5",
      title: "How much do you charge?",
      description:
        "We work on project-cost pricing, which ensures we can amend the work to your vision without charging for extra hours (if required). Rest assured, we don’t charge for the sake of it, we carefully analyze the problem, craft the solution, and then deploy our strategies within a budget that suits both parties.",
      wrap: false,
    },
    {
      id: "6",
      title:
        "What sets your creative agency apart from others in the industry?",
      description:
        "It’s quite simple, the level of care and attention we give to all of our clients is second to none. We want YOU to succeed as badly as WE want to breathe",
      wrap: false,
    },
  ],
};

export const contactFormText = {
  title: "Get in touch",
  description:
    "Ready to turn your ideas into digital masterpieces? Let's chat over coffee!",
  submitted:
    "Your connection means the world to us, and we can't wait to explore how we can make your experience even better. Whether you have questions, ideas, or just want to chat, we're here for you.",
  email: "hello@eltezza.com",
  phone: "06 213 8994",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/eltezzaltd",
  instagram: "https://www.instagram.com/eltezzacreative/",
  linkedin: "https://www.linkedin.com/company/eltezza/",
};

// MOCK DATA
export const landingPageMockData = [
  {
    id: "1",
    src: "/images/placeholder_photo.png",
    title: "Branding",
    subTitle: "Rise above the noise",
    link: "www.eltezza.com",
  },
  {
    id: "2",
    src: "/images/placeholder_photo2.png",
    title: "Web Design",
    subTitle: "Rise above the noise",
    link: "www.eltezza.com",
  },
  {
    id: "3",
    src: "/images/placeholder_photo3.png",
    title: "Reels|Social Media",
    subTitle: "Rise above the noise",
    link: "www.eltezza.com",
  },
  {
    id: "4",
    src: "/images/placeholder_photo4.png",
    title: "Graphic Design",
    subTitle: "Rise above the noise",
    link: "www.eltezza.com",
  },
  {
    id: "5",
    src: "/images/placeholder_photo2.png",
    title: "Web Design",
    subTitle: "Rise above the noise",
    link: "www.eltezza.com",
  },
] as Array<CarouselData>;

export const brandsMockData = {
  design: [
    {
      id: "1",
      brand: "Kmart",
      src: "/images/brandImages/Kmart_Australia_logo.svg",
    },
    {
      id: "2",
      brand: "Cutly",
      src: "/images/brandImages/Cutly_logo.svg",
    },
    {
      id: "3",
      brand: "Juluwarlu",
      src: "/images/brandImages/Juluwarlu_logo.svg",
    },
    {
      id: "4",
      brand: "Illuminix",
      src: "/images/brandImages/Illuminix_logo.svg",
    },
    {
      id: "5",
      brand: "Cupples Construction",
      src: "/images/brandImages/Cupples_logo.svg",
    },
    {
      id: "6",
      brand: "Auckland Museum",
      src: "/images/brandImages/AM_logo.svg",
    },
    {
      id: "7",
      brand: "Black Pearl Cafe",
      src: "/images/brandImages/BlackPearl_logo.svg",
    },
    {
      id: "8",
      brand: "Bee+",
      src: "/images/brandImages/Bee_logo.svg",
    },
    {
      id: "9",
      brand: "Constructo",
      src: "/images/brandImages/Constructo_logo.svg",
    },
    {
      id: "10",
      brand: "Ikaika",
      src: "/images/brandImages/Ikaika_logo.svg",
    },
    {
      id: "11",
      brand: "Steve's Tyre Service",
      src: "/images/brandImages/Steves_logo.svg",
    },
    {
      id: "12",
      brand: "Robert Embroideries",
      src: "/images/brandImages/Robert_logo.svg",
    },
  ] as Array<BrandsData>,

  creative: [
    {
      id: "1",
      brand: "Kmart",
      src: "/images/brandImages/Kmart_Australia_logo.svg",
    },
    {
      id: "2",
      brand: "Cutly",
      src: "/images/brandImages/Cutly_logo.svg",
    },
    {
      id: "3",
      brand: "Nibblish",
      src: "/images/brandImages/Nibblish_logo.svg",
    },
    {
      id: "4",
      brand: "Greenhill Seltzers",
      src: "/images/brandImages/Greenhill_logo.svg",
    },
    {
      id: "5",
      brand: "EatKinda",
      src: "/images/brandImages/EatKinda_logo.svg",
    },
    {
      id: "6",
      brand: "Black Pearl Cafe",
      src: "/images/brandImages/BlackPearl_logo.svg",
    },
    {
      id: "7",
      brand: "Goju",
      src: "/images/brandImages/Goju_logo.svg",
    },
    {
      id: "8",
      brand: "Rinse",
      src: "/images/brandImages/Rinse_logo.svg",
    },
    {
      id: "9",
      brand: "Remarkable Cream",
      src: "/images/brandImages/RemarkableCream_logo.svg",
    },
  ] as Array<BrandsData>,
};

export const teamMockData = [
  {
    id: "1",
    name: "Person 1",
    src: "https://source.unsplash.com/random/?person",
    position: "Position",
  },
  {
    id: "2",
    name: "Person 2",
    src: "https://source.unsplash.com/random/?man",
    position: "Position",
  },
  {
    id: "3",
    name: "Person 3",
    src: "https://source.unsplash.com/random/?woman",
    position: "Position",
  },
  {
    id: "4",
    name: "Person 4",
    src: "https://source.unsplash.com/random/?dog",
    position: "Position",
  },
  {
    id: "5",
    name: "Person 5",
    src: "https://source.unsplash.com/random/?man,portrait",
    position: "Position",
  },
  {
    id: "6",
    name: "Person 6",
    src: "https://source.unsplash.com/random/?woman,glasses",
    position: "Position",
  },
  {
    id: "7",
    name: "Person 7",
    src: "https://source.unsplash.com/random/?man,smile",
    position: "Position",
  },
  {
    id: "8",
    name: "Person 8",
    src: "https://source.unsplash.com/random/?person,glasses,blonde",
    position: "Position",
  },
  {
    id: "9",
    name: "Person 9",
    src: "https://source.unsplash.com/random/?person,smile",
    position: "Position",
  },
  {
    id: "10",
    name: "Person 10",
    src: "https://source.unsplash.com/random/?person,funny",
    position: "Position",
  },
  {
    id: "11",
    name: "Person 11",
    src: "https://source.unsplash.com/random/?man,funny",
    position: "Position",
  },
  {
    id: "12",
    name: "Person 12",
    src: "https://source.unsplash.com/random/?person",
    position: "Position",
  },
] as Array<TeamData>;

export const btsMockData = [
  {
    id: "1",
    src: "https://res-console.cloudinary.com/dz1q2q4li/media_explorer_thumbnails/a5ea9334c1eae54a7fc4639337a32c68/detailed",
    alt: "Invited to be part of a panel for design students!",
    isVideo: false,
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/dz1q2q4li/video/upload/v1711147988/IMG_4320_ur55eh.mp4",
    alt: "BTS Video",
    isVideo: true,
  },
  {
    id: "3",
    src: "https://res-console.cloudinary.com/dz1q2q4li/media_explorer_thumbnails/7eb7e0d1a5c60ac647b8002f3d9127e4/detailed",
    alt: "BTS Photo",
    isVideo: false,
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/dz1q2q4li/video/upload/v1711147983/IMG_4369_xbo7ve.mp4",
    alt: "BTS Video 2",
    isVideo: true,
  },
] as Array<BtsData>;
