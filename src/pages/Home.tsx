import { useEffect, useState } from "react";
import { searchMeals, getCategories, filterByCategory } from "../service/Api";
import type { Meal } from "../Type/meal";
import type { Category } from "../Type/category";

import RecipeCard from "../components/recipecard";
import SearchBar from "../components/searchBar";

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
    <div className="bg-[#f7f6f3] min-h-screen px-6 md:px-12 py-6">
      
     
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            What are we <br /> crafting today?
          </h1>

          <div className="mt-6 flex gap-3">
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-medium shadow hover:bg-yellow-500 transition">
              Trending
            </button>
            <button className="bg-white border px-5 py-2 rounded-full font-medium shadow hover:bg-gray-100 transition">
              Popular
            </button>
          </div>
        </div>

       
        <div className="w-full md:w-80">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

   
      <div className="mb-8">
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

     
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Trending Recipes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <p>Loading...</p>
          ) : (
            meals.map((meal) => (
              <RecipeCard key={meal.idMeal} meal={meal} />
            ))
          )}
        </div>
      </div>

    
      <div className="mt-12 bg-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            Join our culinary inner circle.
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            Get exclusive recipes, tips, and more.
          </p>

          <button className="mt-4 bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition">
            Join now
          </button>
        </div>

        <div className="w-40 h-28 bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
}