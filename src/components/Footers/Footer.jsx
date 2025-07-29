import { useContext, useEffect, useState } from "react";
import "./Footer.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LocalStorageKeyContext } from "../../Contexts";

const Footer = () => {

  const key = useContext(LocalStorageKeyContext);

  // handle minimize footer
  const [minimized, setMinimized] = useState(() => {
    return localStorage.getItem(key+"footer-minimized") === "true" ? "minimized" : "";
  });
  
  const minimizeFooter = () => {
    let storeValue = false;
    if (minimized === "minimized") {
      setMinimized("");
      storeValue = false;
    }
    else {
      setMinimized("minimized");
      storeValue = true;
    }
    localStorage.setItem(key+"footer-minimized", storeValue);
  }

  // handle navigation
  const navigate = useNavigate();
  const location = useLocation();

  const handleReload = () => {
    window.location.reload();
  }
  const goToSettings = () => {
    if (location.pathname === "/settings") {
      navigate("/");
    }
    else {
      navigate("/settings");
    }
  }
  const goToBooks = () => {
    if (location.pathname === "/books") {
      navigate("/");
    }
    else {
      navigate("/books");
    }
  }

  return (
    <div className={"footer-container " + minimized}>
      <div className="footer-wrapper">
          <div className="minimize-button-wrapper">
            <button onClick={minimizeFooter} className="minimize-button round-button button"><i className="fa-solid fa-angle-left"></i></button>
          </div>
          <div className="buttons-group-wrapper">
            <button className="round-button button" onClick={handleReload}><i className="fa-solid fa-rotate-right"></i></button>
            <button onClick={goToBooks} className="round-button button"><i className="fa-solid fa-book"></i></button>
            <button onClick={goToSettings} className="round-button button"><i className="fa-solid fa-gear"></i></button>
          </div>
      </div>
    </div>
  )
}

export default Footer