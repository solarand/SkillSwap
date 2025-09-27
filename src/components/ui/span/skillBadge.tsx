const SkillBadge = ({ skill }: { skill: string }) => {
  return (
    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm border border-blue-200 font-medium">
      {skill}
    </span>
  );
};

export default SkillBadge;
