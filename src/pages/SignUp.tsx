import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";

const SignUp = () => {

  const { name, age } = useContext(Context);

  return(
    <div>
      SignUp 
      <br />
      <br />
      Name: {name}
      <br />
      Age: {age}
      <br />
      <br />
      <Link to='/showData'>Go to ShowData</Link>
      </div>
  );
}

export default SignUp;