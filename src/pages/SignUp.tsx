import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";

const SignUp = () => {

  const { state, dispatch } = useContext(Context);

  return(
    <div>
      SignUp 
      <br />
      <br />
      Name: {state.user.name}
      <br />
      Age: {state.user.age}
      <br />
      <br />
      <Link to='/showData'>Go to ShowData</Link>
      </div>
  );
}

export default SignUp;