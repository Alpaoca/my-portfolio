import Nav from "./components/layout/Nav";
import Profile from "./components/layout/Profile";
import About from "./components/layout/About";
import Project1 from "./components/layout/Project1";
import Project2 from "./components/layout/Project2";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="h-screen overflow-y-scroll snap-mandatory snap-y">
        <Toaster />
        <About />
        <div className="snap-start snap-mandatory snap-always">
          <Profile />
          <Project1 />
          <Project2 />
        </div>
      </div>
      <Nav />
    </>
  );
}

export default App;
