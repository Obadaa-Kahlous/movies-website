import { useEffect } from "react";
import { BrowserRouter , Routes, Route, useNavigate, } from "react-router-dom";
import Genres from "./component/genres/genres";
import Login from "./component/login/login";
import Movies from "./component/movies/movies";
import SignUp from "./component/signup/signup";
import Feed from "./page/feed/feed";

import Register from "./page/register/register";
import Test from "./page/test/test";




function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register />}>
              <Route path="/" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="/feed" element={<Feed /> }>
              <Route path="/feed" element={<Movies />} />
              <Route path='popular' element={<Test />} />
            </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
