import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Comforta</h1>
        <nav className="space-x-6">
        <Link to="/contactus">
        <Button variant="text">Contacat Us</Button>
        </Link>
        <Link to="/aboutus">
        <Button variant="text">About Us</Button>
        </Link>
        <Link to="/shopping">
        <Button variant="text"> Shopping</Button>
        </Link>
        <Link to="/login">
        <Button variant="filled">Log in</Button>
        </Link>
        <Link to="/signup">
        <Button variant="filled">Sign Up</Button>
        </Link>
        </nav>
      </header>
    </>
  );
}
