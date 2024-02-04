import Head from 'next/head'
import Link from 'next/link'
import Category from '../comps/Category'
import styles from '../styles/Home.module.css'

// import BubbleUI, { defaultOptions } from "react-bubble-ui";
// import { useState } from 'react';

// const [options, setOptions] = useState({
//   size: 180,
//   minSize: 20,
//   gutter: 8,
//   provideProps: true,
//   numCols: 6,
//   fringeWidth: 160,
//   yRadius: 130,
//   xRadius: 220,
//   cornerRadius: 50,
//   showGuides: false,
//   compact: true,
//   gravitation: 5,
// });

export default function Home() {
  const categories = [{id:1, categoryName: "Yoga", path: "/about", image:"/yogaCategory.jpeg" },
  {id:2, categoryName: "Noa", path: "/about", image:"/yogaCategory.jpeg" },
  {id:3, categoryName: "Dana", path: "/about", image:"/yogaCategory.jpeg" },
  {id:4, categoryName: "Tom", path: "/about", image:"/yogaCategory.jpeg" },
  {id:5, categoryName: "Nacho", path: "/about", image:"/yogaCategory.jpeg" }];

  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <Link href="/ninjas/" className={styles.btn}>
          See Ninja Listing
        </Link>
          <div className='CategoriesList'>
            {categories.map((category)=>(<Category key={category.id} {...category}/>))}
          </div>
      </div>
    </>
  )
}
