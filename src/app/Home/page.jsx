import Image from "next/image";
import './page.scss'


export default function Home() {
    return (
        <header>
            <div className="titulo__conheca">
                <h2>Vistoria de Bicicletas</h2>
            </div>

            <section>
                <div className="aparelhos">
                    <Image
                        src={'/aparelho.png'}
                        alt="icon image"
                        width={1258}
                        height={269}
                    />
                </div>
            </section>

            <div className="section_lancamento">
                <div className="titulo__lancamento">
                    <h2>A vistoria veio pra te ajudar!!</h2>
                </div>
                <div className="promocao__paragrafo">
                    <p><strong>
                        A vistoria virtual tem se tornado cada vez mais comum em diversos setores. Além disso, a vistoria virtual pode ser mais segura, evitando a exposição a riscos e garantindo a autenticidade do processo de inspeção. </strong> </p>
                </div>
            </div>

            <section className="section__benef">
                <div className="beneficios__vistoria">
                    <div className="container_ajuda">
                        <Image
                            src={'/iconeseguranca.png'}
                            alt="icon image"
                            width={40}
                            height={40}
                        />
                        <p className="p__beneficios1">Mais segurança e precisão nas vistorias.</p>
                    </div>

                    <div className="container_ajuda">
                        <Image
                            src={'/group.png'}
                            alt="icon image"
                            width={40}
                            height={40}
                        />
                        <p className="p__beneficios1">Pode ser feita em qualquer
                            lugar</p>
                    </div>

                    <div className="container_ajuda">
                        <Image
                            src={'/iconerapidez.png'}
                            alt="icon image"
                            width={40}
                            height={40}
                        />
                        <p className="p__beneficios1">Mais rápido e economiza
                            o seu tempo</p>
                    </div>
                </div>
            </section>

        </header>
    )
}
