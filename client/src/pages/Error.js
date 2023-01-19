import Wrapper from "../assets/wrappers/ErrorPage";
import notFoundImg from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={notFoundImg} alt="Page not found" />
        <h3>Oh no! Page Not Found.</h3>
        <p>We could not find the page you are looking for.</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
