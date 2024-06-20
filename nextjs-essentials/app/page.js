import Link from "next/link";

// import Header from "../components/header";
// While we could import the header as shown above,
// Next.js provides import alias configuration, allowing us to import it as follows:
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Welcome to this NextJS Course!</h1>
      <p>Let&apos;s get started! 🔥🔥🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
