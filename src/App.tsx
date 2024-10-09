import Nav from "./components/layout/Nav";
import Profile from "./components/layout/Profile";
import About from "./components/layout/About";

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <Profile />
        <About />
      </div>
      <Nav />
    </>
  );
}

export default App;
