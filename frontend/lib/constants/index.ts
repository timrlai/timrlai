import type {
  SvgConstants,
  LottieConstants,
  SubItem,
  SocialButton,
  Skill,
} from "../types";

export const svgConstants: SvgConstants = {
  LOGO_DARK_SVG_PATH: "../../src/assets/img/logos/timrlai_logo.svg",
  LOGO_LIGHT_SVG_PATH: "../../src/assets/img/logos/timrlai_logo_light.svg",
};

export const lottieConstants: LottieConstants = {
  CLOUDS_LOTTIE_PATH: "/lottie/bg/clouds_lottie.json",
  AVATAR_WAVE_LOTTIE_PATH: "/lottie/avatars/timrlai_avatar_wave.json",
  NOT_FOUND_LOTTIE_FOLDER: "/lottie/404/",
  NOT_FOUND_LOTTIES: [
    "404_cat_clouds.json",
    "404_cat_magnifying_glass.json",
    "404_cat_papers.json",
    "404_cat_yarn.json",
  ],
};

export const subItems: SubItem[] = [
  {
    label: "Hi!",
    to: "/",
    hash: "hi",
    icon: "mingcute:hand-fill",
  },
  {
    label: "Summary",
    to: "/",
    hash: "summary",
    icon: "mingcute:list-check-3-fill",
  },
  {
    label: "Skills",
    to: "/",
    hash: "skills",
    icon: "mingcute:code-fill",
  },
];

export const socialButtons: SocialButton[] = [
  {
    tooltip: "Twitch",
    url: "https://twitch.tv/timrlai",
    icon: "cib:twitch",
    main: false,
  },
  {
    tooltip: "YouTube",
    url: "https://www.youtube.com/@timrlai",
    icon: "mingcute:youtube-fill",
    main: false,
  },
  {
    tooltip: "Artstation",
    url: "https://artstation.com/timrlai",
    icon: "cib:artstation",
    main: false,
  },
  {
    tooltip: "Dribbble",
    url: "https://dribbble.com/timrlai",
    icon: "mingcute:dribbble-fill",
    main: false,
  },
  {
    tooltip: "Instagram",
    url: "https://instagram.com/timrlai",
    icon: "mingcute:instagram-line",
    main: false,
  },
  {
    tooltip: "Threads",
    url: "https://threads.com/timrlai",
    icon: "mingcute:threads-fill",
    main: false,
  },
  {
    tooltip: "Twitter (No, not X)",
    url: "https://twitter.com/timrlai",
    icon: "mingcute:twitter-fill",
    main: true,
  },
  {
    tooltip: "GitHub",
    url: "https://github.com/timrlai",
    icon: "mingcute:github-fill",
    main: true,
  },
  {
    tooltip: "LinkedIn",
    url: "https://www.linkedin.com/in/timrlai/",
    icon: "mingcute:linkedin-fill",
    main: true,
  },
];

export const intros: Skill[] = [
  {
    title: "a full-stack Software Developer.",
    icon: "fluent-emoji:man-technologist-light",
  },
  {
    title: "a full-stack Web Developer.",
    icon: "fluent-color:code-20",
  },
  {
    title: "a JavaScript Developer.",
    icon: "catppuccin:javascript",
  },
  { title: "a Python Developer.", icon: "catppuccin:python" },
  { title: "a PHP Developer.", icon: "catppuccin:php" },
  { title: "a React Developer.", icon: "catppuccin:javascript-react" },
  { title: "a Vue Developer.", icon: "catppuccin:vue" },
  {
    title: "an Angular Developer.",
    icon: "catppuccin:angular",
  },
  { title: "a Django Developer.", icon: "catppuccin:django" },
  {
    title: "a Laravel Developer.",
    icon: "catppuccin:laravel",
  },
  {
    title: "a WebGL and Three.js Developer.",
    icon: "skill-icons:threejs-dark",
  },
  { title: "a VR/AR Developer.", icon: "fluent-emoji:goggles" },
  {
    title: "a teacher of Web Programming.",
    icon: "fluent-emoji:man-teacher-light",
  },
  { title: "a web designer.", icon: "fluent-emoji:spider-web" },
  { title: "a graphic designer.", icon: "fluent-color:design-ideas-20" },
  { title: "a UI/UX designer.", icon: "fluent-color:phone-laptop-20" },
  { title: "an illustrator.", icon: "fluent-emoji:man-artist-light" },
  { title: "a cartoonist.", icon: "fluent-emoji:pencil" },
  {
    title: "a college graduate in Software Development.",
    icon: "fluent-emoji:student-light",
  },
  {
    title: "living in Ontario, Canada.",
    icon: "cif:ca",
  },
  {
    title: "a pretty cool guy (I think).",
    icon: "fluent-emoji:smiling-face-with-sunglasses",
  },
];

export const languageSkills: Skill[] = [
  { title: "JavaScript", icon: "skill-icons:javascript" },
  { title: "TypeScript", icon: "skill-icons:typescript" },
  { title: "Node.js", icon: "skill-icons:nodejs-dark" },
  { title: "Bun", icon: "skill-icons:bun-dark" },
  { title: "Python", icon: "skill-icons:python-light" },
  { title: "PHP", icon: "skill-icons:php-dark" },
  { title: "Ruby", icon: "skill-icons:ruby" },
  { title: "Java", icon: "skill-icons:java-light" },
  { title: "C#", icon: "skill-icons:cs" },
  { title: "C", icon: "skill-icons:c" },
  { title: "C++", icon: "skill-icons:cpp" },
  { title: "HTML", icon: "skill-icons:html" },
  { title: "XML", icon: "devicon:xml" },
  { title: "CSS", icon: "skill-icons:css" },
  { title: "Sass", icon: "skill-icons:sass" },
  { title: "MySQL", icon: "skill-icons:mysql-light" },
  { title: "MariaDB", icon: "devicon:mariadb-wordmark" },
  { title: "PostgreSQL", icon: "skill-icons:postgresql-light" },
  { title: "SQLite", icon: "skill-icons:sqlite" },
  { title: "JSON", icon: "logos:json" },
  { title: "YAML", icon: "devicon:yaml" },
  { title: "TOML", icon: "logos:toml" },
  { title: "Markdown", icon: "skill-icons:markdown-dark" },
];
export const frameworkSkills: Skill[] = [
  { title: "React", icon: "skill-icons:react-dark" },
  { title: "Next.js", icon: "skill-icons:nextjs-dark" },
  { title: "Angular", icon: "skill-icons:angular-dark" },
  { title: "Vue", icon: "skill-icons:vuejs-dark" },
  { title: "Vite", icon: "skill-icons:vite-dark" },
  { title: "Express", icon: "skill-icons:expressjs-dark" },
  { title: "Koa", icon: null },
  { title: "Django", icon: "skill-icons:django" },
  { title: "Flask", icon: "skill-icons:flask-light" },
  { title: "Laravel", icon: "skill-icons:laravel-light" },
  { title: "Ruby on Rails", icon: "skill-icons:rails" },
  { title: "Spring MVC", icon: "skill-icons:spring-light" },
  { title: "Electron", icon: "skill-icons:electron" },
  { title: "Gulp.js", icon: "skill-icons:gulp" },
  { title: "Tailwind CSS", icon: "skill-icons:tailwindcss-dark" },
  { title: "daisyUI", icon: "logos:daisyui-icon" },
  { title: "Bootstrap", icon: "skill-icons:bootstrap" },
  { title: "Zurb Foundation", icon: "devicon:foundation-wordmark" },
  { title: "Material UI", icon: "skill-icons:materialui-light" },
  { title: "Carbon Design System", icon: "carbon:carbon" },
  { title: "Font Awesome", icon: "fa6-brands:square-font-awesome" },
  { title: "Three.js", icon: "skill-icons:threejs-dark" },
  { title: "React Three Fiber", icon: null },
  { title: "Drei", icon: null },
  { title: "A-Frame", icon: null },
  { title: "OpenGL", icon: "logos:opengl" },
  { title: "OpenCV", icon: "skill-icons:opencv-light" },
  { title: "Jasmine", icon: "devicon:jasmine-wordmark" },
  { title: "Enhance", icon: null },
];
export const cmsSkills: Skill[] = [
  { title: "WordPress", icon: "skill-icons:wordpress" },
  { title: "ExpressionEngine", icon: null },
];
export const editorSkills: Skill[] = [
  { title: "VS Code", icon: "skill-icons:vscode-light" },
  { title: "Visual Studio", icon: "skill-icons:visualstudio-light" },
  { title: "Dreamweaver", icon: "logos:adobe-dreamweaver" },
  { title: "Eclipse", icon: "skill-icons:eclipse-light" },
  { title: "Android Studio", icon: "skill-icons:androidstudio-light" },
  { title: "Postman", icon: "skill-icons:postman" },
  { title: "FileZilla", icon: "devicon:filezilla" },
  { title: "WinSCP", icon: null },
];
export const designSkills: Skill[] = [
  { title: "Adobe Photoshop", icon: "logos:adobe-photoshop" },
  { title: "Adobe Illustrator", icon: "logos:adobe-illustrator" },
  { title: "Adobe XD", icon: "logos:adobe-xd" },
  { title: "Adobe InDesign", icon: "logos:adobe-indesign" },
  { title: "Adobe AfterEffects", icon: "logos:adobe-after-effects" },
  { title: "Clip Studio Paint", icon: null },
  { title: "CorelDRAW", icon: null },
  { title: "Corel Painter", icon: null },
  { title: "Blender", icon: "skill-icons:blender-dark" },
  { title: "3ds Max", icon: null },
  { title: "Visual Paradigm", icon: null },
];
export const generalSkills: Skill[] = [
  { title: "Linux", icon: "skill-icons:linux-light" },
  { title: "Git", icon: "skill-icons:git" },
  { title: "GitHub", icon: "skill-icons:github-dark" },
  { title: "Slack", icon: "devicon:slack" },
  { title: "Discord", icon: "skill-icons:discord" },
  { title: "MSTeams", icon: "logos:microsoft-teams" },
  { title: "Zoom", icon: "logos:zoom-icon" },
  { title: "Google Docs", icon: "logos:google-drive" },
  { title: "Microsoft Office", icon: null },
];
export const primarySkills: Skill[] = [
  ...languageSkills.filter(({ title }) =>
    [
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "Ruby",
      "MySQL",
      "HTML",
      "CSS",
      "Sass",
    ].includes(title),
  ),
  ...frameworkSkills.filter(({ title }) =>
    [
      "React",
      "Next.js",
      "Angular",
      "Vue",
      "Vite",
      "Django",
      "Flask",
      "Laravel",
      "Ruby on Rails",
      "Tailwind CSS",
      "Bootstrap",
      "Three.js",
    ].includes(title),
  ),
  cmsSkills[0],
  ...editorSkills.filter(({ title }) =>
    ["Visual Studio Code", "Visual Studio", "Postman"].includes(title),
  ),
  ...generalSkills.filter(({ title }) => ["Git", "GitHub"].includes(title)),
  ...designSkills.filter(({ title }) =>
    ["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"].includes(title),
  ),
];
export const madeWithSkills: Skill[] = [
  {
    title: "TypeScript",
    icon: "catppuccin:typescript",
  },
  {
    title: "Bun",
    icon: "catppuccin:bun",
  },
  {
    title: "Vite",
    icon: "catppuccin:vite",
  },
  {
    title: "Vue",
    icon: "catppuccin:vue",
  },
  {
    title: "Three.js",
    icon: "skill-icons:threejs-dark",
  },
  {
    title: "HTML",
    icon: "catppuccin:html",
  },
  {
    title: "CSS",
    icon: "catppuccin:css",
  },
  {
    title: "Tailwind",
    icon: "catppuccin:tailwind",
  },
  {
    title: "daisyUI",
    icon: "logos:daisyui-icon",
  },
  {
    title: "Sass",
    icon: "catppuccin:sass",
  },
  {
    title: "Prettier",
    icon: "catppuccin:prettier",
  },
  {
    title: "ESLint",
    icon: "catppuccin:eslint",
  },
  {
    title: "JSON",
    icon: "catppuccin:json",
  },
  {
    title: "TOML",
    icon: "catppuccin:toml",
  },
  {
    title: "YAML",
    icon: "catppuccin:yaml",
  },
  {
    title: "Markdown",
    icon: "catppuccin:markdown",
  },
  {
    title: "VS Code",
    icon: "catppuccin:vscode",
  },
  {
    title: "Git",
    icon: "catppuccin:git",
  },
  {
    title: "GitHub",
    icon: "catppuccin:folder-github",
  },
  {
    title: "Adobe Illustrator",
    icon: "catppuccin:adobe-ai",
  },
  {
    title: "Adobe AfterEffects",
    icon: "catppuccin:adobe-ae",
  },
  {
    title: "Adobe Photoshop",
    icon: "catppuccin:adobe-ps",
  },
  {
    title: "Blender",
    icon: "logos:blender",
  },
];
