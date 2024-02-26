import { FileCode, Github, Linkedin, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    link: "https://lucas-rodrigues.vercel.app/",
    titulo: "Portifólio",
    icone: "Portifolio",
  },
  {
    link: "https://github.com/rodrigueslucas062",
    titulo: "Github",
    icone: "Github",
  },
  {
    link: "https://www.linkedin.com/in/rodrigueslucasdev/",
    titulo: "LinkedIn",
    icone: "LinkedIn",
  },
];

const icons = {
  Portifolio: FileCode,
  Github: Github,
  LinkedIn: Linkedin,
};

const Links = ({ link, titulo, icone }) => {
  const Icone = icone && icons[icone];
  const [isHovered, setIsHovered] = useState(false);
  const shadowStyle = {
    boxShadow: isHovered ? "4px 4px 0px rgba(0, 0, 0, 0.75)" : "8px 8px 0px rgba(0, 0, 0, 0.75)"
  };
  
  return (
    <Link
      href={link}
      className="rounded-lg cursor-pointer inline-block m-1 p-3 w-full lg:w-1/3 relative transition ease-in-out delay-75 bg-white border-4 border-zinc-900 text-zinc-900 hover:translate-y-1"
      target="_blank"
      style={shadowStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between group">
        {Icone && <Icone />}
        <span className="font-semibold">{titulo}</span>
        <div className="lg:invisible group-hover:visible bg-white hover:bg-gray-200 p-2 rounded-full">
          <MoreHorizontal size={18} />
        </div>
      </div>
    </Link>
  );
};

const LinksGrid = () => {
  return (
    <>
      {links.map((info, index) => (
        <Links
          key={index}
          link={info.link}
          icone={info.icone}
          titulo={info.titulo}
        />
      ))}
    </>
  );
};

export default LinksGrid;
