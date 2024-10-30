import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./components";
import ProtectedRoute from "./components/Protected";
import { restoreAuth } from "./redux/slices/authSlice";
import GlobalAuthWrapper from "./components/GlobalAuthWrapper";

import {
  Login,
  SignUp,
  Welcome,
  CourseList,
  Qna,
  Resources,
  Support,
  Profile,
  Module,
  Lesson,
  QnaVault,
  Course,
  Dashboard,
  Checkout,
  Success,
  CourseUpsale,
  Home,
  SiteCourses,
  Blogs,
  Speaking,
  Blogsdetails,
  Books,
  Coaching,
  CoachingDetails,
  NotFound,
  Reset,
} from "./pages";
// import Home from "./pages/home";
import StripeProvider from "./components/payments/StripeProvider";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(restoreAuth());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <GlobalAuthWrapper>
        <Layout />
      </GlobalAuthWrapper>
    </Router>
  );
}

function Layout() {
  const location = useLocation();
  const noNavbarRoutes = [
    "/",
    "/login",
    "/reset",
    "/signup",
    "/checkout",
    "/success",
    "/home",
    "/courses-info",
    "/blogs",
    "/blogdetails",
    "/books",
    "/resources",
    "/coachingDetails",
    "/work-with-me/coaching",
    "/work-with-me/speaking",
    "/not-found"
  ];

  return (
    <>
      {/* Render Navbar unless on specific routes */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}

      {/* Render Navbar if not on signin */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" index element={<Home />} />
        <Route path="/home" index element={<Navigate to="/" />} />
        <Route path="/courses-info" element={<SiteCourses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogdetails" element={<Blogsdetails />} />
        <Route path="/books" element={<Books />} />
        <Route path="/work-with-me/coaching" element={<Coaching />} />
        <Route path="/coachingDetails" element={<CoachingDetails />} />
        <Route path="/work-with-me/speaking" element={<Speaking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/*Protected  Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/welcome"
          element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <CourseList />
            </ProtectedRoute>
          }
        />
        <Route path="/upsale" element={<CourseUpsale />} />
        <Route
          path="/courses/:courseId"
          element={
            <ProtectedRoute>
              <Course />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses/:courseId/modules/:moduleId"
          element={
            <ProtectedRoute>
              <Module />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses/:courseId/modules/:moduleId/lesson/:lessonId"
          element={
            <ProtectedRoute>
              <Lesson />
            </ProtectedRoute>
          }
        />

        <Route
          path="/qna-vault"
          element={
            <ProtectedRoute>
              <QnaVault />
            </ProtectedRoute>
          }
        />
        <Route
          path="/qna"
          element={
            <ProtectedRoute>
              <Qna />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <ProtectedRoute>
              <Resources />
            </ProtectedRoute>
          }
        />
        <Route
          path="/support"
          element={
            <ProtectedRoute>
              <Support />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <StripeProvider>
              <Checkout />
            </StripeProvider>
          }
        />
        <Route
          path="/success"
          element={
              <Success />
          }
        />

        <Route path="/reset" element={<Reset />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/logout" element={<Logout />} /> */}
      </Routes>
    </>
  );
}

export default App;
