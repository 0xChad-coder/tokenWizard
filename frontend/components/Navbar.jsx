import { useState } from "react";
import hamburger from "@/public/icon-hamburger.svg";
import closeIcon from "@/public/icon-close.svg";
import logo from "@/public/logo.png";
import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";
import Image from "next/image";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(hamburger)
  const handleToggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  return (
    <>
      <nav className="bg-black h-[70px] text-white flex items-center justify-between px-10 md:px-[5%] lg:px-[10%] border-b-[1px] border-gray-700 fixed top-0 z-10 w-[100%]">
        <a href="/">
          <img className="w-[70px] h-[65px]" src={logo.src} alt="Logo" />
        </a>
        <ul className="hidden lg:flex">
          <li className="cursor-pointer mr-[50px] relative before:content-[''] before:absolute before:bottom-0 before:w-[0%] before:h-[2px] before:bg-[#12aaff] hover:before:w-[100%] before:transition-width before:duration-500">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer mr-[50px] relative before:content-[''] before:absolute before:bottom-0 before:w-[0%] before:h-[2px] before:bg-[#12aaff] hover:before:w-[100%] before:transition-width before:duration-500">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="cursor-pointer relative before:content-[''] before:absolute before:bottom-0 before:w-[0%] before:h-[2px] before:bg-[#12aaff] hover:before:w-[100%] before:transition-width before:duration-500">
            <a href="/tokenWizard">Token Wizard</a>
          </li>
        </ul>
        {/* <button className="hidden lg:block bg-[#262626] hover:bg-[#3676E1] px-5 py-2 rounded-[50px] transition ease-in duration-300">
          Connect Wallet
        </button> */}
        <div className="hidden lg:block">
          <ConnectWallet
            switchToActiveChain={true}
            modalSize="compact"
            theme={darkTheme({
              colors: { primaryButtonBg: "#262626", primaryButtonText: "#fff" },
            })}
          />
        </div>
        <img
          className="cursor-pointer lg:hidden"
          src={menuOpen ? closeIcon.src : hamburger.src}
          onClick={handleToggleMenu}
        />
      </nav>

      <div
        className={`${
          menuOpen ? "translate-x-0" : "translate-x-[-100%]"
        } transition-all duration-500 mt-[-130px] bg-black text-white w-[100%] h-[100%] px-10 lg:hidden fixed  z-10`}
      >
        <ul className="py-[70px] mt-10">
          <li className="w-fit cursor-pointer mr-[50px] relative before:content-[''] before:absolute before:bottom-0 before:w-[0%] before:h-[2px] before:bg-[#3676E1] hover:before:w-[100%] before:transition-width before:duration-500">
            Home
          </li>
          <li className="mt-10 w-fit cursor-pointer mr-[50px] relative before:content-[''] before:absolute before:bottom-0 before:w-[0%] before:h-[2px] before:bg-[#3676E1] hover:before:w-[100%] before:transition-width before:duration-500">
            Dashboard
          </li>
          <li className="mt-10 w-fit cursor-pointer relative before:content-[''] before:absolute before:bottom-0 before:w-[0%] before:h-[2px] before:bg-[#3676E1] hover:before:w-[100%] before:transition-width before:duration-500">
            Deployer
          </li>
        </ul>
        {/* <button className="relative bottom-[-15%] bg-[#262626] hover:bg-[#3676E1] px-5 py-2 w-[100%] rounded-[50px] transition ease-in duration-300">
          Connect Wallet
        </button> */}
        <div className="">
          <ConnectWallet
            modalSize="compact"
            theme={darkTheme({
              colors: { primaryButtonBg: "#262626", primaryButtonText: "#fff" },
            })}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
