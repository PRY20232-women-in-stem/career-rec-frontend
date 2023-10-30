import YouTube from 'react-youtube';

function YouTubeVideo({ width, height, videoUrl }) {
  const videoId = getYouTubeVideoIdFromUrl(videoUrl);

  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 0, // Cambiar a 1 si deseas que el video se reproduzca automáticamente
      origin: window.location.href,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
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
