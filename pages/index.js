import Head from 'next/head'
import Link from 'next/link'
import Category from '../comps/Category'
import styles from '../styles/Home.module.css'

export default function Home() {
  // const data = [
  //   {
  //     url: "https://www.youtube.com/watch?v=5Zjplzo5YZg",
  //     title: "Commercial Criticism",
  //     thumbnail: "https://i.ytimg.com/vi/5Zjplzo5YZg/maxresdefault.jpg",
  //     views: "1.8M",
  //     id: 1,
  //   },
  //   {
  //     url: "https://www.youtube.com/watch?v=DBJVj2DLuLA",
  //     title: "The 7 Habits of Highly Effective People",
  //     thumbnail: "https://i.ytimg.com/vi/DBJVj2DLuLA/maxresdefault.jpg",
  //     views: "1.8M",
  //     id: 2,
  //   },
  //   {
  //     url: "https://www.youtube.com/watch?v=TwWZSW2GkXY",
  //     title: "Kupa Rashit",
  //     thumbnail: "https://i.ytimg.com/vi/TwWZSW2GkXY/maxresdefault.jpg",
  //     views: "1.8M",
  //     id: 3,
  //   },
  // ];

  
  const categories = [{id:1, categoryName: "yoga", path: "/content/yoga", image:"/yogaLogo.png" },
  {id:2, categoryName: "cook", path: "/content/cook", image:"/cook.png" },
  {id:3, categoryName: "music", path: "/content/music", image:"/music.png" },
  {id:4, categoryName: "meditation", path: "/content/meditation", image:"/meditationLogo.png" },
  {id:5, categoryName: "read", path: "/content/read", image:"/book.png" }];

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
