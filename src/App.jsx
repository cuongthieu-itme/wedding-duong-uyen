import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import "./sass/app.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: false,
      offset: 0, // QUAN TRỌNG: để AOS trigger đúng
      mirror: false,
    });

    // Nếu muốn AOS nhận thay đổi DOM sau khi render thêm content:
    AOS.refresh();
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
