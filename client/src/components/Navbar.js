import { useState } from "react";
import {
  FaHome,
  FaAlignLeft,
  FaUserCircle,
  FaCaretDown,
  FaUser,
  FaCaretUp,
} from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);

  const { toggleSidebar, logoutUser, user } = useAppContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            type="button"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            {!showLogout ? <FaCaretDown /> : <FaCaretUp />}
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn" onClick={logoutUser}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
