import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ShowUsers from "./pages/ShowUsers";
import ShowUserDetails from './pages/ShowUserDetails';
import EditUser from "./pages/EditUser";
import NewUser from "./pages/NewUser";
import FourOFour from "./pages/FourOFour";

import ShowEntries from "./pages/ShowEntries.js";
import ShowEntry from "./pages/ShowEntry.js";
import EditEntry from "./pages/EditEntry.js";
import ShowUserEntries from "./pages/ShowUserEntries.js"
import NewEntry from "./pages/NewEntry.js";

export default function App() {
  return(
    <div>
      <Router>
        <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/entries" element={<ShowEntries />} />
          <Route path="/entries/:id" element={<ShowEntry />} />
          <Route path="/entries/:id/edit" element={<EditEntry />} />
          <Route path="/entries/new" element={<NewEntry />} />

          <Route path="/users" element = {<ShowUsers />} />
          <Route path="/users/:id" element = {<ShowUserDetails />} />
          <Route path="/createaccount" element={<NewUser />} />
          <Route path="/users/:id/entries" element={<ShowUserEntries />} />
          <Route path="/users/:id/edit" element={<EditUser />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
      </Router>
    </div>
  )
};

