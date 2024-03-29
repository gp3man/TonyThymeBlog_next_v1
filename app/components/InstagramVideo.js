const InstagramVideo = ({vid}) => {
  return (
    <video width="220"  height="330" autoPlay loop controls playsInline muted  className="aspect-[4/6]">
      <source
        src={vid?.fields?.file?.url}
        type="video/mp4"
      />
    </video>
  );
};

export default InstagramVideo;
