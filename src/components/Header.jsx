import React from "react";
import iconhome from "../assets/iconhome.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={iconhome} alt="White house pic" />
      </Link>
    </header>
  );
}
