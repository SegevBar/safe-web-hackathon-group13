import Head from "next/head";
import ContentGrid from "../comps/ContentGrid";

export default function favorites(){
    const favorites = [
        {
          "id": 1,
          "category": "yoga",
          "description": "20-Minute Yoga For Beginners | Start Yoga Here...",
          "duration": "20 minutes",
          "imageUrl": "https://i.ytimg.com/vi/vNyJuQuuMC8/maxresdefault.jpg",
          "contentUrl": "https://www.youtube.com/watch?v=vNyJuQuuMC8",
          "embed": " https://www.youtube.com/embed/vNyJuQuuMC8?si=ksmBLsGerxwGeqTe",
          "likes": 0
        },
        {
          "id": 2,
          "category": "cook",
          "description": "The Ultimate Healthy Soft & Chewy Oatmeal Raisin Cookies",
          "duration": "1 hour, 21 minutes",
          "imageUrl": "https://amyshealthybaking.com/wp-content/uploads/2014/11/ultimate-healthy-oatmeal-raisin-cookies_8511-labeled.jpg",
          "contentUrl": "https://amyshealthybaking.com/blog/2014/11/30/the-ultimate-healthy-soft-chewy-oatmeal-raisin-cookies/",
          "embed": null,
          "likes": 0
        },
        {
          "id": 3,
          "category": "meditation",
          "description": "How To Meditate",
          "duration": "10 minutes",
          "imageUrl": "/how-to-meditate.jpg",
          "contentUrl": "https://www.mindful.org/how-to-meditate/",
          "embed": null,
          "likes": 0
        }]
    return(
        <>
        <h1>Your Favorites:</h1>
                <Head>
                  <title>Feel Good | Favorites</title>
                </Head>
                <div>
                  {/* Render your ContentGrid component with fetched data */}
                  <ContentGrid data={favorites} />
                </div>
        </>

    );
}