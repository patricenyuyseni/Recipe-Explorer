interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative w-full">
      
      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
        🔍
      </span>

      <input
        type="text"
        placeholder="search ingredients, cuisines,..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          h-14
          pl-14 pr-6
          rounded-full
          bg-[#efece6]
          text-gray-700
          placeholder-gray-500
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-yellow-500
          transition
        "
      />
    </div>
  );
}