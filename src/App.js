import "./sass/style.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import LogInPage from "../src/components/login/LogInPage";
import UserDetails from "./components/api/UserDetails";
import Footer from "./components/footer/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar className="nav" bg="dark" variant="dark" expand="lg">
            <NavLink className="navlink" to="/">
              <Navbar.Brand className="navtext">
                JavaScript Frameworks CA
              </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
                <NavLink to="/login" className="nav-link">
                  Log In
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/users/:id" element={<UserDetails />} />
              <Route path="/login" element={<LogInPage />} />
              <Route path="/dashboard" exact element={<Dashboard />} />
            </Routes>
          </Container>
        </Router>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
