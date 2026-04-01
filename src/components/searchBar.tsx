interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative w-full">
     
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
        🔍
      </span>

      <input
        type="text"
        placeholder="Search recipes..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          pl-10 pr-4 py-3
          rounded-full
          bg-white
          shadow-sm
          border border-gray-200
          text-sm
          text-gray-700
          placeholder-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-yellow-400
          focus:border-transparent
          transition
        "
      />
    </div>
  );
}