import "./App.css";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./views/CreatePost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
