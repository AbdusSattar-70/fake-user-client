import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = (): React.ReactNode => {
  return (
    <header>
      <nav className="flex flex-col items-center justify-between sm:flex-row max-w-6xl mx-auto p-4 sm:p-8 md:p-6">
        <h1 className="text-3xl font-bold text-purple-950">
          <Link to={"/"}>Faker</Link>
        </h1>
        <ul className="flex flex-col items-center justify-between sm:flex-row">
          <NavLinks />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
