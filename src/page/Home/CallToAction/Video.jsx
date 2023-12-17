import React, { useEffect, useRef } from "react";

const Video = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Load the YouTube Iframe API script
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize the YouTube Player when the API script is loaded
      const player = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: (event) => {
            event.target.mute(); // Mute the video
            event.target.playVideo(); // Start playing the video
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo(); // Restart the video when it ends
            }
          },
        },
      });
    };

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <iframe
      title="YouTube Video"
      width="100%"
      height="500"
      src="https://www.youtube.com/embed/U10nBuERNIA?autoplay=1&modestbranding=1&rel=0&muted=1"
      frameBorder="0"
      allowFullScreen
      ref={iframeRef}
    ></iframe>
  );
};

export default Video;
