import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";
import ThemeToggle from "@/components/ThemeToggle";

const Layout = ({ theme, toggleTheme }) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <div className="flex items-center gap-4">
          <NavItem
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </NavItem>
          <DesktopNav />
        </div>
        <div className="flex items-center gap-4">
          <SearchBar />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <MobileNav />
          <UserMenu />
        </div>
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// ... (rest of the code remains the same)

export default Layout;