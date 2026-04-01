import type { Meal } from "../Type/meal";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  meal: Meal;
}

export default function RecipeCard({ meal }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer"
    >
      <Link to={`/recipe/${meal.idMeal}`}>
        
     
        <div className="relative">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-48 object-cover"
          />

        
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
            {meal.strCategory}
          </span>

         
          <div className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full shadow flex items-center justify-center text-gray-500 text-xs">
            ♥
          </div>
        </div>

    
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
            {meal.strMeal}
          </h3>

          
          <div className="flex items-center gap-1 mt-2 text-yellow-400 text-xs">
            ⭐ ⭐ ⭐ ⭐ ☆
            <span className="text-gray-400 ml-1">(120)</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}