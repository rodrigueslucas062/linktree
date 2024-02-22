import { Github, Linkedin, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
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
  Github: Github,
  LinkedIn: Linkedin,
};

const Links = ({ link, titulo, icone }) => {
  const Icone = icone && icons[icone]
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link}
      className="rounded-[6px] cursor-pointer inline-block m-1 p-3 w-full relative transition-none bg-white border-4 border-zinc-900 text-zinc-900 md:mx-48 hover:translate-y-1"
      target="_blank"
      style={{ boxShadow: "6px 8px 0px rgba(0, 0, 0, 0.8)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} >
      <div className="flex items-center justify-between">
        {Icone && <Icone />}
        <span className="font-semibold">{titulo}</span>
        <MoreHorizontal />
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
  )
}

export default LinksGrid;
