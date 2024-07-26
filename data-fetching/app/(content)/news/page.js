"use client";

import NewsList from "@/components/news-list";
import { Suspense } from "react";

async function News() {
  // URL can be from outside too like -> https://jsonplaceholder.typicode.com/users
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch News.");
  }

  const news = await response.json();

  return <NewsList news={news} />;
}

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <Suspense fallback={<p>Loading the news...</p>}>
        <News />
      </Suspense>
    </>
  );
}
