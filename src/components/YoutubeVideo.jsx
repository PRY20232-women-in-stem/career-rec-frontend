import YouTube from 'react-youtube';

function YouTubeVideo({ width, height, videoUrl }) {
  const videoId = getYouTubeVideoIdFromUrl(videoUrl);

  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 0,
      origin: window.location.href,
    },
  };

  return (
    <>
      <YouTube
        videoId={videoId} opts={opts} />
    </>
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
