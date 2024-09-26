import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import Project from "./pages/Project.tsx";
import { Contact } from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="project" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
