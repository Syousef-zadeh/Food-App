import Link from "next/link";
import Header from "@/components/header";
import NotFound from "@/components/not-found";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About</Link></p>
    </main>
  );
}
