import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(null);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <>
      <header>
        <div>
          {darkTheme !== undefined && (
            <form action="#">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkTheme}
                  onChange={handleToggle}
                />
                <span className="slider"></span>
              </label>
            </form>
          )}
        </div>
        <nav>
          <ul className="nav_links">
            <li>
              <Link href="/" legacyBehavior>
                <a style={{ fontSize: "20px" }}> Home </a>
              </Link>
            </li>
            <li>
              <Link href="/posts" legacyBehavior>
                <a style={{ fontSize: "20px" }}> Blog </a>
              </Link>
            </li>
          </ul>
        </nav>
        <Link className="logo" href="/" legacyBehavior>
          <a style={{ fontSize: "30px" }}> Blog JSON P.H </a>
        </Link>
      </header>
    </>
  );
};

export default Navbar;
