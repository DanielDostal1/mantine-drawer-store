import { NavLink as MantineLink, NavLinkProps } from "@mantine/core";
import { Link as ReactRouterLink, useLocation } from "react-router";

type NavbarLinkProps = NavLinkProps & {
  to: string;
};

export const NavbarLink = ({ to, children, ...props }: NavbarLinkProps) => {
  const locaition = useLocation();

  return (
    <MantineLink
      active={to === locaition.pathname}
      to={to}
      component={ReactRouterLink}
      label={children}
      autoContrast
      // variant="light"
      py={8}
      style={{ borderRadius: "4px" }}
      {...props}
    ></MantineLink>
  );
};
