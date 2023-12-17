import ActiveLink from "../ActiveLink";

const NavLink = (): React.ReactNode => {
  const navLink = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/users",
      title: "Fake Users",
    },

    {
      path: "/about",
      title: "About",
    },
  ];

  return (
    <>
      {navLink.map(({ path, title }) => (
        <li key={path} className="sm:mx-1 md:mx-3">
          <ActiveLink
            isRoot={path === "/"}
            href={path}
            activeClassName="text-red-500 font-bold"
          >
            {title}
          </ActiveLink>
        </li>
      ))}
    </>
  );
};

export default NavLink;
