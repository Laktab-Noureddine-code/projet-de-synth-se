// components
import LoginForm from "./LoginForm";

// icons library
import { FcGoogle } from "react-icons/fc";

// images
import Clouds from "../../../assets/log_images/Clouds.jpg";

// styles
import "./style.scss";

function LogIn() {
  return (
    <div className="login-container">
      <div className="left-content">
        <h1>
          Bienvenue sur <br /> LinkSphere
        </h1>
        <p>
          Connectez-vous, apprenez et évoluez. Partagez vos connaissances,
          découvrez des opportunités et collaborez sur des idées, le tout en un
          seul endroit
        </p>
        <LoginForm />
        <div className="separator">
          <span>or</span>
        </div>
        <div className="connect-google">
          <button className="connect">
            <FcGoogle size={20} />
            <span>Se connecter avec Google</span>
          </button>
        </div>
        <div className="sign-up">
          Pas encore de compte?<span>Créer un compte</span>
        </div>
      </div>
      <div className="right-content">
        <img src={Clouds} alt="" />
      </div>
    </div>
  );
}

export default LogIn;
