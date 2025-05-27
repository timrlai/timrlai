import type {
  LottieConstants,
  SubItem,
  SocialButton,
  Skill,
  EducationSkills,
} from "../types";

export const lottieConstants: LottieConstants = {
  CLOUDS_LIGHT_LOTTIE_PATH: "/lottie/bg/clouds_light.json",
  CLOUDS_DARK_LOTTIE_PATH: "/lottie/bg/clouds_dark.json",
  AVATAR_WAVE_LOTTIE_PATH: "/lottie/avatars/timrlai_avatar_wave.json",
  AVATAR_SUMMARY_LOTTIE_PATH: "/lottie/avatars/timrlai_avatar_summary.json",
  AVATAR_SKILLS_DESK_LOTTIE_PATH:
    "/lottie/avatars/timrlai_avatar_skills_desk.json",
  AVATAR_SKILLS_LEGS_LOTTIE_PATH:
    "/lottie/avatars/timrlai_avatar_skills_legs.json",
  AVATAR_SKILLS_SOFT_LOTTIE_PATH:
    "/lottie/avatars/timrlai_avatar_skills_soft.json",
  AVATAR_VR_LOTTIE_PATH: "/lottie/avatars/timrlai_avatar_vr.json",
  AVATAR_TEACHER_DESK_LOTTIE_PATH:
    "/lottie/avatars/timrlai_avatar_teacher_desk.json",
  AVATAR_TEACHER_LEGS_LOTTIE_PATH:
    "/lottie/avatars/timrlai_avatar_teacher_legs.json",
  AVATAR_DESIGNER_DESK_LOTTIE_PATH:
    "/lottie/avatars/timrlai_avatar_designer_desk.json",
  AVATAR_DESIGNER_NO_DESK_LOTTIE_PATH:
    "/lottie/avatars/timrlai_avatar_designer_no_desk.json",
  AVATAR_ILLUSTRATOR_LOTTIE_PATH:
    "/lottie/avatars/timrlai_avatar_illustrator.json",
  AVATAR_EDUCATION_LOTTIE_PATH: "/lottie/avatars/timrlai_avatar_education.json",
  AVATAR_VOLUNTEER_LOTTIE_PATH: "/lottie/avatars/timrlai_avatar_volunteer.json",
  BAT_LOTTIE_PATH: "/lottie/bats/timrlai_bat.json",
  NOT_FOUND_LOTTIE_FOLDER: "/lottie/404/",
  NOT_FOUND_LOTTIES: [
    "404_cat_clouds.json",
    "404_cat_magnifying_glass.json",
    "404_cat_papers.json",
    "404_cat_yarn.json",
  ],
};

export const meetSubItems: SubItem[] = [
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
  {
    label: "Experience",
    to: "/",
    hash: "experience",
    icon: "mingcute:document-2-fill",
  },
];

export const experienceSubItems: SubItem[] = [
  {
    label: "Developer",
    to: "/experience",
    hash: "developer",
    icon: "mingcute:code-fill",
  },
  {
    label: "Teacher",
    to: "/experience",
    hash: "teacher",
    icon: "mingcute:school-fill",
  },
  {
    label: "Designer",
    to: "/experience",
    hash: "designer",
    icon: "mingcute:palette-fill",
  },
  {
    label: "Illustrator",
    to: "/experience",
    hash: "illustrator",
    icon: "mingcute:paint-brush-fill",
  },
  {
    label: "Education",
    to: "/experience",
    hash: "education",
    icon: "mingcute:mortarboard-fill",
  },
  {
    label: "Volunteer",
    to: "/experience",
    hash: "volunteer",
    icon: "mingcute:hand-heart-fill",
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
    main: false,
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
    title: "a full-stack Software Developer",
    icon: "fluent-emoji:man-technologist-light",
  },
  {
    title: "a full-stack Web Developer",
    icon: "fluent-color:code-20",
  },
  {
    title: "a JavaScript Developer",
    icon: "catppuccin:javascript",
  },
  { title: "a Python Developer", icon: "catppuccin:python" },
  { title: "a PHP Developer", icon: "catppuccin:php" },
  { title: "a React Developer", icon: "catppuccin:javascript-react" },
  { title: "a Vue Developer", icon: "catppuccin:vue" },
  {
    title: "an Angular Developer",
    icon: "catppuccin:angular",
  },
  { title: "a Django Developer", icon: "catppuccin:django" },
  {
    title: "a Laravel Developer",
    icon: "catppuccin:laravel",
  },
  {
    title: "a WebGL and Three.js Developer",
    icon: "skill-icons:threejs-dark",
  },
  { title: "a VR/AR Developer", icon: "fluent-emoji:goggles" },
  {
    title: "a teacher of Web Programming",
    icon: "fluent-emoji:man-teacher-light",
  },
  { title: "a web designer", icon: "fluent-emoji:spider-web" },
  { title: "a graphic designer", icon: "fluent-color:design-ideas-20" },
  { title: "a UI/UX designer", icon: "fluent-color:phone-laptop-20" },
  { title: "an illustrator", icon: "fluent-emoji:man-artist-light" },
  { title: "a cartoonist", icon: "fluent-emoji:pencil" },
  {
    title: "a college graduate in Software Development",
    icon: "fluent-emoji:student-light",
  },
  {
    title: "living in Ontario, Canada",
    icon: "cif:ca",
  },
  {
    title: "a pretty cool guy (I think)",
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
  { title: "Lua", icon: "skill-icons:lua-light" },
  { title: "HTML", icon: "skill-icons:html" },
  { title: "XML", icon: "devicon:xml" },
  { title: "CSS", icon: "skill-icons:css" },
  { title: "Sass", icon: "skill-icons:sass" },
  { title: "Less", icon: "skill-icons:less-dark" },
  { title: "Bash", icon: "skill-icons:bash-light" },
  { title: "GLSL", icon: "vscode-icons:file-type-glsl" },
  { title: "JSON", icon: "logos:json" },
  { title: "YAML", icon: "devicon:yaml" },
  { title: "TOML", icon: "logos:toml" },
  { title: "Markdown", icon: "skill-icons:markdown-dark" },
];
export const frameworkSkills: Skill[] = [
  { title: "React", icon: "skill-icons:react-dark" },
  { title: "Next.js", icon: "skill-icons:nextjs-light" },
  { title: "Angular", icon: "skill-icons:angular-dark" },
  { title: "Vue", icon: "skill-icons:vuejs-dark" },
  { title: "Vite", icon: "skill-icons:vite-dark" },
  { title: "Webpack", icon: "skill-icons:webpack-light" },
  { title: "Express", icon: "skill-icons:expressjs-dark" },
  { title: "Koa", icon: "simple-icons:koa" },
  { title: "Django", icon: "skill-icons:django" },
  { title: "Flask", icon: "skill-icons:flask-light" },
  { title: "Laravel", icon: "skill-icons:laravel-light" },
  { title: "Ruby on Rails", icon: "skill-icons:rails" },
  { title: "Spring MVC", icon: "skill-icons:spring-light" },
  { title: "Electron", icon: "skill-icons:electron" },
  { title: "Zustand", icon: "devicon:zustand" },
  { title: "Pinia", icon: "skill-icons:pinia-dark" },
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
  { title: "TresJS", icon: null },
  { title: "A-Frame", icon: null },
  { title: "WebGL", icon: "file-icons:webgl" },
  { title: "OpenGL", icon: "file-icons:opengl" },
  { title: "React Spring", icon: "logos:react-spring" },
  { title: "Theatre.js", icon: null },
  { title: "Lottie", icon: "material-icon-theme:lottie" },
  { title: "OpenCV", icon: "skill-icons:opencv-light" },
  { title: "Prettier", icon: "material-icon-theme:prettier" },
  { title: "ESLint", icon: "material-icon-theme:eslint" },
  { title: "Jest", icon: "skill-icons:jest" },
  { title: "Jasmine", icon: "devicon:jasmine-wordmark" },
  { title: "Puppeteer", icon: "devicon:puppeteer" },
  { title: "jQuery", icon: "skill-icons:jquery" },
  { title: "Enhance", icon: null },
];
export const databaseSkills: Skill[] = [
  { title: "MySQL", icon: "skill-icons:mysql-light" },
  { title: "MariaDB", icon: "simple-icons:mariadb" },
  { title: "PostgreSQL", icon: "skill-icons:postgresql-light" },
  { title: "SQLite", icon: "skill-icons:sqlite" },
  { title: "DynamoDB", icon: "skill-icons:dynamodb-light" },
  { title: "GraphQL", icon: "skill-icons:graphql-light" },
];
export const cmsSkills: Skill[] = [
  { title: "WordPress", icon: "skill-icons:wordpress" },
  { title: "ExpressionEngine", icon: null },
];
export const editorSkills: Skill[] = [
  { title: "VS Code", icon: "skill-icons:vscode-light" },
  { title: "Visual Studio", icon: "skill-icons:visualstudio-light" },
  { title: "Adobe Dreamweaver", icon: "logos:adobe-dreamweaver" },
  { title: "Eclipse", icon: "skill-icons:eclipse-light" },
  { title: "Android Studio", icon: "skill-icons:androidstudio-light" },
  { title: "Postman", icon: "skill-icons:postman" },
  { title: "Meta Developer Hub", icon: "logos:meta-icon" },
  { title: "FileZilla", icon: "devicon:filezilla" },
  { title: "WinSCP", icon: null },
];
export const designSkills: Skill[] = [
  { title: "Adobe Photoshop", icon: "logos:adobe-photoshop" },
  { title: "Adobe Illustrator", icon: "logos:adobe-illustrator" },
  { title: "Adobe XD", icon: "logos:adobe-xd" },
  { title: "Adobe After Effects", icon: "logos:adobe-after-effects" },
  { title: "Adobe InDesign", icon: "logos:adobe-indesign" },
  { title: "Canva", icon: "devicon:canva" },
  { title: "Blender", icon: "skill-icons:blender-dark" },
  { title: "3ds Max", icon: "devicon:3dsmax" },
  { title: "Google Sketchup", icon: "skill-icons:sketchup-light" },
  { title: "Clip Studio Paint", icon: "arcticons:clip-studio" },
  { title: "CorelDRAW", icon: "simple-icons:coreldraw" },
  { title: "Corel Painter", icon: null },
  { title: "Visual Paradigm", icon: null },
];
export const hostingSkills: Skill[] = [
  { title: "AWS", icon: "skill-icons:aws-light" },
  { title: "Render", icon: "simple-icons:render" },
  { title: "Dreamhost", icon: "logos:dreamhost" },
  { title: "Porkbun", icon: "simple-icons:porkbun" },
  { title: "Namecheap", icon: "logos:namecheap" },
  { title: "Wix", icon: "simple-icons:wix" },
];
export const generalSkills: Skill[] = [
  { title: "Linux", icon: "skill-icons:linux-light" },
  { title: "XAMPP", icon: "logos:xampp" },
  { title: "Git", icon: "skill-icons:git" },
  { title: "GitHub", icon: "skill-icons:github-dark" },
  { title: "Terraform", icon: "skill-icons:terraform-light" },
  { title: "ClickUp", icon: "simple-icons:clickup" },
  { title: "Height", icon: null },
  { title: "Slack", icon: "devicon:slack" },
  { title: "Discord", icon: "skill-icons:discord" },
  { title: "Microsoft Teams", icon: "logos:microsoft-teams" },
  { title: "Zoom", icon: "logos:zoom-icon" },
  { title: "Google Meet", icon: "logos:google-meet" },
  { title: "Google Docs", icon: "logos:google-drive" },
  { title: "Microsoft Office", icon: "mdi:microsoft-office" },
  { title: "Microsoft Word", icon: "vscode-icons:file-type-word" },
  { title: "Microsoft Excel", icon: "vscode-icons:file-type-excel" },
  { title: "Prezi", icon: "simple-icons:prezi" },
];
export const primarySkills: Skill[] = [
  ...languageSkills.filter(({ title }) =>
    [
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "Ruby",
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
  ...databaseSkills.filter(({ title }) =>
    ["MySQL", "MariaDB", "PostgreSQL"].includes(title),
  ),
  cmsSkills[0],
  ...editorSkills.filter(({ title }) =>
    ["VS Code", "Visual Studio", "Postman"].includes(title),
  ),
  ...generalSkills.filter(({ title }) => ["Git", "GitHub"].includes(title)),
  ...designSkills.filter(({ title }) =>
    ["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"].includes(title),
  ),
];
export const futuretalkSkills: Skill[] = [
  ...languageSkills.filter(({ title }) =>
    [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Python",
      "Lua",
      "HTML",
      "CSS",
      "Sass",
      "Bash",
      "GLSL",
      "JSON",
      "YAML",
      "TOML",
      "Markdown",
    ].includes(title),
  ),
  ...frameworkSkills.filter(({ title }) =>
    [
      "React",
      "Next.js",
      "Webpack",
      "Koa",
      "Zustand",
      "Tailwind CSS",
      "Carbon Design System",
      "Three.js",
      "React Three Fiber",
      "Drei",
      "A-Frame",
      "WebGL",
      "React Spring",
      "Theatre.js",
      "Lottie",
      "Prettier",
      "ESLint",
    ].includes(title),
  ),
  ...databaseSkills.filter(({ title }) => ["DynamoDB"].includes(title)),
  ...designSkills.filter(({ title }) => ["Adobe XD", "Canva"].includes(title)),
  ...editorSkills.filter(({ title }) =>
    ["VS Code", "Postman", "Meta Developer Hub"].includes(title),
  ),
  ...hostingSkills.filter(({ title }) => ["AWS"].includes(title)),
  ...generalSkills.filter(({ title }) =>
    [
      "Git",
      "GitHub",
      "Terraform",
      "ClickUp",
      "Height",
      "Slack",
      "Discord",
      "Google Meet",
      "Google Docs",
    ].includes(title),
  ),
];
export const freelanceSkills: Skill[] = [
  ...languageSkills.filter(({ title }) =>
    [
      "JavaScript",
      "Node.js",
      "PHP",
      "HTML",
      "CSS",
      "Sass",
      "Less",
      "Bash",
      "JSON",
      "Markdown",
    ].includes(title),
  ),
  ...frameworkSkills.filter(({ title }) =>
    ["Bootstrap", "Gulp.js", "jQuery"].includes(title),
  ),
  ...databaseSkills.filter(({ title }) => ["MySQL", "MariaDB"].includes(title)),
  cmsSkills[0],
  ...designSkills.filter(({ title }) =>
    [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe XD",
      "CorelDRAW",
    ].includes(title),
  ),
  ...editorSkills.filter(({ title }) => ["VS Code"].includes(title)),
  ...hostingSkills.filter(({ title }) =>
    ["Dreamhost", "Namecheap", "Wix"].includes(title),
  ),
  ...generalSkills.filter(({ title }) =>
    ["XAMPP", "Git", "GitHub", "Google Docs"].includes(title),
  ),
];
export const instructorSkills: Skill[] = [
  ...languageSkills.filter(({ title }) =>
    [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Python",
      "PHP",
      "HTML",
      "CSS",
      "Sass",
      "Bash",
      "JSON",
      "Markdown",
    ].includes(title),
  ),
  ...frameworkSkills.filter(({ title }) =>
    [
      "Angular",
      "Django",
      "Laravel",
      "Bootstrap",
      "Electron",
      "Gulp.js",
      "OpenCV",
      "jQuery",
    ].includes(title),
  ),
  ...databaseSkills.filter(({ title }) =>
    ["MySQL", "MariaDB", "PostgreSQL"].includes(title),
  ),
  cmsSkills[0],
  ...designSkills.filter(({ title }) =>
    ["Adobe Illustrator", "Adobe InDesign"].includes(title),
  ),
  ...editorSkills.filter(({ title }) => ["VS Code"].includes(title)),
  ...generalSkills.filter(({ title }) =>
    [
      "XAMPP",
      "Git",
      "GitHub",
      "Microsoft Teams",
      "Microsoft Office",
      "Microsoft Word",
      "Microsoft Excel",
      "Prezi",
    ].includes(title),
  ),
];
export const technologistSeniorSkills: Skill[] = [
  ...languageSkills.filter(({ title }) =>
    [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "PHP",
      "HTML",
      "CSS",
      "Sass",
      "Bash",
      "JSON",
    ].includes(title),
  ),
  ...frameworkSkills.filter(({ title }) =>
    ["Bootstrap", "Electron", "Gulp.js", "jQuery"].includes(title),
  ),
  ...databaseSkills.filter(({ title }) => ["MySQL", "MariaDB"].includes(title)),
  cmsSkills[0],
  ...designSkills.filter(({ title }) => ["Adobe Photoshop"].includes(title)),
  ...editorSkills.filter(({ title }) => ["Adobe Dreamweaver"].includes(title)),
  ...generalSkills.filter(({ title }) =>
    ["XAMPP", "Git", "GitHub"].includes(title),
  ),
];
export const illustratorSkills: Skill[] = [
  ...designSkills.filter(({ title }) =>
    [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe After Effects",
      "Adobe InDesign",
      "Clip Studio Paint",
      "CorelDRAW",
      "Corel Painter",
    ].includes(title),
  ),
  ...languageSkills.filter(({ title }) =>
    ["HTML", "CSS", "JSON"].includes(title),
  ),
  ...frameworkSkills.filter(({ title }) => ["Lottie"].includes(title)),
  cmsSkills[0],
];
export const educationSkills: EducationSkills = {
  bsd: [
    ...languageSkills.filter(({ title }) =>
      [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Python",
        "Java",
        "C#",
        "C",
        "C++",
        "HTML",
        "CSS",
        "Sass",
        "Bash",
        "JSON",
        "Markdown",
      ].includes(title),
    ),
    ...frameworkSkills.filter(({ title }) =>
      [
        "React",
        "Angular",
        "Express",
        "Spring MVC",
        "OpenGL",
        "OpenCV",
        "Jasmine",
        "jQuery",
      ].includes(title),
    ),
    ...databaseSkills.filter(({ title }) =>
      ["MySQL", "MariaDB"].includes(title),
    ),
    ...designSkills.filter(({ title }) =>
      ["3ds Max", "Visual Paradigm"].includes(title),
    ),
    ...editorSkills.filter(({ title }) =>
      ["VS Code", "Visual Studio", "Android Studio"].includes(title),
    ),
    ...generalSkills.filter(({ title }) =>
      ["Linux", "Git", "GitHub"].includes(title),
    ),
  ],
  it: [
    ...languageSkills.filter(({ title }) =>
      [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Python",
        "PHP",
        "Ruby",
        "HTML",
        "CSS",
        "Sass",
        "Bash",
        "JSON",
        "Markdown",
      ].includes(title),
    ),
    ...frameworkSkills.filter(({ title }) =>
      [
        "Angular",
        "Django",
        "Laravel",
        "Ruby on Rails",
        "Bootstrap",
        "jQuery",
      ].includes(title),
    ),
    ...databaseSkills.filter(({ title }) =>
      ["MySQL", "MariaDB"].includes(title),
    ),
    ...generalSkills.filter(({ title }) =>
      ["XAMPP", "Git", "GitHub"].includes(title),
    ),
  ],
  web: [
    ...languageSkills.filter(({ title }) =>
      [
        "JavaScript",
        "Node.js",
        "PHP",
        "HTML",
        "CSS",
        "Sass",
        "Bash",
        "JSON",
      ].includes(title),
    ),
    ...frameworkSkills.filter(({ title }) =>
      ["Bootstrap", "Electron", "jQuery"].includes(title),
    ),
    ...databaseSkills.filter(({ title }) =>
      ["MySQL", "MariaDB"].includes(title),
    ),
    cmsSkills[0],
    ...designSkills.filter(({ title }) => ["Adobe Photoshop"].includes(title)),
    ...editorSkills.filter(({ title }) =>
      ["Adobe Dreamweaver"].includes(title),
    ),
    ...generalSkills.filter(({ title }) =>
      ["XAMPP", "Git", "GitHub"].includes(title),
    ),
  ],
  ilu: [
    ...designSkills.filter(({ title }) =>
      [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe After Effects",
        "Google Sketchup",
        "Clip Studio Paint",
      ].includes(title),
    ),
    ...languageSkills.filter(({ title }) => ["HTML", "CSS"].includes(title)),
  ],
  afd: [
    ...designSkills.filter(({ title }) =>
      [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Google Sketchup",
        "Clip Studio Paint",
      ].includes(title),
    ),
  ],
};
export const taafiSkills: Skill[] = [
  ...designSkills.filter(({ title }) =>
    ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"].includes(title),
  ),
  ...generalSkills.filter(({ title }) =>
    ["Slack", "Google Docs"].includes(title),
  ),
];
export const madeWithSkills: Skill[] = [
  { title: "TypeScript", icon: "catppuccin:typescript" },
  { title: "Vue", icon: "catppuccin:vue" },
  { title: "Vite", icon: "catppuccin:vite" },
  { title: "Bun", icon: "catppuccin:bun" },
  { title: "Three.js", icon: "skill-icons:threejs-dark" },
  { title: "TresJS", icon: null },
  { title: "WebGL", icon: "file-icons:webgl" },
  { title: "GLSL", icon: "vscode-icons:file-type-glsl" },
  { title: "Lottie", icon: "material-icon-theme:lottie" },
  { title: "HTML", icon: "catppuccin:html" },
  { title: "CSS", icon: "catppuccin:css" },
  { title: "Tailwind", icon: "catppuccin:tailwind" },
  { title: "daisyUI", icon: "logos:daisyui-icon" },
  { title: "Sass", icon: "catppuccin:sass" },
  { title: "Pinia", icon: "logos:pinia" },
  { title: "Puppeteer", icon: "catppuccin:puppeteer" },
  { title: "Prettier", icon: "catppuccin:prettier" },
  { title: "ESLint", icon: "catppuccin:eslint" },
  { title: "JSON", icon: "catppuccin:json" },
  { title: "TOML", icon: "catppuccin:toml" },
  { title: "YAML", icon: "catppuccin:yaml" },
  { title: "Markdown", icon: "catppuccin:markdown" },
  { title: "VS Code", icon: "catppuccin:vscode" },
  { title: "Git", icon: "catppuccin:git" },
  { title: "GitHub", icon: "catppuccin:folder-github" },
  { title: "Adobe Illustrator", icon: "catppuccin:adobe-ai" },
  { title: "Adobe After Effects", icon: "catppuccin:adobe-ae" },
  { title: "Adobe Photoshop", icon: "catppuccin:adobe-ps" },
  { title: "Blender", icon: "logos:blender" },
  { title: "Render", icon: "simple-icons:render" },
  { title: "Porkbun", icon: "simple-icons:porkbun" },
];
