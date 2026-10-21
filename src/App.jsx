import { Routes, Route, Link } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import Collections from "./pages/Collections.jsx";
import { ToastContainer, Slide } from "react-toastify";

const App = () => {
  return (
    <>
      <header className="bg-amber-800 text-white flex justify-between px-5 py-2">
        <div className="text-2xl font-semibold">Media Query</div>
        <div className="flex gap-2">
          <Link
            className="border-2 active:scale-95 px-4 py-1 font-medium rounded-md"
            to="/"
          >
            Search
          </Link>
          <Link
            className="border-2 active:scale-95 px-4 py-1 font-medium rounded-md"
            to="/collections"
          >
            Collections
          </Link>
        </div>
      </header>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Slide}
      />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/collections" element={<Collections />}></Route>
      </Routes>
    </>
  );
};

export default App;
