import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <Home />
            <AboutMe />
            <Contacts />
        </div>
    );
};

export default App;
