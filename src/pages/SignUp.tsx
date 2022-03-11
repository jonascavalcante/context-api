import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";

const SignUp = () => {

  const { state, dispatch } = useContext(Context);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE_NAME',
      payload: {
        name: e.target.value
      }
    })
  }
  
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE_AGE',
      payload: {
        age: e.target.value
      }
    })
  }

  return (
    <div>
      <h3>SignUp</h3>

      <div>
        <label>
          Name
          <br />
          <input
            type="text"
            placeholder="Write your name"
            value={state.user.name}
            onChange={handleNameChange}
          />
        </label>

        <br /><br />

        <label>
          Age
          <br />
          <input
            type="number"
            placeholder="Write you age"
            value={state.user.age}
            onChange={handleAgeChange}
          />
        </label>
      </div>

      <hr />

      <Link to='/showData'>Go to ShowData</Link>
    </div>
  );
}

export default SignUp;