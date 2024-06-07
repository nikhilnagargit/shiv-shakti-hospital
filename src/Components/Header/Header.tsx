import Logo from "@/assets/Images/logo.png";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { SelectedPage } from "@/Components/Shared/Types";

const Header = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const flexBetween = "flex items-center justify-between";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${flexBetween} ${
        isTopOfPage ? "" : "bg-[#84ceff]"
      } transition fixed top-0 z-30 w-full p-5 md:px-16`}
    >
      <div className="flex items-center gap-3">
        <img className="w-10 sm:w-20" src={Logo} alt="Logo" />
        <div className="font-bold uppercase text-xl">Shiv Shakti Hospital</div>
      </div>

      <NavBar
        flexBetween={flexBetween}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default Header;
