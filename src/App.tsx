import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    );
};

export default App;
