// DEPENDENCIES
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// PAGES
import Home from "./Pages/Home.js";
// import Index from "./Pages/Index.js";
// import Show from "./Pages/Show.js";
// import Edit from "./Pages/Edit.js";
// import New from "./Pages/New.js";

// COMPONENTS
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path = "/" element = {<Home />} />
            {/* <Route path = "/shoes" element = {<Index />} />
            <Route path = "/shoes/new" element = {<New />} />
            <Route path = "/shoes/:id" element = {<Show />} />
            <Route path = "/shoes/:id/edit" element = {<Edit />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
