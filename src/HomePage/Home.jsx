import React from "react";
import "../HomePage/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="landing">
      <div className="landing-content">
        <div className="badge">
          <span>Exclusive Webinars</span>
           <Link to={"/login"}>Sign Up</Link>
        </div>

        <h1>Hire AI Agents to Conduct Futuristic Interviews</h1>

        <p>
          Meet the next-generation AI platform for automated recruitment.
          Designed for companies looking to innovate hiring, our advanced AI
          agents conduct interviews, evaluate candidates, and streamline the
          hiring process. Reduce operational costs and unlock efficiency with
          AI-driven recruitment.
        </p>

        <button className="cta">Request Access</button>
      </div>
    </section>
  );
};

export default Home;
