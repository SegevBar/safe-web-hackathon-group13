import React from 'react';
import styles from "../styles/UserProfile.module.css";

const userProfile = () => {

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
  // Mock user profile data
  const profile = {
    name: "Gili",
    lastName: "Israeli",
    email: "Gili@gmail.com",
    
  };

  return (
    <div className={styles.userprofile}>
      <h1 className={styles.profileheading}>Hey {profile.name}! <br></br>
      Great to see you!</h1>
      <div className={styles.profileinfo}>
        <strong>Name:</strong> {profile.name + " " + profile.lastName}
      </div>
      <div className={styles.profileinfo}>
        <strong>Email:</strong> {profile.email}
      </div>
      <div className={styles.favorites}>
        <h2>You recently watched..</h2>
        <ul className={styles.favoriteslist}>
          {favorites.map((favorite) => (
            <li key={favorite.id} className={styles.favoriteitem}>{favorite.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default userProfile;
