import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function YouTubeVideo({ videoUrl, title }) {
  const videoId = getYouTubeVideoIdFromUrl(videoUrl);

  return (
    <div>
      <LiteYouTubeEmbed
        id={videoId}
        title={title}
        poster="maxresdefault"
        adNetwork={true}
        noCookie={true}
      />
    </div>
  );
}

function getYouTubeVideoIdFromUrl(url) {
  const regex = /[?&]v=([^?&]+)/;
  const match = url.match(regex);
  if (match && match[1]) {
    return match[1];
  } else {
    console.error('URL de YouTube no válida');
    return '';
  }
}

export default YouTubeVideo;
