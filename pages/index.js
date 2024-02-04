import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContentCard from "../comps/ContentCard";
import ContentGrid from "../comps/ContentGrid";
import useFetchContent from "../hooks/useFetchContent";

/* const data = [
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
*/
// Ensure that 'data' is received as a prop here

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>Feel Good | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Feel Good</h1>
        <p className={styles.text}>Do what makes you feel good</p>
        {/* Render your ContentGrid component with fetched data */}
        {<ContentGrid data={data} />}
      </div>
    </>
  );
}

// This function gets called at build time on server-side.

export async function getStaticProps(){

  const res = await fetch("http://localhost:5000/data");
  const data = await res.json();

   // Pass data to the page via props
   return { props: { data  } };
  }
