import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
      <a href="#">
        <img className="header__logo" src={logo}></img>
      </a>
      </div>
      <div className="header__container">
        <input placeholder="Search" className="header__container-input"></input>
        <img
          src={avatar}
          alt="avatar image"
          className="header__container-avatar"
        ></img>
        <a href="#" className="header__container-button">
          UPLOAD
        </a>
      </div>
    </header>
  );
}

export default Header;
