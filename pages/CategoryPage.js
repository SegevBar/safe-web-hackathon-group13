import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ContentGrid from '../comps/ContentGrid';
import useFetchContent from '../hooks/useFetchContent';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  // Use the useFetchContent hook to fetch data based on the category
  const { data, isPending, error } = useFetchContent(`http://localhost:8000/content?category=${category}`);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Head>
        <title>Feel Good | {category}</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>{category}</h1>
        <p className={styles.text}>Do what makes you feel good</p>
        <ContentGrid data={data} />
      </div>
    </>
  );
};

export default CategoryPage;