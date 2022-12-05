import './style/App.scss'
import Nav from "./components/Nav.jsx";
import HomePage from "./pages/Home.jsx";

function App() {
    return (
        <div className="main">
            <div className="main-container"></div>
            <Nav />
            <HomePage/>
        </div>
    );
}

export default App
