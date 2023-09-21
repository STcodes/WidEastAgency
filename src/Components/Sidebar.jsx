import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UserIcon from "@mui/icons-material/Person";
import WorkersIcon from "@mui/icons-material/Engineering";
import ContratIcon from "@mui/icons-material/Article";
import CustommerIcon from "@mui/icons-material/Group";
import ArrowRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import "../style/Sidebar.css";

const Sidebar = ({ user }) => {
  React.useEffect(() => {
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
      });
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="logo-details">
        <img src="./images/logo_favicon.png" className="logo" alt="logo" />
      </div>
      <ul className="nav-links">
        {user.perms.PERM_DASHBOARD_READ && (
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) => {
                return isActive ? "navLinkActive" : "";
              }}
              end
            >
              <i>
                <DashboardIcon sx={{ color: "red" }} />
              </i>
              <span className="link_name">Tableau de bord</span>
            </NavLink>
          </li>
        )}
        {user.perms.PERM_TECH_READ && (
          <li>
            <div className="iocn-link">
              <NavLink
                to="worker/"
                className={({ isActive }) => {
                  return isActive ? "navlinkActive" : "";
                }}
              >
                <i>
                  <WorkersIcon sx={{ color: "red" }} />
                </i>
                <span className="link_name">Technicien</span>
              </NavLink>
              <i className="arrow">
                <ArrowRightIcon />
              </i>
            </div>
            <ul className="sub-menu">
              <li>
                <NavLink
                  to="worker/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "white",
                      opacity: isActive ? 1 : 0.6,
                    };
                  }}
                >
                  Liste des techniciens
                </NavLink>
              </li>
              {user.perms.PERM_TECH_WRITE && (
                <li>
                  <NavLink
                    to="worker/new"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "red" : "white",
                        opacity: isActive ? 1 : 0.6,
                      };
                    }}
                  >
                    Nouveau technicien
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  to="worker/code"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "white",
                      opacity: isActive ? 1 : 0.6,
                    };
                  }}
                >
                  Code technicien
                </NavLink>
              </li>
            </ul>
          </li>
        )}

        {user.perms.PERM_CUSTOMER_READ && (
          <li>
            <div className="iocn-link">
              <NavLink
                to="customer/"
                className={({ isActive }) => {
                  return isActive ? "navlinkActive" : "";
                }}
              >
                <i>
                  <CustommerIcon sx={{ color: "red" }} />
                </i>
                <span className="link_name">Client</span>
              </NavLink>
              <i className="arrow">
                <ArrowRightIcon />
              </i>
            </div>
            <ul className="sub-menu">
              <li>
                <NavLink
                  to="customer/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "white",
                      opacity: isActive ? 1 : 0.6,
                    };
                  }}
                >
                  Liste des clients
                </NavLink>
              </li>
              {user.perms.PERM_CUSTOMER_WRITE && (
                <li>
                  <NavLink
                    to="customer/new"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "red" : "white",
                        opacity: isActive ? 1 : 0.6,
                      };
                    }}
                  >
                    Nouveau client
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  to="customer/code"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "white",
                      opacity: isActive ? 1 : 0.6,
                    };
                  }}
                >
                  Code client
                </NavLink>
              </li>
            </ul>
          </li>
        )}

        {user.perms.PERM_CONTRAT_READ && (
          <li>
            <div className="iocn-link">
              <NavLink
                to="contrat/"
                className={({ isActive }) => {
                  return isActive ? "navlinkActive" : "";
                }}
              >
                <i>
                  <ContratIcon sx={{ color: "red" }} />
                </i>
                <span className="link_name">Contrat</span>
              </NavLink>
              <i className="arrow">
                <ArrowRightIcon />
              </i>
            </div>
            <ul className="sub-menu">
              <li>
                <NavLink
                  to="contrat/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "white",
                      opacity: isActive ? 1 : 0.6,
                    };
                  }}
                >
                  Liste des contrats
                </NavLink>
              </li>
              {user.perms.PERM_CONTRAT_WRITE && (
                <li>
                  <NavLink
                    to="contrat/new"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "red" : "white",
                        opacity: isActive ? 1 : 0.6,
                      };
                    }}
                  >
                    Nouveau contrat
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  to="contrat/code"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "white",
                      opacity: isActive ? 1 : 0.6,
                    };
                  }}
                >
                  Code contrat
                </NavLink>
              </li>
            </ul>
          </li>
        )}

        {user.perms.PERM_USER_READ && (
          <li>
            <div className="iocn-link">
              <NavLink
                to="user/"
                className={({ isActive }) => {
                  return isActive ? "navlinkActive" : "";
                }}
              >
                <i>
                  <UserIcon sx={{ color: "red" }} />
                </i>
                <span className="link_name">Utilisateur</span>
              </NavLink>
              <i className="arrow">
                <ArrowRightIcon />
              </i>
            </div>
            <ul className="sub-menu">
              <li>
                <NavLink
                  to="user/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "white",
                      opacity: isActive ? 1 : 0.6,
                    };
                  }}
                >
                  Liste des utilisateurs
                </NavLink>
              </li>
              {user.perms.PERM_USER_WRITE && (
                <li>
                  <NavLink
                    to="user/new"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "red" : "white",
                        opacity: isActive ? 1 : 0.6,
                      };
                    }}
                  >
                    Nouveau utilisateur
                  </NavLink>
                </li>
              )}
            </ul>
          </li>
        )}
      </ul>

      <div className="copyright-container">
        <div>WidEast Agency © All rights reserved</div>
        <p>
          Powered by{" "}
          <a
            href="https://stcode.camencorp.com"
            target="_blank"
            rel="noreferrer"
          >
            st.code
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
