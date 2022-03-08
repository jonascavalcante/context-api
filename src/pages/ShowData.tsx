import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";

const ShowData = () => {

  const { name, age } = useContext(Context);

  return (
    <div>
      ShowData
      <br />
      <br />
      Name: {name}
      <br />
      Age: {age}
      <br />
      <br />
      <Link to='/'>Go to SignUp</Link>
    </div>
  );
}

export default ShowData;