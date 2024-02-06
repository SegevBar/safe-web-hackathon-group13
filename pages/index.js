import Head from 'next/head'
import Link from 'next/link'
import Category from '../comps/Category'
import styles from '../styles/Home.module.css'
import YoutubeVideo from '../comps/YoutubeVideo'

export default function Home() {
  const categories = [{id:1, categoryName: "yoga", path: "/content/yoga", image:"/yogaLogo.png" },
  {id:2, categoryName: "cook", path: "/content/cook", image:"/cook.png" },
  {id:3, categoryName: "music", path: "/content/music", image:"/music.png" },
  {id:4, categoryName: "meditation", path: "/content/meditation", image:"/meditationLogo.png" },
  {id:5, categoryName: "read", path: "/content/read", image:"/book.png" }];

  return (
    <>
      <Head>
        <title>Feel Good | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Welcome to Feel Good! blah blah</p>
          <div className={styles.categories}>
            {categories.map((category)=>(<Category key={category.id} {...category}/>))}
          </div>
      </div>
    </>
  )
}
