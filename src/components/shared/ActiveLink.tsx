import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  const { pathname }: { pathname: string } = useLocation();
  const active: boolean = isRoot
    ? pathname === href
    : pathname.startsWith(href);
  const classes: string = classNames(active && activeClassName);

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  );
};

export default ActiveLink;
