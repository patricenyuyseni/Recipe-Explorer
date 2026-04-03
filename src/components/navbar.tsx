interface Props {
  search: string;
  setSearch: (val: string) => void;
}

export default function Navbar({ search, setSearch }: Props) {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#f7f6f3]">

      
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-semibold">Saffron & Sage</h1>

        <div className="flex gap-6 text-sm text-gray-700">
          <a href="#" className="font-medium hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Favorites</a>
        </div>
      </div>

      
      <div className="flex items-center gap-5">

 
        <div className="relative w-[260px]">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              h-10
              pl-9 pr-3
              rounded-full
              bg-[#efece6]
              text-sm
              outline-none
            "
          />
        </div>

        
        <span className="text-xl cursor-pointer">❤️</span>

        
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </nav>
  );
}