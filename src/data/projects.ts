import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Rapid Store",
    href: "/projects",
    tags: ["Razorpay-payment-integration", "Auth", "ReactJS", "Rapid-UI (my component library)", "Context API", "UseReducer"],
    image: {
      LIGHT: "/images/projects/store.png",
      DARK: "/images/projects/store.png",
    },
  },
  {
    index: 1,
    title: "DigiMantra Labs site",
    href: "/projects",
    tags: [
      "Nextjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "GraphQL",
      "Chatbot",
    ],
    image: {
      LIGHT: "/images/projects/dml.png",
      DARK: "/images/projects/dml.png",
    },
  },
  {
    index: 2,
    title: "Rapid Fire",
    href: "/projects",
    tags: ["ReactJS", "Redux-Toolkit", "RapidUI", "DarkMode"],
    image: {
      LIGHT: "/images/projects/fire1.png",
      DARK: "/images/projects/fire.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Rapid Store",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/store.png",
      "/images/projects/store2.png",
    ],
    description:
      "Rapid Store is an e-commerce platform based on theme Electronics & Gadgets. It's for shoppers who want best deal in small amount of time at fast speed. You can buy products in your favourite category on Rapid Store.",
    sourceCodeHref: "https://github.com/VLeads/Rapid-Store-React",
    liveWebsiteHref: "https://rapidstore-dev.netlify.app/",
  },
  {
    name: "DigiMantra Labs site",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/dml.png",
    ],
    description:
      "I've worked on making landing page pixel-perfect design and integrated chatbot. Integrated GraphQL to show data coming from backend",
    sourceCodeHref: "",
    liveWebsiteHref: "https://digimantralabs.com/",
  },
  {
    name: "Rapid Fire (Social Media app)",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/fire1.png",
      "/images/projects/fire.png",
    ],
    description:
      "Share moments, Connect, Know the World",
    sourceCodeHref: "https://github.com/vleads/rapidfire",
    liveWebsiteHref: "https://rapidfire.vercel.app/",
  },
  {
    name: "Rapid TV",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/tv.png",
      "/images/projects/tv1.png",
    ],
    description:
      "Rapid TV is a video library for tech enthusiast. It shows videos based on New gadgets arriving in the market, product reviews, tech news and whats overall happening in the market revolving around this theme.",
    sourceCodeHref: "https://github.com/vleads/rapidtv",
    liveWebsiteHref: "https://rapidfire.vercel.app/",
  },
];

export const BLOGS_CARD: ProjectCardProps[] = [
  {
    name: "Understand Debouncing and Throttling in javascript with examples",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/debounce.png",
    ],
    description:
      "In this article, we will discuss and understand debouncing and throttling in javascript, which are very useful when it comes to the performance of a website.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://thisisvishal.hashnode.dev/understand-debouncing-and-throttling-in-javascript-with-examples",
  },
  {
    name: "How to create your own custom Hooks in React (extensive guide)",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/hooks.png",
    ],
    description: "Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with 'use'. Example...",
    sourceCodeHref: "",
    liveWebsiteHref: "https://thisisvishal.hashnode.dev/how-to-create-your-own-custom-hooks-in-react-extensive-guide",
  },
  {
    name: "10 Important productivity tools to make developer life easier 👨‍💻👨‍💻",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/tools.png",
    ],
    description:
      "Developing is not only about getting your device and start coding directly for all day long. Right tools & guidance is all we need. If you're a developer these tools will definitely make your life hassle free. Let's dive in !!",
    sourceCodeHref: "",
    liveWebsiteHref: "https://thisisvishal.hashnode.dev/10-important-productivity-tools-to-make-developer-life-easier",
  },
  {
    name: "map, filter, reduce functions in JavaScript made easy 🔥",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/filter.png",
    ],
    description:
      `Let's understand some important functions of them, that are "map", "filter" and "reduce". You definitely have heard about them. You probably know about them. But are they still confusing to you? Let's make them beautifully more clearer to you via beautiful examples.`,
    sourceCodeHref: "",
    liveWebsiteHref: "https://thisisvishal.hashnode.dev/how-to-create-your-own-custom-hooks-in-react-extensive-guidehttps://thisisvishal.hashnode.dev/map-filter-reduce-functions-in-javascript-made-easy",
  },
];
