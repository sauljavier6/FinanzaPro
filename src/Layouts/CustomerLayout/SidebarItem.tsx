interface Props {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function SidebarItem({
  icon,
  label,
  active,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors
        ${
          active
            ? "bg-primary text-white shadow-sm"
            : "text-[#4c669a] hover:bg-gray-100 dark:hover:bg-gray-800"
        }
      `}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}
