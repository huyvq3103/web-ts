import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { Layout, theme } from "antd";
import Navbar from "./components/Header/Header";
import Shop from "./components/Content/Content";
import NotFound from "./components/NotFound";
import Column from "./pages/Column";
import IntroductionPage from "./components/Introduce/Introduce";
import LoginPage from "./components/Login/Login";
import RegisterPage from "./components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout style={{ position: "relative" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/column" element={<Column />} />
            <Route path="/introduce" element={<IntroductionPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
