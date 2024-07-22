import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { useUserStore } from "../store/userStore";

const Header = () => {
  const { user, logout } = useUserStore();
  const isAuthenticated = !!user;

  return (
    <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
      <Link to="/" className="flex items-center justify-center">
        <BrainIcon className="h-6 w-6" />
        <span className=" p-1 text-black font-bold">MindConnect</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          to="#"
          className="text-sm font-medium hover:underline underline-offset-4">
          Find a Therapist
        </Link>
        <Link
          to="#"
          className="text-sm font-medium hover:underline underline-offset-4">
          Support Groups
        </Link>
        <Link
          to="#"
          className="text-sm font-medium hover:underline underline-offset-4">
          Resources
        </Link>
        <Link
          to="#"
          className="text-sm font-medium hover:underline underline-offset-4">
          About
        </Link>
      </nav>
      <div className="ml-4 flex items-center gap-2">
        {isAuthenticated ? (
          <>
            <span className="flex items-center justify-center p-2 h-[2rem] rounded-full bg-gray-200 text-blue-600 font-bold">Welcome, {user.username}, {user.role}</span>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.image || "/placeholder-user.jpg"} />
                <AvatarFallback >{user?.usernamename?.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
            <Button variant="secondary" onClick={logout}>
              Log Out
            </Button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button variant="secondary">Login</Button>
            </Link>
            <Link to="/signup">
              <Button variant="secondary">Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

function BrainIcon(props) {
  return (
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
}

export default Header;
