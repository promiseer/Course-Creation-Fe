import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import { Navbar } from "./components";

import {
  Signin,
  Welcome,
  Courses,
  Qna,
  Resources,
  Support,
  Profile,
} from "./pages";
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/signin" && <Navbar />}{" "}
      {/* Render Navbar if not on signin */}
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/qna" element={<Qna />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/support" element={<Support />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
