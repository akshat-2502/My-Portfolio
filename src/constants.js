// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/netflix.png";
import csprepLogo from "./assets/work_logo/watchtube.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npmLogo.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "GLA University, Mathura",
    date: "Sept 2022 - July 2024",
    grade: "7.81 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "BSA College, Mathura",
    date: "Sept 2018 - Aug 2021",
    grade: "73.2%",
    desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science - BSC (Computer Science)",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Vatsalya Public School Govardhan, Mathura",
    date: "Apr 2017 - March 2018",
    grade: "78%",
    desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "Vatsalya Public School Govardhan, Mathura",
    date: "Apr 2015 - March 2016",
    grade: "87.5%",
    desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI-powered Movie Recommendation App",
    description:
      "A full-stack AI-powered movie recommendation app built with React, Tailwind CSS, Redux Toolkit, and Firebase Authentication. It integrates Google Gemini API to generate context-aware movie suggestions and dynamically renders trailers via embedded players within the app. Redux efficiently handles global state and asynchronous actions, while Firebase secures authentication workflows. The responsive UI ensures a seamless cross-device user experience.",
    image: githubdetLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "API",
      "Redux",
      "Firebase",
      "GenAI",
      "React-Router",
      "Form Validation",
    ],
    github: "https://github.com/akshat-2502/Netflix-GPT",
    webapp: "https://netflix-gpt-1uzc.vercel.app/browse",
  },
  {
    id: 1,
    title: "WatchTube",
    description:
      "WatchTube is a high-performance YouTube clone built with React, Redux, Tailwind CSS, and JavaScript. It integrates Google APIs to fetch and display video content, with a debounced search box that provides real-time suggestions via API calls. Features include an optimized live chat system, efficient state management with Redux, and a recursive nested comments section for threaded discussions.",
    image: csprepLogo,
    tags: [
      "React JS",
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "API",
      "React-Router",
      "Debouncing Search Bar",
      "Live Chat",
    ],
    github: "https://github.com/akshat-2502/watchtube",
    webapp: "https://watchtube-beta.vercel.app/",
  },

  {
    id: 2,
    title: "Ochi-An Animation Website",
    description:
      "A visually rich animation website built using React, Tailwind CSS, JavaScript, HTML, Framer Motion, and GSAP. It features smooth, high-performance animations and interactive transitions for an immersive user experience. Framer Motion and GSAP power complex motion effects, while the responsive Tailwind layout ensures seamless performance across all devices. Designed for speed, elegance, and modern UI flow.",
    image: npmLogo,
    tags: [
      "React JS",
      "JavaScript",
      "Tailwind",
      "HTML",
      "GSAP",
      "Framer Motion",
    ],
    github: "https://github.com/akshat-2502/ochi",
    webapp: "https://ochi-seven-eta.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A fully responsive, modern portfolio website built using React, JavaScript, Tailwind CSS, and React Router. It features smooth navigation, animated typing effects via React Typewriter, and interactive elements powered by Parallax Tilt for an engaging user experience. The UI is optimized for all devices, showcasing projects and skills with a clean, visually appealing, and dynamic design.",
    image: movierecLogo,
    tags: [
      "React JS",
      "API",
      "HTML",
      "CSS",
      "JavaScript",
      "Parallax Tilt",
      "React-Router",
      "Simple Typewriter",
    ],
    github: "https://github.com/akshat-2502/My-Portfolio",
    webapp: "https://www.akshatportfolio.com/",
  },
  {
    id: 4,
    title: "TODO-LIST",
    description:
      "A dynamic and responsive To-Do List application developed using React and JavaScript. It features real-time task addition, deletion, and status toggling with efficient component-based state management. Designed with a clean UI, the app ensures a seamless user experience and fast performance, making task organization simple and intuitive across all devices.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/akshat-2502/Practice",
    webapp: "https://practice-seven-iota.vercel.app/",
  },
];
