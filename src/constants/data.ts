import {
  BrandsData,
  BtsData,
  CarouselData,
  CreativeHeroImgData,
  CreativeHeroVideoData,
  CreativeWorkData,
  FeaturedReviewData,
  FunnelPartnershipData,
  FunnelServicesData,
  FunnelTestimonialsData,
  FunnelWorkData,
  TeamData,
  TestimonialsData,
} from "@/types";

import { distributionName } from "./websiteInfo";

// HOME PAGE DATA
export const landingPageData = {
  design: [
    {
      src: distributionName + "/Landing+Page/Design/cupples_website_ladznn.jpg",
      badge: "Web Design",
      isVideo: false,
    },
    {
      src:
        distributionName +
        "/Landing+Page/Design/Why_Choose_Us_Reel_Final_dkyoxy.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Design/Why+Choose+Us+Reel+Final_THUMBNAIL.jpg",
      badge: "Reels",
      isVideo: true,
    },
    {
      src:
        distributionName +
        "/Landing+Page/Design/black_pearl_branding_ypwjz5.jpg",
      badge: "Branding",
      isVideo: false,
    },
    {
      src:
        distributionName +
        "/Landing+Page/Design/SV-5_Max_Reel_Set_up_V1_zzhx72.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Design/SV-5+Max+Reel+Set+up+V1_THUMBNAIL.jpg",
      badge: "Reels",
      isVideo: true,
    },
    {
      src:
        distributionName + "/Landing+Page/Design/peak_performance_sgqk8g.jpg",
      badge: "Social Media",
      isVideo: false,
    },
    {
      src:
        distributionName + "/Landing+Page/Design/Shareable_Giveaway_hiz45d.jpg",
      badge: "Social Media",
      isVideo: false,
    },
    {
      src:
        distributionName +
        "/Landing+Page/Design/Oreo_Reel_super_final_rlocdk.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Design/Oreo_Reel_super_final_rlocdk_THUMBNAIL.jpg",
      badge: "Reels",
      isVideo: true,
    },
  ] as Array<CarouselData>,
  creative: [
    {
      src: distributionName + "/Landing+Page/Creative/Copy_of_V_mjlm08.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      src:
        distributionName +
        "/Landing+Page/Creative/Rinse_Content_Final_Version_gk9vl8.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Rinse_Content_Final_Version_gk9vl8_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      src:
        distributionName +
        "/Landing+Page/Creative/Copy_of_No_Ugly_2_vd5xg1.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      src:
        distributionName +
        "/Landing+Page/Creative/REVISED_Remarkable_Video_Wide_ozrqog.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/REVISED_Remarkable_Video_Wide_ozrqog_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      src:
        distributionName + "/Landing+Page/Creative/Copy_of_Jarrah_pujknc.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },

    {
      src:
        distributionName + "/Landing+Page/Creative/Redbull_Zoomed_gfb6hv.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Redbull_Zoomed_gfb6hv_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      src:
        distributionName +
        "/Landing+Page/Creative/Greenhill_Seltzers_1_bouwy7.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      src:
        distributionName + "/Landing+Page/Creative/Kiwiblue_Zoomed_jtmk4o.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Kiwiblue_Zoomed_jtmk4o_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      src:
        distributionName +
        "/Landing+Page/Creative/NEW_PEAQ_Launch_Video_1_vcfcud.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/NEW_PEAQ_Launch_Video_1_vcfcud_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      src:
        distributionName +
        "/Landing+Page/Creative/EatKinda_-_Freezer_1.5x_vnwdlp.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      src: distributionName + "/Landing+Page/Creative/Honey_Soy_1x1_zptjyf.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Honey_Soy_1x1_zptjyf_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      src:
        distributionName +
        "/Landing+Page/Creative/Goju_Content_Reel_dhbmn7.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Goju_Content_Reel_dhbmn7_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      src:
        distributionName + "/Landing+Page/Creative/Nev_Reel_Final_rdt49z.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Nev_Reel_Final_rdt49z_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
  ] as Array<CarouselData>,
};

// DESIGN PAGE DATA
export const designMarqueeLeftData = [
  {
    src: distributionName + "/Design/Marquee+Left/peak_performance_sgqk8g.jpg",
    alt: "Peak Performance",
    isVideo: false,
  },
  {
    src: distributionName + "/Design/Marquee+Left/lokl_gym_branding_b0kavo.jpg",
    alt: "LOKL Gym",
    isVideo: false,
  },
  {
    src:
      distributionName + "/Design/Marquee+Left/phillipines_website_o0zb9x.jpg",
    alt: "Philippines Travel Website",
    isVideo: false,
  },
  {
    src: distributionName + "/Design/Marquee+Left/flanzy_branding_tkpepz.jpg",
    alt: "Flanzy Branding",
    isVideo: false,
  },
] satisfies Array<CarouselData>;

export const designMarqueeRightData = [
  {
    src:
      distributionName + "/Design/Marquee+Right/fire_social_media_r3lqkm.jpg",
    alt: "Fire social media",
    isVideo: false,
  },
  {
    src:
      distributionName + "/Design/Marquee+Right/Oztent_Set_Up_Reels_aqnubl.mp4",
    thumbnail:
      distributionName +
      "/Design/Marquee+Right/Oztent+Set+Up+Reels_THUMBNAIL.jpg",
    alt: "Oztent set up",
    isVideo: true,
  },
  {
    src:
      distributionName +
      "/Design/Marquee+Right/black_pearl_social_media_oi1slb.jpg",
    alt: "Black Pearl social media",
    isVideo: false,
  },
  {
    src:
      distributionName +
      "/Design/Marquee+Right/Nikita_Subbed_Reel_Final_b0ak9w.mp4",
    thumbnail:
      distributionName +
      "/Design/Marquee+Right/Nikita+Subbed+Reel+Final_THUMBNAIL.jpg",
    alt: "Nikita Youm",
    isVideo: true,
  },
  {
    src: distributionName + "/Design/Marquee+Right/Greenscreen_Reel_hgcbhw.mp4",
    thumbnail:
      distributionName +
      "/Design/Marquee+Right/Greenscreen_Reel_hgcbhw_THUMBNAIL.jpg",
    alt: "Green screen Black Pearl",
    isVideo: true,
  },
] satisfies Array<CarouselData>;

export const designCarouselData = [
  {
    src: distributionName + "/Design/Work/edmund_website_gdnyzr.jpg",
    alt: "Edmund Website",
    badge: "Web Design",
    isVideo: false,
  },
  {
    src: distributionName + "/Design/Work/phillipines_website_o0zb9x.jpg",
    alt: "Philippines Travel Website",
    badge: "Web Design",
    isVideo: false,
  },
  {
    src: distributionName + "/Design/Work/SV-5_Max_Reel_Set_up_V1_zzhx72.mp4",
    thumbnail:
      distributionName + "/Design/Work/SV-5+Max+Reel+Set+up+V1_THUMBNAIL.jpg",
    alt: "Oztent SV-5 set up",
    badge: "Reels",
    isVideo: true,
  },
  {
    src: distributionName + "/Design/Work/black_pearl_branding_ypwjz5.jpg",
    alt: "Black Pearl Cafe Branding",
    badge: "Branding",
    isVideo: false,
  },
  {
    src: distributionName + "/Design/Work/uptania_branding_pvkykm.jpg",
    alt: "Uptania Branding",
    badge: "Branding",
    isVideo: false,
  },
  {
    src: distributionName + "/Design/Work/Oreo_Reel_super_final_rlocdk.mp4",
    thumbnail:
      distributionName +
      "/Design/Work/Oreo_Reel_super_final_rlocdk_THUMBNAIL.jpg",
    alt: "Oreo Reel",
    badge: "Reels",
    isVideo: true,
  },
  {
    src: distributionName + "/Design/Work/steves_black_sox_bpz5uv.jpg",
    alt: "Steve's Tyre Service",
    badge: "Social Media",
    isVideo: false,
  },
  {
    src: distributionName + "/Design/Work/Why_Choose_Us_Reel_Final_dkyoxy.mp4",
    thumbnail:
      distributionName + "/Design/Work/Why+Choose+Us+Reel+Final_THUMBNAIL.jpg",
    alt: "Why Choose Us",
    badge: "Reels",
    isVideo: true,
  },
  {
    src: distributionName + "/Design/Work/peak_performance_sgqk8g.jpg",
    alt: "Peak Performance",
    badge: "Social Media",
    isVideo: false,
  },
  {
    src: distributionName + "/Design/Work/One_Stop_Shop_Reel_diqtcq.mp4",
    thumbnail:
      distributionName + "/Design/Work/One_Stop_Shop_Reel_diqtcq_THUMBNAIL.jpg",
    alt: "One Stop shop Steve's",
    badge: "Reels",
    isVideo: true,
  },
  {
    src: distributionName + "/Design/Work/Good_earth_tours_Branding_zjlxmz.jpg",
    alt: "Good Earth Tours Branding",
    badge: "Branding",
    isVideo: false,
  },
  {
    src: distributionName + "/Design/Work/black_pearl_social_media_oi1slb.jpg",
    alt: "Black Pearl Social Media",
    badge: "Social Media",
    isVideo: false,
  },
  {
    src: distributionName + "/Design/Work/Shareable_Giveaway_hiz45d.jpg",
    alt: "Black Pearl Shareable Giveaway",
    badge: "Social Media",
    isVideo: false,
  },
] satisfies Array<CarouselData>;

// CREATIVE PAGE DATA
export const creativeHeroData = {
  video: [
    {
      src:
        distributionName +
        "/Creative/Hero/video/Eatkinda_Draft_6_Latest_Final_1_b2dnri.mp4",
      thumbnail:
        distributionName + "/Creative/Hero/video/EatKinda_TN_yclerg.jpg",
    },
  ] satisfies Array<CreativeHeroVideoData>,
  images: [
    {
      src:
        distributionName + "/Creative/Hero/EatKinda_-_Freezer_1.5x_vnwdlp.jpg",
      alt: "EatKinda Freezer",
    },
    {
      src:
        distributionName +
        "/Creative/Hero/EatKinda_-_Available_Woowlorths_Final_1.5x_zfnn1v.jpg",
      alt: "EatKinda available at Woolworths",
    },
  ] satisfies Array<CreativeHeroImgData>,
};

export const creativeWorkData = [
  {
    srcHighQuality:
      distributionName +
      "/Creative/Work/RemarkableCream/REVISED_Remarkable_Video_Wide_ozrqog.mp4",
    src:
      distributionName +
      "/Creative/Work/RemarkableCream/REVISED_Remarkable_Video_Wide_ozrqog_LOWRES.mp4",
    thumbnail:
      distributionName +
      "/Creative/Work/RemarkableCream/Remarkable_Cream_TN_ouqltl.jpg",
    size: "large",
    client: "Remarkable Cream",
    campaign: "Crafted by nature, perfected by tradition",
  },
  {
    srcHighQuality:
      distributionName + "/Creative/Work/KiwiBlue/Kiwiblue_Zoomed_jtmk4o.mp4",
    src:
      distributionName +
      "/Creative/Work/KiwiBlue/Kiwiblue_Zoomed_jtmk4o_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/KiwiBlue/Kiwi_Blue_NT_qutbbd.jpg",
    size: "small",
    client: "Kiwi Blue",
    campaign: "Out of the blue",
  },
  {
    srcHighQuality:
      distributionName + "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7.mp4",
    src:
      distributionName +
      "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
    size: "small",
    client: "Goju",
    campaign: "Need some pep in your step?",
  },
  {
    srcHighQuality:
      distributionName +
      "/Creative/Work/Innerbloom/Innerbloom_Zoomed_kozcl5.mp4",
    src:
      distributionName +
      "/Creative/Work/Innerbloom/Innerbloom_Zoomed_kozcl5_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Innerbloom/Innerbloom_TN_r25fo4.jpg",
    size: "small",
    client: "Innerbloom",
    campaign: "My only one",
  },
  {
    srcHighQuality:
      distributionName +
      "/Creative/Work/PEAQLaunch/NEW_PEAQ_Launch_Video_1_vcfcud.mp4",
    src:
      distributionName +
      "/Creative/Work/PEAQLaunch/NEW_PEAQ_Launch_Video_1_vcfcud_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/PEAQLaunch/PEAQ_ROCKET_rqw8an.jpg",
    size: "large",
    client: "PEAQ",
    campaign: "One tap away",
  },
  {
    srcHighQuality:
      distributionName + "/Creative/Work/PEAQBobby/Reel_Bobby_jnsrcg.mp4",
    src:
      distributionName +
      "/Creative/Work/PEAQBobby/Reel_Bobby_jnsrcg_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/PEAQBobby/Bobby_Reaching_lzw3ry.jpg",
    size: "small",
    client: "PEAQ",
    campaign: "One tap away",
  },
  {
    srcHighQuality:
      distributionName + "/Creative/Work/PEAQAlex/AP_Reel_nhvysa.mp4",
    src: distributionName + "/Creative/Work/PEAQAlex/AP_Reel_nhvysa_LOWRES.mp4",
    thumbnail:
      distributionName +
      "/Creative/Work/PEAQAlex/Alex_P_-_Thumbnail_sgrabf.jpg",
    size: "small",
    client: "PEAQ",
    campaign: "One tap away",
  },
  {
    srcHighQuality:
      distributionName + "/Creative/Work/PEAQNeve/Nev_Reel_Final_rdt49z.mp4",
    src:
      distributionName +
      "/Creative/Work/PEAQNeve/Nev_Reel_Final_rdt49z_LOWRES.mp4",
    thumbnail:
      distributionName +
      "/Creative/Work/PEAQNeve/Neve_-_Website_Thumbnail_o46hwp.jpg",
    size: "small",
    client: "PEAQ",
    campaign: "One tap away",
  },
  {
    srcHighQuality:
      distributionName +
      "/Creative/Work/Eatkinda/Eatkinda_Draft_6_Latest_Final_1_b2dnri.mp4",
    src:
      distributionName +
      "/Creative/Work/Eatkinda/Eatkinda_Draft_6_Latest_Final_1_b2dnri_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Eatkinda/EatKinda_TN_yclerg.jpg",
    size: "large",
    client: "Eatkinda",
    campaign: "Kinda different, totally delicious",
  },

  {
    srcHighQuality:
      distributionName + "/Creative/Work/HoneySoy/Honey_Soy_1x1_zptjyf.mp4",
    src:
      distributionName +
      "/Creative/Work/HoneySoy/Honey_Soy_1x1_zptjyf_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/HoneySoy/Honey_Soy_TN_kscrr3.jpg",
    size: "medium",
    client: "Black Pearl",
    campaign: "Glazing perfection",
  },
  {
    srcHighQuality:
      distributionName + "/Creative/Work/SnowyG/Snowy_G_1x1_fxji0j.mp4",
    src:
      distributionName + "/Creative/Work/SnowyG/Snowy_G_1x1_fxji0j_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/SnowyG/Snowy_G_TN_miougx.jpg",
    size: "medium",
    client: "Black Pearl",
    campaign: "It goes beyond the mayo",
  },
  {
    srcHighQuality:
      distributionName +
      "/Creative/Work/Rinse/Rinse_Content_Final_Version_gk9vl8.mp4",
    src:
      distributionName +
      "/Creative/Work/Rinse/Rinse_Content_Final_Version_gk9vl8_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Rinse/Rinse_TN_nuwajl.jpg",
    size: "large",
    client: "Rinse Vodka",
    campaign: "Because one is not enough",
  },
  {
    srcHighQuality:
      distributionName + "/Creative/Work/Redbull/Redbull_Zoomed_gfb6hv.mp4",
    src:
      distributionName +
      "/Creative/Work/Redbull/Redbull_Zoomed_gfb6hv_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Redbull/Redbull_TN_eqmilw.jpg",
    size: "small",
    client: "Red Bull",
    campaign: "The new wings in town",
  },
  {
    srcHighQuality:
      distributionName + "/Creative/Work/Charlies/Charlie_Zoomed_nuafy8.mp4",
    src:
      distributionName +
      "/Creative/Work/Charlies/Charlie_Zoomed_nuafy8_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Charlies/Charlies_TN_xbihz7.jpg",
    size: "small",
    client: "Charlie's",
    campaign: "Shake up the good stuff!",
  },
  {
    srcHighQuality:
      distributionName + "/Creative/Work/Live/Live_Content_Reel_npbkph.mp4",
    src:
      distributionName +
      "/Creative/Work/Live/Live_Content_Reel_npbkph_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Live/Live_TN_zvkmkn.jpg",
    size: "small",
    client: "Live+",
    campaign: "Electrified living",
  },
  {
    srcHighQuality:
      distributionName + "/Creative/Work/Kmart/KMART_KWTA_ultgma.mp4",
    src: distributionName + "/Creative/Work/Kmart/KMART_KWTA_ultgma.mp4",
    thumbnail: distributionName + "/Creative/Work/Kmart/KMART_TN_fnsr1v.jpg",
    size: "medium",
    client: "KMart",
    campaign: "Wishing tree appeal",
  },
  {
    srcHighQuality:
      distributionName + "/Creative/Work/Ball/Ball_Animation_1x1_yp7ku1.mp4",
    src:
      distributionName +
      "/Creative/Work/Ball/Ball_Animation_1x1_yp7ku1_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Ball/3D_Ball_TN_nskugx.jpg",
    size: "medium",
    client: "3D Ball",
    campaign: "Infinite alignment",
  },
] satisfies Array<CreativeWorkData>;

export const testimonialsData = [
  {
    review:
      "Their professionalism and caring attitude really fits into our core values at Steve's, and they have become an awesome fit for us. They have truly gone above and beyond when it comes to promoting our brand and working with us, to ensure that we push out great content.They have enabled our brand over social media to reach heights that we thought were unachievable.",
    name: "Steven Deans",
    role: "Owner of Steve's Tyre Service & Auto Care",
  },
  {
    review:
      "Excellent team to deal with. They have collaborated with us on a lot of aspects including social media, ads, and a fresh re-brand, this has enabled us to become more recognizable as we aim to further expand to new locations. Most importantly they enjoy what they do.",
    name: "Paul Leang",
    role: "Director of Formosa Pacific Limited",
  },
  {
    review:
      "Highly recommend this team of young professionals. You can tell they put their heart and passion into their work - it is just quality. They hit deadlines, communication is very efficient and prompt. Eltezza is extremely responsive to feedback and they go above and beyond to deliver value.",
    name: "Keonimana Shigematsu",
    role: "Director of IKAIKA",
  },
  {
    review:
      "We are thankful for the splendid content, amazing brand identity, and beautifully interactive website. Eltezza has been with us since day one and we continue to find use for their services on an ongoing basis for video ad campaigns. They truly served all our creative needs. Highly Recommended!",
    name: "Aden Fareh",
    role: "Public Relations at Cutly",
  },
  {
    review:
      "Great company to deal with. Made everything easy to understand, and worked with us around our busy schedule. Always bright, bubbly, friendly, and willing to lend a hand if we got stuck. Not to mention that they customized our website to develop something that truly reflected what we wanted for our business. We have no hesitations in recommending Eltezza.",
    name: "Sean Cupples",
    role: "Director of Cupples Construction",
  },
  {
    review:
      "We engaged Eltezza for the animation of a corporate project for one of Australia's well-known brands, and it was an absolute pleasure. They comprehended the brief exceptionally well and executed it with precision. The client was extremely satisfied!",
    name: "Arielle Thomas",
    role: "CinemaThom",
  },
] satisfies Array<TestimonialsData>;

// OTHER DATA FOR DESIGN & CREATIVE PAGES
export const featuredReviewData = {
  design: {
    review:
      "Excellent team to deal with. They have collaborated with us on a lot of aspects including social media, ads, and a fresh re-brand, this has enabled us to become more recognizable as we aim to further expand to new locations. Most importantly they enjoy what they do.",
    name: "Paul Leang, Director of Formosa Pacific Limited",
    src: distributionName + "/Design/Feat_Review/Paul_fbfqqr.png",
  } satisfies FeaturedReviewData,
  creative: {
    review:
      "We engaged Eltezza for the animation of a corporate project for one of Australia's well-known brands, and it was an absolute pleasure. They comprehended the brief exceptionally well and executed it with precision. The client was extremely satisfied!",
    name: "Arielle Thomas, CinemaThom",
    src: distributionName + "/Creative/Feat_Review/Arielle_hwmabn.png",
  } satisfies FeaturedReviewData,
};

export const brandsData = {
  design: [
    {
      brand: "Kmart",
      src: "/images/brandImages/Kmart_Australia_logo.svg",
    },
    {
      brand: "Cutly",
      src: "/images/brandImages/Cutly_logo.svg",
      maxWidth: 110,
      width: "85%",
    },
    {
      brand: "Juluwarlu",
      src: "/images/brandImages/Juluwarlu_logo.svg",
      maxWidth: 137,
      width: "95%",
    },
    {
      brand: "Illuminix",
      src: "/images/brandImages/Illuminix_logo.svg",
      maxWidth: 145,
      width: "118%",
    },
    {
      brand: "Cupples Construction",
      src: "/images/brandImages/Cupples_logo.svg",
      maxWidth: 93,
      width: "73%",
    },
    {
      brand: "Auckland Museum",
      src: "/images/brandImages/AM_logo.svg",
      maxWidth: 130,
      width: "105%",
    },
    {
      brand: "Black Pearl Cafe",
      src: "/images/brandImages/BlackPearl_logo.svg",
    },
    {
      brand: "Bee+",
      src: "/images/brandImages/Bee_logo.svg",
      maxWidth: 91,
      width: "75%",
    },
    {
      brand: "Constructo",
      src: "/images/brandImages/Constructo_logo.svg",
      maxWidth: 93,
      width: "80%",
    },
    {
      brand: "Ikaika",
      src: "/images/brandImages/Ikaika_logo.svg",
      maxWidth: 150,
      width: "123%",
    },
    {
      brand: "Steve's Tyre Service",
      src: "/images/brandImages/Steves_logo.svg",
      maxWidth: 131,
      width: "106%",
    },
    {
      brand: "Robert Embroideries",
      src: "/images/brandImages/Robert_logo.svg",
      maxWidth: 90,
      width: "75%",
    },
  ] satisfies Array<BrandsData>,

  creative: [
    {
      brand: "Kmart",
      src: "/images/brandImages/Kmart_Australia_logo.svg",
    },
    {
      brand: "PEAQ",
      src: "/images/brandImages/Peaq_logo.svg",
      maxWidth: 110,
      width: "83%",
    },
    {
      brand: "Nibblish",
      src: "/images/brandImages/Nibblish_logo.svg",
      maxWidth: 116,
      width: "95%",
    },
    {
      brand: "Greenhill Seltzers",
      src: "/images/brandImages/Greenhill_logo.svg",
      maxWidth: 125,
    },
    {
      brand: "EatKinda",
      src: "/images/brandImages/EatKinda_logo.svg",
      maxWidth: 123,
      width: "93%",
    },
    {
      brand: "Black Pearl Cafe",
      src: "/images/brandImages/BlackPearl_logo.svg",
      maxWidth: 127,
    },
    {
      brand: "Rinse",
      src: "/images/brandImages/Rinse_logo.svg",
      maxWidth: 112,
      width: "88%",
    },
    {
      brand: "Goju",
      src: "/images/brandImages/Goju_logo.svg",
      maxWidth: 72,
      width: "55%",
    },
    {
      brand: "Remarkable Cream",
      src: "/images/brandImages/RemarkableCream_logo.svg",
      maxWidth: 129,
      width: "105%",
    },
  ] satisfies Array<BrandsData>,
};

export const teamData = {
  design: [
    {
      name: "Chris Teneza",
      src:
        distributionName +
        "/Design/Team/Chris_Teneza_-_Creative_Director_ziruf9.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1715647107/EZ%20Website%20-%20Design/Team/Chris_Teneza_-_Creative_Director_ziruf9.jpg",
      position: "Creative Director",
      email: "teneza@eltezza.com",
    },
    {
      name: "Mo Eltayeb",
      src:
        distributionName +
        "/Design/Team/Mo_Eltayeb_-_Managing_Director_nfrqnm.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709569/EZ%20Website%20-%20Design/Team/Mo_Eltayeb_-_Managing_Director_nfrqnm.jpg",
      position: "Managing Director",
      email: "eltayeb@eltezza.com",
    },
    {
      name: "Pradeep Chhetri",
      src:
        distributionName +
        "/Design/Team/Pradeep_Chhetri_-_Account_Manager_gibk0f.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709592/EZ%20Website%20-%20Design/Team/Pradeep_Chhetri_-_Account_Manager_gibk0f.jpg",
      position: "Account Manager",
      email: "chhetri@eltezza.com",
    },
    {
      name: "Danilo Herrera",
      src:
        distributionName +
        "/Design/Team/Danilo_Herrera_-_Business_Strategist_gcgqi1.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709515/EZ%20Website%20-%20Design/Team/Danilo_Herrera_-_Business_Strategist_gcgqi1.jpg",
      position: "Business Strategist",
      email: "herrera@eltezza.com",
    },
    {
      name: "Elisa Hickton",
      src:
        distributionName +
        "/Design/Team/Elisa_Hickton_-_Content_Producer_mjkeyq.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1715732923/EZ%20Website%20-%20Design/Team/Elisa_Hickton_-_Content_Producer_mjkeyq.jpg",
      position: "Content Producer",
      email: "hickton@eltezza.com",
    },
    {
      name: "Todd Carlsson",
      src:
        distributionName +
        "/Design/Team/Todd_Carlsson_-_Web_Developer_wnk07m.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1715919824/EZ%20Website%20-%20Design/Team/Todd_Carlsson_-_Web_Developer_wnk07m.jpg",
      position: "Web Developer",
      email: "carlsson@eltezza.com",
    },
    {
      name: "Shay Gillanders",
      src:
        distributionName +
        "/Design/Team/Shay_Gillanders_-_Visual_Designer_ap1gci.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709619/EZ%20Website%20-%20Design/Team/Shay_Gillanders_-_Visual_Designer_ap1gci.jpg",
      position: "Visual Designer",
      email: "gillanders@eltezza.com",
    },
    {
      name: "Aileen Banzagales",
      src:
        distributionName +
        "/Design/Team/Aileen+Banzagales+-+Graphic+Designer.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1713243560/EZ%20Website%20-%20Design/Team/Aileen_Banzagles_-_Graphic_Designer_oompl5.jpg",
      position: "Graphic Designer",
    },
    {
      name: "Jimwell Manlusoc",
      src:
        distributionName +
        "/Design/Team/Jimwell_Manlusoc_-_UI_UX_Designer_adui9h.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1713331347/EZ%20Website%20-%20Design/Team/Jimwell_Manlusoc_-_UI_UX_Designer_adui9h.jpg",
      position: "UI/UX Designer",
    },
  ] satisfies Array<TeamData>,
  creative: [
    {
      name: "Chris Teneza",
      src:
        distributionName +
        "/Creative/Team/Chris_Teneza_-_Creative_Director_ziruf9.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1715647107/EZ%20Website%20-%20Design/Team/Chris_Teneza_-_Creative_Director_ziruf9.jpg",
      position: "Creative Director",
      email: "teneza@eltezza.com",
    },
    {
      name: "Mo Eltayeb",
      src:
        distributionName +
        "/Creative/Team/Mo_Eltayeb_-_Managing_Director_nfrqnm.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709569/EZ%20Website%20-%20Design/Team/Mo_Eltayeb_-_Managing_Director_nfrqnm.jpg",
      position: "Managing Director",
      email: "eltayeb@eltezza.com",
    },
    {
      name: "Pradeep Chhetri",
      src:
        distributionName +
        "/Creative/Team/Pradeep_Chhetri_-_Account_Manager_gibk0f.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709592/EZ%20Website%20-%20Design/Team/Pradeep_Chhetri_-_Account_Manager_gibk0f.jpg",
      position: "Account Manager",
      email: "chhetri@eltezza.com",
    },
    {
      name: "Danilo Herrera",
      src:
        distributionName +
        "/Creative/Team/Danilo_Herrera_-_Business_Strategist_gcgqi1.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709515/EZ%20Website%20-%20Design/Team/Danilo_Herrera_-_Business_Strategist_gcgqi1.jpg",
      position: "Business Strategist",
      email: "herrera@eltezza.com",
    },
    {
      name: "Ilyas Megarbi",
      src:
        distributionName +
        "/Creative/Team/Ilyas_Megarbi_-_Graphic_Designer_agv0jc.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1713331517/EZ%20Website%20-%20Design/Team/Ilyas_Megarbi_-_Graphic_Designer_agv0jc.jpg",
      position: "Graphic Designer",
    },
    {
      name: "King Raffy",
      src:
        distributionName +
        "/Creative/Team/King_Raffy_-_Visual_Designer_bxau6w.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709685/EZ%20Website%20-%20Creative/Team/King_Raffy_-_Visual_Designer_bxau6w.jpg",
      position: "Visual Designer",
    },
  ] satisfies Array<TeamData>,
};

export const btsData = {
  design: [
    {
      src:
        distributionName +
        "/Design/BTS/Sharing_our_experience_with_amazing_uni_students_dewbey.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712186772/EZ%20Website%20-%20Design/BTS/Photos/Sharing_our_experience_with_amazing_uni_students_dewbey.jpg",
      alt: "Sharing our experience with amazing uni students!",
      isVideo: false,
    },
    {
      src: distributionName + "/Design/BTS/IMG_4369_dpuon2.mp4",
      alt: "Chris filming food",
      isVideo: true,
    },
    {
      src:
        distributionName +
        "/Design/BTS/Meeting_with_an_industry_veteran_dfxypu.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712186669/EZ%20Website%20-%20Design/BTS/Photos/Meeting_with_an_industry_veteran_dfxypu.jpg",
      alt: "Meeting with an industry veteran",
      isVideo: false,
    },
    {
      src: distributionName + "/Design/BTS/IMG_4320_qlu2jw.mp4",
      alt: "Chris trying to use chopsticks",
      isVideo: true,
    },
    {
      src:
        distributionName +
        "/Design/BTS/Invited_to_be_part_of_a_panel_for_design_students_yiivm9.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712186802/EZ%20Website%20-%20Design/BTS/Photos/Invited_to_be_part_of_a_panel_for_design_students_yiivm9.jpg",
      alt: "Invited to be part of a panel for design students",
      isVideo: false,
    },
    {
      src: distributionName + "/Design/BTS/IMG_0188_s6xzvp.mp4",
      alt: "Behind the scenes at Steve's Tyre Service",
      isVideo: true,
    },
    {
      src: distributionName + "/Design/BTS/In_the_zone_ockvgx.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712186637/EZ%20Website%20-%20Design/BTS/Photos/In_the_zone_ockvgx.jpg",
      alt: "In the zone",
      isVideo: false,
    },
    {
      src: distributionName + "/Design/BTS/IMG_4587_uwiyp8.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_15/v1712186745/EZ%20Website%20-%20Design/BTS/Photos/IMG_4587_uwiyp8.jpg",
      alt: "Thumbs up!",
      isVideo: false,
    },
    {
      src: distributionName + "/Design/BTS/IMG_3768_wtjkw3.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712186598/EZ%20Website%20-%20Design/BTS/Photos/IMG_3768_wtjkw3.jpg",
      alt: "Working in the office",
      isVideo: false,
    },
    {
      src: distributionName + "/Design/BTS/IMG_0181_ukibqj.mp4",
      alt: "Behind the scenes at Steve's Tyre Service",
      isVideo: true,
    },
    {
      src: distributionName + "/Design/BTS/IMG_3648_sxvsam.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712186558/EZ%20Website%20-%20Design/BTS/Photos/IMG_3648_sxvsam.jpg",
      alt: "Photoshoot time!",
      isVideo: false,
    },
    {
      src: distributionName + "/Design/BTS/IMG_0221_mo4hz0.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712183912/EZ%20Website%20-%20Design/BTS/Photos/IMG_0221_mo4hz0.jpg",
      alt: "Client meeting with Mo and Chris",
      isVideo: false,
    },
    {
      src: distributionName + "/Design/BTS/Client_Meeting_gvffpg.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712183905/EZ%20Website%20-%20Design/BTS/Photos/Client_Meeting_gvffpg.jpg",
      alt: "Client meeting with Danilo and Mo",
      isVideo: false,
    },
    {
      src:
        distributionName + "/Design/BTS/_What_do_we_do_at_Eltezza__hiejen.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_15/v1712183893/EZ%20Website%20-%20Design/BTS/Photos/_What_do_we_do_at_Eltezza__hiejen.jpg",
      alt: "What do we do at Eltezza?",
      isVideo: false,
    },
  ] satisfies Array<BtsData>,
  creative: [
    {
      src:
        distributionName +
        "/Creative/BTS/Sharing_the_stage_with_other_awesome_agencies_fnds14.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_15/v1712183208/EZ%20Website%20-%20Creative/BTS/Photos/Sharing_the_stage_with_other_awesome_agencies_fnds14.jpg",
      alt: "Sharing the stage with other awesome agencies",
      isVideo: false,
    },
    {
      src: distributionName + "/Creative/BTS/IMG_2974_zzlgzw.mp4",
      alt: "Filming",
      isVideo: true,
    },
    {
      src: distributionName + "/Creative/BTS/Pradeep_qorjpw.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712183143/EZ%20Website%20-%20Creative/BTS/Photos/Pradeep_qorjpw.jpg",
      alt: "Pradeep!",
      isVideo: false,
    },
    {
      src: distributionName + "/Creative/BTS/IMG_0289_s9kbnw.mp4",
      alt: "Goju behind the scenes",
      isVideo: true,
    },
    {
      src: distributionName + "/Creative/BTS/Mo_Chris_Ben_hk4if5.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_15/v1712183099/EZ%20Website%20-%20Creative/BTS/Photos/Mo_Chris_Ben_hk4if5.jpg",
      alt: "Mo, Chris and Ben",
      isVideo: false,
    },
    {
      src: distributionName + "/Creative/BTS/IMG_0268_swi4xa.mp4",
      alt: "Dunk!",
      isVideo: true,
    },
    {
      src: distributionName + "/Creative/BTS/IMG_7073_kxjqe6.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712183049/EZ%20Website%20-%20Creative/BTS/Photos/IMG_7073_kxjqe6.jpg",
      alt: "Chris with Seltzers boxes",
      isVideo: false,
    },
    {
      src: distributionName + "/Creative/BTS/IMG_0265_oq3usj.mp4",
      alt: "Slam that Rinse can",
      isVideo: true,
    },
    {
      src: distributionName + "/Creative/BTS/IMG_3067_ocmthz.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712183002/EZ%20Website%20-%20Creative/BTS/Photos/IMG_3067_ocmthz.jpg",
      alt: "Vitality Bites BTS",
      isVideo: false,
    },
    {
      src: distributionName + "/Creative/BTS/IMG_0373_eg7qqi.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712182947/EZ%20Website%20-%20Creative/BTS/Photos/IMG_0373_eg7qqi.jpg",
      alt: "Vitality Bites Photoshoot",
      isVideo: false,
    },
    {
      src: distributionName + "/Creative/BTS/IMG_0293_jmaghr.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712182886/EZ%20Website%20-%20Creative/BTS/Photos/IMG_0293_jmaghr.jpg",
      alt: "Filming setup",
      isVideo: false,
    },
    {
      src: distributionName + "/Creative/BTS/IMG_0178_kog9qh.mp4",
      alt: "Chris the Barista",
      isVideo: true,
    },
    {
      src: distributionName + "/Creative/BTS/IMG_0292_ol8zrs.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712182821/EZ%20Website%20-%20Creative/BTS/Photos/IMG_0292_ol8zrs.jpg",
      alt: "Hangin' the Goju bottle",
      isVideo: false,
    },
    {
      src: distributionName + "/Creative/BTS/IMG_0162_kdykqr.mp4",
      alt: "Video editing",
      isVideo: true,
    },
    {
      src: distributionName + "/Creative/BTS/I_see_you_d7wnxc.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_15/v1712182568/EZ%20Website%20-%20Creative/BTS/Photos/I_see_you_d7wnxc.jpg",
      alt: "I see you!",
      isVideo: false,
    },
    {
      src: distributionName + "/Creative/BTS/IMG_0152_weisck.mp4",
      alt: "Honey Soy Chicken BTS",
      isVideo: true,
    },
    {
      src: distributionName + "/Creative/BTS/Give_us_ya_best_pose_wsanck.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712182647/EZ%20Website%20-%20Creative/BTS/Photos/Give_us_ya_best_pose_wsanck.jpg",
      alt: "Give us ya best pose!",
      isVideo: false,
    },
    {
      src: distributionName + "/Creative/BTS/Copy_of_IMG_0275_cq2av0.mp4",
      alt: "Filming BTS",
      isVideo: true,
    },
    {
      src: distributionName + "/Creative/BTS/Danny_fowga4.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712183283/EZ%20Website%20-%20Creative/BTS/Photos/Danny_fowga4.jpg",
      alt: "Danny!",
      isVideo: false,
    },
    {
      src: distributionName + "/Creative/BTS/Chris_CEO_qiaopi.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712183244/EZ%20Website%20-%20Creative/BTS/Photos/Chris_CEO_qiaopi.jpg",
      alt: "Chris CEO",
      isVideo: false,
    },
  ] satisfies Array<BtsData>,
};

// FUNNEL PAGE DATA
export const funnelTestimonials = [
  {
    id: 1,
    review:
      "“You guys have completely revamped our marketing & customer awareness.”",
    author: "Steven & James Deans - Automotive Business",
    videoLink: distributionName + "/Design/Work/One_Stop_Shop_Reel_diqtcq.mp4",
    thumbnail:
      distributionName + "/Design/Work/One_Stop_Shop_Reel_diqtcq_THUMBNAIL.jpg",
    borderColor: "--adobe-purple",
  },
  {
    id: 2,
    review:
      "We get it.... it's hard. **But that's why we're here.**\n\n Hear from more business owners that were once in your position.",
    videoLink: distributionName + "/Design/Work/One_Stop_Shop_Reel_diqtcq.mp4",
    thumbnail:
      distributionName + "/Design/Work/One_Stop_Shop_Reel_diqtcq_THUMBNAIL.jpg",
    borderColor: "--ez-orange",
  },
] satisfies Array<FunnelTestimonialsData>;

export const funnelBrands = [
  {
    brand: "Kmart",
    src: "/images/brandImages/Kmart_Australia_logo.svg",
  },
  {
    brand: "Cutly",
    src: "/images/brandImages/Cutly_logo.svg",
    maxWidth: 110,
    width: "85%",
  },
  {
    brand: "Juluwarlu",
    src: "/images/brandImages/Juluwarlu_logo.svg",
    maxWidth: 132,
    width: "113%",
  },
  {
    brand: "Nibblish",
    src: "/images/brandImages/Nibblish_logo.svg",
    maxWidth: 104,
    width: "86%",
  },
  {
    brand: "Rinse",
    src: "/images/brandImages/Rinse_logo.svg",
    maxWidth: 102,
    width: "88%",
  },
  {
    brand: "Al Brown",
    src: "/images/brandImages/Al-Brown_logo.svg",
    maxWidth: 80,
    width: "65%",
    needsColorInvert: false,
  },
  {
    brand: "Cupples Construction",
    src: "/images/brandImages/Cupples_logo.svg",
    maxWidth: 93,
    width: "73%",
  },
  {
    brand: "Auckland Museum",
    src: "/images/brandImages/AM_logo.svg",
    maxWidth: 180,
    width: "155%",
  },
  {
    brand: "Oztent",
    src: "/images/brandImages/Oztent_logo.svg",
    maxWidth: 95,
    width: "77%",
    needsColorInvert: false,
  },
  {
    brand: "Remarkable Cream",
    src: "/images/brandImages/RemarkableCream_logo.svg",
    maxWidth: 115,
    width: "96%",
  },
  {
    brand: "Maunder Roofing",
    src: "/images/brandImages/Maunder-Roofing_logo.svg",
    maxWidth: 155,
    width: "130%",
    needsColorInvert: false,
  },
  {
    brand: "Bee+",
    src: "/images/brandImages/Bee_logo.svg",
    maxWidth: 91,
    width: "75%",
  },
  {
    brand: "Constructo",
    src: "/images/brandImages/Constructo_logo.svg",
    maxWidth: 93,
    width: "80%",
  },
  {
    brand: "Ikaika",
    src: "/images/brandImages/Ikaika_logo.svg",
    maxWidth: 150,
    width: "123%",
  },
  {
    brand: "Steve's Tyre Service",
    src: "/images/brandImages/Steves_logo.svg",
    maxWidth: 131,
    width: "106%",
  },
  {
    brand: "Goju",
    src: "/images/brandImages/Goju_logo.svg",
    maxWidth: 95,
    width: "85%",
  },
  {
    brand: "Greenhill Seltzers",
    src: "/images/brandImages/Greenhill_logo.svg",
    maxWidth: 110,
    width: "85%",
  },
  {
    brand: "Robert Embroideries",
    src: "/images/brandImages/Robert_logo.svg",
    maxWidth: 90,
    width: "75%",
  },
  {
    brand: "ASB Classic",
    src: "/images/brandImages/ASB-Classic_logo.svg",
    maxWidth: 70,
    width: "57%",
    needsColorInvert: false,
  },
  {
    brand: "EatKinda",
    src: "/images/brandImages/EatKinda_logo.svg",
    maxWidth: 107,
    width: "93%",
  },
  {
    brand: "Black Pearl Cafe",
    src: "/images/brandImages/BlackPearl_logo.svg",
    maxWidth: 127,
  },
  {
    brand: "Youm",
    src: "/images/brandImages/Youm_logo.svg",
    maxWidth: 123,
    width: "103%",
    needsColorInvert: false,
  },
  {
    brand: "Fernglen Farm",
    src: "/images/brandImages/Fernglen-Farm_logo.svg",
    maxWidth: 130,
    width: "107%",
    needsColorInvert: false,
  },
  {
    brand: "Proper Crisps",
    src: "/images/brandImages/Proper-Crisps_logo.svg",
    maxWidth: 117,
    width: "98%",
    needsColorInvert: false,
  },
] satisfies Array<BrandsData>;

export const funnelBrandsMobile = [
  {
    brand: "Kmart",
    src: "/images/brandImages/Kmart_Australia_logo.svg",
  },
  {
    brand: "ASB Classic",
    src: "/images/brandImages/ASB-Classic_logo.svg",
    maxWidth: 70,
    width: "57%",
    needsColorInvert: false,
  },
  {
    brand: "Juluwarlu",
    src: "/images/brandImages/Juluwarlu_logo.svg",
    maxWidth: 132,
    width: "113%",
  },
  {
    brand: "Cutly",
    src: "/images/brandImages/Cutly_logo.svg",
    maxWidth: 110,
    width: "85%",
  },
  {
    brand: "Al Brown",
    src: "/images/brandImages/Al-Brown_logo.svg",
    maxWidth: 80,
    width: "65%",
    needsColorInvert: false,
  },
  {
    brand: "Remarkable Cream",
    src: "/images/brandImages/RemarkableCream_logo.svg",
    maxWidth: 115,
    width: "96%",
  },
  {
    brand: "Robert Embroideries",
    src: "/images/brandImages/Robert_logo.svg",
    maxWidth: 90,
    width: "75%",
  },
  {
    brand: "Fernglen Farm",
    src: "/images/brandImages/Fernglen-Farm_logo.svg",
    maxWidth: 130,
    width: "107%",
    needsColorInvert: false,
  },
  {
    brand: "Proper Crisps",
    src: "/images/brandImages/Proper-Crisps_logo.svg",
    maxWidth: 117,
    width: "98%",
    needsColorInvert: false,
  },
  {
    brand: "EatKinda",
    src: "/images/brandImages/EatKinda_logo.svg",
    maxWidth: 107,
    width: "93%",
  },
  {
    brand: "Oztent",
    src: "/images/brandImages/Oztent_logo.svg",
    maxWidth: 95,
    width: "77%",
    needsColorInvert: false,
  },
  {
    brand: "Youm",
    src: "/images/brandImages/Youm_logo.svg",
    maxWidth: 123,
    width: "103%",
    needsColorInvert: false,
  },
] satisfies Array<BrandsData>;

export const funnelServices = [
  {
    title: "SOCIAL MEDIA \nMANAGEMENT",
    description:
      "Our clients have seen their revenue\n grow exponentially just by showing up\n the right way online.",
  },
  {
    title: "CONTENT \nPRODUCTION",
    description:
      "Backed by years of research on audience\n hooks and retention, we shoot, edit, and\n deliver content that actually works",
  },
  {
    title: "ADS \nMANAGEMENT",
    description:
      "We've spent tens of thousands on Meta ads—\nso we know what works. Our ads attract the\n right buyers.",
  },
] satisfies Array<FunnelServicesData>;

export const funnelPartnership = {
  firstBox: [
    {
      description: "You are wanting to grow\n your business",
    },
    {
      description: "Create content that reflects\n the quality of your brand.",
    },
    {
      description: "Run ads that don't just get\n seen—they convert.",
    },
    {
      description: "You're after reliable comms\n & real support.",
    },
  ] satisfies Array<FunnelPartnershipData>,
  secondBox: [
    {
      description: "You're not wanting to \n grow your business",
    },
    {
      description: "You're expecting\n instantaneous results",
    },
    {
      description: "You're cool with blending\n in instead of standing out.",
    },
  ] satisfies Array<FunnelPartnershipData>,
};

export const funnelWorkVideos = {
  promotional: [
    {
      srcHighQuality:
        distributionName + "/Creative/Work/KiwiBlue/Kiwiblue_Zoomed_jtmk4o.mp4",
      src:
        distributionName +
        "/Creative/Work/KiwiBlue/Kiwiblue_Zoomed_jtmk4o_LOWRES.mp4",
      thumbnail:
        distributionName + "/Creative/Work/KiwiBlue/Kiwi_Blue_NT_qutbbd.jpg",
      client: "Kiwi Blue",
      campaign: "Out of the blue",
      image:
        distributionName + "/Creative/Work/KiwiBlue/Kiwi_Blue_NT_qutbbd.jpg",
    },
    {
      srcHighQuality:
        distributionName + "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7.mp4",
      src:
        distributionName +
        "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7_LOWRES.mp4",
      thumbnail: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
      client: "Goju",
      campaign: "Need some pep in your step?",
      image: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
    },
    {
      srcHighQuality:
        distributionName +
        "/Creative/Work/Innerbloom/Innerbloom_Zoomed_kozcl5.mp4",
      src:
        distributionName +
        "/Creative/Work/Innerbloom/Innerbloom_Zoomed_kozcl5_LOWRES.mp4",
      thumbnail:
        distributionName + "/Creative/Work/Innerbloom/Innerbloom_TN_r25fo4.jpg",
      client: "Innerbloom",
      campaign: "My only one",
      image:
        distributionName + "/Creative/Work/Innerbloom/Innerbloom_TN_r25fo4.jpg",
    },
  ] satisfies Array<FunnelWorkData>,
  organic: [
    {
      srcHighQuality:
        distributionName + "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7.mp4",
      src:
        distributionName +
        "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7_LOWRES.mp4",
      thumbnail: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
      client: "Goju",
      campaign: "Need some pep in your step?",
      image: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
    },
    {
      srcHighQuality:
        distributionName + "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7.mp4",
      src:
        distributionName +
        "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7_LOWRES.mp4",
      thumbnail: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
      client: "Goju",
      campaign: "Need some pep in your step?",
      image: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
    },
    {
      srcHighQuality:
        distributionName + "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7.mp4",
      src:
        distributionName +
        "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7_LOWRES.mp4",
      thumbnail: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
      client: "Goju",
      campaign: "Need some pep in your step?",
      image: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
    },
  ] satisfies Array<FunnelWorkData>,
  productFocused: [
    {
      srcHighQuality:
        distributionName + "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7.mp4",
      src:
        distributionName +
        "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7_LOWRES.mp4",
      thumbnail: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
      client: "Goju",
      campaign: "Need some pep in your step?",
      image: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
    },
    {
      srcHighQuality:
        distributionName + "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7.mp4",
      src:
        distributionName +
        "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7_LOWRES.mp4",
      thumbnail: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
      client: "Goju",
      campaign: "Need some pep in your step?",
      image: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
    },
    {
      srcHighQuality:
        distributionName + "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7.mp4",
      src:
        distributionName +
        "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7_LOWRES.mp4",
      thumbnail: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
      client: "Goju",
      campaign: "Need some pep in your step?",
      image: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
    },
  ] satisfies Array<FunnelWorkData>,
  ugc: [
    {
      srcHighQuality:
        distributionName + "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7.mp4",
      src:
        distributionName +
        "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7_LOWRES.mp4",
      thumbnail: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
      client: "Goju",
      campaign: "Need some pep in your step?",
    },
    {
      srcHighQuality:
        distributionName + "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7.mp4",
      src:
        distributionName +
        "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7_LOWRES.mp4",
      thumbnail: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
      client: "Goju",
      campaign: "Need some pep in your step?",
    },
    {
      srcHighQuality:
        distributionName + "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7.mp4",
      src:
        distributionName +
        "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7_LOWRES.mp4",
      thumbnail: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
      client: "Goju",
      campaign: "Need some pep in your step?",
    },
  ] satisfies Array<FunnelWorkData>,
};

export const funnelReviewsData = [
  {
    review:
      "Their professionalism and caring attitude really fits into our core values at Steve's, and they have become an awesome fit for us. They have truly gone above and beyond when it comes to promoting our brand and working with us, to ensure that we push out great content.They have enabled our brand over social media to reach heights that we thought were unachievable.",
    name: "Steven Deans",
    role: "Owner of Steve's Tyre Service & Auto Care",
  },
  {
    review:
      "Excellent team to deal with. They have collaborated with us on a lot of aspects including social media, ads, and a fresh re-brand, this has enabled us to become more recognizable as we aim to further expand to new locations. Most importantly they enjoy what they do.",
    name: "Paul Leang",
    role: "Director of Formosa Pacific Limited",
  },
  {
    review:
      "Highly recommend this team of young professionals. You can tell they put their heart and passion into their work - it is just quality. They hit deadlines, communication is very efficient and prompt. Eltezza is extremely responsive to feedback and they go above and beyond to deliver value.",
    name: "Keonimana Shigematsu",
    role: "Director of IKAIKA",
  },
  {
    review: "Very smooth process and great finished product. Stoked!",
    name: "Sam Bulman",
    role: "Founder of Greenhill Seltzers",
  },
  {
    review:
      "I've been working with Eltezza for a few months now, and I'd give them 10 stars if I could! They have great ideas and make me feel comfortable on camera, despite my lack of confidence. Our customers love the content, and I'd highly recommend them!",
    name: "Nicky Robert",
    role: "Robert Embrodieries",
  },
  {
    review:
      "We recommend Eltezza highly for any business that wants to develop a brand voice. We worked with them on a 6-month contract to develop our brand from the ground up. Content creation always seemed complicated and I am happy to say the team here has got it sorted for my business and we have attained the style we have always envisioned.",
    name: "Sean Jha",
    role: "Just Pets",
  },
  {
    review:
      "Great company to deal with. Made everything easy to understand, and worked with us around our busy schedule. Always bright, bubbly, friendly, and willing to lend a hand if we got stuck. Not to mention that they customized our website to develop something that truly reflected what we wanted for our business. We have no hesitations in recommending Eltezza.",
    name: "Sean Cupples",
    role: "Director of Cupples Construction",
  },
] satisfies Array<TestimonialsData>;
