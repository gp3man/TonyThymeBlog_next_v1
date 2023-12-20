const InstagramVideo = ({vid}) => {
  return (
    <video width="220"  height="330" autoPlay className="aspect-[4/6]">
      <source
        src={vid?.fields?.file?.url}
        type="video/mp4"
      />
      {console.log(vid?.fields)}
    </video>
  );
};

export default InstagramVideo;
