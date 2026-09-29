import { Leaf, LogIn, Menu, UserRound, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../Hooks/UseAuth";

const Navbar = () => {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Services", path: "/services" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact", path: "/contact" },
    ];

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-green-100">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className="h-20 flex items-center justify-between">
                    {/* ================= LOGO ================= */}
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center gap-2"
                    >
                        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                            <Leaf className="text-white" size={22} />
                        </div>

                        <div>
                            <h1 className="text-xl font-bold text-gray-800 leading-none">
                                Agro<span className="text-green-600">Mela</span>
                            </h1>

                            <p className="text-[10px] text-gray-500 tracking-wider mt-1">
                                GROWING NATURALLY
                            </p>
                        </div>
                    </Link>

                    {/* ================= DESKTOP MENU ================= */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative text-sm font-medium transition duration-300
                  ${
                      isActive
                          ? "text-green-600"
                          : "text-gray-600 hover:text-green-600"
                  }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}

                                        {/* Active underline */}
                                        <span
                                            className={`
                        absolute -bottom-2 left-0 h-0.5 bg-green-600
                        transition-all duration-300
                        ${isActive ? "w-full" : "w-0"}
                      `}
                                        />
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* user img */}
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="user img"
                                    src={`${user ? user?.photoURL : <UserRound />}`}
                                />
                            </div>
                        </div>
                        <Link
                            to="/login"
                            className="
                flex items-center gap-2
                px-5 py-2.5
                rounded-lg
                border border-green-600
                text-green-600
                font-semibold text-sm
                hover:bg-green-600
                hover:text-white
                transition duration-300
              "
                        >
                            <LogIn size={17} />
                            Login
                        </Link>
                    </div>

                    {/* ================= MOBILE MENU BUTTON ================= */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="
              lg:hidden
              p-2
              rounded-lg
              text-gray-700
              hover:bg-green-50
              hover:text-green-600
              transition
            "
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {/* ================= MOBILE MENU ================= */}
                <div
                    className={`
            lg:hidden
            overflow-hidden
            transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0"}
          `}
                >
                    <nav className="flex flex-col gap-1 pt-3 border-t border-green-100">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `
                  px-4 py-3
                  rounded-lg
                  font-medium
                  transition duration-300
                  ${
                      isActive
                          ? "bg-green-50 text-green-600"
                          : "text-gray-600 hover:bg-green-50 hover:text-green-600"
                  }
                  `
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* Mobile Login */}
                        <div className="flex justify-around items-center">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="user img"
                                        src={`${user ? user?.photoURL : <UserRound />}`}
                                    />
                                </div>
                            </div>
                            <Link
                                to="/login"
                                onClick={closeMenu}
                                className="
                mt-2
                flex items-center justify-center gap-2
                px-5 py-3
                rounded-lg
                bg-green-600
                text-white
                font-semibold
                hover:bg-green-700
                transition duration-300
              "
                            >
                                <LogIn size={17} />
                                Login
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
