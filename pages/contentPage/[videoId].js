import YoutubeVideo from '../../comps/YoutubeVideo';
import { useRouter } from 'next/router';

export default function VideoPage(){
    const router = useRouter();
    const {url} = router.query;
    console.log(`/contentPage/${url}`);
    return  <YoutubeVideo source={url}/>
}
