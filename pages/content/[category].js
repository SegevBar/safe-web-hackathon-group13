// pages/content/[category].js

import Head from "next/head";
import { useRouter } from 'next/router';
import styles from "../../styles/Home.module.css";
import ContentGrid from "../../comps/ContentGrid";

// const CategoryPage = () => {
//   const router = useRouter();
//   const { category } = router.query;

//   // Use the useFetchContent hook to fetch data based on the category
//   const { data, isPending, error } = useFetchContent(`http://localhost:8000/content?category=${category}`);
//   console.log(" Category", category);
//   console.log("data", data);
//   return (
//     <>
//       <Head>
//         <title>Feel Good | {category} </title>
//         <meta name="keywords" content="ninjas" />
//       </Head>
//       <div>
//         <h1 className={styles.title}>{category}</h1>
//         <p className={styles.text}>Do what makes you feel good</p>
//         {isPending && <p>Loading...</p>}
//         {error && <div>Error: {error}</div>}
//         {data && <ContentGrid data={data} />}
//         {!data || data.length === 0 && <p>No data available for the specified category</p>}
//       </div>
//     </>
//   );
// };



// export default CategoryPage;

// pages/content/[category].js


export default function CategoryPage({ data, category }) {
  return (
    <>
      <Head>
        <title>Feel Good | {category}</title>
      </Head>
      <div>
      <h1 className={styles.title}>{category}</h1>
        {/* Render your ContentGrid component with fetched data */}
        <ContentGrid data={data} />
      </div>
    </>
  );
}

// This function gets called at build time on server-side.
export async function getStaticProps({ params }) {
  // params contains the category for that page.
  const res = await fetch(`http://localhost:8000/content?category=${params.category}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data, category: params.category } };
}

// This function gets called at build time on server-side.
export async function getStaticPaths() {
  // Here you would fetch the list of categories to pre-render pages for
  const paths = [
    { params: { category: 'yoga' } },
    { params: { category: 'cook' } },
    { params: { category: 'meditation'} },
    { params: { category: 'read'} },
    { params: { category: 'music'} },


    // Add more categories as needed
  ];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}