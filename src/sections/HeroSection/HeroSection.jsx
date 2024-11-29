import { Link } from "react-router-dom";
import womenExpectingBaby from "../../assets/images/herosection/black-white-portrait-woman-expecting-baby (3) (1).png";
import pointer from "../../assets/images/herosection/Group 1000002382.png";
import Breadcrum from "../../components/breadcrum/Breadcrum";
import CircularProgress from "../../components/CircularProgressbar/CircularProgressbar";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-content">
          <div>
            <Breadcrum />
            <div className="hero-details">
              <Link to="/">
                <h1 className="redirect-calculator">
                  &larr; IVF Success Rate Calculator
                </h1>
              </Link>
              <div className="header-details">
                <img
                  src={pointer}
                  className="pointer-image"
                  alt="Pointer Icon"
                />

                <h1 className="success-heading">
                  Your estimated IVF Success Rate is
                </h1>
              </div>
              <div className="progress-bar">
                <CircularProgress />
              </div>
            </div>
            <p className="cycle-count-text">With 1 IVF Cycle</p>
          </div>
          <div className="hero-image">
            <img src={womenExpectingBaby} alt="Woman Expecting Baby" />
          </div>
          <div className="consultation-button">
            <button>Start private consultation</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
