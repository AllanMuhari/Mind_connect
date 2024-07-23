import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { useUserStore } from "../store/userStore";

const Header = () => {
  const { user, logout } = useUserStore();
  const isAuthenticated = !!user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-16 flex items-center justify-between shadow-md">
      <Link to="/" className="flex items-center">
        <BrainIcon className="h-8 w-8" />
        <span className="ml-2 text-black font-bold text-xl">MindConnect</span>
      </Link>
      <nav className="hidden lg:flex ml-auto gap-6">
        <NavLink to="/">Home</NavLink>
        {user?.role === "ADMIN" && (
          <NavLink to="/approve-counsellors">Approve Counsellors</NavLink>
        )}
        {user?.role === "USER" && (
          <NavLink to="/find-therapists">Find a Therapist</NavLink>
        )}
        {user?.role === "COUNSELOR" && (
          <NavLink to="/register-counsellor">Register as a Counsellor</NavLink>
        )}
        <NavLink to="/support-groups">Support Groups</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <span className="hidden lg:flex items-center justify-center px-4 py-2 rounded-full bg-gray-200 text-blue-600 font-bold">
              Welcome, {user.username}, {user.role}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full ml-2 hidden lg:block">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.image || "/placeholder-user.jpg"} />
                <AvatarFallback className="text-lg font-bold text-white bg-blue-600">
                  {user?.username?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
            <Button
              variant="secondary"
              onClick={logout}
              className="hidden lg:block">
              Log Out
            </Button>
          </>
        ) : (
          <>
            <Link to="/login" className="hidden lg:block">
              <Button variant="secondary">Login</Button>
            </Link>
            <Link to="/signup" className="hidden lg:block">
              <Button variant="secondary">Sign Up</Button>
            </Link>
          </>
        )}
      </div>
      <div className="lg:hidden ml-2">
        <button onClick={toggleMenu} className="focus:outline-none">
          <HamburgerIcon className="h-8 w-8" />
        </button>
      </div>
      {isMenuOpen && (
        <Menu
          as="div"
          className="absolute top-16 right-0 w-full bg-white shadow-lg lg:hidden">
          <div className="flex flex-col p-4">
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
            {user?.role === "ADMIN" && (
              <NavLink to="/approve-counsellors" onClick={toggleMenu}>
                Approve Counsellors
              </NavLink>
            )}
            {user?.role === "USER" && (
              <NavLink to="/find-therapists" onClick={toggleMenu}>
                Find a Therapist
              </NavLink>
            )}
            {user?.role === "COUNSELOR" && (
              <NavLink to="/register-counsellor" onClick={toggleMenu}>
                Register as a Counsellor
              </NavLink>
            )}
            <NavLink to="/support-groups" onClick={toggleMenu}>
              Support Groups
            </NavLink>
            <NavLink to="/resources" onClick={toggleMenu}>
              Resources
            </NavLink>
            <NavLink to="/about" onClick={toggleMenu}>
              About
            </NavLink>
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-4 mt-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.image || "/placeholder-user.jpg"} />
                    <AvatarFallback className="text-lg font-bold text-white bg-blue-600">
                      {user?.username?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-bold text-blue-600">
                    Welcome, {user.username}, {user.role}
                  </span>
                </div>
                <Button
                  variant="secondary"
                  onClick={logout}
                  className="mt-4 w-full">
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="mt-4 block">
                  <Button variant="secondary" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" className="mt-4 block">
                  <Button variant="secondary" className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </Menu>
      )}
    </header>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-sm font-medium hover:underline underline-offset-4 mb-2">
    {children}
  </Link>
);

const HamburgerIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const BrainIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
    <path d="M6 18a4 4 0 0 1-1.967-.516" />
    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
  </svg>
);

export default Header;
