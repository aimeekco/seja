import Link from "next/link";
import navbar from "../styles/navbar.css"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

function Navbar() {
  return (
      <nav className="navbar">
        <div className="navbar-container">
            <Link href="/Pomona" className="navbar-logo">Room Draw</Link>
            <div className="navbar-links">
                <DropdownMenu className="navbar-links">
                    <DropdownMenuTrigger>Dorms</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Select floorplan</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Clark III</DropdownMenuItem>
                        <DropdownMenuItem>Clark V</DropdownMenuItem>
                        <DropdownMenuItem>Dialynas</DropdownMenuItem>
                        <DropdownMenuItem>Gibson</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/login">Login</Link>
            </div>
        </div>
      </nav>
  );
}

export default Navbar;
