import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { HeadMenu, CategoriesMenu } from "./menu";
import { Footer } from "./footer";

export function App() {
  return (
    <>
      <div className="sticky top-0 z-50 bg-body">
        <HeadMenu />
      </div>
      <div>
        <CategoriesMenu />
      </div>
      <main className="bg-content">
        <div className="container-fluid">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/xd" element={<>xd</>} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </main>
    </>
  );
}
