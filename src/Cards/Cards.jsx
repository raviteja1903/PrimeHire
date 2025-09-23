import React from "react";
import "./Cards.css";
import { LuNotebookPen } from "react-icons/lu";
import { GoFileDirectoryFill } from "react-icons/go";
import { PiHandshakeFill } from "react-icons/pi";
import { GrValidate } from "react-icons/gr";
import { ImEarth } from "react-icons/im";
import { FaRobot } from "react-icons/fa";

const SimpleCard = ({ icon, title, subtitle, bgImage }) => {
  return (
    <div className="simple-card" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="card-overlay">
        <span className="icon">{icon}</span>
        <span className="text">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="card-container">
      {/* <h1 className="page-title">AI-Powered Hiring Workflow</h1> */}

      <div className="simple-cards-container">
        <SimpleCard
          icon={<LuNotebookPen />}
          title="JD Creator"
          subtitle="Auto-generate job descriptions"
          bgImage="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg"
        />
        <SimpleCard
          icon={<GoFileDirectoryFill />}
          title="Upload Resumes"
          subtitle="Bulk upload & parse resumes"
          bgImage="https://img.freepik.com/free-photo/abstract-flowing-neon-wave-background_53876-101942.jpg?semt=ais_incoming&w=740&q=80"
        />
        <SimpleCard
          icon={<PiHandshakeFill />}
          title="Matcher"
          subtitle="AI-powered candidate matching"
          bgImage="https://w0.peakpx.com/wallpaper/213/560/HD-wallpaper-blue-neon-background-blue-waves-background-abstract-blue-backgrounds-creative-blue-abstraction.jpg"
        />
        <SimpleCard
          icon={<GrValidate />}
          title="Validator"
          subtitle="Validate resumes & JD alignment"
          bgImage="https://images.hdqwalls.com/wallpapers/light-abstract-simple-background-iv.jpg"
        />
        <SimpleCard
          icon={<ImEarth />}
          title="Job Portals"
          subtitle="Integrate with multiple platforms"
          bgImage="https://img.freepik.com/free-vector/dark-futuristic-wavy-background_23-2148391018.jpg"
        />
        <SimpleCard
          icon={<FaRobot />}
          title="Bot Interviewer"
          subtitle="AI-driven interview automation"
          bgImage="https://img.freepik.com/free-photo/abstract-flowing-neon-wave-background_53876-101942.jpg?semt=ais_incoming&w=740&q=80"
        />
      </div>
    </div>
  );
};

export default Cards;
