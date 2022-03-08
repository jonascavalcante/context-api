import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ShowData from './pages/ShowData';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Title</h1>
      <hr />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/showData" element={<ShowData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;