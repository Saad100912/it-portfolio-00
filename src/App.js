import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import NavBar from "./Pages/Shared/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
