import Link from "next/link";
import Image from "next/image";
import './page.scss'

export default function Principal() {
    return (
        <section>
            <nav>
                <div>
                    <Link href="/Principal">Página principal</Link>
                    <Link href="/Principal/Usuario">Informações pessoais</Link>
                    <Link href="/Principal/Vistoria">Vistoria</Link>
                </div>
            </nav>

            <main className="main-container">
                <div >
                    <h1>Últimas vistorias</h1>
                    <Image
                        src={'/lastinspection.png'}
                        alt="icon image"
                        width={200}
                        height={200}
                    />
                    <Image
                        src={'/lastinspection2.png'}
                        alt="icon image"
                        width={200}
                        height={200}
                    />
                </div>

                <div></div>
            </main>
        </section>

    )
}