import { useEffect, useState } from "react";
import moolLogo from "../../Assets/mool-logo.png";
const Navbar = () => {
  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== "amir") setScrollState("amir");
      } else {
        if (scrollState !== "top") setScrollState("top");
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <div className="px-8 fixed py-6 ">
      <img src={moolLogo} alt="" className="w-24" />
      <button></button>
    </div>
  );
};

export default Navbar;
