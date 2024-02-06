import styles from '../styles/videoPage.module.css';

const YoutubeVideo = ({url}) => {
    return ( 
        <div className={styles.container}>
        <iframe
            width="1000"
            height="500"
            src={url}
            title="YouTube video player"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowfullscreen>
         </iframe>
        </div>
     );
}
 
export default YoutubeVideo;