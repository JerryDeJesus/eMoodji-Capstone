import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import EditUser from "./pages/EditUser";
import NewUser from "./pages/NewUser";
import Home from "./pages/Home";
import ShowUsers from "./pages/ShowUsers";
import ShowUserDetails from './pages/ShowUserDetails';
import FourOFour from "./pages/FourOFour";

import NavBar from "./components/NavBar";

export default function App() {
  return(
    <div>
      <Router>
        <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element = {<ShowUsers />} />
          <Route path="/users/:id" element = {<ShowUserDetails />} />
          <Route path="/createaccount" element={<NewUser />} />
          <Route path="/:id/edit" element={<EditUser />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
      </Router>
    </div>
  )
};

