import Link from "next/link";
import './Page.scss'

export default function Entrar() {
  const handleSignupForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const cpf = formData.get("cpf");
    const nome = formData.get("nome");
    const dataNascimento = formData.get("dataNascimento");
    const email = formData.get("email");
    const senha = formData.get("senha");

    console.log({ cpf, nome, dataNascimento, email, senha });
  }

  return (
    <main>
      <h1 className="titulo__create">Crie uma conta</h1>
      <form className="signup-form" >
        <div className="form-group">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            placeholder="Insira seu cpf"
            id="cpf"
            name="cpf"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="nome">Nome Completo:</label>
          <input
            type="text"
            placeholder="Nome completo"
            id="nome"
            name="nome"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Insira seu email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            placeholder="Crie uma senha"
            name="senha"
            required
          />
        </div>

        <div>
          <button type="submit" className="signup-button">Cadastrar</button>
        </div>

          <Link className="clique_login" href={'Entrar/Cadastro'}>Já tem uma conta? Clique aqui para fazer login</Link>
      </form>
    </main>
  )
}
