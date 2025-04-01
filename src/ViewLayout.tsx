import { AppShell, AppShellProps, Stack } from "@mantine/core";
import { NavbarLink } from "./components";

type ViewLayoutProps = AppShellProps & {
  children: React.ReactNode;
};

export const ViewLayout = ({ children, ...props }: ViewLayoutProps) => {
  return (
    <AppShell layout="alt" navbar={{ width: 300, breakpoint: "xs" }} {...props}>
      <AppShell.Navbar bg="gray.0">
        <AppShell.Section>
          <Stack gap={4} p={8}>
            <NavbarLink to="/" label="Red" />
            <NavbarLink to="/green" label="Green" />
            <NavbarLink to="/blue" label="Blue" />
          </Stack>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main py={24} display="flex">
        <AppShell.Section px={24} w="100%">
          {children}
        </AppShell.Section>
      </AppShell.Main>
    </AppShell>
  );
};
