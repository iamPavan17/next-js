import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meals</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
      {/* Dynamic routes */}
      <p>
        <Link href="/meals/pizza">Pizza</Link>
      </p>
      <p>
        <Link href="/meals/pasta">Pasta</Link>
      </p>
    </main>
  );
}
