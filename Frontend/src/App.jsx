import React from "react";
import { Toaster } from "@/components/ui/sonner";
// import Page from './components/pages/Page'
import Login from "./components/pages/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Page from "./components/pages/Page";
import PrivateRoute from "./components/pages/PrivateRoute";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" richColors />
      {/* <Page /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/page"
          element={
            <PrivateRoute>
              <Page />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
