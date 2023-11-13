import Link from "next/link";
import Image from "next/image";

export default function FotoBike() {
    return (
        <section>
            <nav>
                <div>
                    <Link href="/Principal">Página principal</Link>
                    <Link href="/Principal/Usuario">Informações pessoais</Link>
                    <Link href="/Principal/Vistoria">Vistoria</Link>
                </div>
            </nav>

            <section>
                <main>
                    <div>
                        <h2>Fotos da bicicleta</h2>
                        <Image
                            src={'/photos.png'}
                            alt="icon image"
                            width={300}
                            height={200}
                        />
                    </div>

                    <div>
                        <Link href={'FotoBike/Resultado'}>Clique aqui para ver o resultado da vistoria</Link>
                    </div>

                </main>
            </section>

        </section>
    )
}