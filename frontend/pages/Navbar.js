'use client';
import Link from "next/link";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/Pomona" >
          <span className="navbar-logo">Room Draw</span>
        </Link>
          <div className="navbar-container">
            <div class="dropdown">
              <button class="dropbtn">Select Dorm</button>
              <div class="dropdown-content">
                <Link href="/Gibson" passHref>
                  <span>Gibson</span>
                </Link>
                <Link href="/Clark I" passHref>
                  <span>Clark I</span>
                </Link>
                <Link href="/Clark III" passHref>
                  <span>Clark III</span>
                </Link>
                <Link href="/Clark V" passHref>
                  <span>Clark V</span>
                </Link>
                <Link href="/Dialynas" passHref>
                  <span>Dialynas</span>
                </Link>
              </div>
            </div>
            <div className="my-account">
              <Link href="/AccountDetails">
                <span>My Account</span>
              </Link>
            </div>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
