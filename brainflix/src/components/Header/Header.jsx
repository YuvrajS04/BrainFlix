import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import {NavLink} from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
      <NavLink to="/">
        <img className="header__logo" src={logo}></img>
      </NavLink>
      </div>
      <div className="header__container">
        <input placeholder="Search" className="header__container-input"></input>
        <img
          src={avatar}
          alt="avatar image"
          className="header__container-avatar"
        ></img>
        <NavLink to="/UploadPage" className="header__container-button">
          UPLOAD
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
