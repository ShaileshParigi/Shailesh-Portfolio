import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Bachelor of Engineering",
    company_name: "Rajiv Gandhi Institute of Technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2018 - August 2022",
    points: [
      "Branch: Electronics and Communication",
      "CGPA : 8.20",
      "Board/University: visvesvaraya Technological University",
    ],
  },
  {
    title: "Intermediate",
    company_name: "Narayana Jr.College",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2016 - March 2018",
    points: [
      "Branch:MPC (Maths,Physics,Chemistry)",
      "CGPA:9.7",
      "Board/University: BIEAP",
    ],
  },
  {
    title: "Secondary School Certificate",
    company_name: "Ravindra Bharathi School",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2014 - March 2016",
    points: ["Branch: SSC", "CGPA:9.7", "Board/University: APSSC"],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Promptopia",
    description:
      "A MERN full stack web application that enables users to track their prompts and keep them updated, it showcases prompts according to the logged in/Current user.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "REST APIs/MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ShaileshParigi/project_promtopia.git",
    project_live_link:
      "https://project-promtopia-qwe8ed8uq-shaileshreddy987-gmailcom.vercel.app/",
  },
  {
    name: "HooBank",
    description:
      "A responsive website that represents the a bank's profile and it's functionalities,Demonstrated using React, Figma, UI/UX design with Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "UI/UX",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ShaileshParigi/HooBank.git",
    project_live_link: "https://hoobankvite.netlify.app/",
  },

  {
    name: "Food Munch",
    description:
      "A responsive web design that showcases a restaurant web page, It contains different sections of such as Explore menu, Follow Us, Implemented using BootStrap, HTML5, CSS3.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ShaileshParigi/foodmunch.git",
    project_live_link: "https://shaileshfoodmun.ccbp.tech/",
  },
];

export { services, technologies, experiences, testimonials, projects };
