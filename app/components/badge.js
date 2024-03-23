const Badge = ({ text }) => {
  return (
    <span class="bg-orange-100 text-accent text-xs font-medium me-1 mb-2 px-2.5 py-0.5 rounded border border-accent">
      {text}
    </span>
  );
};

export default Badge;
