import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router";
import { useEffect } from "react";

function App() {
  function ScrollToTop() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [Router]);

    return null;
  }

  return (
    <>
      <ScrollToTop />
      <div>
        <RouterProvider router={Router} />
      </div>
    </>
  );
}

export default App;