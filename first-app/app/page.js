import { Suspense } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

async function Users() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error("Failed to fetch users.");
  }

  const users = await response.json();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>Let&apos;s get started! 🔥🔥🔥</p>

      <Suspense fallback={<p>Loading...</p>}>
        <Users />
      </Suspense>
    </main>
  );
}
