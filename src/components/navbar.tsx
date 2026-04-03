import SearchBar from "./searchBar";
import { Heart } from "lucide-react";

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

  
      <div className="w-[420px]">
        <SearchBar value={search} onChange={setSearch} />
      </div>

    
      <div className="flex items-center gap-5">
        <Heart className="w-5 h-5 text-gray-700 cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </nav>
  );
}