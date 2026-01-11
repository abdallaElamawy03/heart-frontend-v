import Register from "./components/Register";
import Login from "./components/Login";
import CardiacDiagnosis from "./components/CardiacDiagnosis";
import ReportsHistory from "./components/ReportsHistory";
import Profile from "./components/Profile";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import Unauthorized from "./components/Unauthorized";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";

const roles = {
  Admin: "Admin",
  user: "user",
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route element={<PersistLogin />}>
          <Route
            element={<RequireAuth allowedRoles={[roles.Admin, roles.user]} />}
          >
            <Route path="/cardiac-diagnosis" element={<CardiacDiagnosis />} />
            <Route path="/reports" element={<ReportsHistory />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
