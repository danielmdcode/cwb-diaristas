import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white">
            <div className="container mx-auto py-4">
                <div className="flex items-center justify-between">
                    <button>
                        <Link href="/">
                            <Image src="/assets/imgs/cwb_diaristas_logo_inline.svg" alt="CWB Diaristas" width={200} height={100} />
                        </Link>
                    </button>
                    <div className="menu flex justify-end items-center gap-10">
                        <ul className="nav-bar flex items-center justify-start gap-10 font-bold">
                            <li className="cursor-pointer transition relative py-6 group">
                                Home
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary opacity-100 transition-all duration-300"></div>
                            </li>
                            <li className="cursor-pointer transition relative py-6 group">
                                Sobre
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            </li>
                            <li className="cursor-pointer transition relative py-6 group">
                                Contato
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            </li>
                            <li className="cursor-pointer transition relative py-6 group">
                                Login
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            </li>
                            <li className="cursor-pointer transition relative py-6 group">
                                Cadastro
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            </li>
                        </ul>
                        <button className="bg-secondary text-white font-bold px-4 py-3 rounded-md hover:bg-white hover:text-primary transition cursor-pointer">
                            ENTRAR
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}