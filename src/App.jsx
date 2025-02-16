import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <ScrollToTop />

      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
