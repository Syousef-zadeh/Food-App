
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./main-HeaderBackground";
import classes from "./main-Header.module.css";


export default function MainHeader() {

  
  return (
    <>
     <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" property />
          Next Leve Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              
              <Link href="/community" className={path.startsWith('/community') ? classes.active : undefined}>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
