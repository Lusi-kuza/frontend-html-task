import "./routes-list.scss";
import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const RoutesList = ({ isOpened, routes, activeRoute, goToRoute }) => {
  const titleClassnames = classnames("routes-list__title", {
    "routes-list__title_open": isOpened,
  });

  return (
    <ul className="routes-list">
      {routes.map((route) => (
        <li
          className={`routes-list__item${
            activeRoute === route.path ? " routes-list__item_active" : ""
          }`}
          key={route.title}
          onClick={() => goToRoute(route.path)}
        >
          <FontAwesomeIcon icon={route.icon} />
          <span className={titleClassnames}>{route.title}</span>
        </li>
      ))}
    </ul>
  );
};

RoutesList.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  activeRoute: PropTypes.string.isRequired,
  goToRoute: PropTypes.func.isRequired,
};

export default RoutesList;
