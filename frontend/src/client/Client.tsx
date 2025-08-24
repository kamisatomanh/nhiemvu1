import Nav from "./navigation/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
// import About from "./About";
// import Blog from "./Blog";
// import Contact from "./Contact";
const Client = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};

export default Client;
