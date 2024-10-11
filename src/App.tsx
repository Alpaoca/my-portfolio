import Nav from "./components/layout/Nav";
import Profile from "./components/layout/Profile";
import About from "./components/layout/About";

function App() {
  return (
    <>
      <div className="h-screen overflow-y-scroll snap-mandatory snap-y">
        <About />
        <Profile />
      </div>
      <Nav />
    </>
  );
}

export default App;
