import Link from "next/link";
import Image from "next/image";
import './page.scss'

export default function Usuario() {
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
                        <Image
                            src={'/usericon.png'}
                            alt="icon image"
                            width={158}
                            height={158}
                        />

                    </div>
                    <div className="user-info">
                        <h3>Nome completo</h3>
                        <p>NomeDoUsuario</p>

                        <h3>CPF</h3>
                        <p>999.999.999-**</p>
                        <h3>Email</h3>
                        <p>Email</p>

                        <h3>Celular</h3>
                        <p>Celular</p>
                    </div>
                </main>
                    <div>
                        <h1>Vistorias realizadas</h1>
                    </div>

                <section className="section-vist">

                    <div className="container-vist">
                        <Image
                            src={'/image.png'}
                            alt="icon image"
                            width={200}
                            height={200}
                        />
                        <h4>Realizada em:</h4>
                        <p>20/04/2020</p>
                        <h4>Expira em:</h4>
                        <p>20/04/2024</p>
                        <h4>Codigo da vistoria</h4>
                        <p>01425</p>
                        <h4>Status</h4>
                        <p>Aprovado</p>
                    </div>

                    <span></span>

                    <div className="container-vist">
                        <Image
                            src={'/image2.png'}
                            alt="icon image"
                            width={200}
                            height={200}
                        />
                        <h4>Realizada em:</h4>
                        <p>30/03/2022</p>
                        <h4>Expira em:</h4>
                        <p>30/03/2027</p>
                        <h4>Codigo da vistoria</h4>
                        <p>03657</p>
                        <h4>Status</h4>
                        <p>Reprovado</p>
                    </div>
                </section>
            </section>

        </section>
    )
}