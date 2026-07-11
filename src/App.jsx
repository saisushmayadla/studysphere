import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateGroup from "./pages/CreateGroup";
import GroupDetails from "./pages/GroupDetails";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateGroup />} />
      <Route path="/group/:id" element={<GroupDetails />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;