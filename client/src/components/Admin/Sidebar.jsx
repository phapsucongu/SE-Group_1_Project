import React from "react";
import {
  FaHome,
  FaList,
  FaUserTie,
  FaUserMd,
  FaUsers,
  FaUserPlus,
} from "react-icons/fa";
import "./sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
// import { useDispatch } from "react-redux";
// import { setUserInfo } from "../redux/reducers/rootSlice";

const Sidebar = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const sidebar = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Clients",
      path: "/clients",
      icon: <FaUsers />,
    },
    {
      name: "Lawyers",
      path: "/lawyers",
      icon: <FaUserTie />,
    },
    {
      name: "Appointments",
      path: "appointments",
      icon: <FaList />,
    }
  ];

  // const logoutFunc = () => {
  //   dispatch(setUserInfo({}));
  //   localStorage.removeItem("token");
  //   navigate("/login");
  // };

  return (
    <>
      <section className="sidebar-section flex-center">
        <div className="sidebar-adminContainer">
          <ul>
            {sidebar.map((ele, i) => {
              return (
                <li key={i}>
                  {ele.icon}
                  <NavLink to={ele.path}>{ele.name}</NavLink>
                </li>
              );
            })}
          </ul>
          
        </div>
      </section>
    </>
  );
};

export default Sidebar;
