import * as Dialog from "@radix-ui/react-dialog";
import { ChevronRight, FileCode, Github, Linkedin, MessageCircle, MoreHorizontal, X } from "lucide-react";
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

  const handleLinkClick = (e) => {
    if (!e.defaultPrevented) {
      window.open(link, "_blank")
    }
  }

  return (
    <Dialog.Root>
      <div
        onClick={handleLinkClick}
        className="rounded-lg cursor-pointer inline-block m-1 p-3 w-full lg:w-1/3 relative transition ease-in-out delay-75 bg-white border-4 border-zinc-900 text-zinc-900 hover:translate-y-1"
        style={shadowStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} >
        <div className="flex items-center justify-between group">
          {Icone && <Icone />}
          <span className="font-semibold">{titulo}</span>
          <Dialog.Trigger
            className="lg:invisible group-hover:visible bg-white hover:bg-gray-200 p-2 rounded-full"
            onClick={(e) => e.stopPropagation()}>
            <MoreHorizontal size={18} />
          </Dialog.Trigger>
        </div>
      </div>

      <Dialog.Portal>
        <Dialog.DialogOverlay className="inset-0 fixed bg-black/20">
        <Dialog.DialogContent className="fixed z-10 inset-0 md:inset-auto max-md:top-1/2 lg:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-gray-200 max-md:rounded-t-3xl lg:rounded-3xl flex flex-col outline-none overflow-hidden">
            <Dialog.Close className="hover:bg-gray-300 p-2 rounded-full absolute top-2 right-2">
              <X className="size-5" />
            </Dialog.Close>
            <div className="flex items-center justify-center gap-3 p-5">
              <div className="rounded-lg mt-8 inline-block m-1 p-3 w-5/6 relative bg-white border-4 border-zinc-900 text-zinc-900">
                <div className="flex items-center justify-between">
                  <MessageCircle />
                  <span>Compartilhar no WhatsApp</span>
                  <div className="hover:bg-gray-300 rounded-full p-2">
                    <ChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </Dialog.DialogContent>
        </Dialog.DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
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
