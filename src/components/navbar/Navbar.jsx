import Image from "next/image"
import Perfil from '../../../public/images/perfil.jpeg'
import { MoreHorizontal } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 10) {
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
            <div className={`${isMenuVisible ? 'hidden' : '-ml-4 mx-4 flex w-full lg:w-2/5 border-2 border-zinc-900 bg-gray-50/70 items-center justify-between px-4 py-2 rounded-full'}`}>
                <Image className="rounded-xl border-2 border-zinc-900" src={Perfil} alt="Lucas Rodrigues" width={50} height={50} />
                <h5 className="mb-1 text-xl font-semibold text-zinc-800">Lucas Rodrigues</h5>
                <div className="bg-zinc-200 hover:bg-zinc-400 hover:text-zinc-200 p-2 rounded-full">
                    <MoreHorizontal size={18} />
                </div>
            </div>
            <div className={`${isMenuVisible ? 'flex w-full items-center justify-end max-md:px-8 lg:px-[500px]' : 'hidden'}`}>
                <div className="bg-zinc-200 hover:bg-zinc-400 hover:text-zinc-200 p-2 rounded-full">
                    <MoreHorizontal size={18} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
