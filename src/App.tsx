import Nav from "./components/layout/Nav";
import Profile from "./components/layout/Profile";
import Home from "./components/layout/Home";
import Project1 from "./components/layout/Project1";
import Project2 from "./components/layout/Project2";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <BrowserRouter>
        <Nav />
        <div className="h-screen overflow-y-scroll snap-mandatory snap-y">
          <Toaster />
          <div id="home">
            <Home />
          </div>
          <div className="snap-start snap-mandatory snap-always" id="profile">
            <Profile />
            <div id="project">
              <Project1 />
              <Project2 />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
