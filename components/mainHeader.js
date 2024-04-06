import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import classes from './main-Header.module.css';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" property/>
        Next Leve Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Brows Meals</Link>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
