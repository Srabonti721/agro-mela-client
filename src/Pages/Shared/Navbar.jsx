import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  Menu,
  X,
  Search,
  UserRound,
  Sprout,
  ChevronDown,
} from "lucide-react";

const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Farming Guide", path: "/farming-guide" },
    { name: "Market", path: "/market" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= NAVBAR ================= */}
        <div className="flex h-16 items-center justify-between sm:h-18 lg:h-20">

          {/* ================= LOGO ================= */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">

            <div
              className="flex h-9 w-9 items-center justify-center
              rounded-xl bg-green-100 text-green-700
              sm:h-10 sm:w-10 lg:h-11 lg:w-11"
            >
              <Sprout
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
            </div>

            <div>
              <h1
                className="text-lg font-bold text-green-800
                sm:text-xl lg:text-2xl"
              >
                Agro<span className="text-lime-600">Mela</span>
              </h1>

              <p
                className="hidden text-[9px] tracking-[0.2em]
                text-gray-500 sm:block"
              >
                GROW • FARM • THRIVE
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex lg:items-center lg:gap-5 xl:gap-7">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-medium transition
                  xl:text-[15px]
                  ${
                    isActive
                      ? "text-green-700"
                      : "text-gray-700 hover:text-green-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute bottom-0 left-0 h-0.5
                      rounded-full bg-green-600 transition-all
                      ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

          </nav>

          {/* ================= DESKTOP RIGHT ================= */}
          <div className="hidden lg:flex lg:items-center lg:gap-2 xl:gap-3">

            {/* Search */}
            <button
              className="flex h-9 w-9 items-center justify-center
              rounded-full text-gray-600 transition
              hover:bg-green-50 hover:text-green-700
              xl:h-10 xl:w-10"
            >
              <Search size={19} />
            </button>

            {user ? (
              /* ================= USER ================= */
              <div className="relative">

                <button
                  onClick={() =>
                    setProfileOpen(!profileOpen)
                  }
                  className="flex items-center gap-2 rounded-full
                  border border-green-100 bg-green-50 px-2 py-1.5
                  xl:px-3 xl:py-2"
                >

                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="h-7 w-7 rounded-full object-cover
                      xl:h-8 xl:w-8"
                    />
                  ) : (
                    <UserRound size={18} />
                  )}

                  <span
                    className="hidden max-w-20 truncate text-sm
                    font-medium text-green-800 xl:block"
                  >
                    {user.displayName || "User"}
                  </span>

                  <ChevronDown size={15} />
                </button>

                {profileOpen && (
                  <div
                    className="absolute right-0 mt-3 w-52
                    rounded-2xl border border-green-100
                    bg-white p-2 shadow-xl"
                  >

                    <Link
                      to="/profile"
                      className="block rounded-xl px-4 py-3 text-sm
                      text-gray-700 hover:bg-green-50
                      hover:text-green-700"
                    >
                      Profile
                    </Link>

                    <Link
                      to="/dashboard"
                      className="block rounded-xl px-4 py-3 text-sm
                      text-gray-700 hover:bg-green-50
                      hover:text-green-700"
                    >
                      Dashboard
                    </Link>

                    <Link
                      to="/dashboard/my-products"
                      className="block rounded-xl px-4 py-3 text-sm
                      text-gray-700 hover:bg-green-50
                      hover:text-green-700"
                    >
                      My Products
                    </Link>

                    <hr className="my-1 border-gray-100" />

                    <button
                      className="w-full rounded-xl px-4 py-3
                      text-left text-sm text-red-500
                      hover:bg-red-50"
                    >
                      Logout
                    </button>

                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-full px-4 py-2 text-sm
                  font-semibold text-green-700
                  hover:bg-green-50 xl:px-5"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="rounded-full bg-green-700 px-4 py-2
                  text-sm font-semibold text-white shadow-md
                  shadow-green-200 transition hover:bg-green-800
                  xl:px-5"
                >
                  Get Started
                </Link>
              </>
            )}

          </div>

          {/* ================= MOBILE / TABLET MENU BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center
            rounded-xl text-gray-700 hover:bg-green-50
            hover:text-green-700 lg:hidden"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>

        {/* ================= MOBILE + TABLET MENU ================= */}
        {isOpen && (
          <div
            className="border-t border-green-100 py-4
            lg:hidden"
          >

            <nav className="flex flex-col gap-1">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-medium
                    transition sm:text-base
                    ${
                      isActive
                        ? "bg-green-50 text-green-700"
                        : "text-gray-700 hover:bg-green-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

            </nav>

            {/* Mobile / Tablet Actions */}
            <div
              className="mt-4 flex gap-2 border-t
              border-green-100 pt-4 sm:gap-3"
            >

              <button
                className="flex h-11 w-11 shrink-0 items-center
                justify-center rounded-xl border border-green-100
                text-gray-600 hover:bg-green-50
                hover:text-green-700"
              >
                <Search size={19} />
              </button>

              {user ? (
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex flex-1 items-center justify-center
                  rounded-xl bg-green-700 py-3 text-sm
                  font-semibold text-white sm:text-base"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex flex-1 items-center justify-center
                    rounded-xl border border-green-600 py-3
                    text-sm font-semibold text-green-700
                    sm:text-base"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="flex flex-1 items-center justify-center
                    rounded-xl bg-green-700 py-3 text-sm
                    font-semibold text-white sm:text-base"
                  >
                    Register
                  </Link>
                </>
              )}

            </div>

          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;
