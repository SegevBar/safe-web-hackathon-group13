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
        <h3 className={styles.text}>Scroll Wisely with 'Feel Good'</h3>
        <p className={styles.mantra}>Our mission is to assist those seeking positive change!</p>
        <p className={styles.sub}>Motivation</p>
        <p>
          The rise in excessive scrolling on websites, often fueled by boredom or inactivity, has become a significant concern,
          leading to time wastage, diminished daily effectiveness, and potential mental health issues. Studies indicate a correlation 
          between prolonged scrolling, especially among girls, and adverse outcomes such as low self-esteem and distorted body image. In the 
          current challenging environment, continuous exposure to distressing updates and videos on websites can contribute to a decline in 
          mood and an increased risk of depression.
        </p>

        <p>To tackle the issues associated with excessive scrolling and its negative impact, we present to you:</p>

        <h3 className={styles.text}>The 'Feel Good' Website!</h3>

        <p className={styles.mantra}>If you find yourself spending too much time scrolling, this site is designed just for you!</p>

        <p className={styles.sub}>How It Works</p>
        <p>
          You choose the website and set the duration. Once the specified time elapses, you'll receive a notification indicating that 
          you've exceeded the allocated time. We'll then present you with a range of enjoyable activities tailored to your preferences, 
          focusing on uplifting content to boost your mood.
        </p>

        <p className={styles.headlist}>It will help you:</p>
        <ul>
          <li>Relized how much time you are scrolling</li><br/>
          <li>Think about how you feel</li><br/>
          <li>Help you uplift your spirit and get you motivated and efficient during your day! </li>
        </ul>

        <p className={styles.sub}>Why 'Feel Good'?</p>
        <p>
        Feel Good goes beyond existing options by not only tracking time spent but actively suggesting attractive alternatives. 
        Unlike conventional blocking features, it encourages users to shift to more fulfilling activities, addressing the common 
        tendency to ignore restrictions. Feel Good provides engaging alternatives, making the transition to a better activity more enticing.
        </p>
        <h3 className={styles.text}>Scroll your way to a better life with 'Feel Good'!</h3>

      </div>
    </>
  );
}
 
export default About;