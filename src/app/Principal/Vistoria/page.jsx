import Link from "next/link";
import './Page.scss'

export default function Vistoria() {
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
                <main className="vistoria">
                    <h2>Você ainda não começou nenhuma nova vistoria clique no botão abaixo para realizar uma nova vistoria</h2>

                    <div>
                    <Link href={'Vistoria/Vistoria2'}><button type="submit" className="vistoria">Realizar nova vistoria</button></Link>
                    </div>
                    
                        
                </main>

            </section>
        </section>
    )
}