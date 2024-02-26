import "./sidebar-content.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";
import RoutesList from "./../routes-list/index";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const SidebarContent = ({ isOpened }) => {
  const [activeRoute, setActiveRoute] = useState("");

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
    setActiveRoute(path);
  };

  return (
    <nav className="content">
      <RoutesList
        isOpened={isOpened}
        routes={routes}
        activeRoute={activeRoute}
        goToRoute={goToRoute}
      />

      <RoutesList
        isOpened={isOpened}
        routes={bottomRoutes}
        activeRoute={activeRoute}
        goToRoute={goToRoute}
      />
    </nav>
  );
};

SidebarContent.propTypes = {
  isOpened: PropTypes.bool.isRequired,
};

export default SidebarContent;
