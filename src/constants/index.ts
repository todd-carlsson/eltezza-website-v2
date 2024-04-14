import {
  BrandsData,
  BtsData,
  CarouselData,
  CreativeHeroImgData,
  CreativeHeroVideoData,
  CreativeWorkData,
  FeaturedReviewData,
  TeamData,
  TestimonialsData,
} from "@/types";

// METADATA

export const metaData = {
  design: {
    title: "Eltezza | Design",
    description:
      "Welcome to Eltezza: home to two distinct yet intertwined identities. Our studio creates captivating narratives, while our agency arm delivers tangible results, shaping the future of brand engagement.",
    link: "https://eltezza.com/design",
    image:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712889804/EZ%20Website%20-%20Misc/riseabovethenoise_ffeyu4.jpg",
  },
  creative: {
    title: "Eltezza | Creative",
    description:
      "Welcome to Eltezza: home to two distinct yet intertwined identities. Our studio creates captivating narratives, while our agency arm delivers tangible results, shaping the future of brand engagement.",
    link: "https://eltezza.com/creative",
    image:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712889804/EZ%20Website%20-%20Misc/riseabovethenoise_ffeyu4.jpg",
  },
  home: {
    title: "Eltezza | Rise above the noise",
    description:
      "Welcome to Eltezza: home to two distinct yet intertwined identities. Our studio creates captivating narratives, while our agency arm delivers tangible results, shaping the future of brand engagement.",
    link: "https://eltezza.com/",
    image:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712889804/EZ%20Website%20-%20Misc/riseabovethenoise_ffeyu4.jpg",
  },
  error: {
    title: "Page Not Found | Eltezza",
    description:
      "Welcome to Eltezza: home to two distinct yet intertwined identities. Our studio creates captivating narratives, while our agency arm delivers tangible results, shaping the future of brand engagement.",
    link: "https://eltezza.com/",
    image:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712889804/EZ%20Website%20-%20Misc/riseabovethenoise_ffeyu4.jpg",
  },
};

// LOGOS

export const logos = {
  design:
    "https://res.cloudinary.com/dsxzhd4c2/image/upload/q_69/v1712986935/EZ%20Website%20-%20Design/Final_Logo_Eltezza_Design_-_White_it63xt.png",
  creative:
    "https://res.cloudinary.com/dsxzhd4c2/image/upload/q_69/v1712986892/EZ%20Website%20-%20Creative/Final_Logo_Eltezza_Creative_-_White_oz5nrt.png",
};

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
  error: "Something went wrong, please try again.",
  email: "eltezza.ltd@gmail.com",
  phone: "06 213 8994",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/eltezzaltd",
  instagram: "https://www.instagram.com/eltezzacreative/",
  linkedin: "https://www.linkedin.com/company/eltezza/",
};

// DATA
export const landingPageMockData = [
  {
    id: "1",
    src: "/images/placeholder_photo.png",
    title: "Branding",
    subTitle: "Rise above the noise",
    link: "www.eltezza.com",
    isVideo: false,
  },
  {
    id: "2",
    src: "/images/placeholder_photo2.png",
    title: "Web Design",
    subTitle: "Rise above the noise",
    link: "www.eltezza.com",
    isVideo: false,
  },
  {
    id: "3",
    src: "/images/placeholder_photo3.png",
    title: "Reels|Social Media",
    subTitle: "Rise above the noise",
    link: "www.eltezza.com",
    isVideo: false,
  },
  {
    id: "4",
    src: "/images/placeholder_photo4.png",
    title: "Graphic Design",
    subTitle: "Rise above the noise",
    link: "www.eltezza.com",
    isVideo: false,
  },
  {
    id: "5",
    src: "/images/placeholder_photo2.png",
    title: "Web Design",
    subTitle: "Rise above the noise",
    link: "www.eltezza.com",
    isVideo: false,
  },
] as Array<CarouselData>;

export const landingPageData = {
  design: [
    {
      id: "1",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712637780/EZ%20Website%20-%20Design/Work%20Section%20Carousel/cupples_website_ladznn.jpg",
      title: "Web Design",
      subTitle: "Rise above the noise",
      link: "www.eltezza.com",
      isVideo: false,
    },
    {
      id: "2",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712638353/EZ%20Website%20-%20Design/Work%20Section%20Carousel/black_pearl_branding_ypwjz5.jpg",
      title: "Branding",
      subTitle: "Rise above the noise",
      link: "www.eltezza.com",
      isVideo: false,
    },
    {
      id: "3",
      src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_40/v1712638812/EZ%20Website%20-%20Design/Work%20Section%20Carousel/Ikaika_Motivational_Reel_k6l7dy.mp4",
      title: "Reels",
      subTitle: "Rise above the noise",
      link: "www.eltezza.com",
      isVideo: true,
    },
    {
      id: "4",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712638181/EZ%20Website%20-%20Design/Work%20Section%20Carousel/peak_performance_sgqk8g.jpg",
      title: "Graphic Design",
      subTitle: "Rise above the noise",
      link: "www.eltezza.com",
      isVideo: false,
    },
  ] as Array<CarouselData>,
};

export const featuredReviewData = {
  design: {
    review:
      "Excellent team to deal with. They have collaborated with us on a lot of aspects including social media, ads, and a fresh re-brand, this has enabled us to become more recognizable as we aim to further expand to new locations. Most importantly they enjoy what they do.",
    name: "Paul Leang, Director of Formosa Pacific Limited",
    src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_100/v1712725782/EZ%20Website%20-%20Design/Featured%20Review%20Image/Paul_fbfqqr.png",
  } as FeaturedReviewData,
  creative: {
    review:
      "We engaged Eltezza for the animation of a corporate project for one of Australia's well-known brands, and it was an absolute pleasure. They comprehended the brief exceptionally well and executed it with precision. The client was extremely satisfied!",
    name: "Arielle Thomas, CinemaThom",
    src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_100/v1712725682/EZ%20Website%20-%20Creative/Featured%20Review%20Image/Arielle_hwmabn.png",
  } as FeaturedReviewData,
};

export const creativeHeroData = {
  video: [
    {
      id: "1",
      src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_40/v1711497920/EZ%20Website%20-%20Creative/Work%20Section/Eatkinda_Website_Video_dqohbd.mp4",
      thumbnail:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712187412/EZ%20Website%20-%20Creative/Work%20Section%20THUMBNAILS/EatKinda_TN_yclerg.jpg",
    },
  ] as Array<CreativeHeroVideoData>,
  images: [
    {
      id: "1",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712095539/EZ%20Website%20-%20Creative/Hero%20Section/EatKinda_-_Freezer_1.5x_vnwdlp.jpg",
      alt: "EatKinda Freezer",
    },
    {
      id: "2",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712095540/EZ%20Website%20-%20Creative/Hero%20Section/EatKinda_-_Available_Woowlorths_Final_1.5x_zfnn1v.jpg",
      alt: "EatKinda available at Woolworths",
    },
  ] as Array<CreativeHeroImgData>,
};

export const designMarqueeLeftData = [
  {
    id: "1",
    src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712638181/EZ%20Website%20-%20Design/Work%20Section%20Carousel/peak_performance_sgqk8g.jpg",
    alt: "Peak Performance",
    isVideo: false,
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712640516/EZ%20Website%20-%20Design/Hero%20Marquee%20LEFT/lokl_gym_branding_b0kavo.jpg",
    alt: "LOKL Gym",
    isVideo: false,
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712637974/EZ%20Website%20-%20Design/Work%20Section%20Carousel/phillipines_website_o0zb9x.jpg",
    alt: "Philippines Travel Website",
    isVideo: false,
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712640773/EZ%20Website%20-%20Design/Hero%20Marquee%20LEFT/flanzy_branding_tkpepz.jpg",
    alt: "Flanzy Branding",
    isVideo: false,
  },
] as Array<CarouselData>;

export const designMarqueeRightData = [
  {
    id: "1",
    src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712983995/EZ%20Website%20-%20Design/Hero%20Marquee%20RIGHT/fire_social_media_r3lqkm.jpg",
    alt: "Fire social media",
    isVideo: false,
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_38/v1712984277/EZ%20Website%20-%20Design/Hero%20Marquee%20RIGHT/Tonkotsu_Ramen_on_Fire_Reel_mpqmrp.mp4",
    alt: "Tonkotsu Ramen on Fire Reel",
    isVideo: true,
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712984003/EZ%20Website%20-%20Design/Hero%20Marquee%20RIGHT/black_pearl_social_media_oi1slb.jpg",
    alt: "Black Pearl social media",
    isVideo: false,
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_38/v1712984254/EZ%20Website%20-%20Design/Hero%20Marquee%20RIGHT/What_they_know_about_steves_reel_ifxohz.mp4",
    alt: "What they know about steves reel",
    isVideo: true,
  },
  {
    id: "5",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_38/v1712638812/EZ%20Website%20-%20Design/Work%20Section%20Carousel/Ikaika_Motivational_Reel_k6l7dy.mp4",
    alt: "Ikaika Motivational Reel",
    isVideo: true,
  },
] as Array<CarouselData>;

export const designCarouselData = [
  {
    id: "1",
    src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712637870/EZ%20Website%20-%20Design/Work%20Section%20Carousel/edmund_website_gdnyzr.jpg",
    alt: "Edmund Website",
    badge: "Web Design",
    isVideo: false,
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712637974/EZ%20Website%20-%20Design/Work%20Section%20Carousel/phillipines_website_o0zb9x.jpg",
    alt: "Philippines Travel Website",
    badge: "Web Design",
    isVideo: false,
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712638353/EZ%20Website%20-%20Design/Work%20Section%20Carousel/black_pearl_branding_ypwjz5.jpg",
    alt: "Black Pearl Cafe Branding",
    badge: "Branding",
    isVideo: false,
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712638400/EZ%20Website%20-%20Design/Work%20Section%20Carousel/uptania_branding_pvkykm.jpg",
    alt: "Uptania Branding",
    badge: "Branding",
    isVideo: false,
  },
  {
    id: "5",
    src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712638242/EZ%20Website%20-%20Design/Work%20Section%20Carousel/steves_black_sox_bpz5uv.jpg",
    alt: "Steve's Tyre Service",
    badge: "Social Media",
    isVideo: false,
  },
  {
    id: "6",
    src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712638181/EZ%20Website%20-%20Design/Work%20Section%20Carousel/peak_performance_sgqk8g.jpg",
    alt: "Peak Performance",
    badge: "Social Media",
    isVideo: false,
  },
  {
    id: "7",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_30/v1712638812/EZ%20Website%20-%20Design/Work%20Section%20Carousel/Ikaika_Motivational_Reel_k6l7dy.mp4",
    alt: "Ikaika Motivational Reel",
    badge: "Reels",
    isVideo: true,
  },
] as Array<CarouselData>;

export const creativeWorkData = [
  {
    id: "1",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_49/v1711497959/EZ%20Website%20-%20Creative/Work%20Section/REVISED_Remarkable_Video_Wide_ozrqog.mp4",
    thumbnail:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712187627/EZ%20Website%20-%20Creative/Work%20Section%20THUMBNAILS/Remarkable_Cream_TN_ouqltl.jpg",
    size: "large",
    client: "Remarkable Cream",
    campaign: "Crafted by nature, perfected by tradition",
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_49/v1711497891/EZ%20Website%20-%20Creative/Work%20Section/Kiwiblue_Zoomed_jtmk4o.mp4",
    thumbnail:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712187514/EZ%20Website%20-%20Creative/Work%20Section%20THUMBNAILS/Kiwi_Blue_NT_qutbbd.jpg",
    size: "small",
    client: "Kiwi Blue",
    campaign: "Out of the blue",
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_55/v1711497883/EZ%20Website%20-%20Creative/Work%20Section/Goju_Content_Reel_dhbmn7.mp4",
    thumbnail:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712187438/EZ%20Website%20-%20Creative/Work%20Section%20THUMBNAILS/Go_Ju_TN_irpemp.jpg",
    size: "small",
    client: "Goju",
    campaign: "Need some pep in your step?",
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_57/v1711497905/EZ%20Website%20-%20Creative/Work%20Section/Innerbloom_Zoomed_kozcl5.mp4",
    thumbnail:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712187493/EZ%20Website%20-%20Creative/Work%20Section%20THUMBNAILS/Innerbloom_TN_r25fo4.jpg",
    size: "small",
    client: "Innerbloom",
    campaign: "My only one",
  },
  {
    id: "5",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_50/v1711497920/EZ%20Website%20-%20Creative/Work%20Section/Eatkinda_Website_Video_dqohbd.mp4",
    thumbnail:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712187412/EZ%20Website%20-%20Creative/Work%20Section%20THUMBNAILS/EatKinda_TN_yclerg.jpg",
    size: "large",
    client: "Eatkinda",
    campaign: "Kinda different, totally delicious",
  },

  {
    id: "6",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_41/v1711497924/EZ%20Website%20-%20Creative/Work%20Section/Honey_Soy_1x1_zptjyf.mp4",
    thumbnail:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712187469/EZ%20Website%20-%20Creative/Work%20Section%20THUMBNAILS/Honey_Soy_TN_kscrr3.jpg",
    size: "medium",
    client: "Honey Soy Chicken",
    campaign: "Glazing perfection",
  },
  {
    id: "7",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_57/v1711499368/EZ%20Website%20-%20Creative/Work%20Section/Snowy_G_1x1_fxji0j.mp4",
    thumbnail:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712187682/EZ%20Website%20-%20Creative/Work%20Section%20THUMBNAILS/Snowy_G_TN_miougx.jpg",
    size: "medium",
    client: "Snowy-G Chicken",
    campaign: "It goes beyond the mayo",
  },
  {
    id: "8",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_55/v1711497879/EZ%20Website%20-%20Creative/Work%20Section/Rinse_Content_Final_Version_gk9vl8.mp4",
    thumbnail:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712187656/EZ%20Website%20-%20Creative/Work%20Section%20THUMBNAILS/Rinse_TN_nuwajl.jpg",
    size: "large",
    client: "Rinse Vodka",
    campaign: "Because one is not enough",
  },
  {
    id: "9",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_54/v1711497918/EZ%20Website%20-%20Creative/Work%20Section/Redbull_Zoomed_gfb6hv.mp4",
    thumbnail:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712187600/EZ%20Website%20-%20Creative/Work%20Section%20THUMBNAILS/Redbull_TN_eqmilw.jpg",
    size: "small",
    client: "Red Bull",
    campaign: "The new wings in town",
  },
  {
    id: "10",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_47/v1711497923/EZ%20Website%20-%20Creative/Work%20Section/Charlie_Zoomed_nuafy8.mp4",
    thumbnail:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712187381/EZ%20Website%20-%20Creative/Work%20Section%20THUMBNAILS/Charlies_TN_xbihz7.jpg",
    size: "small",
    client: "Charlie's",
    campaign: "Shake up the good stuff!",
  },
  {
    id: "11",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_48/v1711497916/EZ%20Website%20-%20Creative/Work%20Section/Live_Content_Reel_npbkph.mp4",
    thumbnail:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712187576/EZ%20Website%20-%20Creative/Work%20Section%20THUMBNAILS/Live_TN_zvkmkn.jpg",
    size: "small",
    client: "Live+",
    campaign: "Electrified living",
  },
  {
    id: "12",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/v1711498021/EZ%20Website%20-%20Creative/Work%20Section/KMART_KWTA_ultgma.mp4",
    thumbnail:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712187551/EZ%20Website%20-%20Creative/Work%20Section%20THUMBNAILS/KMART_TN_fnsr1v.jpg",
    size: "medium",
    client: "KMart",
    campaign: "Wishing tree appeal",
  },
  {
    id: "13",
    src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_56/v1711498114/EZ%20Website%20-%20Creative/Work%20Section/Ball_Animation_1x1_yp7ku1.mp4",
    thumbnail:
      "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712187345/EZ%20Website%20-%20Creative/Work%20Section%20THUMBNAILS/3D_Ball_TN_nskugx.jpg",
    size: "medium",
    client: "3D Ball",
    campaign: "Infinite alignment",
  },
] as Array<CreativeWorkData>;

export const testimonialsData = [
  {
    id: "1",
    review:
      "Their professionalism and caring attitude really fits into our core values at Steve's, and they have become an awesome fit for us. They have truly gone above and beyond when it comes to promoting our brand and working with us, to ensure that we push out great content.They have enabled our brand over social media to reach heights that we thought were unachievable.",
    name: "Steven Deans",
    role: "Owner of Steve's Tyre Service & Auto Care",
  },
  {
    id: "2",
    review:
      "Excellent team to deal with. They have collaborated with us on a lot of aspects including social media, ads, and a fresh re-brand, this has enabled us to become more recognizable as we aim to further expand to new locations. Most importantly they enjoy what they do.",
    name: "Paul Leang",
    role: "Director of Formosa Pacific Limited",
  },
  {
    id: "3",
    review:
      "Highly recommend this team of young professionals. You can tell they put their heart and passion into their work - it is just quality. They hit deadlines, communication is very efficient and prompt. Eltezza is extremely responsive to feedback and they go above and beyond to deliver value.",
    name: "Keonimana Shigematsu",
    role: "Director of IKAIKA",
  },
  {
    id: "4",
    review:
      "We are thankful for the splendid content, amazing brand identity, and beautifully interactive website. Eltezza has been with us since day one and we continue to find use for their services on an ongoing basis for video ad campaigns. They truly served all our creative needs. Highly Recommended!",
    name: "Aden Fareh",
    role: "Public Relations at Cutly",
  },
  {
    id: "5",
    review:
      "Great company to deal with. Made everything easy to understand, and worked with us around our busy schedule. Always bright, bubbly, friendly, and willing to lend a hand if we got stuck. Not to mention that they customized our website to develop something that truly reflected what we wanted for our business. We have no hesitations in recommending Eltezza.",
    name: "Sean Cupples",
    role: "Director of Cupples Construction",
  },
  {
    id: "6",
    review:
      "We engaged Eltezza for the animation of a corporate project for one of Australia's well-known brands, and it was an absolute pleasure. They comprehended the brief exceptionally well and executed it with precision. The client was extremely satisfied!",
    name: "Arielle Thomas",
    role: "CinemaThom",
  },
] as Array<TestimonialsData>;

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

export const teamData = {
  design: [
    {
      id: "1",
      name: "Chris Teneza",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712709488/EZ%20Website%20-%20Design/Team/Chris_Teneza_-_Creative_Director_qdk5rr.jpg",
      position: "Creative Director",
    },
    {
      id: "2",
      name: "Mo Eltayeb",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712709569/EZ%20Website%20-%20Design/Team/Mo_Eltayeb_-_Managing_Director_nfrqnm.jpg",
      position: "Managing Director",
    },
    {
      id: "3",
      name: "Pradeep Chhetri",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712709592/EZ%20Website%20-%20Design/Team/Pradeep_Chhetri_-_Account_Manager_gibk0f.jpg",
      position: "Account Manager",
    },
    {
      id: "4",
      name: "Danilo Herrera",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712709515/EZ%20Website%20-%20Design/Team/Danilo_Herrera_-_Business_Strategist_gcgqi1.jpg",
      position: "Business Strategist",
    },
    {
      id: "5",
      name: "Shay Gillanders",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712709619/EZ%20Website%20-%20Design/Team/Shay_Gillanders_-_Visual_Designer_ap1gci.jpg",
      position: "Visual Designer",
    },
    {
      id: "6",
      name: "Ilyas Megarbi",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712709541/EZ%20Website%20-%20Design/Team/Ilyas_Megarbi_-_Graphic_Designer_vzcui1.jpg",
      position: "Graphic Designer",
    },
    {
      id: "7",
      name: "Aileen Banzagales",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712709446/EZ%20Website%20-%20Design/Team/Aileen_Banzagales_-_Graphic_Designer_i8iyet.jpg",
      position: "Graphic Designer",
    },
  ] as Array<TeamData>,
  creative: [
    {
      id: "1",
      name: "Chris Teneza",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712709488/EZ%20Website%20-%20Design/Team/Chris_Teneza_-_Creative_Director_qdk5rr.jpg",
      position: "Creative Director",
    },
    {
      id: "2",
      name: "Mo Eltayeb",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712709569/EZ%20Website%20-%20Design/Team/Mo_Eltayeb_-_Managing_Director_nfrqnm.jpg",
      position: "Managing Director",
    },
    {
      id: "3",
      name: "Pradeep Chhetri",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712709592/EZ%20Website%20-%20Design/Team/Pradeep_Chhetri_-_Account_Manager_gibk0f.jpg",
      position: "Account Manager",
    },
    {
      id: "4",
      name: "Danilo Herrera",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712709515/EZ%20Website%20-%20Design/Team/Danilo_Herrera_-_Business_Strategist_gcgqi1.jpg",
      position: "Business Strategist",
    },
    {
      id: "5",
      name: "King Raffy",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712709685/EZ%20Website%20-%20Creative/Team/King_Raffy_-_Visual_Designer_bxau6w.jpg",
      position: "Visual Designer",
    },
  ],
};

export const btsData = {
  design: [
    {
      id: "1",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712186772/EZ%20Website%20-%20Design/BTS/Photos/Sharing_our_experience_with_amazing_uni_students_dewbey.jpg",
      alt: "Sharing our experience with amazing uni students!",
      isVideo: false,
    },
    {
      id: "2",
      src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_71/v1711328016/EZ%20Website%20-%20Design/BTS/Videos/IMG_4369_vugvs0.mov",
      alt: "Chris filming food",
      isVideo: true,
    },
    {
      id: "3",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712186669/EZ%20Website%20-%20Design/BTS/Photos/Meeting_with_an_industry_veteran_dfxypu.jpg",
      alt: "Meeting with an industry veteran",
      isVideo: false,
    },
    {
      id: "4",
      src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_69/v1711327992/EZ%20Website%20-%20Design/BTS/Videos/IMG_4320_vuxhjw.mov",
      alt: "Chris trying to use chopsticks",
      isVideo: true,
    },
    {
      id: "5",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712186802/EZ%20Website%20-%20Design/BTS/Photos/Invited_to_be_part_of_a_panel_for_design_students_yiivm9.jpg",
      alt: "Invited to be part of a panel for design students",
      isVideo: false,
    },
    {
      id: "6",
      src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_69/v1711328066/EZ%20Website%20-%20Design/BTS/Videos/IMG_0188_hbsrhx.mov",
      alt: "Behind the scenes at Steve's Tyre Service",
      isVideo: true,
    },
    {
      id: "7",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712186637/EZ%20Website%20-%20Design/BTS/Photos/In_the_zone_ockvgx.jpg",
      alt: "In the zone",
      isVideo: false,
    },
    {
      id: "8",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712186745/EZ%20Website%20-%20Design/BTS/Photos/IMG_4587_uwiyp8.jpg",
      alt: "Thumbs up!",
      isVideo: false,
    },
    {
      id: "9",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712186598/EZ%20Website%20-%20Design/BTS/Photos/IMG_3768_wtjkw3.jpg",
      alt: "Working in the office",
      isVideo: false,
    },
    {
      id: "10",
      src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_68/v1711328046/EZ%20Website%20-%20Design/BTS/Videos/IMG_0181_p1xnmj.mov",
      alt: "Behind the scenes at Steve's Tyre Service",
      isVideo: true,
    },
    {
      id: "11",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712186558/EZ%20Website%20-%20Design/BTS/Photos/IMG_3648_sxvsam.jpg",
      alt: "Photoshoot time!",
      isVideo: false,
    },
    {
      id: "12",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712183912/EZ%20Website%20-%20Design/BTS/Photos/IMG_0221_mo4hz0.jpg",
      alt: "Client meeting with Mo and Chris",
      isVideo: false,
    },
    {
      id: "13",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712183905/EZ%20Website%20-%20Design/BTS/Photos/Client_Meeting_gvffpg.jpg",
      alt: "Client meeting with Danilo and Mo",
      isVideo: false,
    },
    {
      id: "14",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712183893/EZ%20Website%20-%20Design/BTS/Photos/_What_do_we_do_at_Eltezza__hiejen.jpg",
      alt: "what do we do at Eltezza?",
      isVideo: false,
    },
  ] as Array<BtsData>,
  creative: [
    {
      id: "1",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712183208/EZ%20Website%20-%20Creative/BTS/Photos/Sharing_the_stage_with_other_awesome_agencies_fnds14.jpg",
      alt: "Sharing the stage with other awesome agencies",
      isVideo: false,
    },
    {
      id: "2",
      src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_60/v1711327348/EZ%20Website%20-%20Creative/BTS/Videos/IMG_2974_t7r7jz.mov",
      alt: "Filming",
      isVideo: true,
    },
    {
      id: "3",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712183143/EZ%20Website%20-%20Creative/BTS/Photos/Pradeep_qorjpw.jpg",
      alt: "Pradeep!",
      isVideo: false,
    },
    {
      id: "4",
      src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_62/v1711327348/EZ%20Website%20-%20Creative/BTS/Videos/IMG_0289_zkbal1.mov",
      alt: "Goju behind the scenes",
      isVideo: true,
    },
    {
      id: "5",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712183099/EZ%20Website%20-%20Creative/BTS/Photos/Mo_Chris_Ben_hk4if5.jpg",
      alt: "Mo, Chris and Ben",
      isVideo: false,
    },
    {
      id: "6",
      src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_61/v1711327335/EZ%20Website%20-%20Creative/BTS/Videos/IMG_0268_whzgtf.mov",
      alt: "Dunk!",
      isVideo: true,
    },
    {
      id: "7",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712183049/EZ%20Website%20-%20Creative/BTS/Photos/IMG_7073_kxjqe6.jpg",
      alt: "Chris with Seltzers",
      isVideo: false,
    },
    {
      id: "8",
      src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_65/v1711327333/EZ%20Website%20-%20Creative/BTS/Videos/IMG_0265_pdzbv2.mov",
      alt: "Slam that Rinse can",
      isVideo: true,
    },
    {
      id: "9",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712183002/EZ%20Website%20-%20Creative/BTS/Photos/IMG_3067_ocmthz.jpg",
      alt: "Vitality Bites BTS",
      isVideo: false,
    },
    {
      id: "10",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712182947/EZ%20Website%20-%20Creative/BTS/Photos/IMG_0373_eg7qqi.jpg",
      alt: "Vitality Bites Photoshoot",
      isVideo: false,
    },
    {
      id: "11",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712182886/EZ%20Website%20-%20Creative/BTS/Photos/IMG_0293_jmaghr.jpg",
      alt: "Filming setup",
      isVideo: false,
    },
    {
      id: "12",
      src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_62/v1711327343/EZ%20Website%20-%20Creative/BTS/Videos/IMG_0178_ljg1mh.mov",
      alt: "Chris the Barista",
      isVideo: true,
    },
    {
      id: "13",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712182821/EZ%20Website%20-%20Creative/BTS/Photos/IMG_0292_ol8zrs.jpg",
      alt: "Hangin' the Goju bottle",
      isVideo: false,
    },
    {
      id: "14",
      src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_63/v1711327343/EZ%20Website%20-%20Creative/BTS/Videos/IMG_0162_rw3rlj.mov",
      alt: "Video editing",
      isVideo: true,
    },
    {
      id: "15",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712182568/EZ%20Website%20-%20Creative/BTS/Photos/I_see_you_d7wnxc.jpg",
      alt: "I see you!",
      isVideo: false,
    },
    {
      id: "16",
      src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_63/v1711327318/EZ%20Website%20-%20Creative/BTS/Videos/IMG_0152_yihkrx.mov",
      alt: "Honey Soy Chicken BTS",
      isVideo: true,
    },
    {
      id: "17",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712182647/EZ%20Website%20-%20Creative/BTS/Photos/Give_us_ya_best_pose_wsanck.jpg",
      alt: "Give us ya best pose!",
      isVideo: false,
    },
    {
      id: "18",
      src: "https://res.cloudinary.com/dsxzhd4c2/video/upload/q_60/v1711327310/EZ%20Website%20-%20Creative/BTS/Videos/Copy_of_IMG_0275_pxdxsc.mov",
      alt: "Filming BTS",
      isVideo: true,
    },
    {
      id: "19",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712183283/EZ%20Website%20-%20Creative/BTS/Photos/Danny_fowga4.jpg",
      alt: "Danny!",
      isVideo: false,
    },
    {
      id: "20",
      src: "https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712183244/EZ%20Website%20-%20Creative/BTS/Photos/Chris_CEO_qiaopi.jpg",
      alt: "Chris CEO",
      isVideo: false,
    },
  ] as Array<BtsData>,
};
