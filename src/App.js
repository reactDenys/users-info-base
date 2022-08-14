import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import RegistrationContainer from "./components/Registration/RegistrationContainer";

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className='mainBlock'>
          <Routes>
              <Route path={'/'} element={<Authentication />} />
              <Route path={'/profile/:userId'} element={<ProfileContainer />} />
              <Route path={'/login'} element={<LoginContainer/>} />
              <Route path={'/registration'} element={<RegistrationContainer/>} />
          </Routes>
          </div>
      </BrowserRouter>
  );
}



export default App;
