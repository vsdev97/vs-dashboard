import routes from "../routes/sidebar";
import { NavLink, useLocation } from "react-router-dom";
import SidebarSubmenu from "./SidebarSubmenu";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";

function LeftSidebar() {
  const location = useLocation();

  const close = () => {
    document.getElementById("left-sidebar-drawer").click();
  };

  const dispatch = useDispatch();

  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    themeChange(false);
    if (currentTheme === null) {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    }
  }, []);

  function logoutUser() {
    window.location.href = "/login";
  }

  return (
    <div className="drawer-side  z-30  flex flex-col justify-between h-screen">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu  pt-2 w-80 bg-base-100 min-h-full text-base-content overflow-hidden">
        <button
          className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={close}
        >
          <XMarkIcon className="h-5 inline-block w-5" />
        </button>
        <li className="mb-2 font-semibold text-xl">
          <h3>Everest Dx</h3>{" "}
        </li>
        {routes.map((route, k) => {
          return (
            <li className="" key={k}>
              {route.submenu ? (
                <SidebarSubmenu {...route} />
              ) : (
                <NavLink
                  end
                  to={route.path}
                  className={({ isActive }) =>
                    `${isActive ? "font-semibold  bg-base-200 " : "font-normal"}`
                  }
                >
                  {route.icon} {route.name}
                  {location.pathname === route.path ? (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                      aria-hidden="true"
                    ></span>
                  ) : null}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
      <div className="flex flex-start flex-col mb-8 absolute bottom-0">
        <label className="swap mb-2">
          <input type="checkbox" />
          <SunIcon
            data-set-theme="light"
            data-act-class="ACTIVECLASS"
            className={"fill-current w-8 h-8 " + (currentTheme === "dark" ? "swap-on" : "swap-off")}
          />
          <MoonIcon
            data-set-theme="dark"
            data-act-class="ACTIVECLASS"
            className={
              "fill-current w-8 h-8 " + (currentTheme === "light" ? "swap-on" : "swap-off")
            }
          />
        </label>
        <button className="btn btn-ghost" onClick={logoutUser}>
          <img src="/Logout.png" height={30} width={30} alt="Logout" />
        </button>
      </div>
    </div>
  );
}

export default LeftSidebar;
