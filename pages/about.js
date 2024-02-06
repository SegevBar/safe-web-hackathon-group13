import Head from 'next/head';
import styles from "../styles/Home.module.css";


const About = () => {
  return (
    <>
      <Head>
        <title>Feel Good | About</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
      <h1 className={styles.title}>About</h1>
        <h3 className={styles.text}>Scroll Wisely with 'Feel Good'</h3>
        <p className={styles.mantra}>Our mission is to assist those seeking positive change!</p>
        <p className={styles.sub}>Motivation</p>
        <p>Excessive scrolling on websites, often driven by boredom or inactivity, is a growing concern linked to time wastage, 
           reduced daily effectiveness, and potential mental health issues. Studies suggest a connection between prolonged scrolling, 
           especially among girls, and negative outcomes like low self-esteem and distorted body image. In the current challenging 
           environment,continuous exposure to distressing updates and videos on websites can contribute to a decline in mood and an increased risk of 
           depression.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
      </div>
    </>
  );
}
 
export default About;