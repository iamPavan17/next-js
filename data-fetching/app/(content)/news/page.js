"use client";

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (response.ok) {
        const news = await response.json();
        setLoading(false);
        setNews(news);
      } else {
        setError("Failed to fetch news.");
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;
  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
