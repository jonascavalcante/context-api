import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ShowData from './pages/ShowData';
import SignUp from './pages/SignUp';

import { Context } from './contexts/Context';

const App = () => {

  const { state, dispatch } = useContext(Context);

  const handleToggleTheme = () => {
    if (state.theme.status === 'light') {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'dark'
        }
      })
    } else {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'light'
        }
      })
    }
  }

  return (
    <BrowserRouter>
      <div
        style={(state.theme.status === 'dark')
          ? { backgroundColor: 'black', color: 'white' }
          : { backgroundColor: 'white', color: 'black' }
        }
      >
        <h1>Title</h1>
        <h5>Theme: {state.theme.status}</h5>
        <button onClick={handleToggleTheme}>Change theme</button>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/showData" element={<ShowData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;