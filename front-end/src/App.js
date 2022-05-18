import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ShowUsers from "./pages/user-pages/ShowUsers";
import ShowUserDetails from './pages/user-pages/ShowUserDetails';
import EditUser from "./pages/user-pages/EditUser";
import NewUser from "./pages/user-pages/NewUser";
import FourOFour from "./pages/FourOFour";

import ShowEntries from "./pages/entry-pages/ShowEntries.js";
import ShowEntry from "./pages/entry-pages/ShowEntry.js";
import EditEntry from "./pages/entry-pages/EditEntry.js";
import ShowUserEntries from "./pages/ShowUserEntries.js"
import NewEntry from "./pages/entry-pages//NewEntry.js";

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
      <Footer />
      </Router>
    </div>
  )
};

