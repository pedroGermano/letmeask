import imgAside from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import googleLogo from "../assets/images/google-icon.svg";
import { Button } from "../components/Button";

import "../styles/auth.scss";

export function Home() {
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
          <button className="create-room">
            <img src={googleLogo} alt="google icon" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button  type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
