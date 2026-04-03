import { useEffect, useState } from "react";
import { searchMeals, getCategories, filterByCategory } from "../service/Api";
import type { Meal } from "../Type/meal";
import type { Category } from "../Type/category";

import RecipeCard from "../components/recipecard";
import SearchBar from "../components/searchBar";

// Navbar with search beside heart icon
function Navbar({ search, setSearch }: { search: string; setSearch: (val: string) => void }) {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-[#f7f6f3]">
      <div className="text-xl font-semibold tracking-wide">Saffron & Sage</div>

      <div className="hidden md:flex items-center gap-8 text-sm">
        <a className="text-orange-500 font-medium border-b-2 border-orange-500 pb-1">Home</a>
        <a className="text-gray-500 hover:text-black cursor-pointer">Favorites</a>
      </div>

      {/* Heart + Search input */}
      <div className="flex items-center gap-4">
        <span className="text-xl cursor-pointer">♡</span>
        <div className="w-48">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <span className="text-xl cursor-pointer">⚙️</span>
      </div>
    </nav>
  );
}

export default function Home() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getCategories().then(setCategories);
    handleSearch("");
  }, []);

  const handleSearch = async (q: string) => {
    setLoading(true);
    const data = await searchMeals(q);
    setMeals(data);
    setLoading(false);
  };

  const handleCategory = async (cat: string) => {
    setLoading(true);
    const data = await filterByCategory(cat);
    setMeals(data);
    setLoading(false);
  };

  useEffect(() => {
    const delay = setTimeout(() => handleSearch(search), 500);
    return () => clearTimeout(delay);
  }, [search]);

  return (
    <div className="bg-[#f7f6f3] min-h-screen">
      {/* Navbar with top search */}
      <Navbar search={search} setSearch={setSearch} />

      {/* HERO SECTION */}
      <div className="px-6 md:px-12 pt-12 pb-16 flex flex-col items-start gap-6">
        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          What are we <br />
          <span className="italic text-yellow-600">crafting</span> today?
        </h1>

        {/* Hero search bar under header */}
        <div className="w-full max-w-md mt-6 flex gap-3">
          <SearchBar value={search} onChange={setSearch} />
          <button className="bg-yellow-600 text-white px-6 py-4 rounded-full font-medium shadow hover:bg-yellow-700 transition">
            Explore
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 md:px-12 mb-8">
        <p className="text-sm text-gray-500 mb-3">Categories</p>
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c.idCategory}
              onClick={() => handleCategory(c.strCategory)}
              className="px-4 py-2 rounded-full bg-white shadow-sm text-sm font-medium hover:bg-green-100 hover:text-green-700 transition"
            >
              {c.strCategory}
            </button>
          ))}
        </div>
      </div>

      {/* Trending Recipes */}
      <div className="px-6 md:px-12 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Trending Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? <p>Loading...</p> : meals.map((meal) => <RecipeCard key={meal.idMeal} meal={meal} />)}
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-6 md:px-12 mt-12 bg-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Join our culinary inner circle.</h3>
          <p className="text-gray-500 mt-2 text-sm">Get exclusive recipes, tips, and more.</p>
          <button className="mt-4 bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition">
            Join now
          </button>
        </div>
        <div className="w-40 h-28 bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
}