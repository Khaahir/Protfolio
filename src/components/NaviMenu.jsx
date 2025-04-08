import "../sassFiles/NaviMenu/NaviMenu.css";

import { Link } from "react-router-dom";
import { toggleMenu } from "../Redux/menuSlice";
import { useDispatch, useSelector } from "react-redux";

function NaviMenu() {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();
  return (
    <>
      {isOpen && (
        <section className="menu-container">
          <div className="navi-overlay">
            <span className="home-motto">Family,Code,Roll,Run,Repeat</span>
            <div className="menu">
              <Link to={"/"} onClick={() => dispatch(toggleMenu())}>
                Home
              </Link>

              <Link to={"/portfolio"} onClick={() => dispatch(toggleMenu())}>
                Portfolio
              </Link>

              <Link to={"/tools"} onClick={() => dispatch(toggleMenu())}>
                Tools
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default NaviMenu;
