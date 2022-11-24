import React from "react";
import "../../styles/sidebar.css";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import "../../index";
import { About, Contact, Games, Movies, Home } from "../../pages/pagesIndex.js";
import HomeIcon from "@mui/icons-material/Home";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import CallIcon from "@mui/icons-material/Call";
import GamesIcon from "@mui/icons-material/Games";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";

export const Sidebar = () => {
  return (
    <>
      <BrowserRouter>
        <div className="sidebarDiv">
          <ul>
            <li>
              <Link to="/">
                <HomeIcon></HomeIcon>
                <h3>Home</h3>
              </Link>
            </li>
            <li>
              <Link to="about">
                <ImportContactsIcon />
                <h3>About</h3>
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <CallIcon />
                <h3>Contact</h3>
              </Link>
            </li>
            <li>
              <Link to="/Games">
                <GamesIcon />
                <h3>Games</h3>
              </Link>
            </li>
            <li>
              <Link to="/Movies">
                <MovieCreationIcon />
                <h3>Movies</h3>
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
