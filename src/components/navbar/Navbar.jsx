import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image"
import Perfil from '../../../public/images/perfil.jpeg'
import { ChevronRight, MessageCircle, MoreHorizontal, X } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsMenuVisible(true);
            } else {
                setIsMenuVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="flex w-full justify-center fixed">
            <div className={`-ml-4 mx-4 flex w-full lg:w-2/5 border-2 border-zinc-900 bg-gray-50/70 items-center justify-between px-4 py-2 rounded-full backdrop-blur-sm transition-visible duration-500 ease-in-out ${isMenuVisible ? '' : 'invisible'}`}>
                <Image className="rounded-xl border-2 border-zinc-900" src={Perfil} alt="Lucas Rodrigues" width={50} height={50} />
                <h5 className="mb-1 text-xl font-semibold text-zinc-800">Lucas Rodrigues</h5>
                <Dialog.Root>
                    <Dialog.Trigger className="visible bg-zinc-200 hover:bg-zinc-400 hover:text-zinc-200 p-2 rounded-full">
                        <MoreHorizontal size={18} />
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.DialogOverlay className="inset-0 fixed bg-black/20">
                            <Dialog.DialogContent className="fixed z-10 inset-0 md:inset-auto max-md:top-1/2 lg:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-gray-200 rounded-3xl flex flex-col outline-none overflow-hidden">
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
            </div>
        </nav>
    );
};

export default Navbar;
