

import React from "react";
import "./AboutSection.css";
import aboutImage from "./HomeImg/about-img.jpg";
import Logo from "./HomeImg/companyLogo.jpg";
import icon1 from "./HomeImg/premium-icon.png";
import icon2 from "./HomeImg/Eco-Friendly.png";

const AIDFAboutSection = () => {
  return (
    <section
      className="aidf-about-section"
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className="aidf-about-container">
        <div className="aidf-about-image large-view-image">
          <img src={aboutImage} alt="About AIDF Group" />
          <div
            className="aidf-image-overlay"
            style={{ backgroundColor: "rgba(15, 42, 29, 0.1)" }}
          ></div>
        </div>
        <div className="aidf-about-content">
          <div className="aidf-section-title">
            <h2 style={{ color: "#2a2a2a" }}>About AIDF</h2>
            <div className="aidf-about-powered">
              <h6 style={{ fontSize: "16px" }}>Powered by Advant</h6>

              <img
                style={{ height: "40px" }}
                src={Logo}
                alt="About AIDF Group"
              />
            </div>
            <div
              className="aidf-title-decoration"
              style={{ backgroundColor: "#6B9071" }}
            ></div>
          </div>
          <div>
            <div className="aidf-about-image mobile-about-header">
              <img src={aboutImage} alt="About AIDF Group" />
              <div
                className="aidf-image-overlay"
                style={{ backgroundColor: "rgba(15, 42, 29, 0.1)" }}
              ></div>
            </div>
          </div>
          <p className="aidf-about-text" style={{ color: "#375534" }}>
            Since our inception the aidf brand has made a commendable mark in
            the industry through its state of the art interior products range.
            Our products are manufactured using the most advanced machinery and
            technology to provide great durability and quality by which we aim
            to reach distinguishing levels of success through our constant
            dedication and diligence.
          </p>
          <div className="aidf-about-features">
            <div className="aidf-feature">
              <div
                className="aidf-feature-icon"
                style={{ backgroundColor: "#fff" }}
              >
                <img
                  style={{ height: "40px" }}
                  src={icon1}
                  alt="Premium Icon"
                />
                <i className="fas fa-medal" style={{ color: "#E3EED4" }}></i>
              </div>
              <div className="aidf-feature-content">
                <h3 style={{ color: "#2a2a2a" }}>Premium Quality</h3>
                <p style={{ color: "#2a2a2a" }}>
                  Manufactured with the highest grade materials and precision
                  engineering
                </p>
              </div>
            </div>
            <div className="aidf-feature">
              <div
                className="aidf-feature-icon"
                style={{ backgroundColor: "#fff" }}
              >
                <img
                  style={{ height: "40px" }}
                  src={icon2}
                  alt="Eco-friendly"
                />

                <i className="fas fa-leaf" style={{ color: "#E3EED4" }}></i>
              </div>
              <div className="aidf-feature-content">
                <h3 style={{ color: "#2a2a2a" }}>Eco-Friendly</h3>
                <p style={{ color: "#2a2a2a" }}>
                  Energy-efficient solutions that reduce your carbon footprint
                </p>
              </div>
            </div>
          </div>
          <a
            href="/about-us"
            className="aidf-about-button"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Learn More
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIDFAboutSection;
