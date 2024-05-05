import Link from "next/link";
import logo from "../../assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";
function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.logo}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="empty" />
          <p>next level food</p>
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals"> browse meals</NavLink>
            </li>

            <li>
              <NavLink href="/community"> community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
