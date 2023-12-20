const InstagramVideo = (vid) => {
  return (
    <video width="220"  height="330" autoPlay muted className="aspect-[4/6]">
      <source
        src={vid?.fields?.file?.url}
        type={vid?.fields?.file?.contentType}
      />
    </video>
  );
};

export default InstagramVideo;
