import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
        {
          id: 1,
          title: "I value shared goals with clients, encouraging open discussions.",
          description: "",
          className: "lg:col-span-3 lg:row-span-1 md:col-span-6 md:row-span-4 lg:max-h-[40vh]", 
          imgClassName: "w-full h-full",
          titleClassName: "justify-end",
          img: "",
          spareImg: "",
        },
        {
          id: 2,
          title: "My tech stack",
          description: "I constantly try to improve",
          className: "lg:col-span-2 lg:row-span-2 md:col-span-6 md:row-span-4 lg:min-w-[20vh]", 
          imgClassName: "",
          titleClassName: "justify-start",
          img: "",
          spareImg: "",
        },
        {
          id: 3,
          title: "24/7 Only for you :3",
          description: "",
          className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-2", 
          imgClassName: "",
          titleClassName: "justify-center",
          img: "",
          spareImg: "",
        },
        {
          id: 4,
          title: "A development enthusiast inspired by the power of technology.",
          description: "",
          className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-2", 
          imgClassName: "",
          titleClassName: "justify-start",
          img: "/grid.svg",
          spareImg: "/b4.svg",
        },
        
      ];
      
  
  export const projects = [
    {
      id: 1,
      title: "Awesometodos",
      des: "An intuitive to-do app to help you stay organized and boost productivity with ease.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
      link: "https://todo-dea6.onrender.com",
    },
  ];
  export const testimonials = [
    {
      quote:
        "Working with Edrian was an amazing experience.His professionalism, attention to detail, and dedication to delivering outstanding results were evident throughout our collaboration. Edrian&apos;s passion for every aspect of development is truly remarkable. If you want to elevate your brand and online presence, Edrian is the one to trust. <br/><br/>",
      name: "James Kirby Remo",
      title: "CEO of Nexus Innovations",
      image: "/images/jkr.png",
    },
  
    {
      quote:
        "Partnering with Edrian on our project was seamless. His expertise, creativity, and commitment to excellence were crucial in achieving the goals we set. Edrian&apos;s ability to understand our vision and bring it to life was exceptional. Highly recommended for anyone serious about quality work. <br/><br/><br/>",
      name: "Jaylord Cabrera",
      title: "Lead Developer at Vertex Solutions",
      image: "/images/jc.png", 
    },
    {
      quote:
        "Edrian&apos;s work ethic and drive for perfection were evident from the start. His ability to tackle complex challenges while delivering on time is unmatched. If you're looking for someone who will take your project to the next level, Edrian is your guy.<br/><br/><br/>",
      name: "James Suenio",
      title: "CTO of Quantum Tech Labs",
      image: "/images/js.png", 
    },
    {
      quote:
        "Collaborating with Edrian was a great decision for our business. His insights and approach to solving problems creatively set him apart from others. We couldn&apos;t have asked for a better partner to bring our ideas to fruition. <br/><br/><br/><br/>",
      name: "Joshua Remorosa",
      title: "Head of Development at Zenit Systems",
      image: "/images/jr.png",
    },
    {
      quote:
        "Edrian&apos;s passion for his work shines through in every project he undertakes. His thoroughness, creativity, and technical skills exceeded our expectations. It was a pleasure working with him, and we&apos;re looking forward to future collaborations. <br/><br/><br/>",
      name: "Roxs Rafil",
      title: "Founder of Blaze Digital Agency",
      image: "/images/rr.png",
    },
  ];
  

  
  export const workExperience = [
    {
      id: 1,
      title: "User Research & Usability Testing",
      desc: "Conducted research and usability tests to improve user experience and product design.",
      className: "md:col-span-2",
      thumbnail: "/images/uresearch.png",
    },
    {
      id: 2,
      title: "Wireframing & Prototyping",
      desc: "Created wireframes and prototypes to streamline the design-to-development process.",
      className: "md:col-span-2", 
      thumbnail: "/images/prototyping.png",
    },
    {
      id: 3,
      title: "Responsive Web Design",
      desc: "Designed responsive websites to ensure optimal performance across all devices.",
      className: "md:col-span-2", 
      thumbnail: "/images/responsive.png",
    },
    {
      id: 4,
      title: "Interaction Design and Motion Graphics",
      desc: "Developed interactive designs and motion graphics to enhance user engagement.",
      className: "md:col-span-2",
      thumbnail: "/images/interaction.png",
    },
  ];
  
  
  export const socialMedia = [
    {
      id: 1,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      img: "/images/yt.svg",
    },
    {
      id: 2,
      link: "https://github.com/EN-rain",
      img: "/git.svg",
    },
    {
      id: 3,
      link: "https://www.youtube.com",
      img: "/images/fb.png",
    },
  ];