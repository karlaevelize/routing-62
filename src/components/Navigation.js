import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <p>I'm the Navbar</p>
      <Link to="/">
        <p>Back to Homepage</p>
      </Link>
    </div>
  );
};
