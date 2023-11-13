"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Vistoria2() {
    const [bicicleta, setBicicleta] = useState({
        id: 1,
        cor: "",
        marca: "",
        valor: "",
        modelo: ""
    });

    const handleChange = (e) => {
        setBicicleta({ ...bicicleta, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados enviados:", bicicleta);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/Principal/Vistoria/Vistoria2`)
            .then((resp) => resp.json())
            .then((data) => {
                setBicicleta(data.bicicleta[0]);
            })
            .catch((error) => console.error(error));
    }, []); 

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
                        <h1>Informações sobre a bicicleta</h1>
                    </div>
                    <div>
                        <div className="form_group">
                            <h3>Cor da bicicleta</h3>
                            <input
                                type="text"
                                name="cor"
                                placeholder="Ex: Azul"
                                value={bicicleta.cor}
                                onChange={handleChange}
                                required
                            /><br />

                            <h3>Marca da bicicleta</h3>
                            <input
                                type="text"
                                name="marca"
                                placeholder="Ex: Caloi"
                                value={bicicleta.marca}
                                onChange={handleChange}
                                required
                            /><br />

                            <h3>Valor da bicicleta</h3>
                            <input
                                type="text"
                                name="valor"
                                placeholder="Ex: R$20.000,00"
                                value={bicicleta.valor}
                                onChange={handleChange}
                                required
                            /><br />

                            <h3>Modelo da bicicleta</h3>
                            <input
                                type="text"
                                name="modelo"
                                placeholder="Bicicleta de montanha"
                                value={bicicleta.modelo}
                                onChange={handleChange}
                                required
                            /><br />

                            <div>
                                <Link href={'Vistoria2/FotoBike'}>
                                    <button type="submit" className="vistoria" onClick={handleSubmit}>
                                        Próximo passo
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </section>
    );
}
