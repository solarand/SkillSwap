const Chip = ({ name }: { name: string }) => {
  return (
    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
      {name} <button className="text-xs text-blue-600">×</button>
    </span>
  );
};

export default Chip;
