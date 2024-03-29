import { Link } from 'react-router-dom'
import { Button } from "../components/Button";


import logo from "../assets/images/logo.svg";
import imgAside from "../assets/images/illustration.svg";

import "../styles/auth.scss";

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img src={imgAside} alt="illustration" />
        <strong>Crie salas de Q&A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
         
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button  type="submit">Criar sala</Button>
          </form>
            <p>Quer entrar em uma sala já existente? <Link to="/">clique aqui</Link></p>
        </div>
      </main>
    </div>
  );
}
