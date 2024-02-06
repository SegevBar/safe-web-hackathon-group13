import YoutubeVideo from '../../comps/YoutubeVideo';
import { useRouter } from 'next/router';

export default function VideoPage(){
    const router = useRouter();
    const {url} = router.query;
    return <YoutubeVideo url={url}/>;
}
