import React from "react";
import { useTheme } from "../Context/theme";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [theme, toggleTheme] = useTheme();
  const navigate = useNavigate()

  return (
    <div className="header flex shadow-lg justify-between items-center py-5 max-sm:px-3 px-[10rem]">
      <p className="text-3xl font-bold max-sm:text-[20px] cursor-pointer" onClick={()=>navigate("/")}>
        Where in the world?
      </p>
      <button className="font-semibold" onClick={toggleTheme}>
        <i className="fa-regular fa-moon"></i>{" "}
        {theme === "light-theme" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Navbar;
