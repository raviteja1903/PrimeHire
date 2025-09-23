import React, { useState, useEffect } from "react";
import "../animations/SplashScreen.css";

const SplashScreen = ({ onFinish }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Welcome to Prime Hire";

  useEffect(() => {
     
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(typing);

         
        setTimeout(() => {
          setShowLogo(true);
          if (onFinish) onFinish();
        }, 2500);
      }
    }, 200);  
  }, []);

  return (
    <div className="splash-container">
      {!showLogo ? (
        <h1 className="robotic-text">{typedText}</h1>
      ) : (
        <img src="/logo.png" alt="Company Logo" className="splash-logo" />
      )}
    </div>
  );
};

export default SplashScreen;
