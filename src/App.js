import { BrowserRouter , Routes, Route, } from "react-router-dom";
import Login from "./component/login/login";
import SignUp from "./component/signup/signup";
import Feed from "./page/feed/feed";

import Register from "./page/register/register";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register />}>
              <Route path="/" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="/feed" element={<Feed /> } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
