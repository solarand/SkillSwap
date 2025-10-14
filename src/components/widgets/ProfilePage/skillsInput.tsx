import { useAppDispatch } from "@/hooks/redux";
import { updateInfo } from "@/store/slices/userSlice";
import { Plus } from "lucide-react";
import { useState } from "react";

interface SkillsInputProps {
  skills: string[];
  setSkills: (skills: string[]) => void;
}

const SkillsInput = ({ skills, setSkills }: SkillsInputProps) => {
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (
      newSkill.trim() &&
      !skills.includes(newSkill.trim()) &&
      skills.length < 10
    ) {
      const updatedSkills = [...skills, newSkill.trim()];
      setSkills(updatedSkills);
      setNewSkill("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div className="flex flex-col mt-5">
      <div className="flex justify-between items-center mb-2">
        <label className="font-sans font-semibold">Навыки</label>
        <span className="text-xs text-gray-500">{skills.length}/10</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
          >
            {skill}
            <button
              type="button"
              onClick={() => setSkills(skills.filter((s) => s !== skill))}
              className="ml-1 text-blue-500 hover:text-blue-700 cursor-pointer"
              aria-label={`Удалить ${skill}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="relative">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Добавить навык"
          className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxLength={20}
        />
        <button
          type="button"
          onClick={handleAddSkill}
          disabled={!newSkill.trim() || skills.length >= 10}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Добавить навык"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SkillsInput;
