import Link from "next/link";
import './page.scss'


export default function ResultadoVistoria() {
    return (
        <section>
            <nav>
                <div>
                    <Link href="/Principal">Página principal</Link>
                    <Link href="Principal/Usuario">Informações pessoais</Link>
                    <Link href="Principal/Vistoria">Vistoria</Link>
                </div>
            </nav>

            <section>
                <main>
                    <div>


                        <div>
                            <h1>Resultados</h1>
                        </div>

                        <div className="status__vistoria">
                            <h4>Status da vistoria:</h4>
                            <p>Sucesso</p>
                            <h4>Data de realização:</h4>
                            <p>dd/mm/yyyy</p>
                            <h4>Codigo da vistoria</h4>
                            <p>01425</p>
                            <h4>Expira em:</h4>
                            <p>dd/mm/yyyy</p>
                        </div>

                        <div>
                            <Link href={'/'}><button className="principal">Voltar para página principal</button></Link>
                        </div>
                    </div>
                </main>
            </section>

        </section>
    )
}