import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages";
import { Layout } from "@/layout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
