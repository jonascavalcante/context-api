import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";

const ShowData = () => {

  const { state, dispatch } = useContext(Context);

  const handleNameChange = () => {
    dispatch({
      type: 'CHANGE_NAME',
      payload: {
        name: 'Pedro',
      }
    })
  }

  return (
    <div>
      ShowData
      <br />
      <button onClick={handleNameChange}>Change name to Pedro</button>
      <br />
      <br />
      Name: {state.user.name}
      <br />
      Age: {state.user.age}
      <br />
      <br />
      <Link to='/'>Go to SignUp</Link>
    </div>
  );
}

export default ShowData;