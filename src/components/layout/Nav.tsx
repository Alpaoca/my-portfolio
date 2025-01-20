import { useState } from "react";
import { HashLink } from "react-router-hash-link";

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
    { href: "#home", text: "Home" },
    { href: "#profile", text: "About" },
    { href: "#project", text: "Project" },
  ];

  const Menu = menuItems.map((item, index) => (
    <HashLink
      smooth
      to={item.href}
      key={index}
      className={`block px-4 py-2 text-sm text-[#0A093B] hover:bg-gray-100 transition-all ease-linear ${
        showMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      }`}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: "300ms",
        transitionDelay: `${index * 300}ms`,
      }}
      onClick={toggleState} // Close menu after selecting an item
    >
      {item.text}
    </HashLink>
  ));

  return (
    <>
      <nav className="fixed left-[1.5rem] top-[1.5rem] collapse md:hidden z-40">
        <button
          onClick={toggleState}
          className="cursor-pointer rounded-full p-[0.75rem] transition-all duration-300 ease-in-out transform hover:scale-[1.25]"
        >
          <img
            src="/my-portfolio/svg/burger-menu-svgrepo-com.svg"
            className="size-[1.5rem]"
            alt="Navigation burger menu icon"
          />
        </button>
        <div
          className={`mt-[1rem] w-[12rem] bg-[#565595] rounded-md shadow-sm transition-background duration-[1s] ease-in-out ${
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
