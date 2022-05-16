import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Edit from "./pages/Edit";
// import New from "./pages/Create";
import Home from "./pages/Home";
// import Index from "./pages/Index";
// import Show from "./pages/Show";
// import FourOFour from "./pages/FourOFour";

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
          <Route path="/entries/:eid" element={<ShowEntry />} />
          <Route path="/entries/:eid/edit" element={<EditEntry />} />
          <Route path="/entries/new" element={<NewEntry />} />

        </Routes>
      </main>
      </Router>
    </div>
  )
};

