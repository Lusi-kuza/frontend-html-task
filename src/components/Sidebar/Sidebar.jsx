import "./sidebar.scss";
import React, { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import SidebarContent from "./sidebar-content/index";

const Sidebar = () => {
  const [isOpened, setIsOpened] = useState(true);

  const toggleSidebar = () => {
    setIsOpened(!isOpened);
  };

  const containerClassnames = classnames("sidebar", { sidebar_open: isOpened });
  const titleClassnames = classnames("title-section__title", {
    "title-section__title_open": isOpened,
  });
  const buttonClassnames = classnames("title-section__button", {
    "title-section__button_open": isOpened,
  });

  return (
    <aside className={containerClassnames}>
      <div className="points">
        <div className="points__point_red"></div>
        <div className="points__point_yellow"></div>
        <div className="points__point_green"></div>
      </div>
      <div className="title-section">
        <img
          src={logo}
          alt="TensorFlow logo"
          className="title-section__logo-company"
        />
        <span className={titleClassnames}>TensorFlow</span>
        <button className={buttonClassnames} onClick={toggleSidebar}>
          <FontAwesomeIcon
            icon="angle-right"
            color="rgba(255, 255, 255, 0.87)"
            size="2xl"
          />
        </button>
      </div>
      <SidebarContent isOpened={isOpened} />
    </aside>
  );
};

export default Sidebar;
