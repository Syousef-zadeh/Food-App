import logoImg from "@/assets/logo.png";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="A plate with food on it" />
        Next Leve Food
      </Link>
      <nav>
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
