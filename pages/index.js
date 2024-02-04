import Head from 'next/head'
import Link from 'next/link'
import Category from '../comps/Category'
import styles from '../styles/Home.module.css'

export default function Home() {
  const categories = [{id:1, categoryName: "Yoga", path: "/about", image:"/yogaLogo.png" },
  {id:2, categoryName: "Cook", path: "/about", image:"/cook2.png" },
  {id:3, categoryName: "Music", path: "/about", image:"/music.png" },
  {id:4, categoryName: "Meditation", path: "/about", image:"/meditationLogo.png" },
  {id:5, categoryName: "Read", path: "/about", image:"/book.png" }];

  return (
    <>
      <Head>
        <title>Feel Good | Home</title>
        {/* <meta name="keywords" content="ninjas"/> */}
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Welcome to Feel Good! blah blah</p>
        {/* <Link href="/ninjas/" className={styles.btn}>
          See Ninja Listing
        </Link> */}
          <div className={styles.categories}>
            {categories.map((category)=>(<Category key={category.id} {...category}/>))}
          </div>
      </div>
    </>
  )
}
