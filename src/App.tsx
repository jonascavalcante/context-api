import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './contexts/Context';

import ShowData from './pages/ShowData';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <h1>Title</h1>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/showData" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;