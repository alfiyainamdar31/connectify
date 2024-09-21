import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const router = useNavigate();

  const generateRandomGuestId = () => {
    const randomId = Math.random().toString(36).substring(2, 8); // Generates a random string of 6 characters
    return `guest=${randomId}`;
  };

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>CONNECTIFY</h2>
        </div>
        <div className="navlist">
          <p onClick={() => router(`/${generateRandomGuestId()}`)}>
            Join as Guest
          </p>
          <p onClick={() => router("/auth")}>Register</p>
          <div onClick={() => router("/auth")} role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span className="highlight">Stay Connected</span> with Your Loved
            Ones
          </h1>
          <p className="subtext">Bridging distances through video calls</p>
          <div role="button" className="getStartedButton">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div className="imageContainer">
          <img src="/mobile.png" alt="Mobile illustration" />
        </div>
      </div>
    </div>
  );
}
