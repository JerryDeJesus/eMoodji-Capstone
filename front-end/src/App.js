import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import EditUser from "./pages/EditUser";
import NewUser from "./pages/NewUser";
import Home from "./pages/Home";
import ShowUsers from "./pages/ShowUsers";
import ShowUserDetails from './pages/ShowUserDetails';
import FourOFour from "./pages/FourOFour";

import NavBar from "./components/NavBar";

import ShowEntries from "./pages/ShowEntries.js";
import ShowEntry from "./pages/ShowEntry.js";
import EditEntry from "./pages/EditEntry.js";
import NewEntry from "./pages/NewEntry.js";

export default function App() {
  return(
    <div>
      <Router>
        <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Show/>} />
          <Route path="/:id/edit" element={<Edit />} />
          <Route path="*" element={<Four0Four />} /> */}

          <Route path="/entries" element={<ShowEntries />} />
          <Route path="/entries/:id" element={<ShowEntry />} />
          <Route path="/entries/:id/edit" element={<EditEntry />} />
          <Route path="/entries/new" element={<NewEntry />} />

          <Route path="/users" element = {<ShowUsers />} />
          <Route path="/users/:id" element = {<ShowUserDetails />} />
          <Route path="/createaccount" element={<NewUser />} />
          <Route path="/users/:id/edit" element={<EditUser />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
      </Router>
    </div>
  )
};

