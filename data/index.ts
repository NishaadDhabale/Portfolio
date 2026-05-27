export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I build scalable full-stack products with clear communication and ownership.",
    description: "SPPU IT Student | Full-Stack Developer",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Pune, India and open to remote collaboration.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "TypeScript, Next.js, Node.js, Prisma, PostgreSQL, MongoDB",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Focused on backend reliability, auth security, and real-time systems.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Leading technical execution for EDC at D.Y. Patil College of Engineering.",
    description: "Technical Co-Head",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to build a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Freeflow (Excali-Draw)",
    des: "Real-time collaborative canvas built with Next.js, TypeScript, Prisma, PostgreSQL, WebSockets, OAuth, and Node.js.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/ts.svg", "/node.svg", "/re.svg", "/tail.svg"],
    link: "https://github.com",
  },
  {
    id: 2,
    title: "SwiftPay - Payment Banking Application",
    des: "Interactive banking app with secure token-based authentication, MongoDB transaction logs, and reliable fund transfer workflows.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/ts.svg", "/node.svg", "/c.svg", "/tail.svg"],
    link: "https://github.com",
  },
  {
    id: 3,
    title: "MindStash",
    des: "Scalable content organization platform with folder-based management, shareable links, and REST APIs for CRUD operations.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/ts.svg", "/node.svg", "/c.svg", "/tail.svg"],
    link: "https://github.com",
  },
  {
    id: 4,
    title: "EDC Website - Official Club Portal",
    des: "Recruitment and management portal with role-based access, token validation, and scalable workflows.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/node.svg", "/c.svg", "/fm.svg"],
    link: "https://github.com",
  },
];

export const testimonials = [
  {
    quote:
      "Built a real-time collaborative system using WebSockets and a modular monorepo architecture, improving maintainability and supporting concurrent sessions smoothly.",
    name: "Freeflow",
    title: "Next.js | Prisma | PostgreSQL",
  },
  {
    quote:
      "Engineered secure authentication and transaction flows with improved consistency, reducing unauthorized access risk and ensuring reliable fund updates.",
    name: "SwiftPay",
    title: "React | Node.js | MongoDB",
  },
  {
    quote:
      "Designed scalable APIs and unified multi-type content dashboards, improving retrieval speed and reducing fragmented information for end users.",
    name: "MindStash",
    title: "React | TypeScript | Express",
  },
  {
    quote:
      "Led platform delivery for EDC with a seven-member team, supporting reliable operations and proactive issue resolution for technical infrastructure.",
    name: "Technical Co-Head",
    title: "EDC, D.Y. Patil COE",
  },
  {
    quote:
      "Focused on practical engineering with strong foundations in TypeScript, Next.js, Node.js, databases, and deployment tooling.",
    name: "Nishaad Dhabale",
    title: "Full-Stack Developer",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Technical Co-Head, Entrepreneur Development Cell",
    desc: "Directed a 7-member engineering team and maintained EDC technical infrastructure with high operational reliability.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "SIH Lead",
    desc: "Coordinated planning and execution for team participation in Smart India Hackathon activities.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Secretary of Departmental Magazine",
    desc: "Managed technical and editorial coordination to streamline publishing workflow and collaboration.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Avishkar Pitching Contest Lead",
    desc: "Organized and supported technical operations and participant coordination for innovation pitching events.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://linkedin.com",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "mailto:nishaad.d.official@gmail.com",
  },
];
