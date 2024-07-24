import Link from "next/link";

import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  /*
  filter values: 
    http://localhost:3000/archive -> undefined
    http://localhost:3000/archive/2024 -> [ '2024' ]
    http://localhost:3000/archive/2024/technology -> [ '2024', 'technology' ]
  */

  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
  // const news = getNewsForYear(newsYear);

  // return <NewsList news={news} />;
}
