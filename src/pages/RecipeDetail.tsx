import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../service/Api";
import type { Meal } from "../Type/meal";

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    if (id) getMealById(id).then(setMeal);
  }, [id]);

  if (!meal)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f6f3]">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );

  const ingredients: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    if (ing) ingredients.push(ing);
  }

  return (
    <div className="bg-[#f7f6f3] min-h-screen px-6 md:px-12 py-8">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 rounded-full bg-white shadow-sm text-sm hover:bg-gray-100 transition"
      >
        ← Back
      </button>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        
        {/* Image */}
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-10">
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {meal.strMeal}
          </h2>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Ingredients */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Ingredients
              </h3>

              <ul className="space-y-2">
                {ingredients.map((i, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-md"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Instructions
              </h3>

              <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
                {meal.strInstructions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}