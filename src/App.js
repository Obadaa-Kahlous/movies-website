import { BrowserRouter , Routes, Route, } from "react-router-dom";
import Login from "./component/login/login";
import SignUp from "./component/signup/signup";

import Rejecter from "./page/rejecter/rejecter";
import Signup from "./page/signup/signup";


function App() {

  return (
    <div className="App">
    
                  
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Rejecter />}>
              <Route path="/" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
