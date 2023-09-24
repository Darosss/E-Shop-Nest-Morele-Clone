import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Home } from "./home";
import {
  HeadMenu,
  CategoriesMenu,
  MobileMenu,
  MobilleMenuContextProvider,
} from "./menu";
import { Footer } from "./footer";
import { AuthForms } from "./authForms";
import { AuthContextProvider } from "./auth";
import { CategoriesContextProvider } from "./api/CategoriesContext";
import { CategoryHeadView, CategoryView } from "./categories/";

export function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route element={<DefaultWrapper />}>
              <Route path="/" element={<Home />} />

              <Route path=":categoryParent">
                <Route index element={<CategoryHeadView />} />

                <Route path=":categorySubParent">
                  <Route index element={<CategoryHeadView />} />
                  <Route path=":category" element={<CategoryView />} />
                </Route>
              </Route>
            </Route>

            <Route path="/login" element={<AuthForms />} />
            <Route
              path="/soon/*"
              element={<>This will be implemented soon</>}
            />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

function DefaultWrapper() {
  return (
    <div className="relative">
      <CategoriesContextProvider>
        <div className="sticky top-0 z-50 bg-body">
          <HeadMenu />
        </div>
        <div>
          <CategoriesMenu />
        </div>
        <main className="bg-content">
          <div className="container-fluid">
            <Outlet />
          </div>
          <Footer />
        </main>
        <MobilleMenuContextProvider>
          <MobileMenu />
        </MobilleMenuContextProvider>
      </CategoriesContextProvider>
    </div>
  );
}
