'use client'
const ExitPreviewBtn = () => {
  return (
    <a className="text-warning-content underline cursor-pointer"
      onClick={() => {
        fetch(`/api/exit-preview`);
      }}
    >
      {" "}
      Exit preview
    </a>
  );
};
export default ExitPreviewBtn;
