const ScoreCount = ({ avg }) => {
  const percent = (avg / 5) * 100;
  return (
    <div className="ratings">
      <div className="empty-stars"></div>
      <div className="full-stars" style={{ width: percent + "%" }}></div>
    </div>
  );
};

export default ScoreCount;
