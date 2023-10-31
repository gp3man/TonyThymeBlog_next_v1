const PBar = ({ value, count, mark}) => {
  return (
      <span className="my-1"><span className="px-2 font-thin">{mark}</span>
      <progress
        className="progress progress-primary w-32"
        value={value}
        max={count}
      ></progress></span>
  );
};

export default PBar;
