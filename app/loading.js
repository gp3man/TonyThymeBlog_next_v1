'use client'
const Loading = () => {
  return (
    // <main className="skeleton h-screen w-screen text-base-content">
      <div>
        <CutoutTextLoader
          height="450px"
          background="white"
          imgUrl="/public/bgL.jpg"
        />
      </div>
    // </main>
  );
};

export default Loading;

const CutoutTextLoader = ({ height, background, imgUrl }) => {
  return (
    <div className="relative" style={{ height }}>
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse z-10"
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)",
          lineHeight: height,
        }}
      >
        Loading...
      </span>
    </div>
  );
};
