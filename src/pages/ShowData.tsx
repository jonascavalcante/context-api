import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";

const ShowData = () => {

  const { state } = useContext(Context);

  return (
    <div>
      <h3>ShowData</h3>

      Name: {state.user.name}
      <br />
      Age: {state.user.age}
      
      <hr />
      
      <Link to='/'>Go to SignUp</Link>
    </div>
  );
}

export default ShowData;