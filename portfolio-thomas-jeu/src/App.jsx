import './style/App.css'
import Nav from "./components/Nav.jsx";
import HomePage from "./pages/Home.jsx";

function App() {
    return (
        <div className="main">
            <Nav />
            <HomePage />
        </div>
    );
}

export default App
