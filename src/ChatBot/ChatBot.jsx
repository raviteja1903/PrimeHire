import React from "react";
import "./ChatBot.css";
import { FaArrowUp, FaRegUser } from "react-icons/fa";
import { SiSupabase } from "react-icons/si";
import logo from "../assets/primehire_no_bg.png";
import { Link } from "react-router-dom";
import { ImEarth } from "react-icons/im";
import { LuNotebookPen } from "react-icons/lu";
import { GoFileDirectoryFill } from "react-icons/go";
import { PiHandshakeFill } from "react-icons/pi";
import { GrValidate } from "react-icons/gr";

const ChatBot = () => {
  return (
    <div className="lovable-container">
      <header className="navbar01">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="PrimeHire Logo" />
          </Link>
        </div>
        <nav className="nav-links01"></nav>
        <div className="user-section">
          <span className="user">
            <FaRegUser />
          </span>
        </div>
      </header>

      <section className="hero">
        <h1>
          Prime Hire –{" "}
          <span className="gradient-text">Smarter AI-Powered Hiring</span>
        </h1>
        <p>
          Streamline recruitment and make faster, smarter hiring decisions with
          our AI-driven solution.
        </p>

        <div className="input-box">
          <input
            type="text"
            placeholder="Ask Prime Hire to create an interview"
          />
          <button className="send-btn">
            <FaArrowUp />
          </button>
        </div>

        <div className="tags">
          <button>
            <ImEarth /> Job Portals
          </button>
          <button>
            <SiSupabase /> Supabase
          </button>
        </div>

        <div className="suggestions">
          <button>
            <LuNotebookPen /> JD Creator
          </button>
          <button>
            <GoFileDirectoryFill /> Upload Resumes
          </button>
          <button>
            <PiHandshakeFill /> Matcher
          </button>
          <button>
            <GrValidate /> Validator
          </button>
        </div>
      </section>
    </div>
  );
};

export default ChatBot;
