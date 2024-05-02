import cap from "../assets/cap.png";
import studyboy from "../assets/studyboy.png";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="main">
      <div className="div1">
        <div className="bigtext1">
          Where&nbsp;{" "}
          <div className="container">
            <span className="text">E</span>
            <span>
              {" "}
              <img src={cap} alt="Your Image" className="cap" />
            </span>
          </div>
          ducation{" "}
        </div>
        <div className="bigtext2">Meets Technology</div>
        <div className="smalltext">Welcome back and get ready to study!!</div>
        <div className="buttons">
          <button className="button1">Join now</button>
          <button className="button2">Know more</button>
        </div>
      </div>

      <div className="div2">
        <img className="image-boy" src={studyboy} alt="studyboy" />
      </div>
    </div>
  );
}

export default LandingPage;
