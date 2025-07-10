const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "In-progress Projects" },
  { value: 3, suffix: "+", label: "Completed Projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "Time Management",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
  {
    imgPath: "/images/books.png",
    title: "Learner",
    desc: "Always ready to learn new software development skills. Takes the time to learn a new skill.",
  },
  {
    imgPath: "/images/creative.png",
    title: "Creative",
    desc: "Always up to creating new projects that falls about web, game, or product development.",
  },
];

const techStackImgs = [
  {
    name: "Unreal Developer",
    imgPath: "/images/logos/unreal.png",
  },
  {
    name: "Blender Developer",
    imgPath: "/images/logos/blender.png",
  },
  {
    name: "Godot Developer",
    imgPath: "/images/logos/godot.png",
  },
  {
    name: "Aspeite Artist",
    imgPath: "/images/logos/aseprite.png",
  },
  {
    name: "Engineer",
    imgPath: "/images/logos/engineer.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: `Vianey brought creativity and technical expertise to the team, significantly 
      improving our frontend and backend performance.`,
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Fantasy League Database Website | Academic Project",
    sub: "Full Stack Developer",
    date: "September 2024-December 2024",
    responsibilities: [
      "Communicate with my colleages to efficently go over the best ORM for our database.",
      "Designed and deployed a full stack Fantasy League web using HTML, CSS, JavaScript, MySQL, Django, and Azure",
      "Implemented distinct user and admin authentication system with role-based permissions",
      "Enabled user to create and manage custom teams and players.",
      "Admin can control match creation, outcome management, and overall system maintenance.",
    ],
  },
  {
    review: `Vianey work alongside our team efficently by working over our budget 
    and buying the necessary material for the prototype. She work with another programmer
    to get the smart trash bin's functions working.`,
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "CleanCycle's Smart Trash Bin | Academic Project",
    sub: "Audrino C Developer & Planner",
    date: "January 2024-May 2024",
    responsibilities: [
      "Communicate with my colleages to efficently go over our budget and build material necessary for the prototype.",
      "Programmed interaction logic using Arduino and documented hardware flow.",
      "Designed and built a trash bin that uses ultrasound sensors and servo motors.",
    ],
  },
  {
    review: `Vianey was able to work on the project solo or within a group.`,
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title:
      "Designing for Creative Physical Computing VIP | Extracurricular Activities",
    sub: "Audrino C Developer",
    date: "September 2021-May 2022",
    responsibilities: [
      "Collaborate with a multidisciplinary team to design and build an interactive mural installation using a co-design framework.",
      "Built interactive components using Arduino and aluminum foil, and soldered circuitry.",
      "Contributed to both visual and technical aspects of the project to engage viewers through physical computing and interactive design.",
    ],
  },
  {
    review: `I was able to learn about many libraries and frameworks to develop more skills in data science.`,
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Data Science Bootcamp | Extracurricular Activities",
    sub: "Extern",
    date: "February 2022-May 2022",
    responsibilities: [
      "Participated in a 12-week program that teaches Python, Git, Database Management Systems, SQL, Python Libraries, Exploratory Data Analysis, Data Visualization, and machine learning.",
      "Patiently working in a virtual environment and communicating with mentors and other college students via Slack and Gmail. Completed the bootcamp to a certificate.",
    ],
  },
  {
    review: `I was able to learn web development and programming languages. This would be my inspiration to become an engineer in the future.`,
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Intern: Girls Who Code Summer Internship | Work Experience",
    sub: "Intern",
    date: "July 2018-August 2018",
    responsibilities: [
      "Built upon coding skills by learning to code in JavaScript, HTML, CSS, Python, and Arduino C.",
      "Developed teamwork and communication skills to accomplish different coding projects.",
      "Creating a website from scratch and programming robotic movements.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "Business Email",
    imgPath: "/images/gm.png",
    linkPath: "vianeyr8624@gmail.com",
  },
  {
    name: "GitHub",
    imgPath: "/images/gh.png",
    linkPath: "https://github.com/Blazer7986",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    linkPath: "https://www.linkedin.com/in/vianey-rivera-b21326168/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
