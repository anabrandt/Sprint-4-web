import Link from "next/link";
import Image from "next/image";
import './cabecalho.scss'


export default function Cabecalho() {
    return (
        <nav>
            <div>
                <Link href="/Home">
                    <Image
                        src="/logoPorto.png"
                        alt="imagem impressora"
                        width={40}
                        height={40}
                        className="logo__Porto"
                        priority={true}
                    />
                </Link>
            </div>



            <div className="icon__user">
                <Image
                    href={'/Home'}
                    src={'/iconeprofile.png'}
                    alt="icon image"
                    width={40}
                    height={40}
                />
                <Link href={'/Entrar'}>Entrar</Link>
            </div>
        </nav>
    );
}