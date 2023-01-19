import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> Made <span>Easy</span>
          </h1>
          <p>
            You have found your one stop shop for making your job application process easier. This is a great way to manage the progress that you are making with the jobs you are intrested in! It's really simple to use and can be very beneficial while making your way through the job hunt! We know the job hunt can be stressful so we're here to help!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="showcase" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
