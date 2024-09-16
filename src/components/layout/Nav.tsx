import { useState } from "react";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const toggleState = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <>
      <nav className="absolute left-[1.5rem] top-[1.5rem] w-[10rem]">
        <button onClick={toggleState} className="rounded-full p-[1rem]">
          <img
            src="images\burger-menu-svgrepo-com.svg"
            className="size-[2rem]"
            alt="Navigation burger menu icon"
          />
        </button>
        {toggle && (
          <>
            <p>Resume</p>
            <p>Skill</p>
            <p>Contact</p>
          </>
        )}
      </nav>
    </>
  );
}

export default Nav;
