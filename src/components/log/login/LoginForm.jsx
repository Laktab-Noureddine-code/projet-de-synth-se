// hooks
import { useState } from "react";

// react icons library
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

function LoginForm() {
  const [showPass, setShowPass] = useState(true);
  return (
    <form action="">
      <div className="email-field field">
        <MdOutlineMailOutline className="i" size={25} />
        <div className="divider"></div>
        <input type="email" placeholder="Entrer votre email" />
      </div>
      <div className="password-field field">
        <RiLockPasswordLine className="i" size={25} />
        <div className="divider"></div>
        <input type={showPass ? "password" : "text"} placeholder="password" />
        <button
          type="button"
          className="eye"
          onClick={() => setShowPass(!showPass)}
        >
          {showPass ? <FaRegEye size={20} /> : <FaRegEyeSlash size={23} />}
        </button>
      </div>
      <button type="submit" className="submit ">Se connecter</button>
    </form>
  );
}

export default LoginForm;
