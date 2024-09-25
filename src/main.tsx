import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme/ThemeContext";
import About from "./pages/About.tsx";
import Project from "./pages/Project.tsx";
import { Contact } from "./pages/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
]);

ReactDOM?.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider 
        router={router}
        fallbackElement={'LOADING ....'}
      />
      
    </ThemeProvider>
  </StrictMode>
);
