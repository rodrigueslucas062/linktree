import Image from "next/image"
import Perfil from "../../../public/images/perfil.jpeg"
import LinksGrid from "./links"

const Main = () => {
    return (
        <section className="rounded-2xl min-h-screen">
            <div className="flex flex-col items-center pt-10">
                <Image className="mb-3 rounded-full shadow-lg border-2 p-1 border-azul-claro" src={Perfil} alt="Lucas Rodrigues" width={100} height={100} />
                <h5 className="mb-1 text-xl font-medium text-white">Lucas Rodrigues</h5>
                <span className="text-sm mb-6 text-gray-400">Desenvolvedor Front-end</span>
            </div>
            <div className="p-3 space-y-4">
                <LinksGrid />
            </div>
        </section>
    )
}

export default Main