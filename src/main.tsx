import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// internal import
import router from "./routes/router";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <main className="min-h-screen bg-slate-300">
    <RouterProvider router={router} />
  </main>
);
