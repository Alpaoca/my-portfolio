import { useState } from "react";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const toggleState = () => {
    setToggle((prevState) => !prevState);
    if (!toggle) {
      // If opening the menu, set a timeout to show the menu items
      setTimeout(() => setShowMenu(true), 500);
    } else {
      // If closing the menu, hide the menu items immediately
      setShowMenu(false);
    }
  };

  const menuItems = [
    { href: "#", text: "Resume" },
    { href: "#", text: "Skill" },
    { href: "#", text: "Contact" },
  ];

  const Menu = menuItems.map((item, index) => (
    <a
      key={index}
      href={item.href}
      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all ease-linear ${
        showMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      }`}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: "300ms",
        transitionDelay: `${index * 300}ms`,
      }}
    >
      {item.text}
    </a>
  ));

  return (
    <>
      <nav className="absolute left-[1.5rem] top-[1.5rem]">
        <button
          onClick={toggleState}
          className="rounded-full p-[0.75rem] transition-all duration-300 ease-in-out transform hover:scale-[1.25]"
        >
          <img
            src="images\burger-menu-svgrepo-com.svg"
            className="size-[1.5rem]"
            alt="Navigation burger menu icon"
          />
        </button>
        <div
          className={`mt-[1rem] w-[12rem] bg-[#1a1a1a] rounded-md shadow-sm transition-background duration-[1s] ease-in-out ${
            toggle ? "max-h-[12rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {Menu}
        </div>
      </nav>
    </>
  );
}

export default Nav;
