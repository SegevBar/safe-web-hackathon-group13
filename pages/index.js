import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContentCard from "../comps/ContentCard";
import ContentGrid from "../comps/ContentGrid";

const data = [
  {
    url: "https://www.youtube.com/watch?v=5Zjplzo5YZg",
    title: "Commercial Criticism",
    thumbnail: "https://i.ytimg.com/vi/5Zjplzo5YZg/maxresdefault.jpg",
    views: "1.8M",
    id: 1,
  },
  {
    url: "https://www.youtube.com/watch?v=DBJVj2DLuLA",
    title: "The 7 Habits of Highly Effective People",
    thumbnail: "https://i.ytimg.com/vi/DBJVj2DLuLA/maxresdefault.jpg",
    views: "1.8M",
    id: 2,
  },
  {
    url: "https://www.youtube.com/watch?v=TwWZSW2GkXY",
    title: "Kupa Rashit",
    thumbnail: "https://i.ytimg.com/vi/TwWZSW2GkXY/maxresdefault.jpg",
    views: "1.8M",
    id: 3,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Feel Good | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Feel Good</h1>
        <p className={styles.text}>Do what makes you feel good</p>
        <ContentGrid data={data} />
      </div>
    </>
  );
}
