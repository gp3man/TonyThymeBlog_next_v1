const Loading = () => {
  return (
    <main className="flex flex-col skeleton bg-base-300 min-h-screen pt-14 pb-14 overflow-y-scroll scrollbar-hide justify-center text-base-content">
      <div className="justify-center text-3xl text-center ">
        Loading ...
        {/* <CutoutTextLoader
          height="450px"
          background="white"
          imgUrl="/public/bgL.jpg"
        /> */}
      </div>
      <p className=" flex loading loading-lg loading-spinner text-primary self-center"></p>
    </main>
  );
};
// const CutoutTextLoader = ({ height, background, imgUrl }) => {
//   return (
//     <div className="relative" style={{ height }}>
//       <div
//         className="absolute inset-0 z-10"
//         style={{
//           backgroundImage: `url(${imgUrl})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//       />
//       <div
//         style={{ background }}
//         className="absolute inset-0 animate-pulse z-10"
//       />
//       <span
//         className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
//         style={{
//           backgroundImage: `url(${imgUrl})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           fontSize: "clamp(3rem, 12vw, 10rem)",
//           lineHeight: height,
//         }}
//       >
//         Loading...
//       </span>
//     </div>
//   );
// };

export default Loading;
