interface ActionButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const ActionButton = ({
  onClick,
  children,
  className,
}: ActionButtonProps) => {
  return (
    <button
      className={`flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
