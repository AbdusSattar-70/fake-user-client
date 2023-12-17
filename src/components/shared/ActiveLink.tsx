import { Link, useHref } from "react-router-dom";
import classNames from "./classNames";

interface ActiveLinkProps {
  children: React.ReactNode;
  isRoot?: boolean;
  href: string;
  activeClassName: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  href,
  activeClassName,
  isRoot = false,
}) => {
  const pathName: string = useHref();
  const active: boolean = isRoot
    ? pathName === href
    : pathName.startsWith(href);
  const classes: string = classNames(active && activeClassName);

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  );
};

export default ActiveLink;
