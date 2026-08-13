export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  technologies: string[];
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Arbaz Ali",
    role: "Founder & Senior Software Developer",
    bio: "Mr. Arbaz Ali is the Founder and a Senior Software Developer with over 7 years of professional experience in the IT industry. He specializes in designing and developing scalable software solutions, with strong expertise across web technologies, system architecture, and modern development frameworks.",
    skills: ["Software Architecture", "Scalable Solutions", "Web Development"],
    technologies: ["Web Technologies", "Modern Frameworks"],
    image: arbazImage,
  },
  {
    name: "Hunain Haider",
    role: "Full-Stack Developer | Digital Solutions Consultant",
    bio: "Hunain Haider is a professional full-stack developer who builds modern websites, web applications, and digital solutions for businesses. He specializes in technologies like .NET, MERN Stack, React.js, Node.js, and SQL databases, helping companies improve efficiency through scalable systems, automation tools, dashboards, and AI-based solutions.",
    skills: ["Full-Stack Development", "Digital Consulting", "Automation"],
    technologies: [".NET", "MERN Stack", "React.js", "Node.js", "SQL"],
    image: hunainImage,
  },
  {
    name: "Bilal Faisal",
    role: "MERN Stack Developer",
    bio: "Mr. Bilal Faisal is a MERN Stack Developer at HakamTechSol with experience in building scalable and high-performance web applications. He specializes in MongoDB, Express.js, React.js, and Node.js, along with expertise in AI Agents, RAG systems, and YOLO-based computer vision solutions. Known for clean coding, problem-solving, and delivering quality solutions, he contributes effectively to modern AI-powered web projects.",
    skills: ["Clean Coding", "Problem Solving", "AI-Powered Web Apps"],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "RAG", "YOLO"],
    image: bilalImage,
  },
  {
    name: "Malik Saifullah",
    role: "Senior Mobile App Developer",
    bio: "Mr. Malik Saifullah is a Senior Flutter Developer experienced in building high-performance mobile apps for local and international clients. He specializes in Flutter, Firebase, REST APIs, and modern UI/UX, with a strong focus on clean architecture and smooth user experience.",
    skills: ["Mobile App Development", "Clean Architecture", "UI/UX"],
    technologies: ["Flutter", "Firebase", "REST APIs"],
    image: saifullahImage,
  },
  {
    name: "Talha Khan",
    role: "Full-Stack Developer & AI Engineer",
    bio: "Talha is a skilled Software Developer and Founder with expertise in AI-powered applications, modern web technologies, scalable system architecture, and innovative software solutions. He specializes in web development, AI automation, intelligent systems, and creating high-performance digital products for modern businesses.",
    skills: ["AI Automation", "System Architecture", "Web Development"],
    technologies: ["AI-Powered Applications", "Modern Web Technologies"],
    image: talhaImage,
  },
  {
    name: "Muhammad Nouman",
    role: "Web App Developer",
    bio: "Muhammad Nouman is a skilled Web App Developer with 2 years of experience in PHP and Laravel development. He specializes in backend development, database management, authentication systems, and REST APIs, focusing on building reliable, scalable, and user-friendly web applications.",
    skills: ["Backend Development", "Database Management", "Authentication"],
    technologies: ["PHP", "Laravel", "REST APIs"],
    image: noumanImage,
  },
  {
    name: "Sanawar Hussain Jaffri",
    role: "MERN Stack Developer",
    bio: "Sanawar Hussain Jaffri is a dedicated MERN Stack Developer with 1 year of experience in full-stack web development. He specializes in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js, with expertise in frontend and backend development, RESTful APIs, database management, and secure authentication systems.",
    skills: ["Full-Stack Development", "RESTful APIs", "Secure Authentication"],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: sanawarImage,
  },
  {
    name: "Abdul Wasay",
    role: "Flutter Developer",
    bio: "Abdul Wasay is a dedicated Flutter Developer with 1 year of experience in building cross-platform mobile applications. He specializes in responsive UI design, REST API integration, state management, and app performance optimization for Android and iOS, delivering scalable and user-friendly mobile solutions.",
    skills: ["Responsive UI", "State Management", "Performance Optimization"],
    technologies: ["Flutter", "REST APIs", "Android", "iOS"],
    image: wasayImage,
  },
  {
    name: "Mustufa Ali",
    role: "Web Application Developer",
    bio: "Mr. Mustufa Ali is a professional Web Application Developer with expertise in modern website development, responsive UI design, WordPress, and scalable web solutions. He specializes in creating fast, user-friendly, and visually engaging websites using the latest web technologies and development practices.",
    skills: ["Website Development", "Responsive UI", "Scalable Web Solutions"],
    technologies: ["WordPress", "Modern Web Technologies"],
    image: mustufaImage,
  },
];
import arbazImage from "@/assets/team/arbaz.png";
import hunainImage from "@/assets/team/hunain.png";
import bilalImage from "@/assets/team/bilal.png";
import saifullahImage from "@/assets/team/saifullah.png";
import talhaImage from "@/assets/team/talha.png";
import noumanImage from "@/assets/team/nouman.png";
import sanawarImage from "@/assets/team/sanawar.png";
import wasayImage from "@/assets/team/wasay.png";
import mustufaImage from "@/assets/team/MustafaAli.png";
