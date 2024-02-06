import React, { useState } from 'react';
import styles from '../styles/SuggestionForm.module.css';

function SuggestionForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setName('');
    setEmail('');
    setTitle('');
    setLink('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Suggest Your Content!</h2>
      <h3>Here you can tell us about content you think we are missing!</h3>
      <form onSubmit={handleSubmit} className={styles.suggestionform}>
      <div className="formgroup">
          <label className={styles.label} htmlFor="name">Your Name:</label>
          <input className={styles.inputfield}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="formgroup">
          <label className={styles.label} htmlFor="title">Your Email:</label>
          <input className={styles.inputfield}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formgroup">
          <label className={styles.label} htmlFor="title">Suggestion Content Title:</label>
          <input className={styles.inputfield}
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="formgroup">
          <label className={styles.label} htmlFor="link">Link:</label>
          <input className={styles.inputfield}
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <br></br>
        <button type="submit" className={styles.submitbutton}>Submit</button>
      </form>
    </div>
  );
}

export default SuggestionForm;
