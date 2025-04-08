import "../sassFiles/NaviMenu/NaviMenu.css";

import { Link } from "react-router-dom";

function NaviMenu({ isOpen, HandleToogle }) {
  return (
    <>
      {isOpen && (
        <section className="menu-container">
          <div className="navi-overlay">
            <div className="menu">
              <Link to={"/"}>
                <span onClick={HandleToogle}>Home</span>
              </Link>

              <Link to={"/portfolio"}>
                <span onClick={HandleToogle}>Portfolio</span>
              </Link>

              <Link to={"/tools"}>
                <span onClick={HandleToogle}> Tools</span>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default NaviMenu;
