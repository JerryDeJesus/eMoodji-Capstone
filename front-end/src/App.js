import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Edit from "./pages/Edit";
// import New from "./pages/Create";
import Home from "./pages/Home";
// import Index from "./pages/Index";
// import Show from "./pages/Show";
// import FourOFour from "./pages/FourOFour";

import NavBar from "./components/NavBar";

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
        </Routes>
      </main>
      </Router>
    </div>
  )
};

