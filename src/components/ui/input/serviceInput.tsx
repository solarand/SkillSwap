import { useFormContext } from "react-hook-form";

const ServiceInput = ({
  type,
  label,
  name,
}: {
  type: string;
  label: string;
  name: string;
}) => {
  const { register } = useFormContext();

  return (
    <label className="flex items-center gap-2 text-sm text-gray-600">
      <input
        value={label}
        type={type}
        {...register(name, {
          ...(type === "checkbox" && { value: label }),
        })}
        className="h-4 w-4 text-blue-600 border-gray-200 checked:bg-blue-600 focus:ring-blue-600 focus:ring-2"
      />
      {label}
    </label>
  );
};

export default ServiceInput;
